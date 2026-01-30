import { Router } from "express";
import { body } from "express-validator";
import { createAccount, getUser, login, updateProfile, uploadImage } from "./handlers/index.ts";
import { handlerInputErrors } from "./middleware/validation.ts";
import { authenticate } from "./middleware/auth.ts";

const router = Router();

/** Autenticacion y Registro */
router.post('/auth/register', 
    body('handle')
    .notEmpty()
    .withMessage('El handle no puede ir vacio'),
    body('name')
    .notEmpty()
    .withMessage('El nombre no puede ir vacio'),
    body('email')
    .isEmail()
    .withMessage('E-mail no valido'),
    body('password')
    .isLength({min:8})
    .withMessage('El password debe tener al menos 8 caracteres'),
    handlerInputErrors,
    createAccount);

router.post('/auth/login',

    body('email')
    .isEmail()
    .withMessage('E-mail no valido'),
    body('password')
    .notEmpty()
    .withMessage('El password es obligatorio'),
    handlerInputErrors,
    login

)

router.get('/user', authenticate, getUser);
router.patch('/user', 
    body('handle')
    .notEmpty()
    .withMessage('El handle no puede ir vacio'),
    body('description')
    .notEmpty()
    .withMessage('La descripción no puede ir vacia'),
    handlerInputErrors,
    authenticate, updateProfile
)

router.post('/user/image', authenticate, uploadImage)

export default router;
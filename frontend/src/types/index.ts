export type User = {
    name: string;
    email: string;
    _id: string;
    handle: string;
    description: string;
    image: string;
    links: string;
}
export type UserHandle = Pick<User, 'description' | 'handle' | 'image' | 'links' | 'name' >
export type RegisterForm = Pick<User, "name" | "email" | "handle"> & {
    password: string;
    password_confirmation: string;
}

export type LoginForm = Pick<User, "name" | "email" | "handle"> & {
    password: string;
}

export type ProfileForm = Pick<User, "handle" | "description">

export type SocialNetwork = {
    id: number
    name: string;
    url: string;
    enabled: boolean;
}

export type DevTreeLink = Pick<SocialNetwork, "name" | "url" | "enabled">


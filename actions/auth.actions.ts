'use server'

import { signIn, signOut } from "@/util/auth"
export const googleLoginAction = async () => {
    return await signIn('google')
}

export const githubLoginAction = async () => {
    return await signIn('github')
}

export const logoutAction = async () => {
    return await signOut()
}
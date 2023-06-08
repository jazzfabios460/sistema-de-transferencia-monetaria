import { userAuthType } from "./types";

export const userAuthenticateStorage:userAuthType =localStorage.getItem("token") && JSON.parse(localStorage.getItem("token") || "" )
export function setUserAuthenticateStorage(resLogin:any) {
    localStorage.setItem("token",JSON.stringify(resLogin))
}
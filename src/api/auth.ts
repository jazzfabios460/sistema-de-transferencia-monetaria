import { link } from "./link"



export const authApi = async(token:any)=>{
    return await fetch(link+"autenticacao/autorizacao",{
        headers:{
            "Content-Type":"application/json",
            "x-access-token":token 
        }
    })
    .then(e=>e)
} 

export const signInApi = async(email:any,senha:any)=>{
    return await fetch(link+"autenticacao/login",{
        headers:{
            "Content-Type":"application/json"
        },
        method:"post",
        body:JSON.stringify({
            email,senha
        })
    })
    .then(e=>e.json())
} 

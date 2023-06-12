import { link } from "./link"

export const registerApi = async(email:any,nome:any,senha:any)=>{
    return await fetch(link+"usuario/criar",{
        headers:{
            "Content-Type":"application/json"
        },
        method:"post",
        body:JSON.stringify({
            email,senha,nome
        })
    })
    .then(e=>e.json())
} 

export const getUserAll = async()=>{
    return await fetch(link+"conta",{
        headers:{
            "Content-Type":"application/json"
        },
    })
    .then(e=>e.json())
} 
export const removerUsuarioApi = async(id:string | undefined)=>{
    return await fetch(link+"usuario/deletar/"+id,{
        headers:{
            "Content-Type":"application/json"
        },
        method:"delete"
    })
    .then(e=>e.json())
} 
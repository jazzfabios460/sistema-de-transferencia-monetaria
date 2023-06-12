import { link } from "./link"

export const transferenciaApi = async(id_conta_pagador:string,id_conta_recebidor:string,valorDaTransacao:string)=>{

    return await fetch("https://api-transferencia.vercel.app/transacoes/transferencia",{
        headers:{
            "Content-Type":"application/json"
        },
        method:"put",
        body:JSON.stringify({
           id_conta_pagador,
           id_conta_recebidor,
           valorDaTransacao:parseFloat(valorDaTransacao || "")
        })
    })
    .then(e=>e.json())
} 

export const getAccountByIdApi = async(id:string)=>{
    return await fetch(link+"conta/"+id,{
        headers:{
            "Content-Type":"application/json"
        }
    })
    .then(e=>e.json())
} 

export const getTransferenciaApi = async()=>{
    return await fetch(link+"transacoes/",{
        headers:{
            "Content-Type":"application/json"
        }
    })
    .then(e=>e.json())
} 
import { link } from "./link"

export const deletarTransacoesApi = async(id:string)=>{
   return fetch(link+"transacoes/deletar/"+id,{
    headers:{
        "Content-Type":"application/json"
    },
    method:"delete"
   })
   .then(res=>res.json())
}
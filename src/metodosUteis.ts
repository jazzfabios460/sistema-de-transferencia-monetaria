export const  emailValidation = (email:any)=> {
    if (email) {
        return false
    }else{
        return true
    }
}

export const  nameValidation = (name:any)=> {
    if (name) {
        return false
    }else{
        return true
    }
}

export const  passwordValidation = (password:any)=> {
    if (password) {
        return false
    }else{
        return true
    }
}

export const formatoMonetario = (valor:number)=>{
   return valor && valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
}

export const numberValid = (valor:any)=>{
    const regex = /[a-zA-Z#'"!@$%¨&*\/\\:=+;()^~\[\]]/;
    return !regex.test(valor.toString())
}

export const VirgulaToPonto = (valor:any)=>{
    let valorarray = valor.toString().split(",")
    if (valorarray[1]) {     
        return valorarray[0]+"."+valorarray[1]
    }else{
        return valor
    }
}

export function removerDuplicataArrayDeObjetos(arrayDeObjetos:any){
    let arrayDeObjetos2 = arrayDeObjetos.filter((value:any, index:any, array:any) => array.indexOf(value) === index);
    const parsed_array = arrayDeObjetos?.map((val:any)=>{
      return JSON?.stringify(val)
    })
    return parsed_array?.filter((value:any, ind:any)=> 
     parsed_array.indexOf(value) == ind)
    .map((val:any)=>{ return val && JSON?.parse(val)})
  }

  export function formatoDeData(data:string) {
    const ano = data.split("-")[0]
    const mes = data.split("-")[1]
    const dia = data.split("-")[2].split("T")[0]
    const hora = data.split("T")[1]


    return dia + "/" + mes + "/" + ano
  }
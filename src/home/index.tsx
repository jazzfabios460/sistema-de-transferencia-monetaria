import { Button } from '@mui/material'
import React from 'react'
import { userAuthenticateStorage } from '../userAuthenticate'

export default function Home() {
    const loggoff = ()=>{
        localStorage.removeItem("token")
        window.location.reload()
    }
    
  return (
    <div>
      <div>
        Seja bem vindo {userAuthenticateStorage.usuario.nome}!
      </div>
        <Button variant='contained' onClick={loggoff}>Deslogar</Button>
    </div>
  )
}

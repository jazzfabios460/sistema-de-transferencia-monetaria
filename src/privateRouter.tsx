import { authApi } from "./api/auth"
import {Navigate} from "react-router-dom"
import React,{useEffect, useState} from 'react'
import Loading from "./loading"
import { userAuthenticateStorage } from "./userAuthenticate"
import {useNavigate} from 'react-router-dom'


export default function PrivateRoute({children}:any) {
    const [tokenValid, setTokenValid] = useState(false)
    const [loading, setLoading] = useState(true)
    const n = useNavigate()
    
    const token = userAuthenticateStorage?.token ? userAuthenticateStorage?.token : null
    
    async function getAuth() {
      setLoading(true)
      const auth = await authApi(token)
      if (auth.status === 200) {
          setTokenValid(true)
          n("/")
      }
      setLoading(false)
    }
    useEffect(()=>{
      getAuth()
    },[n, token])
    
    return <div>
      {
        loading ? <Loading/>:
        tokenValid ?
          children:
          <Navigate to={"signin"}/>  
        }
    </div>
  }
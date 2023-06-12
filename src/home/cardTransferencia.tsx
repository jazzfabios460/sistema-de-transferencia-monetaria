import React,{useState,useEffect} from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { VirgulaToPonto, numberValid } from '../metodosUteis';
import { getUserAll } from '../api/userApi';
import { usersType } from '../types';
import AutocompleteAsync from './autocomplete';
import { transferenciaApi } from '../api/account';
import LoaddingButton from '../loaddingButton';

export default function CardTransferencia({account}:any) {
  const [users, setUsers] = useState<any>()
  const [valor, setValor] = useState()
  const [errorValor, seterrorValor] = useState(false)
  const [errorUsers, seterrorUsers] = useState(false)
  const [list, setlist] = useState<usersType[]>([])
  const [loadding, setloadding] = useState(false)

  async function getUsers() {
    const u = await getUserAll()
    setlist(u)
  }
  useEffect(()=>{
    getUsers()
  },[])
  
  const transfer = async()=>{
    setloadding(true)
    if (users && valor && numberValid(valor)) {
      seterrorUsers(false)
      seterrorValor(false)  
      const response = await transferenciaApi(account?.id,users?.id, VirgulaToPonto(valor))
      alert(response.toString())
      window.location.reload()
    }
    if (!users) { 
      seterrorUsers(true)
    }else{
      seterrorUsers(false)
    }
    if (!valor || !numberValid(valor)) {
      seterrorValor(true)
    }else{
      seterrorValor(false)
    }
    setloadding(false)
  }
  return (
    <Card sx={{ minWidth: 275 }}>
      <h1>Área de transferência</h1>
      <CardContent sx={{display:'flex', flexDirection:"column", maxWidth:"400px", marginTop:2}}>
        <AutocompleteAsync setUsers={setUsers} errorUsers={errorUsers} list={list} account={account}/>
        {errorUsers && <Typography sx={{textAlign:"start"}} color={'error'}>O campo  usuário não pode estar em branco!</Typography>}

        <TextField 
            sx={{marginTop:2}}
            label="Valor a pagar"
            error={errorValor}
            onChange={(e:any)=>setValor(e.target.value)}
        />
        {errorValor && <Typography sx={{textAlign:"start"}} color={'error'}>Campo inválido!</Typography>}
        
      </CardContent>
      <CardActions sx={{display:"flex", justifyContent:"flex-end"}}>
        {
          loadding ?
          <Button variant='contained' sx={{width:"130px"}}><LoaddingButton/></Button>:
          <Button onClick={transfer} sx={{width:"130px"}} variant='contained'>Transferir</Button>
        }
      </CardActions>
    </Card>
  );
}

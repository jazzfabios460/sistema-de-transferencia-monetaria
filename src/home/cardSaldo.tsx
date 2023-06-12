import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { userAuthenticateStorage } from '../userAuthenticate';
import { formatoMonetario } from '../metodosUteis';


export default function CardSaldo({account}:any | undefined) { 

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
         Saldo
        </Typography>
        <Typography sx={{ fontSize: 34 }} color="error" gutterBottom>
          {formatoMonetario(account?.saldo)}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Verifique seu saldo
        </Typography>
        <Typography variant="body2">
          Faça sua transferência
          <br />
          
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

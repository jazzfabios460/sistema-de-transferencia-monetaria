import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { transacoesTypes } from '../types';
import BasicTable from './table';


export default function CardGrafico({transferencia}:{transferencia:transacoesTypes[]}) {

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <h1>Histórico de transferência</h1>
        <BasicTable transferencia={transferencia}/>
      </CardContent>
    </Card>
  );
}

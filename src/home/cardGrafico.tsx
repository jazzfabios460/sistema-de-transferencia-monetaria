import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { transacoesTypes } from '../types';
import BasicTable from './table';
import Data from './data';
import { Dayjs } from 'dayjs';


export default function CardGrafico({transferencia}:{transferencia:transacoesTypes[]}) {
  const [value, setValue] = React.useState<Dayjs | null>(null);
  let dia = value?.date()
  let mes = parseInt(value?.month().toString() || "") + 1
  let ano = value?.year()
  let data = {dia,mes,ano}
  
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <h1>Histórico de transferência</h1>
        <Data setValue={setValue} value={value}/>
        <BasicTable transferencia={transferencia} data={data}/>
      </CardContent>
    </Card>
  );
}

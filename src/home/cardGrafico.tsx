import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { transacoesTypes } from '../types';
import BasicTable from './table';
import Data from './data';
import { Dayjs } from 'dayjs';
import Switch from '@mui/material/Switch';

export default function CardGrafico({transferencia}:{transferencia:transacoesTypes[]}) {
  const [value, setValue] = React.useState<Dayjs | null>(null);
  let dia = value?.date()
  let mes = parseInt(value?.month().toString() || "") + 1
  let ano = value?.year()
  let data = {dia,mes,ano}
  
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <h1>Histórico de transferência</h1>
        <Data setValue={setValue} value={value}/>
        <div style={{display:"flex", justifyContent:"flex-end"}}>
          <FormGroup>
            <FormControlLabel control={
              <Switch
                checked={checked}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'controlled' }}
                color='error'
              />
            } label="Deletar transações" />
          </FormGroup>
        </div>
        <BasicTable transferencia={transferencia} data={data} checked={checked}/>
      </CardContent>
    </Card>
  );
}

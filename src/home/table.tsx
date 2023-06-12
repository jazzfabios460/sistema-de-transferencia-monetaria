import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { transacoesTypes } from '../types';
import { formatoDeData, formatoMonetario, removerDuplicataArrayDeObjetos } from '../metodosUteis';

function createData(
  pagador: string,
  recebidor: string,
  valorTransferido: number,
  dataTransferencia: Date
) {
  return { pagador, recebidor, valorTransferido, dataTransferencia };
}

var rows:{
    pagador:string,
    recebidor:string,
    valorTransferido:number,
    dataTransferencia:any
}[] = [];



type propsTableType = {
  transferencia:transacoesTypes[],
  data:{
    dia: number | undefined,
    mes: number,
    ano: number | undefined
  }
}
export default function BasicTable({transferencia,data}:propsTableType) {

    transferencia.map((e)=>{
       rows.push({
        pagador:e.contaDebitada[0]?.usuario.nome,
        recebidor:e.contaCreditada[0]?.usuario.nome,
        valorTransferido:e.valorDaTransacao,
        dataTransferencia:e.data
       })
    })
    let newData = data.ano+`-${data.mes < 10 && '0'}`+data.mes+"-"+data.dia
    
    rows = removerDuplicataArrayDeObjetos(rows.reverse())
    let lista = rows.filter((e)=>{
      if(e.dataTransferencia.includes(newData)){
          return e
      }
    })
    if (data.ano) {
      rows = lista
    }
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Transferido por</TableCell>
            <TableCell align="left">Recebido por</TableCell>
            <TableCell align="left">Valor transferido</TableCell>
            <TableCell align="left">Data transferencia</TableCell>
            <TableCell align="left"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.pagador}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.pagador}
              </TableCell>
              <TableCell align="left">{row.recebidor}</TableCell>
              <TableCell align="left">{formatoMonetario(row.valorTransferido)}</TableCell>
              <TableCell align="left">{formatoDeData(row.dataTransferencia)}</TableCell>
         
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

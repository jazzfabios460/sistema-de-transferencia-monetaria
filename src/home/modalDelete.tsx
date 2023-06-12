import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function ModalDelete({deletarConta}:any) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" sx={{color:"white"}} onClick={handleClickOpen}>
        Remover Conta
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Remover conta"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Atenção, voçê esta prestes a remover sua conta
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant='outlined' onClick={deletarConta} color='error'>deletar</Button>
          <Button variant='outlined' onClick={handleClose} autoFocus>
            cancelar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

import React,{useState,useEffect} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { userAuthenticateStorage } from '../userAuthenticate';
import CardGrafico from './cardGrafico';
import CardTransferencia from './cardTransferencia';
import CardSaldo from './cardSaldo';
import './home.css'
import { getAccountByIdApi, getTransferenciaApi } from '../api/account';
import { transacoesTypes, userAuthType, usersType } from '../types';
import { removerUsuarioApi } from '../api/userApi';
import ModalDelete from './modalDelete';
interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  win?: () => Window;
}

const drawerWidth = 240;

export default function DrawerAppBar(props: Props) {
  const { win } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [account, setAccaount] = useState<usersType>()
  const [transferencia, setTransferencia] = useState<transacoesTypes[]>([])
  async function getAcountById() {
    const a:usersType = await getAccountByIdApi(userAuthenticateStorage.usuario?.conta[0].id)
    const t = await getTransferenciaApi()
    const transfFilter = t.filter((e:transacoesTypes)=>{
      if (e.id_conta_pagador[0] === a.id || e.id_conta_recebidor[0] === a.id) {
        return e
      }
    })
    setAccaount(a)
    setTransferencia(transfFilter)
  }

  useEffect(() => {
    getAcountById()
  }, [])
    
  const loggof = ()=>{
    localStorage.removeItem("token")
    window.location.reload()
  }
  const deletarConta = async()=>{
    localStorage.removeItem("token")
    const r =await removerUsuarioApi(account?.id_usuario)
    alert(r.toString())
    window.location.reload()
  }

  const navItems = [<ModalDelete deletarConta={deletarConta}/>, <div  onClick={loggof}>sair</div>];
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Dados do usuário
      </Typography>
      <Divider />
      <List>
        {navItems.map((item:any) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = win !== undefined ? () => win().document.body : undefined;

  return (
    <Box sx={{ display: 'flex', background:"rgba(0, 0, 0, 0.05)", minHeight:"100vh" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display:"flex" }}
          >
            {userAuthenticateStorage.usuario.nome}
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item:any) => (
              <Button key={item} sx={{ color: '#fff' }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main"  sx={{ p: 3, width:"100%" }}>
        <Toolbar />
        <Typography>
          <div className='cardsMainSup'>
             <CardTransferencia account={account}/>
             <CardSaldo account={account}/>
          </div>
          <div>
            <CardGrafico transferencia={transferencia}/>
          </div>
        </Typography>
      </Box>
    </Box>
  );
}

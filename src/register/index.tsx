import React,{useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { signInApi } from '../api/auth';
import {useNavigate} from 'react-router-dom'
import { setUserAuthenticateStorage, userAuthenticateStorage } from '../userAuthenticate';
import LoaddingButton from '../loaddingButton';
import { registerApi } from '../api/userApi';
import { emailValidation, nameValidation, passwordValidation } from '../metodosUteis';


function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Criado por © '}
      <Link color="inherit" href="https://github.com/jazzfabios460">
        Fabio Oliveira
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Register() {
  const n = useNavigate()
  const [loadding, setLoadding] = useState(false)
  const [erroEmail, setErroEmail] = useState(false)
  const [errorPassword, seterrorPassword] = useState(false)
  const [errorName, seterrorName] = useState(false)
  const handleSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
    setLoadding(true)
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    let emailValid:any = setErroEmail(emailValidation(data.get('email')))
    let nameValid:any = seterrorName(nameValidation(data.get('name')))
    let passwordValid:any = seterrorPassword(passwordValidation(data.get('password')))
    if (data.get('email') && data.get('name') && data.get('password')) {     
        const resRegister = await registerApi(data.get('email'),data.get('name'),data.get('password'))
        alert(resRegister)
    }
    setLoadding(false)
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Cadastro
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                autoFocus
                error={erroEmail}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="name"
                label="Nome"
                type="text"
                id="name"
                autoComplete="current-password"
                error={errorName}

              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Senha"
                type="password"
                id="password"
                autoComplete="current-password"
                error={errorPassword}

              />
              <FormControlLabel
                sx={{display:"flex", justifyContent:"flex-start"}}
                control={<Checkbox value="remember" color="primary" />}
                label="Relembrar"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                {
                  loadding?
                  <LoaddingButton/>:
                  "Cadastrar"
                }
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="/signin" variant="body2">
                    
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/signin" variant="body2">
                    Voltar a tela de login
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
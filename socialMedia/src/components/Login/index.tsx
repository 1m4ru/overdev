import React, { useState } from 'react';
import { Grid, TextField, Button, ThemeProvider, createTheme, Box } from '@mui/material';
import { useAuth } from "../../context/AuthProvider/useAuth";
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/system';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4caf50',
    },
  },
});

const LoginContainer = styled(Grid)({
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginLeft: '160%'
});

const LoginForm = styled('form')(({ theme }) => ({
  width: '300px',
  height: '200px',
  marginTop: theme.spacing(1),
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}));

const SubmitButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(3, 0, 2),
}));

const Title = styled('h1')(({ theme }) => ({
  fontSize: '3rem',
  textAlign: 'center',
  margin: 0, // Remover a margem padrão
}));

const CustomTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: theme.palette.primary.main,
    },
    '&:hover fieldset': {
      borderColor: theme.palette.primary.main,
    },
  },
  '& input::placeholder': {
    color: '#ffffff', // Definir a cor do placeholder para branco
  },
}));

export const Login = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function onFinish(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      await auth.authenticate(email, password);
      navigate('/profile');
    } catch (error) {
      console.error(error);
      // Aqui você pode exibir uma mensagem de erro personalizada
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <LoginContainer container>
        <Grid item xs={12} sm={6} md={4}>
          <Box display="flex" justifyContent="center" alignItems="center" height="100%" marginLeft='100%'>
            <Title>OverDev</Title>
          </Box>
          <LoginForm onSubmit={onFinish}>
            <CustomTextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              InputProps={{
                style: { color: '#ffffff' },
              }}
              InputLabelProps={{
                style: { color: '#ffffff' },
              }}
            />
            <CustomTextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                style: { color: '#ffffff' },
              }}
              InputLabelProps={{
                style: { color: '#ffffff' },
              }}
            />
            <SubmitButton
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            >
              Entrar
            </SubmitButton>
          </LoginForm>
        </Grid>
      </LoginContainer>
    </ThemeProvider>
  );
};
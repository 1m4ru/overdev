import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';
import { ThemeProvider } from '@mui/material';
import { SystemTheme } from './shared';
function App() {
  

  return (
    <ThemeProvider theme={SystemTheme}>
    <BrowserRouter>
    <AppRoutes />
    </BrowserRouter>
    </ThemeProvider>
  )
}

export default App

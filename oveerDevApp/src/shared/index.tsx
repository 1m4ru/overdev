import {} from '@mui/icons-material';
import { createTheme } from '@mui/material';

export const SystemTheme = createTheme({
    palette: {
        primary: {
            main: '#202024' ,
            dark: '#121214' ,
            light: '#323238',
            contrastText: '#fff',
        },
        secondary: {
            main: '#00008B' ,
            dark: '#000080' ,
            light: '#0000CD',
            contrastText: '#fff',
        },
        background: {
            default: '#202024',
            paper: '#8d8d99'
        }
        
       
    }
});
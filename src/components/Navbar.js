import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export default function Navbar() {
    const theme = createTheme({
        palette: {
            primary: {
                light: '#757ce8',
                main: '#3f50b5',
                dark: '#002884',
                contrastText: '#fff',
            }
        },
    });
    return (
        <ThemeProvider theme={theme}>
            <div>
                <Box sx={{ flexGrow: 1 }}>
                    <AppBar position='fixed'>
                        <Toolbar>
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 2 }}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                Poomsak Kaewsee's Portfolio
                            </Typography>
                            <Button color="inherit">Contact</Button>
                        </Toolbar>
                    </AppBar>
                </Box>
            </div>
        </ThemeProvider>
    )
}

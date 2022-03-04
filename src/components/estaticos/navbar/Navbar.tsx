import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import './Navbar.css'
import { useDispatch, useSelector } from 'react-redux';
import { addToken } from '../../../store/tokens/actions';
import { TokenState } from '../../../store/tokens/tokensReducer';

function Navbar() {

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    )
    let history = useHistory();
    const dispatch = useDispatch();

    function goLogout() {
        dispatch(addToken(''))
        alert("Usuário deslogado")
        history.push('/login')
    }

    var navbarComponent;

    if(token !== ""){
        navbarComponent = <AppBar position="static" className="backColor">
        <Toolbar variant="dense">
            <Box className='cursor'>
                <Typography variant="h5" className='neonText'>
                    BlogPessoal
                </Typography>
            </Box>

            <Box display="flex" justifyContent="start">
                <Link to="/home" className='text-decorator-none'>
                <Box mx={1} className='cursor'>
                    <Typography variant="h6" className='neonText'>
                        home
                    </Typography>
                </Box>
                </Link>
                <Link to="/posts" className='text-decorator-none'>
                <Box mx={1} className='cursor'>
                    <Typography variant="h6" className='neonText'>
                        postagens
                    </Typography>
                </Box>
                </Link>
                <Link to="/temas" className='text-decorator-none'>
                <Box mx={1} className='cursor'>
                    <Typography variant="h6" className='neonText'>
                        temas
                    </Typography>
                </Box>
                </Link>
                <Link to="/formularioTema" className='text-decorator-none'>
                <Box mx={1} className='cursor'>
                    <Typography variant="h6" className='neonText'>
                        cadastrar tema
                    </Typography>
                </Box>
                </Link>
                
                    <Box mx={1} className='cursor' onClick={goLogout}>
                        <Typography variant="h6" className='neonText'>
                            logout
                        </Typography>
                    </Box>
                

            </Box>
        </Toolbar>
    </AppBar>
    }
    return (
        <>
            {navbarComponent}
        </>
    )
}

export default Navbar;
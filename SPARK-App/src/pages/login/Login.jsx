import React from 'react'
import "./Login.css"
import FlareIcon from '@mui/icons-material/Flare';
import { TextField, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import styled from '@emotion/styled';

const StyledButton = styled(Button)(({
    backgroundColor: 'rgb(65,173,164)',
    color: 'white',
    fontWeight: '700',
    padding: '10px',
    '&:hover': {
        backgroundColor: 'rgba(245,177,97,1)',
    }
}));




function Login() {
    return (
        <div className="login">
            <div className="loginCard">
                <div className="loginRight">
                    <div className="loginBrand">
                        <FlareIcon className="loginBrandIcon" sx={{fontSize: '30px', marginRight: '5px', color: 'rgb(65,173,164)'}}/>
                        <Typography className="loginBrandText" fontWeight="bold" letterSpacing={-1} sx={{fontSize: '30px', color: 'rgb(65,173,164)'}}>
                            spark
                        </Typography>
                    </div>
                    <div className="loginForm">
                        <TextField required id="standard-required" label="Email" sx={{width: '100%', marginBottom: '30px'}} />
                        <TextField required id="standard-required" type="password" label="Password" sx={{width: '100%', marginBottom: '60px'}} />
                    </div>

                    <StyledButton fullWidth>Login</StyledButton>
                </div>
                <div className="loginLeft">
                    <img className="sideImage" src="../../../assets/login.png"/>
                </div>
            </div>
        </div>
    )
}


export default Login


import React, { useCallback, useState } from 'react';

import { Google, LinkedIn, Window } from '@mui/icons-material';
import { Alert, Box, Button, Divider, Typography } from '@mui/material';

import SigninForm from '../components/auth/SigninForm';
import '../assets/signup/signup.css';

const Auth = () => {
  const [authMode, setAuthMode] = useState('signin');

  // const handleClickSignup = useCallback(() => {
  //   setAuthMode('signup');
  // }, []);
  // const handleClickSignin = useCallback(() => {
  //   setAuthMode('signin');
  // }, []);
  const handleClickForgotPwd = useCallback(() => {
    setAuthMode('forgotpwd');
  }, []);

  return (
    <Box
      className="mainBkg"
      style={{
        backgroundImage: `url(${require('../assets/images/background.ed92fc21.jpg')})`
      }}>
      <Box className="contentWrap">
        <Box className="leftWrap">
          <Box className="imgCont">
            <img src={require('../assets/images/spiral.53b194f3.svg').default} alt="spiral" />
          </Box>
          <Box className="textHld">
            <Box className="majorCap">WELCOME TO THE MARKETPLACE</Box>
            <Box className="minorText">
              Exceptionly provides hands-on tested remote software engineers unlike any other
              outsourcing company. Our product delivers talent directly for hiring without a
              lifetime markup over 400%.
            </Box>
          </Box>
        </Box>

        <Box className="rightWrap">
          <Box className="topHld">
            <Box className="actionTitle">
              <img
                src={require('../assets/images/logo.bf7070eb.svg').default}
                alt="exceptionly logo"
              />
              <Box className="proText">
                <Typography>
                  {
                  'Sign in to your account'
                  }
                </Typography>
              </Box>
            </Box>

            <Box className="vertical-centre">
            {
              (
                <>
                  <Box className="signInGroup">
                    <Button
                      variant="contained"
                      startIcon={<Google />}
                      className="signwithGoogle"
                      sx={{
                        width: '100%',
                        mb: 2
                      }}>
                      SIGN IN WITH GOOGLE
                    </Button>
                    <Button
                      variant="contained"
                      startIcon={<LinkedIn />}
                      className="signwithLinkedin"
                      sx={{
                        width: '100%',
                        mb: 2
                      }}>
                      SIGN IN WITH LINKEDIN
                    </Button>
                    <Button
                      variant="contained"
                      className="signwithWindow"
                      startIcon={<Window />}
                      sx={{
                        width: '100%',
                        mb: 2
                      }}>
                      SIGN IN WITH MICROSOFT
                    </Button>
                    <Divider sx={{ color: 'rgb(102, 102, 102)' }}>or use business email</Divider>
                  </Box>                  
                </>
              )}
            <SigninForm onForgotPwd={handleClickForgotPwd} />
             
            </Box>
            
          </Box>
          <Box>
            <Box className="btHld">
              <Box className="innerNewText">
                <Typography component="span" className="show">
                  Don't have an account?
                </Typography>
                <Typography  component="span">
                  <Box className="show">
                      <Typography component="span">CREATE ACCOUNT</Typography>
                  </Box>
                </Typography>
               
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Auth;

import React from 'react';

import { Box, Button } from '@mui/material';

// import { useFirebase } from '../context/firebase';

export default function Home() {
  // const { logoutUserFromFirebase, user } = useFirebase();
  // console.log({ user });

  return (
    <Box>
      <Box>Home</Box>
      {/* <Button variant="contained" color="primary" onClick={logoutUserFromFirebase}> */}
      <Button variant="contained" color="primary" >
        Logout
      </Button>
    </Box>
  );
}

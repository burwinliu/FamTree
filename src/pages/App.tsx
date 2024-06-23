import React from 'react';
import './App.css';
import FamilyTree from "components/shared/family/FamilyTree";
import { Tree } from 'models/Tree';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function App() {
  return (
    <Box sx={{
      height: '100vh',
      maxHeight: '100vh',
    }}>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6">
            Family Tree
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid
        container
        sx={{height: '92.5%', width: '100%'}}
      >
        <Grid
          item
          className='canvas-wrapper'
          sx={{flexGrow: 1}}
        >
          <FamilyTree tree={new Tree("croissant")} />
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;

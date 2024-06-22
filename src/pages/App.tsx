import React from 'react';
import './App.css';
import FamilyTree from "components/shared/family/FamilyTree";
import { Tree } from 'models/Tree';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function App() {
  return (
    <Box sx={{
      height: '100vh',
      maxHeight: '100vh',
    }}>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Family Tree
          </Typography>
          <Button color="inherit">Switch Families</Button>
        </Toolbar>
      </AppBar>
      <Grid
        container
        sx={{height: '92.5%', width: '100%'}}
      >
        <Grid
          item
          className='canvas-wrapper'
          sm={true}
        >
          {/* TODO: @burwinliu - Add Issue to allow for selector between family lines */}
          <FamilyTree tree={new Tree("croissant")} />
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;

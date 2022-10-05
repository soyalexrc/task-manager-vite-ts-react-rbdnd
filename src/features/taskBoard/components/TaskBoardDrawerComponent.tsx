import React from 'react';
import {Box, Button, Divider, Drawer, IconButton, Typography} from "@mui/material";
import {styled} from "@mui/material/styles";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

interface drawerProps {
  open: boolean,
  handleDrawerChange(): void,
}

const DrawerHeader = styled('div')(({theme}) => ({
  display: 'flex',
  alignItems: 'center',
  // necessary for content to be below app bar
  // ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));


const drawerWidth = 300;

export default function TaskBoardDrawerComponent({open, handleDrawerChange} : drawerProps) {
  return (
    <Drawer
      variant="temporary"
      ModalProps={{keepMounted: true}}
      onClose={handleDrawerChange}
      open={open}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',

        },
      }}>
      <DrawerHeader
        sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.5rem 2rem'}}>
        <Box>
          <Typography variant='h5'>user</Typography>
          <Typography>rol</Typography>
        </Box>
        <IconButton onClick={handleDrawerChange}>
          <KeyboardArrowLeftIcon/>
        </IconButton>
      </DrawerHeader>
      <Divider/>
      <Box display='flex' flexDirection='column' justifyContent='space-between'>
        {/*<MenuItems fn={() => setOpen(false)}/>*/}
        <Box my={5} display='flex'>
          <Button variant='text' onClick={() => {
          }} color='secondary'>Cerrar sesión</Button>
        </Box>
      </Box>
    </Drawer>
  )
}

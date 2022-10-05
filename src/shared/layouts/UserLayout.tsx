import {useState} from 'react';
import {styled} from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {Outlet, useNavigate, useLocation} from 'react-router-dom';
import {
  Box,
  Drawer,
  Toolbar,
  Avatar,
  Badge,
  Button,
  useMediaQuery,
  Divider,
  IconButton,
  Typography
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AppsIcon from '@mui/icons-material/Apps';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import InfoIcon from '@mui/icons-material/Info';
import NotificationsIcon from '@mui/icons-material/Notifications';


const drawerWidth = 350;

interface props {
  theme?: any,
  open: boolean
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({theme, open}: props) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({theme}) => ({
  display: 'flex',
  alignItems: 'center',
  // necessary for content to be below app bar
  // ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));


export default function UserLayout() {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const largeScreen = useMediaQuery((theme: any) => theme.breakpoints.up('md'))


  const handleDrawerChange = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{display: 'flex'}}>
      <AppBar position="fixed" open={open} sx={{
        backgroundColor: '#fff',
      }}>
        <Toolbar sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
          <Box display='flex' alignItems='center'>
            {
              !largeScreen &&
              <IconButton
                onClick={handleDrawerChange}
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{mr: 2}}
              >
                <MenuIcon color='secondary'/>
              </IconButton>
            }
            <IconButton>
              <AppsIcon/>
            </IconButton>
            <Button size='small' variant="text" endIcon={<ArrowDropDownIcon/>}>
              Workspaces
            </Button>
            <Button size='small' variant="text" endIcon={<ArrowDropDownIcon/>}>
              Recent
            </Button>
            <Button size='small' variant="text" endIcon={<ArrowDropDownIcon/>}>
              Templates
            </Button>
            <Button size='small' variant="text">
              Create
            </Button>
          </Box>
          <Box display='flex' alignItems='center'>
            <Button
              sx={{
                width: '200px',
                display: 'flex',
                justifyContent: 'flex-start'
              }}
              size='small'
              variant="outlined"
              startIcon={<SearchIcon/>}
            >
              Search
            </Button>
            <IconButton>
              <InfoIcon/>
            </IconButton>
            <IconButton>
              <Badge badgeContent={5} color='primary'>
                <NotificationsIcon/>
              </Badge>
            </IconButton>
            <Avatar
              alt="sample avatar"
              src="https://thumbs.dreamstime.com/b/businessman-icon-image-male-avatar-profile-vector-glasses-beard-hairstyle-179728610.jpg"
            />
          </Box>
        </Toolbar>
      </AppBar>
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
            <CloseIcon/>
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
      <Box component="main"
           sx={{p: 2, width: '100%', height: '100%', minHeight: '100vh', flexGrow: 1, backgroundColor: '#fff'}}>
        <DrawerHeader/>
        <Outlet/>
      </Box>
    </Box>
  )
}

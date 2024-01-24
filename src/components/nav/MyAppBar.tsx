import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { AppBar, Avatar, Box, Button, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from '@mui/material';
import { useState } from 'react';

const MyAppBar = () => {

  const [drawerOpen, setDrawerOpen] = useState(false);
  const handleDrawerToggle = () => setDrawerOpen((prev) => !prev);

  const navItems: any[] = [
    { title: 'Home', ref: '/' },
    { title: 'About', ref: '/#about' },
    { title: 'Experience', ref: '/#experience' },
    { title: 'Projects', ref: '/#projects' },
  ];

  const drawerWidth = 400;

  const drawer = (
    <Box onClick={handleDrawerToggle}>
      <ListItem>
        <Avatar><Typography variant='h6'>RT</Typography></Avatar>
      </ListItem>
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton href={item.ref}>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position='fixed' component='header'>
        <Toolbar sx={{ justifyContent: 'space-between' }}>

          <Toolbar>
            <IconButton
              size='large'
              aria-label='open drawer'
              edge='start'
              color='inherit'
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuRoundedIcon />
            </IconButton>
            <Avatar>
              <Typography
                variant='h6'
                component='div'
              >
                RT
              </Typography>
            </Avatar>
          </Toolbar>

          <Box sx={{ display: { xs: 'none', sm: 'block' } }} justifyContent='flex-end'>
            {navItems.map((item) => (
              <Button key={item} variant='text' sx={{ p: 2, color: 'white' }} href={item.ref}>{item.title}</Button>
            ))}
          </Box>

        </Toolbar>
      </AppBar>

      <nav>
        <Drawer
          variant="temporary"
          open={drawerOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>

    </Box >
  );
}

export default MyAppBar;
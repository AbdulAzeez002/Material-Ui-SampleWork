import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from "@mui/material";
import {AccountBox, Brightness4, Group, Home, Nightlight, Pages, Person, Settings, Store} from '@mui/icons-material';
import React from "react";

function Sidebar({mode,setMode}) {
  return (
    <Box
      
      flex={1}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      <Box sx={{position:"fixed"}}>
      <List>
        <ListItem disablePadding>
          <ListItemButton component='a' href='#'>
            <ListItemIcon>
              <Home sx={{color:'light'}} />
            </ListItemIcon>
            <ListItemText primary="Home Page" sx={{color:'grey'}} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component='a' href='#'>
            <ListItemIcon>
              <Pages  />
            </ListItemIcon>
            <ListItemText primary="Pages" sx={{color:'grey'}} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component='a' href='#'>
            <ListItemIcon>
              <Group  />
            </ListItemIcon>
            <ListItemText primary="Groups" sx={{color:'grey'}} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component='a' href='#'>
            <ListItemIcon>
              <Store  />
            </ListItemIcon>
            <ListItemText primary="Market Place" sx={{color:'grey'}} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component='a' href='#'>
            <ListItemIcon>
              <Person  />
            </ListItemIcon>
            <ListItemText primary="Friends" sx={{color:'grey'}} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component='a' href='#'>
            <ListItemIcon>
              <Settings  />
            </ListItemIcon>
            <ListItemText primary="Settings" sx={{color:'grey'}} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component='a' href='#'>
            <ListItemIcon>
              <AccountBox  />
            </ListItemIcon>
            <ListItemText primary="Profile" sx={{color:'grey'}}/>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component='a' href='#'>
            <ListItemIcon>
              <Brightness4  />
            </ListItemIcon>
            <Switch onChange={(e)=>{setMode(mode==='light'?'dark' :'light')}}/>
          </ListItemButton>
        </ListItem>
      </List>
      </Box>
    </Box>
  );
}

export default Sidebar;

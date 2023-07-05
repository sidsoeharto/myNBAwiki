import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  makeStyles
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import { colors } from "../styles/theme";

const useStyles = makeStyles(()=>({
    link:{
        textDecoration:"none",
        color: "blue",
        fontSize: "20px",
    },
    icon:{
        color: "white"
    }
}));

function NavbarDrawer() {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        PaperProps={{
          style: {
            minWidth:'50%',
            backgroundColor: colors.nbaNavy
          }
        }}
      >
        <List>
         <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link 
                to="/" 
                style={{
                  textDecoration: 'none',
                  color: colors.white,
                  textTransform: 'uppercase',
                  fontWeight: 500,
                  letterSpacing: '2px'
                }}
              >
                Players
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link 
                to="/teams" 
                style={{
                  textDecoration: 'none',
                  color: colors.white,
                  textTransform: 'uppercase',
                  fontWeight: 500,
                  letterSpacing: '2px'
                }}
              >
                Teams
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link 
                to="/schedule" 
                style={{
                  textDecoration: 'none',
                  color: colors.white,
                  textTransform: 'uppercase',
                  fontWeight: 500,
                  letterSpacing: '2px'
                }}
              >
                Schedule
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link 
                to="/favorites" 
                style={{
                  textDecoration: 'none',
                  color: colors.white,
                  textTransform: 'uppercase',
                  fontWeight: 500,
                  letterSpacing: '2px'
                }}
              >
                Favorites
              </Link>
            </ListItemText>
          </ListItem>
        </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)} style={{color: colors.white}}>
        <MenuIcon />
      </IconButton>
    </>
  );
}
export default NavbarDrawer;
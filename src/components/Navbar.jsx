import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { fade, withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Typography, Button, InputBase} from '@material-ui/core';
import { useMediaQuery, useTheme } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import NavbarDrawer from './NavbarDrawer';
import { colors } from '../styles/theme';

const styles = theme => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
    marginRight: theme.spacing(3),
    fontFamily: 'Oswald, sans-serif',
    fontSize: '1.2rem'
  },
  logo: {
    height: '44px'
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  }
})

function Navbar (props) {
  const { classes } = props
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar position="fixed" style={{backgroundColor: colors.nbaNavy}}>
      <Toolbar sx={{justifyContent: 'space-between'}}>
        <Link to="/" style={{flexDirection: 'row', flexGrow: 1, display: 'inline-flex', alignItems: 'center', textDecoration: 'none', color: 'white'}}>
          <IconButton edge="start" color="inherit">
            <img src="https://www.iconarchive.com/download/i103841/blackvariant/button-ui-requests-13/NBA.ico" alt="myNBAwiki" className={classes.logo}/>
          </IconButton>
          <Typography variant="h6" className={classes.title} noWrap>
            myNBAWiki
          </Typography>
        </Link>
        {
          isMobile ?
          <NavbarDrawer />
          :
          <>
            <Button color="inherit" className={classes.menuButton}>
              <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
                Players
              </Link>
            </Button>
            <Button color="inherit" className={classes.menuButton}>
              <Link to="/roster" style={{ textDecoration: 'none', color: 'white' }}>
                Teams
              </Link>
            </Button>
            <Button color="inherit" className={classes.menuButton}>
              <Link to="/schedule" style={{ textDecoration: 'none', color: 'white' }}>
                Schedule
              </Link>
            </Button>
            <Button color="inherit" className={classes.menuButton}>
              <Link to="/favorites" style={{ textDecoration: 'none', color: 'white' }}>
                Favorite
              </Link>
            </Button>
          </>
        }
      </Toolbar>
    </AppBar>
  )
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navbar)
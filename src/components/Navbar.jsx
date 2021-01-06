import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { fade, withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Typography, Button, InputBase } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

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
  },
  logo: {
    height: '44px'
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
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

class Navbar extends Component {
  render() {
    const { classes } = this.props

    return (
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit">
            <img src="https://www.iconarchive.com/download/i103841/blackvariant/button-ui-requests-13/NBA.ico" className={classes.logo}/>
          </IconButton>
          <Typography variant="h6" className={classes.title} variant="h6" noWrap>
            NBAWiki
          </Typography>
          <Button color="inherit" className={classes.menuButton}>
            <Link to="/" style={{ textDecoration: 'none' }}>
              All Players
            </Link>
          </Button>
          <Button color="inherit" className={classes.menuButton}>Players by Team</Button>
          <Button color="inherit" className={classes.menuButton}>
            <Link to="/favorites" style={{ textDecoration: 'none' }}>
              Favorite Players
            </Link>
          </Button>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase 
              placeholder="Search"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </Toolbar>
      </AppBar>
    )
  }
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navbar)
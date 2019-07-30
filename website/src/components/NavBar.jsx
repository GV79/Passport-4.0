import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import BuildIcon from '@material-ui/icons/Build';
import ScannerIcon from '@material-ui/icons/Scanner';
import HomeIcon from '@material-ui/icons/Home';
import VerifiedIcon from '@material-ui/icons/VerifiedUser';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function NavBar(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  function handleClick() {
    setOpen(!open);
  }

  function handleChangePage(page) {
    window.location.href = "/" + page
  }

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.root}
      style={styles.wrapper}
    >
      <ListItem button>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItem>
      <div style={{display : props.admin ? 'block' : 'none'}}>
        <ListItem button onClick={handleClick}>
          <ListItemIcon>
            <VerifiedIcon />
          </ListItemIcon>
          <ListItemText primary="Administration" />
          {open? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="Customers" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="Deposit Profiles" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="Bank Users" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="Bank Rule Accounts" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="Roles" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="Messages" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="System Tools" />
            </ListItem>
          </List>
        </Collapse>
      </div>
      <ListItem button>
      <ListItem button onClick={() => handleChangePage("Deposits")} >
        <ListItemIcon>
          <ScannerIcon />
        </ListItemIcon>
        <ListItemText primary="Deposits" />
      </ListItem>
      <div style={{display : props.admin ? 'none' : 'block'}}>
        <ListItem button onClick={handleClick}>
          <ListItemIcon>
            <BuildIcon />
          </ListItemIcon>
          <ListItemText primary="Maintenance" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="Starred" />
            </ListItem>
          </List>
        </Collapse>
      </div>
    </List>
  );
}

const styles = {
    wrapper: {
        borderRight: '1px solid #ccc'
    },
    wrapperItem: {
        display: 'flex',
        alignItems: 'center'
    }
}
import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import classNames from "classnames";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";

const drawerWidth = 280;

const styles = theme => ({
  drawerPaper: {
    position: "fixed",
    display: "block",
    whiteSpace: "nowrap",
    overflowX: "hidden",
    top: 0,
    bottom: 0,
    width: drawerWidth,
    background: "#DFE1EE",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing.unit * 9
  },
  headSideBar: {
    width: "100%",
    height: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& h3": {
      color: "#303F9F "
    }
  },
  sideBarItem: {
    "& a": {
      display: "flex",
      height: "50px",
      borderRadius: "0",
      color: "darkblue",
      marginBottom: "1px",
      justifyContent: "start",
      padding: 0,
      width: drawerWidth,
      "& i": {
        width: theme.spacing.unit * 9,
        textAlign: "center"
      }
    }
  },
  menuItem: {
    "&:focus": {
      backgroundColor: "#BFC1CC"
    }
  }
});

class SideBar extends React.Component {


	constructor(){
		super()
		this.state = {
			menu : "home"
		}
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e){
		this.setState({
			menu : e
		});
	}


  render() {
    const { classes, isOpen } = this.props;

    return (
      <Drawer
        variant="permanent"
        classes={{
          paper: classNames(
            classes.drawerPaper,
            isOpen && classes.drawerPaperClose
          )
        }}
        open={true}
      >
        <div className={classes.headSideBar}>
          <Typography variant="subheading" style={{ color: "#333" }}>
            Konversi & Array Form
          </Typography>
        </div>
        <Divider />
        <MenuList className={classes.sideBarItem}>
         <MenuItem
            className={classes.menuItem}
            color="primary"
            component={Link}
            to="home"
            onClick = {() => this.handleClick("home")}
            selected = { this.state.menu === "home" ? true : false }
          >
            <i className="fas fa-home fa-lg" />
            Home
          </MenuItem>
          <MenuItem
            className={classes.menuItem}
            color="primary"
            component={Link}
            to="matauang"
            onClick = {() => this.handleClick("matauang")}
            selected = { this.state.menu === "matauang" ? true : false }
          >
            <i className="fas fa-dollar-sign fa-lg" />
            Konversi Mata Uang
          </MenuItem>
          <MenuItem 
          	className={classes.menuItem} 
          	component={Link} 
          	to="suhu"
          	onClick = {() => this.handleClick("suhu")}
            selected = { this.state.menu === "suhu" ? true : false }
          	>
            <i className="fas fa-thermometer fa-lg" />
            Konversi Suhu
          </MenuItem>
          <MenuItem 
          	className={classes.menuItem} 
          	component={Link} 
          	to="berat"
  	     	onClick = {() => this.handleClick("berat")}
            selected = { this.state.menu === "berat" ? true : false }
            >
            <i className="fas fa-weight fa-lg" />
            Konversi Berat
          </MenuItem>
          <MenuItem
            className={classes.menuItem}
            component={Link}
            to="arrayform"
            onClick = {() => this.handleClick("arrayform")}
            selected = { this.state.menu === "arrayform" ? true : false }
          >
            <i className="fas fa-tv fa-lg" />
            Array Form
          </MenuItem>
        </MenuList>
      </Drawer>
    );
  }
}

export default withStyles(styles)(SideBar);

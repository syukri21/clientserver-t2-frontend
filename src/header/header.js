import React from "react";
import AppBar from "@material-ui/core/AppBar";
import {withStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import classNames from "classnames";
import Typography	from "@material-ui/core/Typography"

const drawerWidth = 280;

const styles = theme => ({
	appBar: {
		position: "fixed",
	    zIndex: theme.zIndex.drawer + 1,
	    display: "grid",
	    gridTemplateColumns: "1fr 1fr",
	    height: "50px",
	    alignItems: "center",
	    backgroundColor: theme.palette.primary.dark,
	    transition: theme.transitions.create(["width", "margin"], {
	      easing: theme.transitions.easing.sharp,
	      duration: theme.transitions.duration.leavingScreen
	    }),

	    "& button" :{
	    	height: "50px",
	    	width: theme.spacing.unit * 9,

	    },

	    "& button i " : {
	    	color: "white",
	    }
  	},
  	appBarShift: {
	    marginLeft: drawerWidth,
	    width: `calc(100% - ${drawerWidth}px)`,
	    transition: theme.transitions.create(["width", "margin"], {
	      easing: theme.transitions.easing.sharp,
	      duration: theme.transitions.duration.enteringScreen
	    })
  	},

})

class Header extends React.Component {
	render(){

		const {classes, isOpen} = this.props;
		return(
			<AppBar
				position="absolute"
				className={classNames(
		          classes.appBar,
		          !isOpen && classes.appBarShift
		        )}
			>
				<div>
					<Button 
						onClick={() => this.props.toggleSideBar(!isOpen)}
					 > 
					 <i className= {!isOpen ? "fas fa-arrow-left fa-lg" : "fas fa-bars fa-lg" } ></i>
					</Button>
				</div>
				<div>
					{ isOpen && <Typography variant="subheading" style={{color: "white"}} > Konversi & Array Form </Typography>  }
				</div>
			</AppBar>
		);
	}
}


export default withStyles(styles)(Header);
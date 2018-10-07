import React from "react"
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardHeader from "@material-ui/core/CardHeader";
import Divider from "@material-ui/core/Divider";
import {Link} from "react-router-dom";
import Paper from "@material-ui/core/Paper"

const styles = theme => ({
	home :{
		width: "calc(100% - 37px )",
		margin: "10px",
		marginRight: "27px",
	},
	media : {
		objectFit: "cover",
	}
})

class Home extends React.Component {
	render(){

		const {classes} = this.props;

		return(

			<div className= {classes.home} >
				<div className={ classes.homeTitle }>
					<Typography 
						variant="display1" 
						style={{
							color: "#737373",
						}}  >
						Tugas Ke-2 Pemograman Client Server
						<Divider style={{marginTop: "20px", marginBottom: "10px"}} />
					</Typography>
					<Typography
						variant="caption"
						gutterBottom
						align="justify"
						>
						Syukri Husaibatul Khairi HSB
					</Typography>
					<Typography
						variant="caption"
						gutterBottom
						align="justify"
						>
						1755201148
					</Typography>

					<ol>
						<li  >
						<Typography variant="subheading" style={{color: "#202020", marginTop: "20px"}}  >
							Konversi mata uang {" "}{" "}	
						</Typography>
						<Button variant="outlined"   color="primary" component={Link} to="matauang"  > Lihat Disini </Button>			
						</li>
						<li>
						<Typography variant="subheading" style={{color: "#202020", marginTop: "20px"}}  >
							Konversi suhu {" "}{" "}				
						</Typography>
						<Button variant="outlined"   color="primary" component={Link} to="suhu"  > Lihat Disini </Button>
						</li>
						<li>
						<Typography variant="subheading" style={{color: "#202020", marginTop: "20px"}}  >
							Konversi berat {" "}{" "}
						</Typography>
						<Button variant="outlined"  color="primary" component={Link} to="berat"  > Lihat Disini </Button>				
						</li>
						<li>
						<Typography variant="subheading" style={{color: "#202020", marginTop: "20px"}}  >
							Form berkaitan dengan Array {" "}{" "}
						</Typography>
						<Button  variant="outlined" color="primary" component={Link} to="arrayform"   > Lihat Disini </Button>			

						</li>
					</ol>
					<Divider style={{marginTop: "20px", marginBottom: "10px"}} />
					<Typography
						variant="subheading"
						gutterBottom
						>
						Web ini merupakan <span style={{color:"#9D0038"}} > Single Page Application </span> menggunakan <span style={{color: "#303F9F"}} > PHP </span> untuk backend (Server) dan <span style={{color: "#303F9F"}} > ReactJS </span> untuk frontend (Client)  
					</Typography>
					<Typography
						variant="caption"
						gutterBottom
						align="justify"
						style={{maxWidth:"380px",padding: "10px 10px", background: "#DFE1EE", borderRadius: "10px"}}
						>
						Backend <span style={{color: "#303F9F"}} > PHP </span> dan <span style={{color: "#303F9F"}} > REST API </span>  
					</Typography>
					<Typography
						variant="caption"
						gutterBottom
						align="justify"
						style={{maxWidth:"380px",padding: "10px 10px", background: "#DFE1EE", borderRadius: "10px"}}

						>
						Frontend <span style={{color: "#303F9F"}} > HTML </span>, <span style={{color: "#303F9F"}} > CSS </span>,  dan <span style={{color: "#303F9F"}} > ReactJS </span>  
					</Typography>
					<Divider style={{marginTop: "20px", marginBottom: "10px"}} />
					<Typography
						variant="subheading"
						gutterBottom
						>
						Link Terkait
					</Typography>
					<Typography
						variant="caption"
						gutterBottom
						align="justify"
						style={{ 
							maxWidth:"380px",
							padding: "10px 10px", 
							background: "#DFE1EE", 
							borderRadius: "10px",
							textDecoration: "none",
							color: "#303F9F"
						}}
						component="a"
						href="http://syukri21.github.io/clientserver-tugas1"
						>
						Tugas 1 HTML dasar 
					</Typography>
				</div>
			</div>

		);
	}
}


export default withStyles(styles)(Home);
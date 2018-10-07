import React from "react";
import {withStyles} from "@material-ui/core/styles";
import {Switch, Route} from "react-router-dom";
import MataUang from "./main-matauang";
import ArrayForm from "./main-array-form";
import Suhu from "./main-suhu";
import Berat from "./main-berat";
import Home from "./main-home";

const styles = theme => ({

})



class Main extends React.Component {
	render(){
		return(
			<div >
				<Switch>
					<Route  path="/tugas2final/home" exact component={Home}  />
					<Route  path="/tugas2final/" exact component={Home}  />
					<Route  path="/tugas2final/matauang" exact component={MataUang}  />
					<Route  path="/tugas2final/berat" exact component={Berat}  />
					<Route  path="/tugas2final/suhu" exact component={Suhu}  />
					<Route  path="/tugas2final/arrayform" exact component={ArrayForm}  />
				</Switch>
			</div>
		);
	}
}


export default  withStyles(styles)(Main);
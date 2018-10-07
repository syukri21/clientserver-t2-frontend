import React from "react";
import Header from "./header/header";
import SideBar from "./sidebar/sidebar";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter } from "react-router-dom";
import withWidth, { isWidthDown, isWidthUp } from "@material-ui/core/withWidth";
import Main from "./main/main";

const style = {
  display: "flex",
  height: "100%"
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: isWidthDown("md", props.width) ? true : false
    };
    this.toggleSideBar = this.toggleSideBar.bind(this);
  }

  toggleSideBar(bool) {
    this.setState({
      open: bool
    });
    this.height;
  }

  render() {
    let { open } = this.state;
    return (
      <BrowserRouter>
        <div style={{ width: "100vw" }}>
          <CssBaseline />
          <Header isOpen={open} toggleSideBar={this.toggleSideBar} />
          <div style={style}>
            <div>
              <SideBar isOpen={open} />
            </div>
            <div
              style={{
                flex: "1",
                boxSizing: "border-box",
                marginTop: "50px",
                marginLeft: !this.state.open ? "280px" : "72px",
                transition: "margin 300ms ease"
              }}
            >
              <Main />
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default withWidth()(App);

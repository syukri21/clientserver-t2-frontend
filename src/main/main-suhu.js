import React from "react"
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import NumberFormat from 'react-number-format';

const currencies = [
  {
    value: "C",
    label: "Celcius"
  },
  {
    value: "F",
    label: "Fahrenheit"
  },
  {
    value: "R",
    label: "Reamur"
  },
  {
  	value : "K",
  	label : "Kelvin"
  }
]


const styles = theme => ({
  matauang: {
    width: "100%",
    minHeight: "calc(100vh - 50px)",
    display: "flex",
padding: "10px 30px",
    alignItems: "start",
    justifyContent: "center",
     boxSizing: "border-box",
    "& form " : {
      width: "100%"
    }
  },
  itemsatu: {
    display: "grid",
    gridTemplateRows: "1fr 1fr",
    gridTemplateColumns: "1fr",
    gridGap: "20px"
  },
  content: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    justifyContent: "center",
    alignItems: "center",
    "& div:nth-child(2)": {
      display: "flex",
      justifyContent: "center"
    },
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: "1fr",
      gridGap: "20px"
    },
  }
});


class Suhu extends React.Component {
	constructor() {
    super();
    this.state = {
      suhu1: "C",
      suhu2: "C",
      input: 0,
      output: 0
    };
    this.handleConvert = this.handleConvert.bind(this);
  }

  handleChangeItem1(event) {
    this.setState({
      suhu1: event.target.value
    });
  }

  handleChangeItem2(event) {
    this.setState({
      suhu2: event.target.value
    });
  }

  handleConvert(e) {
    e.preventDefault();
    fetch("php/suhu.php", {
      method: "POST",
      headers : {
        'Accept' : 'application/json',
         'Content-Type' : 'application/json',
      },
      body: JSON.stringify({
        from: this.state.suhu1,
        to: this.state.suhu2,
        input:this.state.input
      })
    })
      .then(res => res.json())
      .then(resp => {
      	this.setState({
      		output : resp
      	});
      });
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.matauang}>
        <Card component="form">
          <CardHeader title="Konversi Suhu" />
          <CardContent className={classes.content}>
            <div className={classes.itemsatu}>
              <div style={{ textAlign: "center" }}>
                <TextField
                  id="outlined-select-suhu-native"
                  select
                  label={this.state.suhu1}
                  className={classes.textField}
                  value={this.state.suhu1}
                  onChange={e => this.handleChangeItem1(e)}
                  SelectProps={{
                    MenuProps: {
                      className: classes.menu
                    }
                  }}
                  margin="normal"
                  variant="outlined"
                >
                  {currencies.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </div>
              <TextField
                id="item-convert1"
                label={this.state.suhu1}
                placeholder="Masukkan Angka !"
                InputLabelProps={{
                  shrink: true
                }}
                onChange={e =>
                  this.setState({
                    input: e.target.value
                  })
                }
                InputProps={{
	            	inputComponent: NumberFormatCustom,
	            }}
              />
            </div>
            <div>
              <Button
                variant="raised"
                color="primary"
                onClick={e => this.handleConvert(e)}
                type="submit"
                value="submit"
              >
                Convert
              </Button>
            </div>
            <div className={classes.itemsatu}>
              <div style={{textAlign: "center"}} >
                <TextField
                  id="suhu2"
                  select
                  label={this.state.suhu2}
                  className={classes.textField}
                  value={this.state.suhu2}
                  onChange={e => this.handleChangeItem2(e)}
                  SelectProps={{
                    MenuProps: {
                      className: classes.menu
                    }
                  }}
                  margin="normal"
                  variant="outlined"
                >
                  {currencies.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </div>
              <TextField
                id="item-convert1"
                label={this.state.suhu2}
                InputLabelProps={{
                  shrink: true
                }}
                value={this.state.output}
                InputProps={{
	            	inputComponent: NumberFormatCustom,
	            }}
              />
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }
}


function NumberFormatCustom(props) {
  const { inputRef, onChange, ...other } = props;
  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={values => {
        onChange({
          target: {
            value: values.value,
          },
        });
      }}
      suffix="&deg;"
    />
  );
}

export default withStyles(styles)(Suhu)

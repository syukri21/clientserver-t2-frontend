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
    value: "gr",
    label: "Gram"
  },
  {
    value: "ons",
    label: "Ons"
  },
  {
    value: "kg",
    label: "Kilogram"
  },
  {
  	value : "kw",
  	label : "Kuintal"
  },
    {
    value: "ton",
    label: "Ton"
  },
 
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


class Berat extends React.Component {
	constructor() {
    super();
    this.state = {
      berat1: "kg",
      berat2: "kg",
      input: 0,
      output: 0
    };
    this.handleConvert = this.handleConvert.bind(this);
  }
  


  handleChangeItem1(event) {
    this.setState({
      berat1: event.target.value
    });
  }

  handleChangeItem2(event) {
    this.setState({
      berat2: event.target.value
    });
  }

  handleConvert(e) {
    e.preventDefault();
    fetch("php/berat.php", {
      method: "POST",
      headers : {
        'Accept' : 'application/json',
         'Content-Type' : 'application/json',
      },
      body: JSON.stringify({
        from: this.state.berat1,
        to: this.state.berat2,
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
          <CardHeader title="Konversi Berat" />
          <CardContent className={classes.content}>
            <div className={classes.itemsatu}>
              <div style={{ textAlign: "center" }}>
                <TextField
                  id="outlined-select-berat-native"
                  select
                  label={this.state.berat1}
                  className={classes.textField}
                  value={this.state.berat1}
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
                label={this.state.berat1}
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
	            	inputComponent:  NumberFormatCustom,
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
                  id="berat2"
                  select
                  label={this.state.berat2}
                  className={classes.textField}
                  value={this.state.berat2}
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
                label={this.state.berat2}
                InputLabelProps={{
                  shrink: true
                }}
                value={this.state.output}
                InputProps={{
	            	inputComponent:  NumberFormatCustom,
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
           thousandSeparator
    />
  );
}

export default withStyles(styles)(Berat)

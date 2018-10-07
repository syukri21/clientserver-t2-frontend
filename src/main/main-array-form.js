import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  arrayForm: {
    margin: "10px 30px",
  }
});

const items = [
  {
    value: "Massa",
    label: "Massa"
  },
  {
    value: "Mata uang",
    label: "Mata uang"
  },
  {
    value: "Suhu",
    label: "Suhu"
  }
];

class ArrayForm extends React.Component {
  constructor() {
    super();

    this.state = {
      item: "?",
      item2: "Plih form di atas terlebih dahulu !",
      items2: [
        {
          value: "Plih form di atas terlebih dahulu !",
          label: "Plih form di atas terlebih dahulu !"
        }
      ]
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const url = "php/array.php";

    fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        data: e.target.value
      })
    })
      .then(res => res.json())
      .then(res =>
        this.setState({
          items2: res,
          item2: res[0].value
        })
      );

    this.setState({
      item: e.target.value
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.arrayForm}>
        <CardHeader title="Array dan Form" />

        <CardContent>
          <TextField
            label="Choose one !"
            select
            fullWidth
            helperText="Pilih salah satu !"
            value={this.state.item}
            onChange={this.handleChange}
          >
            {items.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            label={this.state.item}
            select
            fullWidth
            helperText="Pilih salah satu !"
            value={this.state.item2}
            style={{ marginTop: "30px" }}
            onChange={e =>
              this.setState({
                item2: e.target.value
              })
            }
          >
            {this.state.items2.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          <Typography
            variant="subheading"
            align="center"
            style={{ marginTop: 30 }}
          >
            Anda Memilih{" "}
            <span style={{ color: "#303F9F" }}> {this.state.item} </span>
            {"  "}
            Dengan Satuan
            <span style={{ color: "#5DBB6C" }}>
              {this.state.item2 !== "Plih form di atas terlebih dahulu !"
                ? " " + this.state.item2
                : " ?"}
            </span>
          </Typography>
        </CardContent>
      </Card>
    );
  }
}
export default withStyles(styles)(ArrayForm);

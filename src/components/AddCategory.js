import React, { useState } from "react";
import { FormControl,Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { light } from "@material-ui/core/styles/createPalette";
import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#3f50b5",
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  margen: {
    marginTop: 15,
  },
  root: {
    background: light,
  },
  inputClass: {
    heigth: 40,
  },
}));
export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");
  const classes = useStyles();
  const theme = createMuiTheme();
  //console.log(categories);
  const handleInputChangue = (e) => {
    console.log(e.target.value);
    setInputValue(e.target.value);
    //setCategories((cat)=>[inputValue]);
  };
  const handdleAdd = () => {
    setCategories((cat) => [inputValue]);
    //console.log(categories);
  };
  const handdleSubmit = (e) => {
    e.preventDefault();
    setCategories((cat) => [inputValue]);
  };

  return (
    <form onSubmit={handdleSubmit}>
      <FormControl fullWidth className={(classes.root, theme.contrastText)}>
        <Typography variant="h4" component="h4">
          Buscar:
        </Typography>
        <input
          className={classes.inputClass}
          label="Buscar"
          variant="outlined"
          value={inputValue}
          onChange={handleInputChangue}
        />
      </FormControl>
    </form>
  );
};

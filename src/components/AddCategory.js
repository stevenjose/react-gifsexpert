import React, { useState } from "react";
import { FormControl, Typography,TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { light } from "@material-ui/core/styles/createPalette";

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
  //console.log(categories);
  const handleInputChangue = (e) => {
    //console.log(e.target.value);
    setInputValue(e.target.value);
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
      <FormControl fullWidth className={classes.root}>
        <TextField
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

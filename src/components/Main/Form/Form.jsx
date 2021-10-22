import React, { useState, useContext, useEffect } from "react";
import {
  TextField,
  Typography,
  Grid,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import useStyles from "./styles";

const Form = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={2}>
      {/* <Snackbar open={open} setOpen={setOpen} /> */}
      <Grid item xs={12}>
        <Typography align="center" variant="subtitle2" gutterBottom>
          {/* {segment ? (
        <div className="segment">
          {segment.words.map((w) => w.value).join(" ")}
        </div>
      ) : null} */}
          {/* {isSpeaking ? <BigTranscript /> : 'Start adding transactions'}  */}
          ....
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Type</InputLabel>
          <Select
          //   value={formData.type} onChange={(e) => setFormData({ ...formData, type: e.target.value })}
          >
            <MenuItem value="Income">Income</MenuItem>
            <MenuItem value="Expense">Expense</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Category</InputLabel>
          <Select
          //   value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })}
          >
            {/* {selectedCategories.map((c) => 
            <MenuItem
             key={c.type} value={c.type}>{c.type}
             </MenuItem>)} */}
            <MenuItem value="business">Business</MenuItem>
            <MenuItem value="business">Salary</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={6}>
        <TextField
          type="number"
          label="Amount"
          //  value={formData.amount} onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
          fullWidth
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          fullWidth
          label="Date"
          type="date"
          // value={formData.date} onChange={(e) => setFormData({ ...formData, date: formatDate(e.target.value) })}
        />
      </Grid>
      <Button
        className={classes.button}
        variant="outlined"
        color="primary"
        fullWidth
        //   onClick={createTransaction}
      >
        Create
      </Button>
    </Grid>
  );
};

export default Form;
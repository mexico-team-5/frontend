import React,{useState, useRef} from 'react';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import {DOMAIN} from '../../../constants.js';
import { makeStyles } from '@material-ui/core/styles';
import { useForm,Controller } from "react-hook-form";
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const defaultValues = {
  TextField: ""
};

export default function SearchForm(props){
	const classes = useStyles();
	const [error,setError] = useState(false)
	const {handleSubmit,errors, reset, control } = useForm({ defaultValues });
	const inputRef = useRef();
	const onSubmit = data => axios({ method: 'post', url: DOMAIN+'/predict',data: data})
								.then(response => {
									setError({
										error: response.data.error
									});
									console.log(props,response.data)
									if (!error && props.handleResponse) {

										props.handleResponse(response.data.data)
									}

								});
	return (
		<form className={classes.form} onSubmit={handleSubmit(onSubmit)} noValidate>
			<section>
			<Controller
	            as={<TextField inputRef={inputRef} />}
	            variant="outlined"
              	margin="normal"
	            label="Stock ID"
	            name="stock_id"
	            type="number" 
	            onFocus={() => inputRef.current.focus()}
	            control={control}
	            rules={{ required: true, min: 1  }}
              	fullWidth
              	autoFocus
	          />
            <Button
            	type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Search
            </Button>
            <label>{errors.stock_id?.type === "required" &&
						"Stock ID is required"}
			{errors.stock_id?.type === "min" &&
				"Stock ID is required to be more than 0"}
			{error.error &&
				"Stock ID not found"}</label>
			</section>
          </form>
		);
}
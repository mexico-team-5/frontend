import React,{useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
// import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Grid from '@material-ui/core/Grid';
// import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
// import Typography from '@material-ui/core/Typography';
// import ImageIcon from '@material-ui/icons/Image';
// import WorkIcon from '@material-ui/icons/Work';
// import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import Title from '../Title';

const useStyles = makeStyles({
  PredictionsContext: {
    flex: 2,
  }
});

export default function Predictions(props){
	 const classes = useStyles();
	 //const {car,setCar} = useState({})
	 let car = props.car
	return (
		<React.Fragment>

		  <Title>Predicted days of inventory per showroom</Title>
		  <TableContainer >
	      <Table className={classes.table} aria-label="simple table">
	      	<TableHead>
	          <TableRow>
	            <TableCell align="left">Location</TableCell>
	            <TableCell align="center">Pageviews ({car? car.pageviews:0})</TableCell>
	            <TableCell align="center">Pageviews (2000)</TableCell>
	            <TableCell align="center">Occupancy (%)</TableCell>
	          </TableRow>
	        </TableHead>
	        <TableBody>
	        {car?.predictions.map(data =>
	        	 <TableRow >
	              <TableCell align="left">
	              	<b>{data[0]}</b>
		          </TableCell>
	              <TableCell align="center" >
	              	{Math.ceil(data[1]) + " days"}
	              </TableCell>
	              <TableCell align="center" >
	              	{Math.ceil(data[2]) + " days"}
	              </TableCell>
	              <TableCell align="center" >
	              	{data[3]!=""?parseFloat((data[3]*100)).toFixed(2)+" %":""}
	              </TableCell>
	            </TableRow>
			 )}
	        </TableBody>
	      </Table>
	    </TableContainer>
			
		</React.Fragment>
	);
}
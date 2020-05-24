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
  carInformationContext: {
    flex: 2,
  }
});

export const numberFormat = (value) =>
  new Intl.NumberFormat('es-419', {
    style: 'currency',
    currency: 'MXN'
  }).format(value);

export function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

export default function CarInformation(props){
	 const classes = useStyles();
	 //const {car,setCar} = useState({})
	 let car = props.car
	return (
		<React.Fragment>

		  <Title>Car information</Title>
		  <TableContainer >
	      <Table className={classes.table} aria-label="simple table">
	        <TableBody>
	        	<TableRow >
	              <TableCell align="left">
	              	<b>Status</b>
		          </TableCell>
	              <TableCell align="left" >
	              	{car?.sold||""}
	              </TableCell>
	              <TableCell align="left" >
	              	<b>Inventory days</b>
	              </TableCell>
	              <TableCell align="left" >
	              	{car?.inventory_days||""}
	              </TableCell>
	            </TableRow>
	            <TableRow >
	              <TableCell align="left">
	              	<b>Brand</b>
		          </TableCell>
	              <TableCell align="left" >
	              	{car?.brand||""}
	              </TableCell>
	              <TableCell align="left" >
	              	<b>Model</b>
	              </TableCell>
	              <TableCell align="left" >
	              	{car?.model||""}
	              </TableCell>
	            </TableRow>
	            <TableRow >
	              <TableCell align="left">
	              	<b>Year</b>
		          </TableCell>
	              <TableCell align="left" >
	              	{car?.year||""}
	              </TableCell>
	              <TableCell align="left" >
	              	<b>KM</b>
	              </TableCell>
	              <TableCell align="left" >
	              	{formatNumber(car?.km||0)}
	              </TableCell>
	            </TableRow>
	            <TableRow >
	              <TableCell align="left">
	              	<b>Color</b>
		          </TableCell>
	              <TableCell align="left" >
	              	{car?.color||""}
	              </TableCell>
	              <TableCell align="left" >
	              	<b>Location</b>
	              </TableCell>
	              <TableCell align="left" >
	              	{car?.location||""}
	              </TableCell>
	            </TableRow>
	            <TableRow >
	              <TableCell align="left" >
	              	<b>Published price</b>
	              </TableCell>
	              <TableCell align="left" colSpan={3}>
	              	{numberFormat(car?.published_price||0)}
	              </TableCell>
	            </TableRow>
	            <TableRow >
	              <TableCell align="left" >
	              	<b>Pageviews</b>
		          </TableCell>
	              <TableCell align="left" colSpan={3}>
	              	{formatNumber(car?.pageviews||0)}
	              </TableCell>
	            </TableRow>
	        </TableBody>
	      </Table>
	    </TableContainer>
			
		</React.Fragment>
	);
}
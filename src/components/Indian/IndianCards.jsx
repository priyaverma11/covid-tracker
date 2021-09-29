import React from 'react';
import {Card, CardContent, Typography, Grid} from '@material-ui/core';
import styles from './Indian.module.css';
import CountUp from 'react-countup';
import cn from 'classnames';

const IndianCards = ( { indianStats: {confirmed, recovered, deaths, lastUpdate} } ) => {

if(!confirmed)
{
  return 'Loading.....';
}
return(
<div className ={styles.container}>
 <Grid container spacing={3} justify ="center">
   <Grid item xs={12} md={3} component ={Card} className={cn(styles.card, styles.infected)} >
       <CardContent>
          <Typography color ="textSecondary" gutterBottom> Infected </Typography>
          <Typography variant='h5'>
             <CountUp start={0} end={confirmed.value} duration={2.5} separator="," />
          </Typography>
          <Typography color ="textSecondary" > {new Date(lastUpdate).toDateString()} </Typography>
          <Typography variant='body2'> Number of active cases of COVID-19 </Typography>
       </CardContent>
   </Grid>

    <Grid item xs={12} md={3} component ={Card} className={cn(styles.card, styles.recovered)} >
       <CardContent>
          <Typography color ="textSecondary" gutterBottom> Recovered </Typography>
          <Typography variant='h5'>
             <CountUp start={0} end={recovered.value} duration={2.5} separator="," />
          </Typography>
          <Typography color ="textSecondary" > {new Date(lastUpdate).toDateString()} </Typography>
          <Typography variant='body2'> Number of recoveries from COVID-19 </Typography>
       </CardContent>
    </Grid>

     <Grid item xs={12} md={3} component ={Card} className={cn(styles.card, styles.deaths)} >
        <CardContent>
           <Typography color ="textSecondary" gutterBottom> Deaths </Typography>
           <Typography variant='h5'>
              <CountUp start={0} end={deaths.value} duration={2.5} separator="," />
           </Typography>
           <Typography color ="textSecondary" > {new Date(lastUpdate).toDateString()} </Typography>
           <Typography variant='body2'> Number of deaths caused by COVID-19 </Typography>
        </CardContent>
    </Grid>
 </Grid>
</div>
)
}

export default IndianCards;
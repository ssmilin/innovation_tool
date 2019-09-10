import React, {PropTypes} from 'react';
import Paper from 'material-ui/Paper';
import {white, pink600, pink500, cyan600} from 'material-ui/styles/colors';
import {BarChart, Bar, ResponsiveContainer, XAxis} from 'recharts';
import GlobalStyles from '../../styles';
import { black } from 'material-ui/styles/colors';

const MonthlySales = (props) => {

  const styles = {
    paper: {
      backgroundColor: white,
      height: 250
    },
    div: {
      marginLeft: 'auto',
      marginRight: 'auto',
      width: '95%',
      height: 190
    },
    header: {
      color: white,
      backgroundColor: cyan600,
      padding: 10
    }
  };

  return (
    <Paper style={styles.paper}>
      <div style={{...GlobalStyles.title, ...styles.header}}>Monthly Count - 2019</div>
      <div style={styles.div}>
        <ResponsiveContainer>
          <BarChart data={props.data} >
            <Bar dataKey="uv" fill={cyan600}/>
            <XAxis dataKey="name" stroke="none" tick={{fill: black}}/>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Paper>
  );
};

MonthlySales.propTypes = {
  data: PropTypes.array
};

export default MonthlySales;

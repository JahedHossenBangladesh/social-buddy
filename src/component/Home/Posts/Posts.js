import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';





const useStyles = makeStyles({

bgcolor:{
  color:'white',
  backgroundColor:'#90a4ae'
},

  root: {
    minWidth: 275,
    borderBottom:'2px solid gray',
    
  },
 
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const Posts = (props) => {
    const {id,title} = props.post;
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <Card className={classes.root}>
      <CardContent className={classes.bgcolor}>
        <Typography className={classes.title} color="textSecondary" gutterBottom>

         <h3>User id : {id}</h3>
        </Typography>
        <Typography variant="h5" component="h2">
          user-id-number:{id}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          <h2>Title:{title}</h2>
        </Typography>
        <Typography variant="body2" component="p">
        <p>To Know more Click the below button</p>
          <br />
          {'"You will see the post"'}
        </Typography>
      </CardContent>
      <CardActions>
      <Link to={`/post/${id}`} style={{ textDecoration: 'none' }} >  <Button variant="outlined" color="secondary" >Know More</Button></Link>
       
      </CardActions>
    </Card>
    );
};


export default Posts;
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
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

const PostDetail = () => {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
 const {id} = useParams();

const [detail,setDetail] = useState({});

useEffect(() => {

fetch(`https://jsonplaceholder.typicode.com/posts/${id} `)
.then(res => res.json())
.then(data => setDetail(data))

},[])

    return (
        <Card className={classes.root}>
        <CardContent className={classes.bgcolor}>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
  
           <h3>User id : {detail.id}</h3>
          </Typography>
          <Typography variant="h5" component="h2">
           <h2> user-id-number:{id} </h2>
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            <h3>Title: {detail.title}</h3>
          </Typography>
          <Typography variant="body2" component="p">
          <h1>The post</h1>
          <h3> {detail.body}</h3>
            <br />
            {'"You will see the comments by clicking below button"'}
          </Typography>
        </CardContent>
        <CardActions>
        <Link to={`/comment/${detail.id}`} style={{ textDecoration: 'none' }} >  <Button variant="outlined" color="secondary" >Know More</Button></Link>
         
        </CardActions>
      </Card>
    );
};

export default PostDetail;
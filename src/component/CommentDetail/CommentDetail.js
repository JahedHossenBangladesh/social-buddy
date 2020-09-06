import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));



const useStyless = makeStyles({
  root: {
    minWidth: 275,
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



const CommentDetail = (props) => {
 console.log(props);
    const {postId,id,name,email,body} = props.comment;

    const [pic,setPic] = useState([]);
    const fivePic = pic.slice(0,5);
console.log(fivePic);
    useEffect(() =>{
fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${postId}`)

.then(res => res.json())
.then(data => setPic(data))
 },[])


     console.log(fivePic);
    
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
  
    return (
      <div>
{    
fivePic.map( pic  => 
<Card className={classes.root} variant="outlined">
  <CardContent>
         <div className={classes.root}>
  <Avatar alt="Remy Sharp" src={pic.url} />

      </div>
    <Typography className={classes.title} color="textSecondary" gutterBottom>
      <h1>Post id : {postId} </h1>
      <h2>The comment id:{id} </h2>
    </Typography>
    <Typography variant="h5" component="h2">
      <h3>Name:{name}</h3>
    </Typography>
    <Typography className={classes.pos} color="textSecondary">
    <h5>Email:{email}</h5>
    </Typography>
    <Typography variant="body2" component="p">
      <p> {body}</p>
      <br />
      {'"a benevolent smile"'}
    </Typography>
  </CardContent>
  <CardActions>
   
  </CardActions>
</Card>     )
 

}
      </div>




     
        
    );
};

export default CommentDetail;
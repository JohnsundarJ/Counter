import React, { Component } from "react";
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  button: {
    display: 'block',
    backgroundColor: 'white'
  },
  each1: {
    width: '55%',
    height: '50px',
    fontSize: '25px',
    backgroundColor: '#00ffff',
    color: ' #1a0000'
  },
  each: {
    width: '50%',
    height: '50px',
    fontSize: '30px',
    backgroundColor: '#00ffff',
    color: ' #1a0000'
  }, 
  title: {
    flexGrow: 1,
    textAlign: 'center',
    fontSize:"25px"
  },
  textbox: {
    height: '60px',
    backgroundColor: 'white',
    width: '100%',
    fontSize:'25px',
    textAlign : 'center',
    borderWidth:'3px',
    borderColor:'red'
  }
});


class Incordec extends Component {
  state = {
    operand1:0,
  }
  inc=(e)=>{
    this.setState({operand1:this.state.operand1+1})
  }
  dec=(e)=>{
    this.setState({operand1:this.state.operand1-1})
  }

erase=()=>{
    this.setState({
        operand1:0
    })
}
  render() {
    const { classes } = this.props;

    return (
      <div md={12} xs={12}>
        <div className={classes.root}>
          <AppBar position="fixed" style={{backgroundColor:"#DC143C",color:"white"}}>
            <Toolbar>
              <Typography className={classes.title}>
                COUNTER APPLICATION
                            </Typography>
            </Toolbar>
          </AppBar>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div style={{ padding: "20px",paddingBottom:"0px" }}>
          <Grid container>
            <Grid item md={4} />
            <Grid item md={4}>
              <Card style={{
                margin: "auto",
                boxShadow: "0px 0px 5px 5px rgba(0,0,0,0.3)",
                "&:hover": {
                  boxShadow: "0 16px 30px 12.125px rgba(0,0,0,0.3)"
                }
              }}>
                <CardContent>
                <div style={{paddingTop:"10px"}}></div>
                  <input
                    className={classes.textbox} id="display" type="text" readOnly value={this.state.operand1} label="Firstname" />
                <div style={{paddingTop:"10px"}}></div>
                  <div className={classes.button}>
                    <button className={classes.each} value="+" id="+" onClick={(e)=>this.inc(e)}>+</button>
                    <button className={classes.each} value="-" id="-;" onClick={()=>this.dec()}>-</button>
                   </div>
                   <div>
                   <div style={{paddingTop:"3px"}}></div>
                    <Grid container spacing={3} >
                <Grid item md={4} xs={4}/>
                      <Grid item md={7} xs={7}>           
                    <button className={classes.each1} value="del" id="del" onClick={(e)=>this.erase(e)}>Reset</button>
                    </Grid>
                  <Grid item md={1} />
                  </Grid>
                 </div>
                  
                </CardContent>
              </Card>
            </Grid>
            <Grid item md={4} />
          </Grid>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Incordec);

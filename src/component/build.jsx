import React from 'react';
import Image from 'react-bootstrap/Image';
import { Button } from 'react-bootstrap';
import bid from '../image/bid.jpg'
import Card from 'react-bootstrap/Card';
import BIC from '../image/BIC.jpg'
//import './styles.css';



const Build = () => {

  return (
    <>

        <div style={{ marginLeft: 90, display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: 40,marginTop:50,justifyContent: 'center'}}>
          
        
            <Card style={{ width:1100, height:270}}>
              <Card.Img variant="top" src={BIC} width={1100} height={270} style={{borderRadius:20,padding:10}}/>
              <Card.Body>
             
                 <Card.Title style={{fontSize:40,marginTop:'-20%',marginLeft:'30%',color:'white'}}> Build your NFT profile</Card.Title>
                <Card.Text style={{fontSize:13,marginTop:10,marginLeft:'40%',color:'white',fontWeight:'bold'}}>Join almost 10k NFT profiles on Digit ! </Card.Text>
                
                          
                   <Button variant="primary" style={style.signButton}>Sign up now</Button>
              </Card.Body>
            </Card>
    
        </div>   
 </>
  );
};



export default Build;

const style={

  icon:{
    border: '1px solid black',
    backgroundColor:'#181D28',
    width:30,
    height:30,
    borderRadius: 10,
    padding:2,
    marginTop:10,
    marginLeft:10
  },
  signButton:{
    width:110,
    padding:5,
    border:'none',
    marginLeft:"45%",
    borderRadius: 10,
    backgroundColor:'white',
    marginTop:20,
    fontWeight:'bold',
  },

}
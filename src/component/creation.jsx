import React,{ useState} from 'react';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import NavBar from '../component/navbar';
import left from '../image/left.jpg';
import { Button } from 'react-bootstrap';
import TOP from '../image/TOP.jpg'
import bid from '../image/bid.jpg'
import machine from '../image/machine.jpg'
import circle from '../image/circle.jpg'
import Card from 'react-bootstrap/Card';
import Collection from '../component/collection';
//import './styles.css';



const Creation = () => {

const Create = [
    { id: 1, title: 'Set up your wallet', imageSource: require('../image/wallet-02.png'),text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.' },
    { id: 2, title: "Add your NFT's", imageSource: require('../image/cloud-download.png'),text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.' },
    { id: 3, title: "Promote your NFT's", imageSource: require('../image/sale-tag-02.png'),text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.' },
    { id: 4, title: "Sell your NFT's", imageSource: require('../image/bitcoin-ellipse.png'),text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.' },
    
  ];
  return (
    <>


        <div style={{marginTop:'5%',marginLeft:5}}>
            <p style={{fontWeight:'bold',color:'#0E1218',marginLeft:'5%',fontSize:20}}>Create and Sell Now</p>
        </div>

          
        <div style={{ marginLeft: 90, display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: 40,marginTop:30,justifyContent: 'center'}}>
          
          {Create.map((item) => (
            <Card style={{ width: 220, height:130, border: '1px solid black',borderColor:'#E8E9EA',borderRadius:20,padding:10,backgroundColor:'#E8E9EA'}} key={item.id}>

              <div style={style.icon}> 
                <Card.Img variant="top" src={item.imageSource} width={20} height={16} style={{borderRadius:20,padding:5}}/>
              </div>

              <Card.Body>
                <div >
                 
                   <Card.Title style={{fontSize:12,fontWeight:'bold',marginTop:10,marginLeft:7}}> {item.title}</Card.Title>
                   <Card.Title style={{fontSize:12,marginTop:8,marginLeft:7,color:'#484D56'}}> {item.text}</Card.Title>

                 </div>
               </Card.Body>
            </Card>
          ))}
        </div>

 </>
  );
};



export default Creation;

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
  }

}
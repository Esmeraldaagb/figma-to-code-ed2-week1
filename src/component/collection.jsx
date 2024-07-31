import React from 'react';
import Image from 'react-bootstrap/Image';
import { Button } from 'react-bootstrap';
import bid from '../image/bid.jpg'
import Card from 'react-bootstrap/Card';
//import './styles.css';



const Collection = () => {

 const Categorie = [
    { id: 1, title: 'CyberPunk', imageSource: require('../image/cyber.jpg'),nb:68 },
    { id: 2, title: 'DuroLost Boll-Upper', imageSource: require('../image/durolost.jpg'),nb:68 },
    { id: 3, title: 'Space X Wiper', imageSource: require('../image/space.jpg'),nb:68 },
    { id: 4, title: 'Snoop Dogg', imageSource: require('../image/snoop.jpg'),nb:68 },
    
  ];
  return (
    <>

        <div style={{marginTop:'12%',marginLeft:5}}>
            <p style={{fontWeight:'bold',color:'#0E1218',marginLeft:'5%',fontSize:20}}>Our collections</p>
        </div>

  
        <div style={{marginLeft:110}}>
              <Button variant="primary" style={style.buttonP}>All catégorie</Button>
              <Button variant="primary" style={style.buttonS}>Art</Button>
              <Button variant="primary" style={style.buttonS}>Celebrities</Button>
              <Button variant="primary" style={style.buttonS}>Gaming</Button>
              <Button variant="primary" style={style.buttonS}>Sport</Button>
        </div>

        <div style={{ marginLeft: 90, display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: 40,marginTop:30,justifyContent: 'center'}}>
          
          {Categorie.map((item) => (
            <Card style={{ width: 220, height:270, border: '1px solid black',borderColor:'#B8BABE',borderRadius:20 }} key={item.id}>
              <Card.Img variant="top" src={item.imageSource} width={200} height={160} style={{borderRadius:20,padding:10}}/>
              <Card.Body>
                <div style={{flexDirection:'row',display:'flex'}}>
                 
                   
                      <Card.Title style={{fontSize:12,fontWeight:'bold',marginTop:3,marginLeft:7}}> {item.title}</Card.Title>
                    
                    <div style={{flexDirection:'row',display:'flex',marginLeft:'25%'}}>

                    <Image
                          src={bid}
                          style={{ width: 15, height: 15, borderRadius: 10}}
                        />
                          <Card.Text style={{fontSize:13,marginTop:1}}> {item.nb}</Card.Text>
                
                    </div>
                </div>
                
                <Button variant="primary" style={style.bildButton}>Place a Bild</Button>
              </Card.Body>
            </Card>
          ))}
        </div>   
 </>
  );
};



export default Collection;

const style={

  buttonP:{
    marginLeft:4,
    color:'white',
    backgroundColor:'#0E1218', 
    borderRadius: 10,
    padding:12,
    border:'none'
  },

  buttonS:{
    marginLeft:4,
    backgroundColor:'#E8E9EA',
    borderRadius: 10,
    padding:12,
    border:'none'
    
  },

  bildButton:{
    width:200,
    padding:5,
    marginLeft:12,
    border: '1px solid black',
    borderColor:'black',
    borderRadius: 10,
    backgroundColor:'white',
    marginTop:20
  },
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
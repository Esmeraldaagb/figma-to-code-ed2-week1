import React,{ useState} from 'react';



const Footer = () => {

  return (
    <>
          
        <div style={{ marginLeft: 90, display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: 40}}>
          
          <p style={{fontSize:16,fontWeight:'bold'}}>Create Explore & Collect Digital  NFTs</p>

          <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap',marginLeft:'60%'}}>
                <p style={{fontSize:13,marginLeft:5}}>Privacy</p>
                <p style={{fontSize:13,marginLeft:5}}>Terms & Conditions</p>
                <p style={{fontSize:13,marginLeft:5}}>About Us</p>
          </div>
        </div>

 </>
  );
};



export default Footer;

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
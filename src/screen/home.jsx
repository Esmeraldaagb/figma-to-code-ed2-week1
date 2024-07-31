import React from 'react';
import Image from 'react-bootstrap/Image';
import NavBar from '../component/navbar';
import left from '../image/left.jpg';
import TOP from '../image/TOP.jpg'
import machine from '../image/machine.jpg'
import circle from '../image/circle.jpg'
import Collection from '../component/collection';
import Creation from '../component/creation';
import Build from '../component/build';
import Footer from '../component/footer'
//import './styles.css';


const Home = () => {

  return (
    <>

      <NavBar />
      <div style={{ borderTop: '1px solid #B8BABE'}}>
          <div style={{
                borderLeft: '1px solid black',marginLeft:130
            }}/>
            
      <div style={{position:'absolute'}}>
            <p style={{ marginTop: 80, marginLeft: 100, fontSize: 120 }}>See the NFT <br /> new world</p>

            <h5 style={{ marginTop: -70, color: 'grey', marginLeft: 100, fontFamily: 'Raleway' }}> Vorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, di</h5>

            <h4 style={{ marginTop: 60, color: 'black', marginLeft: 100, fontFamily: 'Raleway' }}>Discover Vow</h4>
            
                <div style={{marginTop:-30}}>
                          <img
                                src={left}
                                width={30}
                                height={30}
                                style={{ marginLeft: 200, marginTop: -40}}
                              />
                </div>
      </div>
 

        <div style={{marginLeft:'40%',marginTop:'15%'}}>
            <div style={{marginTop:'30%'}}>
                <Image
                  src={machine}
                  style={{ width: 210, height: 320, borderRadius: 110 }}
                />
            </div>
            

            <div style={{marginTop:'-31%',marginLeft:'5%'}}>

                <Image
                      src={circle}
                      style={{  width: 150, height: 120, marginLeft:'2%',marginTop:'-50%'}}
                    />
            </div>
            
            <div style={{marginTop:'18%',marginLeft:'20%'}}>

                <Image
                  src={TOP}
                  style={{ width: 210, height: 320, borderRadius: 110,marginLeft:'1%',marginTop:'-40%'}}
                />

            </div>
        </div>

       
          <div>
          <Collection/>
          <Creation/>
          <Build/>

          </div>
 

        <div style={{
            borderBottom: '1px solid #B8BABE',marginTop:30
        }}/>

      <Footer/>

</div>  
 </>
  );
};



export default Home;

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
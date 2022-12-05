import { useState, memo, useEffect } from 'react';
import Axios from 'axios';
import { Row, Col } from 'antd';
import { useJsApiLoader } from '@react-google-maps/api';

import Map from './Map';
import Wrapper from './styled/Wrapper';
import RestaurantCards from './RestaurantCards';
import CreateRestaurantModal from '../../modals/CreateRestaurantModal';

const Home = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyAFT7DCSeBKZBNl8fwb0CovkFLCO6M6M2Q",
  });

  const [isModalOpen, setModalOpen] = useState(false);
  const [restaurants, setRestaurants] = useState([]);

  const [center, setCenter] = useState({
    lat: -3.745,
    lng: -38.523,
  });
  const [currentPosition, setCurrentPosition] = useState({
    lat: -3.745,
    lng: -38.523,
  });

  const [loading, setLoading] = useState(false);

   useEffect(() => {
     setLoading(true);
     Axios.get('http://localhost:8080/restaurants')
     .then(res => { 
       setLoading(false);
       setRestaurants(res.data);
      })
     .catch(err => {
       console.log(err, 'error')
       setLoading(false);
      })
   }, [])

    return (
     <Wrapper>
        <CreateRestaurantModal isModalOpen={isModalOpen} setModalOpen={setModalOpen} currentPosition={currentPosition}/>
      <Row className='home-container' justify='space-between'>
 
       <Col span={10} className='cards-container'>
         <RestaurantCards setCenter={setCenter} setModalOpen={setModalOpen} restaurants={restaurants}/>
       </Col>
       
       <Col span={12} className='map-container'>
         {isLoaded ? 
           <Map 
            loading={loading} 
            restaurants={restaurants} 
            center={center} 
            setModalOpen={setModalOpen} 
            setCurrentPosition={setCurrentPosition}
            /> : <></>}
       </Col>
 
      </Row>
     </Wrapper>
    )
}

export default memo(Home);
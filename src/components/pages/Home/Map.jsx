import { useCallback, useState, useRef, memo} from 'react';
import { GoogleMap, Marker, InfoWindow } from '@react-google-maps/api';

import { restaurants } from './RestaurantCards';
import restaurant2 from '../../../images/restaurant2.png';

const containerStyle = {
    width: '100%',
    height: '100%'
  };

const Map = (props) => {
      const { center, setModalOpen, setCurrentPosition } = props;
    
      const [markers, setMarkers] = useState([]);
      const [hovered, setHovered] = useState(null);
      const mapRef = useRef();
      const onMapLoad = useCallback((map) => {
        mapRef.current = map;
      },[])

    return (
      <>
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={14}
              onLoad={onMapLoad}
              // onUnmount={onUnmount}
              onClick={(event) => {
                // console.log(event.latLng.lat(), event.latLng.lng())
                setCurrentPosition({lat: event.latLng.lat(), lng: event.latLng.lng()})
                setModalOpen(true)
                setMarkers((current) => [
                  ...current,
                  {
                    lat: event.latLng.lat(),
                    lng: event.latLng.lng(),
                  }
                ])
              }}
            >
              {markers.map((marker, index) => 
                <Marker 
                  key={index} 
                  position={{ lat: marker.lat, lng: marker.lng }}
                  icon = {{
                    url: './meal.png',
                    scaledSize: new window.google.maps.Size(40,40),
                    origin: new window.google.maps.Point(0,0),
                    anchor: new window.google.maps.Point(15,15),
                  }}
                  // onClick={() => history.push('/restaurants/7')}
                  onMouseOver={() => setHovered(marker)}
                  // onMouseOut={() => setHovered(null)}
                  />
              )}
      
              {hovered ? (
                <InfoWindow position={{ lat: hovered.lat, lng: hovered.lng}}>
                  <>
                  <p>Wassabi</p>
                  <img alt='restaurant' src={restaurant2} width='100%' height={60}/>
                  </>
                </InfoWindow>) : null}
            </GoogleMap>
      </>
    )
}

export default memo(Map);

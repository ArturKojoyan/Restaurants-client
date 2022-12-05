import { useCallback, useState, useRef, memo} from 'react';
import { GoogleMap, Marker, InfoWindow } from '@react-google-maps/api';

import history from '../../../history';
import restaurant2 from '../../../images/restaurant2.png';

const containerStyle = {
    width: '100%',
    height: '100%'
  };

const Map = (props) => {
      const { center, restaurants, loading } = props;
    
      // const [markers, setMarkers] = useState([]);
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
            >
              { restaurants.length  && !loading && restaurants?.map((item, index) => 
                <Marker 
                  key={index} 
                  position={{ lat: +item?.latitude, lng: +item?.longitude }}
                  icon = {{
                    url: './meal.png',
                    scaledSize: new window.google.maps.Size(40,40),
                    origin: new window.google.maps.Point(0,0),
                    anchor: new window.google.maps.Point(15,15),
                  }}
                  onClick={() => {
                    history.push(`/restaurant/${item._id}`);
                    window.location.reload();
                  }}
                  onMouseOver={() => setHovered(item)}
                  onMouseOut={() => setHovered(null)}
                  >
                  {restaurants.length && hovered ? (
                    <InfoWindow position={{ lat: +hovered?.latitude, lng: +hovered?.longitude}}>
                      <>
                      <p>{item.name}</p>
                      <img alt='restaurant' src={restaurant2} width='100%' height={60}/>
                      </>
                    </InfoWindow>) : null}
                  </Marker>
              )}
            </GoogleMap>
      </>
    )
}

export default memo(Map);

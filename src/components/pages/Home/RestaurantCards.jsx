import { Button, Row, Col, Rate } from "antd";
import restaurant1 from '../../../images/restaurant1.png';
import  { Link } from 'react-router-dom';
import { memo } from 'react';


export const restaurants = [
{
  name: 'Wassabi',
  description: 'good restaurant',
  adress: 'Sayat Nova 25',
  lat: -3.7668398160361507,
  lng: -38.521605251312266,
  avgRate:'',
  feedbacks:''
},
{
  name: 'Roller',
  description: 'good restaurant',
  lat: -3.7590460620646584,
  lng: -38.517914531707774,
  adress: 'Teryan 19',
  avgRate:'',
  feedbacks:''
},
{
  name: 'Boby',
  description: 'restaurant',
  lat: -3.763242707483057,
  lng: -38.52598261642457,
  adress: 'Komitas 17',
  avgRate:'',
  feedbacks:''
},
{
  name: 'Wassabi',
  description: 'good restaurant',
  lat: 20,
  lng: 25,
  adress: 'Sayat Nova 25',
  avgRate:'',
  feedbacks:''
},
{
  name: 'Roller',
  description: 'good restaurant',
  lat: 35,
  lng: 18,
  adress: 'Teryan 19',
  avgRate:'',
  feedbacks:''
},
{
  name: 'Boby',
  description: 'restaurant',
  lat: 30,
  lng: 22,
  adress: 'Komitas 17',
  avgRate:'',
  feedbacks:''
},
{
  name: 'Wassabi',
  description: 'good restaurant',
  adress: 'Sayat Nova 25',
  lat: 33,
  lng: 21,
  avgRate:'',
  feedbacks:''
},
{
  name: 'Roller',
  description: 'good restaurant',
  lat: 37,
  lng: 40,
  adress: 'Teryan 19',
  avgRate:'',
  feedbacks:''
},
]

const RestaurantCards = (props) => {
  const { setCenter } = props;
    return (
      <Row gutter={[20,20]} className='cards-container' justify='space-between'>
       {restaurants.map((item, index) => {
        return (
         <Col key={index}>
           <div className='card-container' onClick={() => setCenter({ lat: item.lat, lng: item.lng })}>
             <img width={100} height={100} alt='rest1' src={restaurant1}/>
             <Rate defaultValue={5} className='rate' disabled/>
             <p>{item.name}</p>
             <p>{item.adress}</p>
             <Link to={'/restaurant/1'}>View Restaurant</Link>
           </div>
         </Col>
        )
       })}
       </Row>
    )
};

export default memo(RestaurantCards);
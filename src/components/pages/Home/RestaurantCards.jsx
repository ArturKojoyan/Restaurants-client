import { memo } from 'react';
import  { Link } from 'react-router-dom';
import { Button, Row, Col, Rate } from "antd";
import restaurant1 from '../../../images/restaurant1.png';

const RestaurantCards = (props) => {
  const { restaurants, setModalOpen } = props;
    return (<>
      <Button onClick={() => setModalOpen(true)}>Create Restaurant</Button>

      <Row gutter={[20,20]} className='cards-container'>
       {restaurants.map((item, index) => {
        return (
         <Col key={index}>
           <div className='card-container' 
           >
             <img width={100} height={100} alt='rest1' src={restaurant1}/>
             <Rate defaultValue={item?.feedbacks[0]?.rate} className='rate' disabled/>
             <p>{item.name}</p>
             <p>{item.address}</p>
             <Link to={`/restaurant/${item._id}`}>View Restaurant</Link>
           </div>
         </Col>
        )
       })}
       </Row>
       </>
    )
};

export default memo(RestaurantCards);
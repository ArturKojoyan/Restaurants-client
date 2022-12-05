import Axios from 'axios';
import { useLocation } from 'react-router-dom';
import { Rate, Form, Button, Input, Row, Col } from 'antd';
import { useCallback, useEffect, useState, memo } from 'react';

import history from '../../../history';
import Wrapper from './styled/Wrapper';
import restaurant3 from '../../../images/restaurant3.png';

const { TextArea } = Input;


const Restaurant = () => {
  const { pathname } = useLocation();

  const [restaurant, setRestaurant] = useState();

  const onSubmit = useCallback((values) => {
    Axios.post(`http://localhost:8080${pathname}/feedback`,{
        rate: values.rate,
        feedback: values.feedback,
    })
    history.push('/');
    window.location.reload();
  },[pathname]);

  useEffect(() => {
    Axios.get(`http://localhost:8080${pathname}`)
    .then(res => setRestaurant(res.data))
    .catch(err => console.log(err))
  },[pathname])

  return (
  <Wrapper>
      <h2>
         Welcome to our Restaurant!
      </h2>
    <Row className='retaurant-view' justify='space-between'>
      <Col span={8}>
        <Row gutter={40} className='restaurant-detailed-info'>
          <Col span={16}>
            <img alt='restaurant' src={restaurant3} height='100%' width='100%'/>
          </Col>
          <Col span={24}>
            <Rate defaultValue={restaurant?.feedbacks[0]?.rate | 5} disabled/>
            <h4>Name:{' '}<span>{restaurant?.name}</span></h4>
            <h4>Address:{' '}<span>{restaurant?.address}</span></h4>
            <h4>Description:{' '}<span>{restaurant?.description}</span></h4>
            <h4>Feedbacks:{' '}<span>{restaurant?.feedbacks[0]?.feedback}</span></h4>
          </Col>
        </Row>
      </Col>
      <Col span={6}>
       <div className='form-wrapper'>
           <h3>Please give your feedback!</h3>
          <Form 
            onFinish={onSubmit}
            autoComplete="off"
            initialValues={{
              rate: 3,
            }}
            >
            <Form.Item
             name="rate"
             >
              <Rate />
            </Form.Item>
            <Form.Item
             name="feedback"
            >
              <TextArea placeholder='Give your feedback...' rows={4} />
            </Form.Item>
            <Form.Item>
              <Button 
                type='primary'
                htmlType="submit"
                >
                  Submit
              </Button>
           </Form.Item>
          </Form>
       </div>
      </Col>
    </Row>
 </Wrapper>
 )
};

export default memo(Restaurant);
import { Rate, Form, Button, Input, Row, Col } from 'antd';
import Wrapper from './styled/Wrapper';
import restaurant3 from '../../../images/restaurant3.png';

const { TextArea } = Input;


const Restaurant = ( restaurantId ) => {
  return (
  <Wrapper>
      <h2>
         Welcome to our Restaurant!
      </h2>
    <Row className='retaurant-view' justify='space-between'>
      <Col span={8}>
        <Row gutter={40} className='restaurant-detailed-info'>
          <Col span={16}>
            {/* <h3>Restaurant</h3> */}
            <img alt='restaurant' src={restaurant3} height='100%' width='100%'/>
          </Col>
          <Col span={24}>
            <Rate defaultValue={5} disabled/>{' '}(5)
            <h4>Name:{' '}Wassabi</h4>
            <h4>Address:{' '}Sayat Nova 19</h4>
            <h4>Description:{' '}Very good Service!</h4>
          </Col>
        </Row>
      </Col>
      <Col span={6}>
       <div className='form-wrapper'>
           <h3>Please give your feedback!</h3>
          <Form>
            <Form.Item>
              <Rate defaultValue={3} onChange={(value) => console.log(value)}/>
            </Form.Item>
            <Form.Item>
              <TextArea placeholder='Give your feedback...' rows={4} />
            </Form.Item>
            <Form.Item>
              <Button type='primary'>Submit</Button>
           </Form.Item>
          </Form>
       </div>
      </Col>
    </Row>
 </Wrapper>
 )
};

export default Restaurant;
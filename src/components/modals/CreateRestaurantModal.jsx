import './index.css';
import { memo, useCallback } from 'react';
import { Modal, Form, Input, Button, InputNumber } from 'antd';
import Axios from 'axios';

const CreateRestaurantModal = (props) => {
  const { isModalOpen, setModalOpen, currentPosition } = props;
  const { lat, lng } = currentPosition;

  const onSubmit = useCallback((values) => {
    values.latitude = values.latitude.toString();
    values.longitude = values.longitude.toString();
    Axios.post('http://localhost:8080/restaurant',{
      name: values.name,
      address: values.address,
      description: values.description,
      latitude: values.latitude,
      longitude: values.longitude,
    })
    window.location.reload();
  },[]);

    return( 
    <>
     <Modal
        open={isModalOpen}
        title="Create Restaurant"
        okText='Save'
        onCancel={() => setModalOpen(false)}
        footer={null}
      >
      <Form
      name="basic"
      labelCol={{
        span: 6,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
        latitude: lat,
        longitude: lng,
      }}
      onFinish={onSubmit}
      autoComplete="off"
    >
    
      <Form.Item
        label="name"
        name="name"
        rules={[
          {
            required: true,
            message: 'name is required!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="address"
        name="address"
        rules={[
          {
            required: true,
            message: 'address is required!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="description"
        name="description"
      >
        <Input />
      </Form.Item>

      <Form.Item 
        label="latitude"
        name="latitude"
        >
        <InputNumber />
      </Form.Item>
      <Form.Item 
        label="longitude"
        name="longitude"
       >
        <InputNumber />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 10,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
      </Modal>
    </>
    )
}

export default memo(CreateRestaurantModal);
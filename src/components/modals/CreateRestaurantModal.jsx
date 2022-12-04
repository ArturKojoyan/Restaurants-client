import './index.css';
import { memo, useState } from 'react';
import { Modal, Form, Input, Button, InputNumber, Upload } from 'antd';

const CreateRestaurantModal = (props) => {
  const { isModalOpen, setModalOpen, currentPosition } = props;
  const { lat, lng } = currentPosition;
  const [ image, setImage ] = useState('');

  const onFinish = (values) => {
    values.latitude = values.latitude.toString();
    values.longitude = values.longitude.toString();
    console.log('Success:', values);
  };

    return( 
    <>
     <Modal
        open={isModalOpen}
        title="Create Restaurant"
        okText='Save'
        // onOk={handleOk}
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
      onFinish={onFinish}
      // onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="upload image"
        name="image"
        rules={[
          {
            required: true,
            message: 'image is required!',
          },
        ]}
      >
         {
              image ?
                <Button
                  type='link'
                  size='small'
                  className='delete-color'
                  onClick={() => setImage("")}
                >
                  Remove
                </Button> :
        <Upload
             beforeUpload={(file) => {
               return false
             }}
             onChange={(e) => {
               if (e.file instanceof Blob) {
                 const file = e.file;
                 setImage(URL.createObjectURL(file))
               }
             }}
           >
             <Button
               type='link'
               size='small'>
               Add Image
             </Button>
        </Upload>
        }
      </Form.Item>
       
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
        <InputNumber defaultValue={lat}/>
      </Form.Item>
      <Form.Item 
        label="longitude"
        name="longitude"
       >
        <InputNumber defaultValue={lng}/>
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
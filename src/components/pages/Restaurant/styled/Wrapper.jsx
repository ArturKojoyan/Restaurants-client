import styled from "styled-components";

const Wrapper = styled('div')`
  height: 100vh;
  background-color: #F0F8FF;
  
  h2 {
    padding-top: 10px;
    margin: 0;
  }

 .form-wrapper {
   display: flex;
   flex-direction: column;
   justify-items: center;
   border: 1px solid black;
   border-radius: 6px;
   padding: 0 20px;
   background-color: #5F9EA0;
   h3 {
     text-align: center;
     padding-bottom: 8px;
     border-bottom: 1px solid black;
   }
   button {
     margin: 0 120px;
   }
   textarea {
     border: 1px solid black;
   }

   .ant-form-item-control-input-content {
      display: flex;
      justify-content: center;
   }
 }
 
 h2 {
    text-align: center;
 }
 
 .retaurant-view {
     margin: 80px 60px;
       .restaurant-detailed-info {
          background-color: #5F9EA0;
          border: 1px solid black;
          border-radius: 6px;
          padding: 20px 0;
       } 
 }
`

export default Wrapper;
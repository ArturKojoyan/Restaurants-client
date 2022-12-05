import styled from 'styled-components';

const Wrapper = styled('div')`
   background: #F0F8FF;
   height: 100vh;
   
  .home-container {
    padding: 20px 0;
    height: 100vh;

     .map-container {
       padding: 20px;
     }
  }
  
  .card-container {
      display: flex;
      flex-direction: column;
      padding: 10px;
      background-color: #5F9EA0; 
      border-radius: 6px;
      text-align: center;
      margin: 20px 0;
      cursor: pointer;
      .rate {
        font-size: 12px;
        margin-bottom: 14px;
      }
      p {
        margin-top: 0;
      }
      button {
        span {
          color: red;
        }
      }
  }

  .cards-container {
    padding-left: 10px;
  }

`

export default Wrapper;
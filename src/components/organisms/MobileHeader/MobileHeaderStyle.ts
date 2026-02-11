import styled from 'styled-components';

const MobileHeaderStyle = styled.div`
  animation: show-bg 0.5s linear forwards;
  box-sizing:border-box;
  // height:100%;
  left:0;
  position:absolute;
  position:fixed;
  top: 0;
  width:100%;
  z-index:8000;
  @keyframes show-bg{
      0%{
          background:rgba(0, 0, 0, 0)
      }
      100%{
          background:rgba(190,190,190,0.8);
      }
  }
  .modal-container{
      box-sizing:border-box;
      height: 100vh;
  }
  .--exact-height{
    height:unset;
  }
  .modal-container__box{
    -ms-flex: 0 0 100%;
    -webkit-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
    animation: slide 0.5s linear forwards;
    background: #fefefe;
    box-sizing: border-box;
    height: 70px;
    padding: 0 30px 0 23px;
    transform: translateY(-70px);
    .arrow{
      margin: 23px 0 23px 0;
    }
    .search-form{
      margin-top: 16px;
      .input{
        width: 235px;
      }
    }
  }
  @keyframes slide{
    0%{
      transform: translateY(-70px);
    }
    100%{
      transform: translateX(0);
    }
  } 
`;

export default MobileHeaderStyle;

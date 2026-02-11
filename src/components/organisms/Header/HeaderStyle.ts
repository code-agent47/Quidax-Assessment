import styled from 'styled-components';

const HeaderStyle = styled.header`
  border: 1px solid #EEEEEE;
  box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.05);
  height: 100px;
  position: relative;
  @media screen and (max-width: 992px){
    height: 70px;
  }
  .header{
    @media screen and (max-width: 992px){
      padding-left: 15px;
      padding-right: 25px;
    }
  }
  .header__logo{
    box-sizing: border-box;
    display: flex;
    padding: 25px 0 25px 0;
    @media screen and (max-width: 992px){
      padding: 10px 0 15px 0;
    }
    img{
      cursor: pointer;
    }
    .logo{
      height: 50px;
      width: 211px;
      @media screen and (max-width: 992px){
        display: none;
      }
    }
    .logo-mobile{
      display: none;
      height: 50px;
      width: 151px;
      @media screen and (max-width: 992px){
        display: block;
      }
    }
  }
  .header__search{
    box-sizing: border-box;
    padding: 30px 0 30px 0;
    @media screen and (max-width: 992px){
      display: none;
    }
    .input{
      width: 501px;
    }
  }
  .header__menu{
    display: flex;
    @media screen and (max-width: 992px){
      display: none;
    }
  }
  .header__menu__index{
    box-sizing: border-box;
    padding: 25px 0 25px 0;
  }
  .header__menu__cart{
    box-sizing: border-box;
    cursor: pointer;
    margin-left: 27px;
    padding: 38px 0 38px 0;
    position: relative;
  }
  .header__menu__cart__badge{
    background: #65C100;
    border-radius: 50%;
    height: 20px;
    margin-right: -8px;
    margin-top: 30px;
    position: absolute;
    right: 0;
    top: 0;
    width:20px;
    p{
      color: white;
      font-family: 'Ubuntu';
      font-style: normal;
      font-weight: 700;
      font-size: 12px;
      margin-left: auto;
      margin-top: 3px;
      text-align: center;
      width: 100%;
    }
  }
  .header__mobile-menu{
    -ms-flex: 0 0 137px;
    -webkit-flex: 0 0 137px;
    flex: 0 0 137px;
    max-width: 137px;
    display:none;
    @media screen and (max-width: 992px){
      display: flex;
      justify-content: space-between;
    }
    .--search{
      height: 24px;
      margin: 23px 0 23px 0;
      width: 24px;
    }
    .--index{
      height: 24px;
      margin: 23px 0 23px 0;
      width: 24px;
    }
  }
  .header__mobile-menu__cart{
    box-sizing: border-box;
    cursor: pointer;
    padding: 23px 0 23px 0;
    position: relative;
  }
  .header__mobile-menu__cart__badge{
    background: #65C100;
    border-radius: 50%;
    height: 20px;
    margin-right: -8px;
    margin-top: 15px;
    position: absolute;
    right: 0;
    top: 0;
    width:20px;
    p{
      color: white;
      font-family: 'Ubuntu';
      font-style: normal;
      font-weight: 700;
      font-size: 12px;
      margin-left: auto;
      margin-top: 3px;
      text-align: center;
      width: 100%;
    }
  }
  .mobile-header{
    background: #FFFFFF;
    border: 1px solid #EEEEEE;
    box-sizing: border-box;
    box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.05);
    display: none;
    height: 70px;
    left:0;
    position: absolute;
    top: 0;
    @media screen and (max-width: 992px){
      display: flex;
    }
  }
`;

export default HeaderStyle;

import styled from 'styled-components';

const HomePageTemplateStyle = styled.div`
  .books{
    // background: green;
    margin-top: 90px;
    @media screen and (max-width: 576px){
        margin-top: 0;
    }
  }
  .books__desc{
    box-sizing: border-box;
  }
  .books__desc__box{
    border-bottom: 1px solid #EEEEEE;
    margin-bottom: 0;
    h2{
      color: #000000;
      font-family: 'Ubuntu';
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 16px;
      margin-bottom: 14px;
    }
  }
  .books__content{
    margin-top: 25px;
    @media screen and (max-width: 576px){
        // padding-left: 30px;
        // padding-right: 30px;
    }
  }
  .books__content__item{
    margin-bottom: 40px;
  }
  .search-results{
    margin-top: 27px;
    @media screen and (max-width: 576px){
        margin-top: 20.66px;
    }
  }
  .search-results__desc{
    box-sizing: border-box;
  }
  .search-results__desc__box{
    border-bottom: 1px solid #EEEEEE;
    margin-bottom: 0;
    h2{
      color: #000000;
      font-family: 'Ubuntu';
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 16px;
      margin-bottom: 14px;
    }
    span{
        color: #000000;
        font-family: 'Ubuntu';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
    }
  }
`;

export default HomePageTemplateStyle;

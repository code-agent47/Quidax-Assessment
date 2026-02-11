import styled from 'styled-components';

const HeroStyle = styled.div`
  .hero__desc{
    box-sizing: border-box;
    margin-top: 27px;
    padding: 0 12.8px 0 30.8px;
    @media screen and (max-width: 576px){
      display:none;
    }
  }
  .hero__desc__box{
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
  .hero__carousel{
    box-sizing: border-box;
    height: 360px;
    margin-top: 23px;
    padding-bottom: 300px;
    width: 100%;
    @media screen and (max-width: 576px){
      height: 200px;
      margin-top: 20px;
    }
  }
  .hero__carousel__item{
    -ms-flex: 0 0 220px;
    -webkit-flex: 0 0 220px;
    flex: 0 0 220px;
    max-width: 220px;
    background: #FFFFFF;
    box-shadow: 0px 30px 30px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    height: 332px;
    margin-bottom: 25px;
    margin-right: 20px;
    position: relative;
    @media screen and (max-width: 576px){
      -ms-flex: 0 0 140px;
      -webkit-flex: 0 0 140px;
      flex: 0 0 140px;
      max-width: 140px;
      height: 210px;
    }
    &:hover > .transparent{
      opacity: 1;
    }
    .img{
      object-fit: cover;
      height: 100%;
    }
    .transparent{
      background: linear-gradient(180deg, rgba(0, 0, 0, 0.607988) 0%, #000000 79.7%);
      box-sizing: border-box;
      left: 0;
      opacity: 0;
      padding: 38px 5px 0 29px;
      pointer-events: none;
      position: absolute;
      top: 0;
      transition: opacity 0.5s linear;
      width: 100%;
      height: 100%;
      @media screen and (max-width: 576px){
        display: none;
      }
    }
    .transparent__available{
      p{
        color: #65C100;
        font-family: 'Ubuntu';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 15px;
      }
    }
    .transparent__desc{
      margin-top: 19px;
      h2{
        color: white;
        font-family: 'Ubuntu';
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 21px;
        margin-bottom: 7px;
      }
      p{
        color: white;
        font-family: 'Ubuntu';
        font-style: normal;
        font-weight: 300;
        font-size: 12px;
        line-height: 17px;
      }
    }
    .transparent__genre{
      margin-top: 21px;
      h2{
        color: #FFFFFF;
        font-family: 'Ubuntu';
        font-style: normal;
        font-weight: 700;
        font-size: 12px;
        line-height: 15px;
      }
      p{
        color: #FFFFFF;
        font-family: 'Ubuntu';
        font-style: normal;
        font-weight: 300;
        font-size: 12px;
        line-height: 17px;
      }
    }
    .transparent__genre__list{
      display: flex;
      p{
        display: inline-block;
      }
    }
    .transparent__tags{
      margin-top: 19px;
      h2{
        color: #FFFFFF;
        font-family: 'Ubuntu';
        font-style: normal;
        font-weight: 700;
        font-size: 12px;
        line-height: 15px;
      }
      p{
        color: #FFFFFF;
        display: inline-block;
        font-family: 'Ubuntu';
        font-style: normal;
        font-weight: 300;
        font-size: 12px;
        line-height: 17px;
        margin-right: 5px;
      }
    }
    .transparent__info{
      justify-content: normal;
      margin-top: 37px;
    }
    .transparent__info__likes{
      border-right: 1px solid #333333;
      box-sizing: border-box;
      display: flex;
      padding: 0 10px 0 0;
    }
    .transparent__info__likes__item{
      margin-right: 8px;
      &:nth-of-type(2){
        margin-right: 0;
      }
      p{
        color: white;
        font-family: 'Ubuntu';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
        text-align: center;
        width: 24px;
      }
      
    }
    .transparent__info__ratings{
      box-sizing: border-box;
      padding: 0 0 0 10px;
      h2{
        color: white;
        font-family: 'Ubuntu';
        font-style: normal;
        font-weight: 700;
        font-size: 12px;
        display: block;
        line-height: 14px;
        margin-bottom: 5px;
      }
      span{
        display: inline-block;
        color: white;
        font-family: 'Ubuntu';
        font-style: normal;
        font-weight: 300;
        font-size: 12px;
        display: inline-block;
        line-height: 14px;
        margin-left: 1px;
      }
    }
  }
.slick-list{
  overflow: unset !important;
}
.slick-slider{
  overflow: hidden;
  // overflow-y: scroll;
}
.slick-arrow{
  background: linear-gradient(180deg, rgba(248, 248, 250, 0.8) 0%, #F8F8FA 51.36%, rgba(248, 248, 250, 0.8) 100%);
  mix-blend-mode: normal;
  opacity: 0.8;
  height: 120%;
  width: 70px;
  position: absolute;
  z-index: 5000;
  @media screen and (max-width: 576px){
    width: 60px;
  }
}
.slick-prev:before, .slick-next:before {
  color: #000000 !important;
}
.slick-prev:before{
  margin-left: 20px;
}
.slick-next:before{
  margin-right: 20px;
}
.slick-dots{
  margin-bottom: 20px;
  position: unset !important;
}
.slick-dots li {
  margin: 0 1px;
}
.slick-dots li button:before{
  color: #DDDDDD;
  font-size: 9px;
  opacity: unset;
}
.slick-dots .slick-active button:before{
  color: #64C000;
  font-size: 10.8px;
  opacity: unset;
}
.Stars {
  --percent: calc(2.5 / 5 * 100%);
  display: inline-block;
  font-size: 20px;
  font-family: Times; // make sure ★ appears correctly
  line-height: 1;
  margin-top: 5px;
  
  &::before {
    content: '★★★★★';
    background: linear-gradient(90deg, #EBA430 50%, #333333 50%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}
`;

export default HeroStyle;

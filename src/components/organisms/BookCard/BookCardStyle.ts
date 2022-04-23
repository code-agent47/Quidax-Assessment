import styled from 'styled-components';

const BookCardStyle = styled.div`
  width: 100%;
  .card{
    box-sizing: border-box;
    justify-content: normal;
    transition: all 0.5s linear;
    &: hover{
      background: #FFFFFF;
      box-shadow: 0px 30px 60px rgba(0, 0, 0, 0.15);    
    }
  }
  .card__image{
    height: 183px;
    margin-right: 13px;
    width: 110px;
    img{
      object-fit: cover;
      height: 100%;
      width: 100%;
    }
  }
  .card__info__desc{
    margin-top: 8px;
    h2{
      color: #000000;
      font-family: 'Ubuntu';
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 16px;
      margin-bottom: 6.5px;
    }
    p{
      color: #000000;
      font-family: 'Ubuntu';
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 15px;
      margin-top: 1px;
    }
  }
  .card__info__rating{
    display: flex;
    margin-top: 14px;
  }
  .card__info__rating__likes{
    border-right: 1px solid #EEEEEE;
    box-sizing: border-box;
    display: flex;
    padding: 0 10px 0 0;
  }
  .card__info__rating__likes__item{
    margin-right: 6px;
    &:nth-of-type(2){
      margin-right: 0;
    }
    p{
      color: #000000;
      font-family: 'Ubuntu';
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 14px;
      margin-top: -3.8px;
      text-align: center;
      width: 24px;
    }
  }
  .card__info__rating__ratings{
    box-sizing: border-box;
    margin-top: 5px;
    padding: 0 0 0 10px;
    p{
      color: #000000;
      font-family: 'Ubuntu';
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      display: block;
      line-height: 14px;
      margin-bottom: 0.7px;
    }
  }
  .card__info__price{
    justify-content: normal;
    margin-top: 18px;
    p{
      color: #000000;
      font-family: 'Ubuntu';
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 14px;
    }
    .--available{
      color: #65C100;
      margin-left: 17px;
    }
    .--out-of-stock{
      color: #C12300;
      margin-left: 17px;
    }
  }
  .card__info__cart{
    margin-top: 11.5px;
    .button{
      all: unset;
      cursor: pointer;
      display: flex;
      p{
        color: #000000;
        font-family: 'Ubuntu';
        font-style: normal;
        font-weight: 700;
        font-size: 12px;
        line-height: 14px;
        margin-top: 2px;
        text-align: center;
        width: 82px;
      }
    }
    .disabled{
      pointer-events: none;
    }
  }
`;

export default BookCardStyle;

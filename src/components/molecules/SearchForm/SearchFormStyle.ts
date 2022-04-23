import styled from 'styled-components';

const SearchFormStyle = styled.div`
  div{
    display: flex;
  }
  .input{
    background: #FFFFFF;
    border: 1px solid #DDDDDD;
    box-sizing: border-box;
    color:  #000000;
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 400;
    font-size: 0.875em;
    height: 40px;
    padding-left: 21px;
    &::placeholder{
      color: #999999;
      font-family: 'Ubuntu';
    }
  }
  .button{
    background: #F9F9FB;
    border: 1px solid #DDDDDD;
    border-left: 0;
    border-radius: unset;
    box-sizing: border-box;
    height: 40px;
    margin: unset;
    margin-bottom: 0;
    padding: unset;
    padding-top: 7px;
    width: 40px;
  }
`;

export default SearchFormStyle;

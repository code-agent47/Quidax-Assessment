import React from 'react';
import styled from 'styled-components';

type StarRatingProps = {
  rating: number, 
  bgColor: string,
  fillColor: string
}
const StarRating = ({rating, bgColor, fillColor}: StarRatingProps) => {
  const percentage = rating / 5 * 100;
  const StarRating = styled.div`
    display: inline-block;
    font-size: 20px;
    font-family: Times; // make sure ★ appears correctly
    line-height: 1;

    &::before {
      content: '★★★★★';
      background: linear-gradient(90deg, ${fillColor} ${percentage}%, ${bgColor} ${percentage}%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  `
  return (
    <StarRating>
      
    </StarRating>
  );
};

export default StarRating;

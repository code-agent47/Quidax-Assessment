import React from 'react';
import HeroStyle from './HeroStyle';
import Text from '../../atoms/Text/Text';
import HeaderText from '../../atoms/HeaderText/Text';
import Image from '../../atoms/Image/Img';
import data from '../../../data.json';
import user from '../../../assets/images/user.svg';
import love from '../../../assets/images/love.svg';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import StarRating from '../../molecules/StarRating/StarRating';

const Hero = () => {
  var settings = {
      dots: true,
      autoplay: true,
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 3,
        }
      }
    ],
  };

  return (
    <>
    <HeroStyle>
      <div className={`container-full hero`}>
        <div className={`container hero__desc`}>
          <div className={`div-sm-12 hero__desc__box`}>
            <HeaderText value="Featured Books" />
          </div>
        </div>
        <div className={`hero__carousel`}>
        <Slider {...settings}>
          {
            data.data.map((data: Record<any, any>, i: number) => {
              if(data.featured === true){
                return(
                  <div className={`hero__carousel__item`} key={i}>
                    <Image image={data.image_url} className={`img`} alt="book"/>
                    <div className={`transparent`}>
                      <div className={`transparent__available`}>
                        <Text value="Available" />
                      </div>
                      <div className={`transparent__desc`}>
                        {
                          data.title.length >= 19 ? 
                          <HeaderText value={`${data.title.substring(0,17)}...`} /> : 
                          <HeaderText value={`${data.title}`} />
                        }
                        
                        <Text value={data.authors[0].name} />
                        <Text value={data.published_at.substring(0,4)} />
                      </div>
                      <div className={`transparent__genre`}>
                        <HeaderText value="Genre" />
                        <Text value={data.genres[0].name} key={i}/>
                      </div>
                      <div className={`transparent__tags`}>
                        <HeaderText value="Tags" />
                        {
                          data.tags.map((tag: Record<any, any>, i: number) => {
                            if(i < 2){
                              return(
                                <Text value={`${tag.name} `} key={i} />
                              )
                            }
                            return true;
                          })
                        }
                        
                      </div>
                      <div className={`container-full transparent__info`}>
                        <div className={`transparent__info__likes`}>
                          <div className={`transparent__info__likes__item`}>
                            <Image image={user} alt="user" />
                            <Text value={data.number_of_purchases} />
                          </div>
                          <div className={`transparent__info__likes__item`}>
                            <Image image={love} alt="user" />
                            <Text value={data.likes} />
                          </div>
                        </div>
                        <div className={`transparent__info__ratings`}>
                          <h2> Ratings: <span> {data.rating} </span> </h2>
                          <StarRating rating={data.rating} bgColor={`#333333`} fillColor={`#EBA430`}/>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              }
              return true;
            })
          }
        </Slider>
          
          
        </div>
      </div>
    </HeroStyle>
    </>
  );
};

export default Hero;

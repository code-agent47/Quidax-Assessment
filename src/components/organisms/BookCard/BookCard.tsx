import React from 'react';
import BookCardStyle from './BookCardStyle';
import Image from '../../atoms/Image/Img';
import Text from '../../atoms/Text/Text';
import HeaderText from '../../atoms/HeaderText/Text';
import cart from '../../../assets/images/cart-dark.svg';
import user from '../../../assets/images/user-dark.svg';
import love from '../../../assets/images/love-dark.svg';
import StarRating from '../../molecules/StarRating/StarRating';
import {saveProduct, increaseQuantity} from '../../../redux/actions/CartAction';
import {decreaseAvailableQuantity} from '../../../redux/actions/BooksAction';
import {useDispatch, useSelector} from 'react-redux';
import { TypedDispatch, RootStore } from '../../../config/ConfigStore';

type BookCardProps = {
  bookData: any
}

const BookCard = ({bookData}: BookCardProps) => {
  const dispatch: TypedDispatch = useDispatch();
  const cartState = useSelector( (state:RootStore) => state.cartReducer);

  const addToCart = (productDetails: any) => {
    const bookIsInCart:[] = cartState.results.products.filter((cart: Record<any, any>) => cart.id === productDetails.id);
    if(bookIsInCart.length === 0){
      let data = {
        ...productDetails,
        quantity: 1,
        maxQuantity: productDetails.available_copies
      }
      dispatch(saveProduct(data));
    }
    else{
      dispatch(increaseQuantity(productDetails.id))
    }
    dispatch(decreaseAvailableQuantity(productDetails.id))
    console.log(cartState);
  }

  return (
    <BookCardStyle>
      <div className={`container-full card`}>
        <div className={`card__image`}>
          <Image image={bookData.image_url} alt="book" />
        </div>
        <div className={`card__info`}>
          <div className={`card__info__desc`}>
            {
              bookData.title.length >= 25 ? 
              <HeaderText value={`${bookData.title.substring(0,17)}...`} /> : 
              <HeaderText value={`${bookData.title}`} />
            }
            <Text value={`${bookData.authors[0].name} - ${bookData.published_at.substring(0,4)}`} />
            {
              bookData.tags.map((tag: Record<any, any>, i: number) => {
                if(i < 1){
                  return(
                    <Text value={`${tag.name} `} key={i}/>
                  )
                }
                return true;
              })
            }
          </div>
          <div className={`card__info__rating`}>
            <div className={`card__info__rating__likes`}>
              <div className={`card__info__rating__likes__item`}>
                <Image image={user} alt="user" />
                <Text value={bookData.number_of_purchases} />
              </div>
              <div className={`card__info__rating__likes__item`}>
                <Image image={love} alt="user" />
                <Text value={bookData.likes} />
              </div>
            </div>
            <div className={`card__info__rating__ratings`}>
              <Text value={`Rating: ${bookData.rating}`}/>
              <StarRating rating={bookData.rating} bgColor={`#DDDDDD`} fillColor={`#EBA430`}/>
            </div>
          </div>
          <div className={`container-full card__info__price`}>
            <Text value={`$${bookData.price}`} />
            {
              (bookData.available_copies > 0) ?
              <Text value={`${bookData.available_copies} Copies Available`} className={`--available`} /> : 
              <Text value={`Out of stock`} className={`--out-of-stock`} />
            }
          </div>
          <div className={`card__info__cart`}>
            {
              (bookData.available_copies > 0) ?
              <button className={`button`} onClick={() => addToCart(bookData)}>
                <Image image={cart} alt="cart"/>
                <p> Add to Cart </p>
              </button> : 
              <button className={`button disabled`}>
                <Image image={cart} alt="cart"/>
                <p> Add to Cart </p>
              </button>
            }
          </div>
        </div>
        
      </div>
    </BookCardStyle>
  );
};

export default BookCard;

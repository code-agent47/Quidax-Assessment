import React from 'react';
import MobileHeaderStyle from './MobileHeaderStyle';
import Image from '../../atoms/Image/Img';
import arrow from '../../../assets/images/arrow-new.svg';
import SearchForm from '../../molecules/SearchForm/SearchForm';
import {SearchAction} from '../../../redux/actions/SearchAction';
import {useDispatch, useSelector} from 'react-redux';
import {RootStore, TypedDispatch} from '../../../config/ConfigStore';

type MobileHeaderProps = {
  handleClose: Function
}

const MobileHeader = ({handleClose}: MobileHeaderProps) => {
  const dispatch: TypedDispatch = useDispatch();

  const closeHeader = () => {
    handleClose();
    dispatch(SearchAction(null))
  }

  const searchState = useSelector( (state:RootStore) => state.searchReducer);

  return (
    <MobileHeaderStyle>
     <div className={`container-full modal-container ${
       searchState.results?.data.length > 0 ? '--exact-height' : ''
     }`}>
      <div className={`container-full modal-container__box`}>
        <Image image={arrow} alt="arrow" className={`arrow`} onClick={() => closeHeader()}/>
        <div className={`search-form`}>
          <SearchForm />
        </div>
      </div>  
    </div>
    </MobileHeaderStyle>
  );
};

export default MobileHeader;

import React, { useState, useRef } from 'react';
import SearchFormStyle from './SearchFormStyle';
import Image from '../../atoms/Image/Img';
import searchIcon from '../../../assets/images/search-icon.svg';
import close from '../../../assets/images/close.svg';
import {SearchAction} from '../../../redux/actions/SearchAction';
import {useDispatch, useSelector} from 'react-redux';
import { RootStore, TypedDispatch } from '../../../config/ConfigStore';


const SearchForm = () => {
  const [value, setValue] = useState("");
  const inputEl:any = useRef(null);
  const dispatch: TypedDispatch = useDispatch();
  const booksState = useSelector( (state:RootStore) => state.booksReducer);
  const searchState = useSelector( (state:RootStore) => state.searchReducer);

  const clearInput = () => {
    setValue("");
    inputEl.current.value = "";
  }

  const searchInput = async (inputValue: string) => {
    setValue(inputValue);
    if(inputValue.trim() !== ""){
      const string = inputValue.split(" ");
      for (let i = 0; i < string.length; i++) {
        string[i] = string[i].charAt(0).toUpperCase() + string[i].slice(1);
      }
      const capitalizedString = string.join(" ");
    
      let searchTitle = booksState.results.data.filter( (book: Record<any, any>) => 
        book.title.includes(capitalizedString)
      );
  
      let searchAuthor:any = [];
      booksState.results.data.map( (book: Record<any, any>) => {
        book.authors.map((author: Record<any, any>) => {
          if(author.name.includes(capitalizedString)){
            searchAuthor.push(book);
          }
          return author;
        })
        return book
      });
  
      let searchTags:any = [];
      booksState.results.data.map( (book: Record<any, any>) => {
        book.tags.map((tag: Record<any, any>) => {
          if(tag.name.includes(capitalizedString)){
            searchTags.push(book)
          }
          return tag;
        })
        return book;
      });
  
      let searchGenre:any = [];
      booksState.results.data.map( (book: Record<any, any>) => {
        book.genres.map((genre: Record<any, any>) => {
          if(genre.name.includes(capitalizedString)){
            searchGenre.push(book)
          }
          return genre;
        })
        return book;
      });
      let searchResults = [...searchTags, ...searchTitle, ...searchGenre, ...searchAuthor];
      let filteredResults = searchResults.filter((c: Record<any, any>, index: number) => {
        return searchResults.indexOf(c) === index;
      });
      let data = {
        searchText: inputValue,
        data: filteredResults
      }
      await dispatch(SearchAction(data));
    }
    
  }

  return (
    <SearchFormStyle>
     <div>
      <input type="text" id="input" ref={inputEl} className={`input`} placeholder="Search books, genres, authors, etc." onKeyUp={(event: any) => searchInput(event.target.value)} />
      {
        (value !== "") ?
        <button type="submit" className={`button`} onClick={() => clearInput()}>
          <Image image={close} alt="search icon"/>
        </button> : 
        <button type="submit" className={`button`}>
          <Image image={searchIcon} alt="search icon"/>
        </button>
      }
    </div>
    </SearchFormStyle>
  );
};

export default SearchForm;

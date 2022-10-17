import React, { useEffect } from 'react';
import Card from './Card';
import './brand.css';

const movie1 = {
  "title": "isim soyisim",
  "year": "2012",
  "ID": "@asdasdsa",
  "category": "travel",
  "poster": "N/A"
}

const Brand = () => {
  return (
    <div className='brand'>

      <div class="filters">  
        <form class="search-page-form" id="search-page-form" action="/search" method="GET">
          <input type="submit" value="Search" class="search-page-form__submit" />
          <hr class="solid" />

            <h3 class='filter-header'>Location</h3>
        </form>
      </div>
      
      <div className='container'>
        <Card movie1={movie1} />
        <Card movie1={movie1} />
        <Card movie1={movie1} />
        <Card movie1={movie1} />
        <Card movie1={movie1} />
        <Card movie1={movie1} />
        <Card movie1={movie1} />
        <Card movie1={movie1} />
        <Card movie1={movie1} />
        <Card movie1={movie1} />
        <Card movie1={movie1} />
        <Card movie1={movie1} />
        <Card movie1={movie1} />
        <Card movie1={movie1} />
        <Card movie1={movie1} />
        <Card movie1={movie1} />
        <Card movie1={movie1} />
        <Card movie1={movie1} />
        <Card movie1={movie1} />
        <Card movie1={movie1} />
        <Card movie1={movie1} />
        <Card movie1={movie1} />
      </div>

    </div>  
  );
};

export default Brand
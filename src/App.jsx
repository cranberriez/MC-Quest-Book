import React, { useState } from 'react';
import BookLogo from './assets/book-solid.svg?react';
import SearchGlass from './assets/magnifying-glass-solid.svg?react';
import './App.css'

function App() {
  return (
    <>
      <NavBar />
    </>
  )
}

function NavBar() {
    return (
        <nav id='navbar-container'>
            <a href='/' className='nav-element' id='nav-logo'>
                <BookLogo style={{ height: '24px', fill: 'currentColor' }} alt="Home Book Icon" />
                <p>MC Quest Book</p>
            </a>
            <li id='search-element'>
                <input placeholder='Search' name='search-bar'></input>
                <SearchGlass style={{ height: '20px', fill: 'currentColor'}} alt="Magnifying Glass representing Search" />
            </li>
        </nav>
    )
}

export default App

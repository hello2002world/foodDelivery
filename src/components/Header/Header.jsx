import React from 'react';
import './header.css'

const Header = () => {
  return (
    <div className='header container'>
        <div className="header-contents">
            <h2>Order Your Favourite Food here</h2>
            <p>Create food ordering and delivery solutions that connect you directly with your customers.</p>
            <button id='view-btn'>View Menu</button>
        </div>
    </div>
  )
}

export default Header;
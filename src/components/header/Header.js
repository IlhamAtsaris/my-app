import React from 'react';
import './header.css';

class Header extends React.Component {
  render() {
    return (
      <div className='header'>
        <div className='header-logo'>
          <img src='https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/character_logo.svg' alt='header' />
        </div>
      </div>
    );
  }
}

export default Header;

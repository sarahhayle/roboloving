import React from 'react';

const SearchBox = ({ searchChange }) => {
  return (
    <div className='pa2'>
      <input 
        className='pa3 mt6 ba b--green bg-lightest-blue'
        type='search'
        placeholder='Find your chosen robos'
        onChange={searchChange}
      />
    </div>
  )
}

export default SearchBox;

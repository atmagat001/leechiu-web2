import React from 'react'

function Search() {
  return (
    <div className='search'>
        <div className="search-cont">
            <h2>How can we help you</h2>
            <input type="text" placeholder='Im Looking for Property' />
            <button>For Rent</button>
            <button>For Sale</button>
        </div>

    </div>
  )
}

export default Search
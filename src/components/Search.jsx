import React from 'react'

function Search() {
  return (
    <div className='search'>
        <div className="search-cont">
            <h2>How can we help you</h2>
            <div className="form cont-row">
              <input type="text" placeholder='Im Looking for Property' />
              <div className="search-btn">
                <button>For Rent</button>
                <button>For Sale</button>
              </div>
            </div>
        </div>

    </div>
  )
}

export default Search
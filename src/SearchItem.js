import React from 'react'

const SearchItem = ({ search, setSearch }) => {
    return (
        <form>
            <div className="form-group" onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="search">Search</label>
                <input 
                    type="text" 
                    id="search"
                    className='form-control'
                    role='searchbox'
                    placeholder='Search Item'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
        </form>
    )
}

export default SearchItem
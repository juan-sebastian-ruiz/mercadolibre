import React, { useState } from 'react';
import Search from './Search';
import SearchAPI from './SearchAPI';
import SearchResult from './SearchResult';

export default function Items() {

    const [searchResults, setSearchResults] = useState([])

    return (
        <>
            <SearchAPI fetchData={data => { setSearchResults(data.items) }} />
            <Search />
            <div className="container">
                {searchResults.map(searchResult => {
                    return <SearchResult 
                            key={searchResult.id} 
                            id={searchResult.id} 
                            picture={searchResult.picture} 
                            price={searchResult.price.amount} 
                            title={searchResult.title} 
                            condition={searchResult.condition} />
                })
                }
            </div>
        </>
    );
}
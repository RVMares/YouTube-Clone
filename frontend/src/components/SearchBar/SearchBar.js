import React, { useState, useEffect } from 'react';
import React from 'react';
import useCustomForm from "../../hooks/useCustomForm";

const searchBar = () => {

    const [formData, handleInputChange, handleSubmit] = useCustomForm(videoSearchBar);

    function videoSearchBar() {
        
    }

    return ( 
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    value={formData}
                    placeholder='Search...'/>
                <button type='submit'>Search</button>
            </form>
        </div>
     );
}
 
export default searchBar;
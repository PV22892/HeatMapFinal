import React from 'react';

const SearchComponent = async () => {
    const res = await fetch("http://localhost:8000/listLocations");
    const data = await res.json();
    const locations = data.locations;
    return (
        <div>
            <label htmlFor="locations">Choose a location: </label>
            <input list="locations" id="locations-choice" name="locations" required style={{ border: '1px solid black', borderRadius: '5px', padding: '5px' }} />
            <datalist id="locations" style={{ border: '1px solid black', borderRadius: '5px', padding: '5px', listStyle: 'none' }}>
                {locations.map((location: { name: string }, index: React.Key) => (
                    <option key={index} value={location.name}></option>
                ))}
            </datalist>
        </div>
    );
};

export default SearchComponent;
import React from 'react';

const SearchComponent = async () => {
    const res = await fetch("http://localhost:8000/listLocations");
    const data = await res.json();
    const locations = data.locations;
    return (
      <div className="flex items-center rtl:space-x-reverse w-full">
        <form className="w-full">
          <label htmlFor="locations" className="block mb-2 text-xl text-gray-900 dark:text-white font-bold">Localização:</label>
          <input list="locations" id="locations-choice" name="locations" required className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          <datalist id="locations">
            {locations.map((location: { name: string }, index: React.Key) => (
              <option key={index} value={location.name}></option>
            ))}
          </datalist>
        </form>
      </div>
    );
  };

export default SearchComponent;
"use client";

import React, { useState } from 'react';
import Map from "./map";
import { Prices, MapProps } from '@/models/data.model';

const Button: React.FC = () => {
    const [data, setData] = useState<MapProps | null>(null);
    const [minPrice, setMinPrice] = useState<Prices | null>(null);
    const [maxPrice, setMaxPrice] = useState<Prices | null>(null);
    const [mapType, setMapType] = useState<string | null>(null);

    const handleClick = async () => {
        const search = (document.getElementById("locations-choice") as HTMLInputElement).value;
        const dataType = (document.getElementById("data-type") as HTMLInputElement).value;
        const mapTypeValue = (document.getElementById("map-type") as HTMLInputElement).value;
        const MapContainer = (document.getElementById("Remove_Container"));
        
        if (MapContainer) {
            MapContainer.innerHTML = "";
        }
        
        if (!search) {
            return alert("Fill Location");
        }
        setData(null);
        setMinPrice(null);
        setMaxPrice(null);
        setMapType(null);

        try {
            const res = await fetch(`http://localhost:8000/listByLocation?location=${search}&type=${dataType}`);
            const testData = await res.json();
            setData(testData.data);

            const resPrices = await fetch(`http://localhost:8000/maxPrice?location=${search}&type=${dataType}`);
            const testPrices = await resPrices.json();
            setMinPrice(testPrices.minPrice);
            setMaxPrice(testPrices.maxPrice);
            setMapType(mapTypeValue);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div>
            <div style={{ padding: '5px' }}>
                <button
                    onClick={handleClick}
                    className="px-6 py-3.5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-md dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                    Submit
                </button>
            </div>
            {data && minPrice !== null && maxPrice !== null && mapType !== null && <Map data={data} minPrice={minPrice} maxPrice={maxPrice} mapType={mapType}/>}
        </div>
    );
};

export default Button;




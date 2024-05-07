
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import HeatmapPositions from "./heatmapPositions";
import HeatmapPrices from "./heatmapPrices";
import HeatmapPoint from "./heatmapPoint";
import { MapProps, Prices } from "@/models/data.model";

const map: React.FC<{ data: MapProps, maxPrice: Prices, minPrice: Prices, mapType: String }> = ({ data, maxPrice, minPrice, mapType }) => {
    console.log(data);
    const firstCoordinates :[number,number] = data.length > 0 ? [data[0].coordinates.x, data[0].coordinates.y] : [41.146667, -8.604596];
    console.log(firstCoordinates);
    return (
        <>
            <MapContainer id="Map_Container" style={{ height: '100vh', width: '100%' }} center={firstCoordinates} zoom={13} scrollWheelZoom={true}>
                <TileLayer id="Map_TileLayer"
                           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {mapType === 'position' && (
                    <div id="Remove_Container">
                        {data && maxPrice && minPrice && <HeatmapPositions data={data} maxPrice={maxPrice} minPrice={minPrice} />}
                    </div>
                )}
                {mapType === 'price' && (
                    <div id="Remove_Container">
                        {data && maxPrice && minPrice && <HeatmapPrices data={data} maxPrice={maxPrice} minPrice={minPrice} />}
                    </div>
                )}
                {mapType === 'point' && (
                    <div id="Remove_Container">
                        {data && maxPrice && minPrice && <HeatmapPoint data={data} maxPrice={maxPrice} minPrice={minPrice} />}
                    </div>
                )}
            </MapContainer>
        </>
    );
}

export default map;

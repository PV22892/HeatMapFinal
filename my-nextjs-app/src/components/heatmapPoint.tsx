import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import {Icon} from 'leaflet';
import { MapProps, Prices } from "../models/data.model";


const Heatmap: React.FC<{ data: MapProps, maxPrice: Prices, minPrice: Prices }> = ({ data, maxPrice, minPrice }) => {
    const [points, setPoints] = useState<[number, number, number][] | null>(null);

    useEffect(() => {
        if (data) {
            const newPoints = data.map((element: { coordinates: { x: number; y: number; }; price: number; }) => [element.coordinates.x, element.coordinates.y, element.price]);
            setPoints(newPoints);
        }
    }, [data]);

    if (!points) {
        return <div>No data available</div>;
    }

    const housingIcon = new Icon({
        iconUrl: '/remaxLogo.png',
        iconSize: [30, 35], // size of the icon
        popupAnchor: [0, 0] // point from which the popup should open relative to the iconAnchor
    })

    const markers = points.map((point, index) => (
        <Marker key={index} position={[point[0], point[1]]} icon={housingIcon}>
            <Popup>
                Preço: {new Intl.NumberFormat('pt-PT').format(point[2])}€
            </Popup>
        </Marker>
    ));

    return (
        <>
            {markers}
        </>
    );
}

export default Heatmap;

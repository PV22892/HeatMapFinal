import React, { useEffect, useState } from 'react';
import { HeatmapLayerFactory } from '@vgrid/react-leaflet-heatmap-layer';
import { MapProps, Prices } from "../models/data.model";

const HeatmapLayer = HeatmapLayerFactory<[number, number, number]>();

const Heatmap: React.FC<{ data: MapProps, maxPrice: Prices, minPrice: Prices }> = ({ data, maxPrice, minPrice }) => {
    const [points, setPoints] = useState<[number, number, number][] | null>(null);

    useEffect(() => {
        if (data) {
            const newPoints = data.map((element: { coordinates: { x: number; y: number; }; price: number; }) => {
                return [element.coordinates.x, element.coordinates.y, element.price];
            });
            setPoints(newPoints);
        }
    }, [data]);

    if (!points) {
        return <div>No data available</div>;
    }

    return (
        <>
            <HeatmapLayer
                points={points}
                longitudeExtractor={(p) => p[1]}
                latitudeExtractor={(p) => p[0]}
                intensityExtractor={() => 1}
                radius={25}
                fitBoundsOnUpdate
            />
        </>
    );
}

export default Heatmap;

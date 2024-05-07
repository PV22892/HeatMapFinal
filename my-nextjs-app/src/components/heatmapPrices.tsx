import React, { useEffect, useState } from 'react';
import { HeatmapLayerFactory } from '@vgrid/react-leaflet-heatmap-layer';
import { MapProps, Prices } from "../models/data.model";

const HeatmapLayer = HeatmapLayerFactory<[number, number, number]>();

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

    const lowerPricePoints = points.filter(p => p[2] < minPrice + (maxPrice - minPrice) / 3);
    const mediumPricePoints = points.filter(p => p[2] >= minPrice + (maxPrice - minPrice) / 3 && p[2] < minPrice + 2 * (maxPrice - minPrice) / 3);
    const highPricePoints = points.filter(p => p[2] >= minPrice + 2 * (maxPrice - minPrice) / 3);

    return (
        <>
            <HeatmapLayer
                points={lowerPricePoints}
                longitudeExtractor={(p) => p[1]}
                latitudeExtractor={(p) => p[0]}
                intensityExtractor={(p) => p[2]}
                fitBoundsOnUpdate
                radius={15}
                opacity={30}
                gradient={{
                    0.4: 'blue',
                    1: 'cyan',
                }}
            />
            <HeatmapLayer
                points={mediumPricePoints}
                longitudeExtractor={(p) => p[1]}
                latitudeExtractor={(p) => p[0]}
                intensityExtractor={(p) => p[2]}
                fitBoundsOnUpdate
                radius={15}
                opacity={30}
                gradient={{
                    0.4: 'lime',   // Yellow
                    1: 'yellow',   // Orange
                }}
            />
            <HeatmapLayer
                points={highPricePoints}
                longitudeExtractor={(p) => p[1]}
                latitudeExtractor={(p) => p[0]}
                intensityExtractor={(p) => p[2]}
                fitBoundsOnUpdate
                radius={15}
                opacity={30}
                gradient={{
                    0.4: 'orange',   // Yellow
                    1: 'red',   // Orange
                }}
            />
        </>
    );
}

export default Heatmap;

import React, { useEffect, useState } from 'react';
import { HeatmapLayerFactory } from '@vgrid/react-leaflet-heatmap-layer';
import { MapProps, Prices } from "../models/data.model";

const HeatmapLayer = HeatmapLayerFactory<[number, number, number]>();

const Heatmap: React.FC<{ data: MapProps, maxPrice: Prices, minPrice: Prices }> = ({ data, maxPrice, minPrice }) => {
    const [points, setPoints] = useState<[number, number, number][] | null>(null);
    const dataType = (document.getElementById("data-type") as HTMLInputElement).value;
    let lValue = 0;
    let mValue = 0; 
    useEffect(() => {
        if (data) {
            const newPoints = data.map((element: { coordinates: { x: number; y: number; }; price: number; }) => [element.coordinates.x, element.coordinates.y, element.price]);
            setPoints(newPoints);
            
        }
    }, [data]);

    if (!points) {
        return <div>No data available</div>;
    }
    if (dataType === 'arrendar') {
        lValue = 0;
        mValue = 3.5;
    }else{
        lValue = 100;
        mValue = 1.5;
    }


    const lowerPricePoints = points.filter(p => p[2] < minPrice + (maxPrice - minPrice) / 15);
    const mediumPricePoints = points.filter(p => p[2] >= minPrice + (maxPrice - minPrice) / 15 && p[2] < minPrice + 2 * (maxPrice - minPrice) / 3);
    const highPricePoints = points.filter(p => p[2] >= minPrice + 2 * (maxPrice - minPrice) / 3);

    const minLower = Math.min(...lowerPricePoints.map(p => p[2]));
    const minMedium = Math.min(...mediumPricePoints.map(p => p[2]))

    return (
        <>
            <HeatmapLayer
                points={lowerPricePoints}
                longitudeExtractor={(p) => p[1]}
                latitudeExtractor={(p) => p[0]}
                intensityExtractor={(p) => Math.max(p[2], minLower * lValue)}
                fitBoundsOnUpdate
                radius={20}
                max={Math.max(...lowerPricePoints.map(p => p[2]))}
                gradient={{
                    0.4: 'blue',
                    1: 'cyan',
                }}
            />

            <HeatmapLayer
                points={mediumPricePoints}
                longitudeExtractor={(p) => p[1]}
                latitudeExtractor={(p) => p[0]}
                intensityExtractor={(p) => Math.max(p[2], minMedium * mValue)}
                fitBoundsOnUpdate
                radius={20}
                max={Math.max(...mediumPricePoints.map(p => p[2]))}
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
                radius={20}
                max={Math.max(...highPricePoints.map(p => p[2]))}
                gradient={{
                    0.4: 'orange',   // Yellow
                    1: 'red',   // Orange
                }}
            />
        </>
    );
}

export default Heatmap;

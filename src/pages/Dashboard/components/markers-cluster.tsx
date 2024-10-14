import { InfoWindow, useMap } from '@vis.gl/react-google-maps';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { type Marker as GoogleMarkerType, MarkerClusterer } from '@googlemaps/markerclusterer';
import { Tree } from './trees';
import { Marker } from './tree-marker';
import { Link } from 'react-router-dom';

export type MarkersClusterProps = {
    trees: Tree[];
};

const clusterStyles = [
    {
        textColor: 'white', // Color of the text showing the number of markers
        url: 'path_to_your_custom_cluster_image.png', // Path to the custom image
        height: 50, // Height of the cluster icon
        width: 50,  // Width of the cluster icon
        anchorText: [-10, 0], // Position of the cluster text
        textSize: 14, // Size of the text
    },
    {
        textColor: 'white',
        url: 'path_to_another_custom_cluster_image.png',
        height: 60,
        width: 60,
        anchorText: [-12, 0],
        textSize: 16,
    },
    {
        textColor: 'white',
        url: 'path_to_yet_another_custom_cluster_image.png',
        height: 70,
        width: 70,
        anchorText: [-14, 0],
        textSize: 18,
    },
];


/**
 * The MarkersCluster component is responsible for integrating the
 * markers with the markerclusterer.
 */
export const MarkersCluster = ({ trees }: MarkersClusterProps) => {
    const [markers, setMarkers] = useState<{ [key: string]: GoogleMarkerType }>({});
    const [selectedTreeKey, setSelectedTreeKey] = useState<string | null>(null);

    const selectedTree = useMemo(
        () =>
            trees && selectedTreeKey
                ? trees.find(t => t.key === selectedTreeKey)!
                : null,
        [trees, selectedTreeKey]
    );

    // create the markerClusterer once the map is available and update it when
    // the markers are changed
    const map = useMap();
    const clusterer = useMemo(() => {
        if (!map) return null;

        return new MarkerClusterer({ map });
    }, [map]);

    useEffect(() => {
        if (!clusterer) return;

        clusterer.clearMarkers();
        clusterer.addMarkers(Object.values(markers));
    }, [clusterer, markers]);

    // this callback will effectively get passsed as ref to the markers to keep
    // tracks of markers currently on the map
    const setMarkerRef = useCallback((marker: GoogleMarkerType | null, key: string) => {
        setMarkers(markers => {
            if ((marker && markers[key]) || (!marker && !markers[key]))
                return markers;

            if (marker) {
                return { ...markers, [key]: marker };
            } else {
                const { [key]: _, ...newMarkers } = markers;

                return newMarkers;
            }
        });
    }, []);

    const handleInfoWindowClose = useCallback(() => {
        setSelectedTreeKey(null);
    }, []);

    const handleMarkerClick = useCallback((tree: Tree) => {
        setSelectedTreeKey(tree.key);
    }, []);

    return (
        <>
            {trees.map(tree => {

                return <Marker
                    key={tree.key}
                    tree={tree}
                    onClick={handleMarkerClick}
                    setMarkerRef={setMarkerRef}
                />
            })}

            {selectedTreeKey && (
                <InfoWindow
                    anchor={markers[selectedTreeKey]}
                    onCloseClick={handleInfoWindowClose}>
                    <div className="info-window">
                        <>
                            <div className='cover-image-wrapper position-relative'>
                                <img src='https://townhub.kwst.net/images/all/56.jpg' alt='cover-image' />
                            </div>
                            <div className='rounded-top info-content'>
                                <div className='p-2'>
                                    <h3>Iconic Cafe in Manhattan</h3>
                                    <div className=""><i className="ri-map-pin-line fs-4"></i> 40 Journal Square Plaza, NJ, USA</div>
                                </div>
                                <div className='p-2 border-top'>
                                    <Link to={"/"}>Details
                                        <i className="ri-arrow-right-line fs-"></i>
                                    </Link>
                                </div>
                            </div>
                        </>
                    </div>
                </InfoWindow>
            )}
        </>
    );
};



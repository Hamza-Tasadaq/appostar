import { useCallback } from 'react';
import { Tree } from './trees';
import type { Marker as GoogleMarkerType } from '@googlemaps/markerclusterer';
import { AdvancedMarker } from '@vis.gl/react-google-maps';

export type MarkerProps = {
    tree: Tree;
    onClick: (tree: Tree) => void;
    setMarkerRef: (marker: GoogleMarkerType | null, key: string) => void;
};

/**
 * Wrapper Component for an AdvancedMarker for a single tree.
 */
export const Marker = (props: MarkerProps) => {
    const { tree, onClick, setMarkerRef } = props;

    const handleClick = useCallback(() => onClick(tree), [onClick, tree]);
    const ref = useCallback(
        (marker: google.maps.marker.AdvancedMarkerElement) =>
            setMarkerRef(marker, tree.key),
        [setMarkerRef, tree.key]
    );

    return (
        <AdvancedMarker position={tree.position} ref={ref} onClick={handleClick}>
            <div className='rounded-circle marker-item d-flex align-items-center justify-content-center' >
                <img src="https://townhub.kwst.net/images/all/18.jpg" className='rounded-circle' alt="marker-image" />
            </div>
        </AdvancedMarker>
    );
};

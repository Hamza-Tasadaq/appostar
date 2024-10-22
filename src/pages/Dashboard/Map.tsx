import { useEffect, useMemo, useState } from 'react'
import { loadTreeDataset, Tree } from './components/trees';
import { APIProvider, ControlPosition, Map as GoogleMap, MapControl } from '@vis.gl/react-google-maps';
import { MarkersCluster } from './components/markers-cluster';
// import '@vis.gl/react-google-maps/examples.css';


const Map = () => {
    const [trees, setTrees] = useState<Tree[]>();
    const [selectedCategory] = useState<string | null>(null);

    // load data asynchronously
    useEffect(() => {
        loadTreeDataset().then(data => setTrees(data));
    }, []);

    const filteredTrees = useMemo(() => {
        if (!trees) return null;

        return trees.filter(
            t => !selectedCategory || t.category === selectedCategory
        );
    }, [trees, selectedCategory]);

    return (
        <APIProvider apiKey={process.env.REACT_APP_PUBLIC_GOOGLE_API_KEY!}>
            <GoogleMap
                // How i can get this mapId
                mapId={'bf51a910020fa25a'}
                defaultCenter={{ lat: 43.64, lng: -79.41 }}
                defaultZoom={10}
                gestureHandling={'greedy'}
                disableDefaultUI>
                {filteredTrees && <MarkersCluster trees={filteredTrees} />}
                <MapControl position={ControlPosition.BOTTOM_RIGHT}>
                    <div>COntrol</div>
                </MapControl>
            </GoogleMap>
        </APIProvider>
    )
}

export default Map
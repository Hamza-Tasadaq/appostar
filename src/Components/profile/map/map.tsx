import { DivIcon } from 'leaflet';
import { MapContainer, Marker, Popup, TileLayer, useMap, ZoomControl } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import { Link } from 'react-router-dom';
import { useMapState } from 'pages/Dashboard/NewMap';
import 'leaflet/dist/leaflet.css';

const customMarkerIcon = new DivIcon({
    className: '',
    html: `
        <div class='rounded-circle marker-item d-flex align-items-center justify-content-center'>
            <img src="https://townhub.kwst.net/images/all/18.jpg" class='rounded-circle' alt="marker-image" />
        </div>
    `,
    iconSize: [60, 60],
    iconAnchor: [30, 30],
});

// A custom hook to pan the map to the given position
const ChangeView = ({ center }: { center: number[] }) => {
    const map = useMap();
    map.setView([center?.[0], center?.[1]], map.getZoom()); // Move the map to the new center
    return null;
};

const Map = () => {
    const { addressCords, setMarkerRef } = useMapState();

    const markers = [
        { lat: 40.73061, lon: -73.935242, name: 'Location 1', image: 'https://example.com/img1.jpg' },
        { lat: 40.74061, lon: -73.945242, name: 'Location 2', image: 'https://example.com/img2.jpg' },
    ];
    return (
        <div className='map-container-height'>
            <MapContainer center={[40.73061, -73.935242]} zoom={13} scrollWheelZoom={false} style={{ height: '100%' }} zoomControl={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {
                    addressCords?.length ?
                        <ChangeView center={addressCords} /> :
                        null
                }


                <MarkerClusterGroup chunkedLoading>
                    {markers.map((location, index) => (
                        <Marker
                            key={index}
                            position={[location.lat, location.lon]}
                            icon={customMarkerIcon}
                            ref={(marker) => setMarkerRef(index, marker)}
                        >
                            <Popup>
                                <>
                                    <div className='cover-image-wrapper position-relative overflow-hidden'>
                                        <img className='' src='https://townhub.kwst.net/images/all/56.jpg' alt='cover-image' />
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
                            </Popup>
                        </Marker>
                    ))}
                </MarkerClusterGroup>

                <ZoomControl position='bottomright' />
            </MapContainer>
        </div>
    );
};

export default Map;

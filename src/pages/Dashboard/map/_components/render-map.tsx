import { DivIcon } from 'leaflet';
import { Circle, MapContainer, Marker, Popup, TileLayer, useMap, ZoomControl } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import { Link } from 'react-router-dom';
import { useMapState } from 'pages/Dashboard/map';
import 'leaflet/dist/leaflet.css';
import { useState } from 'react';

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

const RenderMap = () => {
    const { addressCords, setMarkerRef } = useMapState();
    const [userCords, setUserCords] = useState<number[] | null>(null); // State to store user’s current location
    const [circleCenter, setCircleCenter] = useState<number[] | null>(null); // State to store the center of the circle

    const markers = [
        { lat: 40.73061, lon: -73.935242, name: 'Location 1', image: 'https://example.com/img1.jpg' },
        { lat: 40.74061, lon: -73.945242, name: 'Location 2', image: 'https://example.com/img2.jpg' },
    ];


    // Function to center map on user's current location
    const handleCenterMap = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setUserCords([latitude, longitude]);
                    setCircleCenter([latitude, longitude])
                },
                (error) => {
                    console.error("Error fetching user location:", error);
                }
            );
        } else {
            alert("Geolocation is not supported by your browser.");
        }
    };
    return (
        <div className='map-container-height position-relative'>
            <div className='position-absolute ' style={{ zIndex: 10, top: "8px", right: "8px" }}>
                {/* On Click of this Button please center the map to the user current location */}
                <button style={{
                    width: "48px",
                    height: "38px"
                }} onClick={handleCenterMap} className='btn  btn-primary p-0'>
                    <i className='ri ri-crosshair-2-line fs-3'></i>
                </button>
            </div>
            <MapContainer center={[40.73061, -73.935242]} className='position-relative' zoom={13} scrollWheelZoom={false} style={{ height: '100%', zIndex: 0 }} zoomControl={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {
                    addressCords?.length ?
                        <ChangeView center={addressCords} /> :
                        null
                }
                {
                    userCords?.length ?
                        <ChangeView center={userCords} /> :
                        null
                }

                {/* Render a circle at the clicked position */}
                {circleCenter && (
                    <Circle
                        center={{ lat: circleCenter?.[0], lng: circleCenter?.[1] }}
                        radius={500} // Adjust the radius as needed
                        pathOptions={{ color: 'blue', fillColor: 'blue', fillOpacity: 0.2 }}
                    />
                )}
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

export default RenderMap;
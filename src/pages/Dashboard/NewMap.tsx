import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L, { DivIcon, point } from 'leaflet';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';
import MarkerClusterGroup from 'react-leaflet-cluster';
import 'leaflet/dist/leaflet.css';

// Fix default Leaflet icon issue in React-Leaflet (required due to how Webpack processes assets)
// @ts-ignore
delete L?.Icon?.Default?.prototype?._getIconUrl;
L?.Icon?.Default?.mergeOptions({
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

// Create the custom icon using the provided div content
const customMarkerIcon = new DivIcon({
    className: '', // No additional class to avoid default styles
    html: `
        <div class='rounded-circle marker-item d-flex align-items-center justify-content-center'>
            <img src="https://townhub.kwst.net/images/all/18.jpg" class='rounded-circle' alt="marker-image" />
        </div>
    `,
    iconSize: [60, 60], // Size of the custom marker
    iconAnchor: [30, 30], // Anchor point in the middle of the icon
});

const NewMap = () => {
    // Define some locations
    const locations = [
        { lat: 40.73061, lon: -73.935242, name: 'Location 1', image: 'https://example.com/img1.jpg' },
        { lat: 40.74061, lon: -73.945242, name: 'Location 2', image: 'https://example.com/img2.jpg' },
    ];

    return (
        <React.Fragment>
            <div className="page-content no-padding-x overflow-x-hidden-md  padding-top-large-sm">
                <Container fluid className='no-padding-x overflow-x-hidden-md '
                    style={{ height: "calc(100dvh - 164px)" }}
                >
                    <MapContainer center={[40.73061, -73.935242]} zoom={13} scrollWheelZoom={false} style={{ height: '100%' }}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <MarkerClusterGroup
                            chunkedLoading
                        >
                            {locations.map((location, index) => (
                                <Marker key={index} position={[location.lat, location.lon]} icon={customMarkerIcon}>
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
                    </MapContainer>
                </Container>
            </div>
        </React.Fragment>
    )
}

export default NewMap
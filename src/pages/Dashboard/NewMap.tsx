import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';

// Fix default Leaflet icon issue in React-Leaflet (required due to how Webpack processes assets)
// @ts-ignore
delete L?.Icon?.Default?.prototype?._getIconUrl;
L?.Icon?.Default?.mergeOptions({
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});


const NewMap = () => {
    // Custom marker icon
    const customIcon = new L.Icon({
        iconUrl: 'https://themes.themesbrand.com/velzon/react-ts/master/static/media/img-11.c7dbbec4252d538c779d.jpg',  // Replace with your custom marker image URL
        iconSize: [50, 50],
        iconAnchor: [25, 50],
        popupAnchor: [0, -50],
    });

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
                        {locations.map((location, index) => (
                            <Marker key={index} position={[location.lat, location.lon]} icon={customIcon}>
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
                    </MapContainer>
                </Container>
            </div>
        </React.Fragment>

    )
}

export default NewMap
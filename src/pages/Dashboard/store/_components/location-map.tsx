
import { MapContainer, TileLayer, ZoomControl } from 'react-leaflet'

const LocationMap = () => {
    return (

        <MapContainer center={[45.4685, 9.1824]} className='position-relative' zoom={13} scrollWheelZoom={false} style={{ height: '100%', zIndex: 0 }} zoomControl={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <ZoomControl position='bottomright' />
        </MapContainer>
    )
}

export default LocationMap
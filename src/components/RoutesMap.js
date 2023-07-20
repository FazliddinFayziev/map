import React from 'react';
import { useSelector } from 'react-redux';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';

const customIcon = new Icon({
    iconUrl:
        'https://static.vecteezy.com/system/resources/previews/010/157/991/original/pin-location-icon-sign-symbol-design-free-png.png',
    iconSize: [30, 40],
});

const RoutesMap = () => {
    const selectedRoute = useSelector((state) =>
        state.route.routes.find((route) => route.key === state.route.selectedRouteKey)
    );

    const position = [59.84660399, 30.29496392];
    const zoomLevel = 13;

    const getPolylinePoints = (waypoints) => {
        return waypoints.map((waypoint) => ({
            lat: waypoint[0],
            lng: waypoint[1],
        }));
    };

    return (
        <div style={{ height: '100vh', width: '100vw' }}>
            <MapContainer center={position} zoom={zoomLevel} style={{ height: '100%', width: '100%' }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />

                {/* Render the markers for the selected route */}
                {selectedRoute &&
                    selectedRoute.waypoints.map((waypoint, index) => (
                        <Marker key={`selected-${index}`} position={waypoint} icon={customIcon}>
                            <Popup>Waypoint {index + 1}</Popup>
                        </Marker>
                    ))}

                {/* Render the polyline for the selected route */}
                {selectedRoute && (
                    <Polyline
                        positions={getPolylinePoints(selectedRoute.waypoints)}
                        color="blue"
                        weight={3}
                        dashArray="5, 5"
                    />
                )}
            </MapContainer>
        </div>
    );
};

export default RoutesMap;

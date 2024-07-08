import { Car } from "@/types";
import { Marker, Popup, useMap } from "react-leaflet";
import Taxi from "@/assets/car.svg";
import L from "leaflet";

type CustomMarkerProps = {
  car: Car;
};

const markerIcon = new L.Icon({
  iconUrl: Taxi,
  iconSize: [35, 45],
});

export const CustomMarker = ({ car }: CustomMarkerProps) => {
  const map = useMap();
  return (
    <Marker
      key={car.id}
      position={[car.latitude, car.longitude]}
      icon={markerIcon}
      eventHandlers={{
        click: () => {
          map.flyTo({ lat: car.latitude, lng: car.longitude }, 10);
        },
      }}
    >
      <Popup>
        {car.name} <br /> {car.number}
      </Popup>
    </Marker>
  );
};

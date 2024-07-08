import { MapContainer, TileLayer } from "react-leaflet";
import { Car } from "@/types";
import { useBaseQuery } from "@/hooks/useBaseQuery";
import { CustomMarker } from "@/components/marker";
import { useMapContext } from "@/providers/mapProvider";

export const CustomMap = () => {
  const { mapRef } = useMapContext();
  const { data } = useBaseQuery(
    ["positions"],
    "http://app.maxtrack.uz:8080/positions",
    {
      method: "POST",
      body: JSON.stringify({
        fleetID: "2036",
        userName: "rpp",
      }),
    }
  );

  const ZOOM_LEVEL = 6;
  return (
    <MapContainer
      ref={mapRef}
      className="leaflet-container"
      center={{ lat: 41.3775, lng: 64.5853 }}
      zoom={ZOOM_LEVEL}
      scrollWheelZoom={false}
      attributionControl={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {data?.update[0]?.data.map((car: Car) => {
        console.log(car);
        return <CustomMarker key={car.id} car={car} />;
      })}
    </MapContainer>
  );
};

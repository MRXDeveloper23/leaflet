import React, { createContext, useContext, useRef } from "react";
import L from "leaflet";

interface MapContextProps {
  mapRef: React.MutableRefObject<L.Map | null>;
}

const MapContext = createContext<MapContextProps | undefined>(undefined);

export const useMapContext = (): MapContextProps => {
  const context = useContext(MapContext);
  if (!context) {
    throw new Error("useMapContext must be used within a MapProvider");
  }
  return context;
};

const MapProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const mapRef = useRef<L.Map | null>(null);

  return (
    <MapContext.Provider value={{ mapRef }}>{children}</MapContext.Provider>
  );
};

export default MapProvider;

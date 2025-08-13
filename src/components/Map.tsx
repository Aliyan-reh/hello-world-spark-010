import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

interface MapProps {
  token: string;
}

const Map: React.FC<MapProps> = ({ token }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const markerRef = useRef<mapboxgl.Marker | null>(null);

  useEffect(() => {
    if (!mapContainer.current || !token) return;

    // Initialize map
    mapboxgl.accessToken = token;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/light-v11",
      projection: "globe",
      zoom: 1.5,
      center: [0, 20],
      pitch: 30,
      antialias: true,
    });

    // Controls
    map.current.addControl(new mapboxgl.NavigationControl({ visualizePitch: true }), "top-right");
    map.current.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: { enableHighAccuracy: true },
        trackUserLocation: true,
        showUserHeading: true,
      }),
      "top-right"
    );

    // Add atmosphere and fog effects
    map.current.on("style.load", () => {
      map.current?.setFog({
        color: "rgb(255,255,255)",
        "high-color": "rgb(200, 200, 225)",
        "horizon-blend": 0.2,
      });
    });

    // Place marker on click
    const handleClick = (e: mapboxgl.MapMouseEvent) => {
      const { lng, lat } = e.lngLat;
      if (!markerRef.current) {
        markerRef.current = new mapboxgl.Marker({ color: "#111827" }).setLngLat([lng, lat]).addTo(map.current!);
      } else {
        markerRef.current.setLngLat([lng, lat]);
      }
    };
    map.current.on("click", handleClick);

    // Cleanup
    return () => {
      map.current?.off("click", handleClick);
      map.current?.remove();
      markerRef.current = null;
    };
  }, [token]);

  return <div ref={mapContainer} className="h-72 w-full rounded-md" />;
};

export default Map;

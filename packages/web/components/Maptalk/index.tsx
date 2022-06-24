// @ts-nocheck
import { useEffect, useRef, useCallback } from "react";

import * as maptalks from "maptalks";
import "maptalks/dist/maptalks.css";

let map = null;

export const Maptalk = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  const initMap = () => {
    if (!mapRef.current) return;

    if (map) return;

    console.log("initmap");

    map = new maptalks.Map(mapRef.current, {
      center: [38, 77],
      zoom: 2,
      baseLayer: new maptalks.TileLayer("base", {
        urlTemplate:
          "http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png",
        subdomains: ["a", "b", "c", "d"],
        attribution:
          '&copy; <a href="http://www.osm.org/copyright">OSM</a> contributors, ' +
          '&copy; <a href="https://carto.com/attributions">CARTO</a>',
      }),
    });

    return map;
  };

  useEffect(() => {
    if (mapRef.current) {
      initMap();
    }
  }, [mapRef.current]);

  return (
    <div>
      <div ref={mapRef} style={{ width: 400, height: 400 }} />
    </div>
  );
};

export default Maptalk;

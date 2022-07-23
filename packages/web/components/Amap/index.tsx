import { useEffect, useRef, useCallback } from "react";
import AMapLoader from "@amap/amap-jsapi-loader";
import { MapContainer, MapBox } from "./style";
import scan_map_area_from_center from "./getPost";

export interface AmapProps {
  viewMode: string;
  zoom: number;
  center?: [number, number];
}

export const AMapBox = (props: AmapProps) => {
  const {
    viewMode = "3D",
    zoom = 16,
    center = [116.39714916005374, 39.916874691986735], //初始化地图中心点位置
  } = props;

  const mapContainerRef = useRef(null);
  const AMap = useRef(null);
  const mapIns = useRef(null);

  const addMarker = () => {
    const marker = new AMap.current.Marker({
      position: new AMap.current.LngLat(center[0], center[1]), // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
      title: "beijing",
    });
    mapIns.current.add(marker);
  };

  const generateRectangle = ({
    north,
    south,
    east,
    west,
  }: {
    north: number;
    south: number;
    east: number;
    west: number;
  }) => {
    const southWest = new AMap.current.LngLat(south, west);
    const northEast = new AMap.current.LngLat(north, east);

    const bounds = new AMap.current.Bounds(southWest, northEast);

    const rectangle = new AMap.current.Rectangle({
      bounds: bounds,
    });

    return rectangle;
  };

  const addRectangle = () => {
    const posArr = scan_map_area_from_center();
    console.log(posArr)
    const rectangles = posArr.map(generateRectangle);
    const rectangleGroup = new AMap.current.OverlayGroup(rectangles);

    rectangleGroup.setOptions({
      strokeColor: "red",
      strokeWeight: 1,
      strokeOpacity: 0.5,
      strokeDasharray: [30, 10],
      strokeStyle: "dashed",
      fillColor: "pink",
      fillOpacity: 0.5,
      cursor: "pointer",
      zIndex: 50,
    });

    mapIns.current.add(rectangleGroup);
  };

  const initMap = async () => {
    if (AMap.current) return;

    try {
      AMap.current = await AMapLoader.load({
        key: "8d727fdbbed0a27b35e7ca0f2b23fc62", // 申请好的Web端开发者Key，首次调用 load 时必填
        version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        plugins: [], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
      });

      mapIns.current = new AMap.current.Map(mapContainerRef.current, {
        viewMode,
        zoom,
        center,
        mapStyle: "amap://styles/grey",
      });

      addMarker();
      addRectangle();
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    if (!mapContainerRef.current) return;
    initMap();
  }, [AMap.current]);

  return (
    <MapContainer>
      <MapBox ref={mapContainerRef} />
    </MapContainer>
  );
};

export default AMapBox;

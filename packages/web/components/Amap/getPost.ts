export const center_pos: [number, number] = [
  116.39714916005374, 39.916874691986735,
];

const lat_step = 0.0075;
const count = 2;

export interface Pos {
  north: number;
  south: number;
  east: number;
  west: number;
}

const scan_map_area_from_center = ([] = center_pos) => {
  const all_pos = [];

  const start_rectangle = {
    north: center_pos[0],
    south: center_pos[0],
    east: center_pos[1],
    west: center_pos[1],
  };

  const scanRight = (pos: Pos, step = lat_step) => {
    let tmp = {
      north: pos.north - step,
      south: pos.south + step,
      east: pos.east,
      west: pos.west,
    };

    const posArr = [];

    return (() => {
      for (let i = 0; i < count; i++) {
        const newNoth = tmp.north + step;
        const newSouth = tmp.north;

        tmp = {
          ...tmp,
          north: newNoth,
          south: newSouth,
        };

        posArr.push({
          east: pos.east,
          west: pos.west,
          north: tmp.north + step,
          south: tmp.north,
        });
      }

      return posArr;
    })();
  };

  const scanAllRight = () => {
    const allRightPos = [];
    let topPos = Object.assign({}, start_rectangle);
    let bottomPos = Object.assign({}, start_rectangle);

    for (let i = 0; i < count; i++) {
      topPos = {
        ...topPos,
        east: topPos.east + lat_step,
        west: topPos.east,
      };
      const topArr = scanRight(topPos, lat_step);
      allRightPos.push(...topArr);
    }

    for (let i = 0; i < count; i++) {
      bottomPos = {
        ...bottomPos,
        east: bottomPos.west,
        west: bottomPos.west - lat_step,
      };
      const topArr = scanRight(bottomPos, lat_step);
      allRightPos.push(...topArr);
    }

    return allRightPos;
  };

  const scanLeft = (pos: Pos, step = lat_step) => {
    let tmp = {
      north: pos.north + step,
      south: pos.south - step,
      east: pos.east,
      west: pos.west,
    };

    const posArr = [];

    return (() => {
      for (let i = 0; i < count; i++) {
        const newNoth = tmp.north - step;
        const newSouth = tmp.north;

        tmp = {
          ...tmp,
          north: newNoth,
          south: newSouth,
        };

        posArr.push({
          east: tmp.east,
          west: tmp.west,
          north: tmp.north,
          south: tmp.north - step,
        });
      }

      return posArr;
    })();
  };

  const scanAllLeft = () => {
    const allRightPos = [];
    let topPos = Object.assign({}, start_rectangle);
    let bottomPos = Object.assign({}, start_rectangle);

    for (let i = 0; i < count; i++) {
      topPos = {
        ...topPos,
        east: topPos.east + lat_step,
        west: topPos.east,
      };

      const topArr = scanLeft(topPos, lat_step);
      allRightPos.push(...topArr);
    }

    for (let i = 0; i < count; i++) {
      bottomPos = {
        ...bottomPos,
        east: bottomPos.west,
        west: bottomPos.west - lat_step,
      };
      const topArr = scanLeft(bottomPos, lat_step);
      allRightPos.push(...topArr);
    }

    return allRightPos;
  };

  all_pos.push(...scanAllLeft(), ...scanAllRight());

  return all_pos;
};

export default scan_map_area_from_center;

export type Point = {
  type: string;
  coordinates: [number, number];
};

export function isNearUbi(point1: Point, point2: Point): boolean {
  const R = 6371; // Radius of the earth in km
  const blockInKm = 0.1; // Assuming 1 block is 100m

  const lat1 = point1.coordinates[1];
  const lon1 = point1.coordinates[0];
  const lat2 = point2.coordinates[1];
  const lon2 = point2.coordinates[0];

  const dLat = deg2rad(lat2 - lat1);
  const dLon = deg2rad(lon2 - lon1);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c; // Distance in km

  return distance <= 10 * blockInKm;
}

function deg2rad(deg: number): number {
  return deg * (Math.PI / 180);
}

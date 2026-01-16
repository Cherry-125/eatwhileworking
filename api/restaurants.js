export default async function handler(req, res) {
   // CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }
  const lat = Number(req.query.lat);
  const lng = Number(req.query.lng);

  // 保險備案：台北車站
  const centerLat = isNaN(lat) ? 25.0478 : lat;
  const centerLng = isNaN(lng) ? 121.5170 : lng;

  const radius = 800;

  const query = `
    [out:json][timeout:8];
    (
      node["amenity"="restaurant"](around:${radius},${centerLat},${centerLng});
      node["amenity"="fast_food"](around:${radius},${centerLat},${centerLng});
    );
    out body;
  `;

  try {
    const response = await fetch("https://overpass-api.de/api/interpreter", {
      method: "POST",
      body: query
    });

    const data = await response.json();

    const restaurants = data.elements
      .filter(el => el.tags && el.tags.name)
      .map(el => ({
        name: el.tags.name,
        lat: el.lat,
        lng: el.lon,
        type: el.tags.amenity,
        price: "約 $150–300"
      }));

    res.status(200).json(restaurants);
  } catch (err) {
    res.status(500).json({ error: "fetch failed" });
  }
}

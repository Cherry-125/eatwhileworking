export default async function handler(req, res) {
  const query = `
    [out:json];
    node
      ["amenity"="restaurant"]
      (around:800,25.0330,121.5654);
    out 10;
  `;

  const url = "https://overpass-api.de/api/interpreter";

  try {
    const response = await fetch(url, {
      method: "POST",
      body: query,
    });

    const data = await response.json();

    const restaurants = data.elements.map(el => ({
      name: el.tags.name || "未命名餐廳",
      type: el.tags.cuisine || "不明",
    }));

    res.status(200).json(restaurants);
  } catch (err) {
    res.status(500).json({ error: "fetch failed" });
  }
}

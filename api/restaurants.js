export default function handler(req, res) {
  // 允許 GitHub Pages 存取（解 CORS）
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET");

  res.status(200).json([
    { name: "巷口牛肉麵", type: "台式", price: "150–200" },
    { name: "咖哩專賣店", type: "日式", price: "180–260" },
    { name: "便當店", type: "台式", price: "100–130" },
    { name: "義大利麵小館", type: "西式", price: "220–320" },
    { name: "燒肉丼飯", type: "日式", price: "180–280" }
  ]);
}

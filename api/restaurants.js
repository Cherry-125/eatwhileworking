export default function handler(req, res) {
  res.status(200).json([
    { name: "測試餐廳 A", type: "台式" },
    { name: "測試餐廳 B", type: "日式" }
  ]);
}

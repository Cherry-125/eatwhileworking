export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET");

  const data = [
    {
      name: "巷口便當",
      price: "NT$90",
      reason: "快速、不用想"
    },
    {
      name: "牛肉麵",
      price: "NT$150",
      reason: "安全牌、大家都能吃"
    },
    {
      name: "日式咖哩",
      price: "NT$160",
      reason: "飽足感高，適合加班"
    }
  ];

  res.status(200).json(data);
}

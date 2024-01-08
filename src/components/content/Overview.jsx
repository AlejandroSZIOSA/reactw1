import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";
const data = [
  { name: "Jan", uv: 50, pv: 2400, amt: 2400 },
  { name: "Feb", uv: 100, pv: 2400, amt: 2400 },
  { name: "Mar", uv: 200, pv: 2400, amt: 2400 },
  { name: "April", uv: 400, pv: 2400, amt: 2400 },
  { name: "Maj", uv: 100, pv: 2400, amt: 2400 },
  { name: "Jun", uv: 100, pv: 2400, amt: 2400 },
  { name: "Jul", uv: 90, pv: 2400, amt: 2400 },
  { name: "Aug", uv: 80, pv: 2400, amt: 2400 },
  { name: "Sep", uv: 200, pv: 2400, amt: 2400 },
  { name: "Oct", uv: 300, pv: 2400, amt: 2400 },
  { name: "Nov", uv: 200, pv: 2400, amt: 2400 },
  { name: "Dec", uv: 250, pv: 2400, amt: 2400 },
];

export default function Ctabs() {
  return (
    <BarChart width={600} height={460} data={data}>
      <XAxis dataKey="name" stroke="#8884d8" />
      <YAxis tickFormatter={(value) => `+$${value}`} />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <Bar dataKey="uv" fill="#000000" barSize={35} />
    </BarChart>
  );
}

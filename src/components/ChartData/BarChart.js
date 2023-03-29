import { Tooltip } from "@mui/material";
import { Bar, BarChart, CartesianGrid, Legend, XAxis, YAxis } from "recharts";

const Barcharts = ({ data }) => {
  return (
    <BarChart
      width={500}
      height={300}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
      data={data}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="pv" fill="#8884d8" />
      <Bar dataKey="uv" fill="#82ca9d" />
    </BarChart>
  );
};

export default Barcharts;

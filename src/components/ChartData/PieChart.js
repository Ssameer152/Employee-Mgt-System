import { Pie, PieChart } from "recharts";

const Piecharts = ({ piedata1, piedata2 }) => {
  return (
    <PieChart width={400} height={400}>
      <Pie
        data={piedata1}
        dataKey="value"
        cx="50%"
        cy="50%"
        outerRadius={60}
        fill="#8884d8"
      />
      <Pie
        data={piedata2}
        dataKey="value"
        cx="50%"
        cy="50%"
        innerRadius={70}
        outerRadius={90}
        fill="#82ca9d"
        label
      />
    </PieChart>
  );
};

export default Piecharts;

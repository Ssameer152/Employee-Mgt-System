import { Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Barcharts from "./BarChart";
import BarChartIcon from "@mui/icons-material/BarChart";
import PieChartIcon from "@mui/icons-material/PieChart";
import StackedLineChartIcon from "@mui/icons-material/StackedLineChart";
import { data, piedata1, piedata2 } from "./ChartData";
import Linecharts from "./LineChart";
import Piecharts from "./PieChart";
const Chart = () => {
  const navigate = useNavigate();
  const [line, setLine] = useState(false);
  const [bar, setBar] = useState(false);
  const [pie, setPie] = useState(false);

  const handleBarClick = () => {
    setBar(true);
    setPie(false);
    setLine(false);
  };
  const handlePieClick = () => {
    setBar(false);
    setPie(true);
    setLine(false);
  };
  const handleLineClick = () => {
    setBar(false);
    setPie(false);
    setLine(true);
  };
  return (
    <>
      <h3>Chart Data- Click on chart icons to display charts</h3>

      <BarChartIcon
        onClick={handleBarClick}
        style={{ cursor: "pointer", marginRight: "10px" }}
      />
      <PieChartIcon
        onClick={handlePieClick}
        style={{
          cursor: "pointer",
          marginRight: "10px",
        }}
      />
      <StackedLineChartIcon
        onClick={handleLineClick}
        style={{ cursor: "pointer" }}
      />
      {line && <Linecharts data={data} />}
      {bar && <Barcharts data={data} />}
      {pie && <Piecharts piedata1={piedata1} piedata2={piedata2} />}
      <br />
      <Button
        sx={{ mt: 4 }}
        variant="contained"
        size="large"
        onClick={() => navigate("/employee")}
      >
        Back
      </Button>
    </>
  );
};

export default Chart;

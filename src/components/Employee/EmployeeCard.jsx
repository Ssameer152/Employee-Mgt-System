import { Card, CardContent, Typography } from "@mui/material";
import Draggable from "react-draggable";
import { Link } from "react-router-dom";

const EmployeeCard = ({ employee }) => {
  const id = employee.id;
  return employee ? (
    <Draggable>
      <Card sx={{ minWidth: 275, height: "200px" }}>
        <CardContent>
          <Typography
            sx={{ fontSize: 16, mt: 5 }}
            color="text.primary"
            gutterBottom
          >
            Name: {employee.name}
          </Typography>
          <Typography sx={{ fontSize: 16 }} color="text.primary">
            Email: {employee.email}
          </Typography>
          <Typography sx={{ fontSize: 16, mt: 2 }} color="text.primary">
            Phone: {employee.phone}
          </Typography>
          <Link to={`/charts/${id}`} style={{ textDecoration: "none" }}>
            Chart Data
          </Link>
        </CardContent>
      </Card>
    </Draggable>
  ) : null;
};

export default EmployeeCard;

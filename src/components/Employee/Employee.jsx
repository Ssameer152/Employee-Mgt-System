import { Box } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import EmployeeCard from "./EmployeeCard";
import styles from "./EmployeeCard.module.css";

const Employee = () => {
  const url = `https://jsonplaceholder.typicode.com/users`;
  const [employee, setEmployee] = useState([]);

  const getEmployee = async () => {
    try {
      const response = await axios.get(url);
      setEmployee(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getEmployee();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h2 className={styles.h2}>Employee List</h2>
      <Box className={styles.container}>
        {employee.map((emp, i) => (
          <div key={emp.id}>
            <EmployeeCard employee={emp} />
          </div>
        ))}
      </Box>
    </>
  );
};

export default Employee;

import { Box } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import EmployeeCard from "./EmployeeCard";
import styles from "./EmployeeCard.module.css";

const Employee = () => {
  const url = `https://jsonplaceholder.typicode.com/users`;
  const [employee, setEmployee] = useState([]);

  useEffect(() => {
    const getEmployee = () => {
      axios
        .get(url)
        .then((res) => {
          setEmployee(res.data);
        })
        .catch((err) => console.log(err));
    };
    getEmployee();
  }, [url]);

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

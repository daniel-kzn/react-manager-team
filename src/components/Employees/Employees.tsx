import React, { useState } from "react";
import data from "../../data/employees";
import "./Employees.css";

interface Employee {
  id: number;
  full_name: string;
  gender: string;
  staff: string;
  team: string;
}

const Employees = () => {
  const [employees, setEmployees] = useState<Employee[]>(data);
  const [selectedTeam, setSelectedTeam] = useState("TeamA");

  const handleTeamSelectionChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedTeam(event.target.value);
  };

  return (
    <div className="container">
      <div className="select">
        <select value={selectedTeam} onChange={handleTeamSelectionChange}>
          <option value="TeamA">TeamA</option>
          <option value="TeamB">TeamB</option>
          <option value="TeamC">TeamC</option>
          <option value="TeamD">TeamD</option>
        </select>
      </div>
      <div className="grid">
        {employees.map((employee) => {
          return (
            <div className="card" id={employee.id.toString()}>
              {employee.gender === "Male" ? (
                <img src={require("./../../images/male.jpg")} className="img" />
              ) : (
                <img
                  src={require("./../../images/female.jpeg")}
                  className="img"
                />
              )}

              <p>Nom : {employee.full_name}</p>
              <p>Technologie : {employee.staff}</p>
              <p>Team: {employee.team}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Employees;

import React, { useState } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import AttendanceForm from "./AttendanceForm";
import '../styles/styles.css';
function AttendanceList() {
  const [records, setRecords] = useState([]);

  const addAttendance = (entry) => {
    setRecords([...records, entry]);
  };

  const updateAttendance = (updatedEntry) => {
    setRecords((prevRecords) =>
      prevRecords.map((record) =>
        record.name === updatedEntry.name
          ? { ...record, logoutTime: updatedEntry.logoutTime, totalHours: updatedEntry.totalHours }
          : record
      )
    );
  };

  return (
    <>
      <AttendanceForm onAddAttendance={addAttendance} onUpdateAttendance={updateAttendance} />
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Login Time</TableCell>
              <TableCell>Logout Time</TableCell>
              <TableCell>Total Hours</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {records.map((record, index) => (
              <TableRow key={index}>
                <TableCell>{record.name}</TableCell>
                <TableCell>{record.date}</TableCell>
                <TableCell>{record.loginTime}</TableCell>
                <TableCell>{record.logoutTime}</TableCell>
                <TableCell>{record.totalHours}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default AttendanceList;

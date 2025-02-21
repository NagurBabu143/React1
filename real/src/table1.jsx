import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Collapse,
  IconButton,
} from '@mui/material';
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';

const data = [
  { id: 1, name: 'Emily', age: 30, details: 'Loves hiking and outdoor activities' },
  { id: 2, name: 'Michael', age: 40, details: 'Enjoys cooking and baking' },
  { id: 3, name: 'Sophia', age: 25, details: 'Avid reader and writer' },
];

const ExpandableRowsTable = () => {
  const [open, setOpen] = useState({});

  const handleRowClick = (id) => {
    setOpen((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Age</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <React.Fragment key={row.id}>
              <TableRow onClick={() => handleRowClick(row.id)}>
                <TableCell>
                  <IconButton size="small">
                    {open[row.id] ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
                  </IconButton>
                </TableCell>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.age}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={4}>
                  <Collapse in={open[row.id]} timeout="auto" unmountOnExit>
                    <Paper style={{ padding: '16px' }}>
                      <p>{row.details}</p>
                    </Paper>
                  </Collapse>
                </TableCell>
              </TableRow>
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ExpandableRowsTable;

import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import StarIcon from '../../../component/icons/StarIcon';

const ChartCardTable = ({ columns, data, styles }) => {
  return (
    <TableContainer sx={{ overflow: 'hidden' }}>
      <Table sx={{ ...styles }}>
        <TableHead>
          <TableRow>
            {columns.map((col, index) => (
              <TableCell key={index}>{col}</TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {data.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              {Object.keys(row).map((key, colIndex) => (
                <TableCell key={colIndex}>
                  {key === 'icon' ? <StarIcon row={row} /> : row[key]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ChartCardTable;

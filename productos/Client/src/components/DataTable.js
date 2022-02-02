import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const rows = [
  { id: 1, col1: 'ola', col2: 'C' },
  { id: 2, col1: 'k', col2: 'U' },
  { id: 3, col1: 'ase', col2: 'M' },
];

const columns = [
  { field: 'col1', headerName: 'ID', width: 150 },
  { field: 'col2', headerName: 'Producto', width: 150 },
  { field: 'col3', headerName: 'Precio', width: 150 },
  { field: 'col4', headerName: 'Stock', width: 150 },
];

const DataTable = () => {
    return (
        <div style={{ height: 300, width: '100%' }}>
          <DataGrid rows={rows} columns={columns} />
        </div>
      );
}

export default DataTable;
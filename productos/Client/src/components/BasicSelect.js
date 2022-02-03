import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect() {
  const [mostrar, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl sx={{m: 1, minWidth: 100}}>
        <InputLabel id="demo-simple-select-label">Mostrar</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={mostrar}
          label="Mostrar"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={25}>TwentyFive</MenuItem>
          <MenuItem value={50}>Fifty</MenuItem>
          <MenuItem value={100}>Thousand</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
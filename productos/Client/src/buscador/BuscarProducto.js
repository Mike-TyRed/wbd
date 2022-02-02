import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function FreeSolo() {
  return (
      <Autocomplete 
        sx={{ width: 200}}
        id="free-solo-demo"
        freeSolo
        renderInput={(params) => <TextField {...params} label="Buscar" />}
      />
  );
}
import React from 'react';
import {Typography, AppBar, Button, CssBaseline, Grid,Toolbar, Container} from '@mui/material';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import DataTable from './components/DataTable';
import FreeSolo from './buscador/BuscarProducto';


function App() {

  return (
    <>
      <CssBaseline/>
      <AppBar position='relative'>
        <Toolbar>
          <Inventory2Icon style={{margin: 10}}/>
          <Typography variant='16' fontWeight='bold'>
            Inventario
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className='tittle'>
          <Container>
            <Typography>
              Productos
            </Typography>
            <div className='buttons'>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant='contained' color="primary">
                    Nuevo
                  </Button>
                  <Button variant='contained' color="primary">
                    Servicios
                  </Button>
                  <FreeSolo/>
                </Grid>
              </Grid>
              <Grid>
              <DataTable/>
              </Grid>
            </div>
          </Container>
        </div>
      </main>
    </>
  );
}

export default App;

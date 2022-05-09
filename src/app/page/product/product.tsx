import ModalContent from "../../../app/components/modal";
import { Add, Search } from "@mui/icons-material";
import { Button, Grid, InputAdornment, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import ProductForm from "./productForm";
import ProductTable from "./productTable";

export default function Product() {



  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
    <Stack display="flex" alignItems="center" justifyContent="center" marginTop={2}>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={6} md={6} textAlign="start">
            <Typography fontWeight="bold" fontSize={16}>Products</Typography>
        </Grid>
        <Grid item xs={6} md={4} textAlign="end">
            <TextField type="text" size="small" placeholder="Search..." InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}/>
        </Grid>
        <Grid item xs={6} md={2} textAlign="end">
            <Button startIcon={<Add/>} color="primary" variant="contained" sx={{color:"#fff"}} onClick={handleOpen}>Add product</Button>
        </Grid>
        <Grid item xs={12} md={12}>
        <ProductTable/>
        </Grid>

        </Grid>

        <ModalContent
        open={open}
        handleClose={() => handleClose}
      >
        <Stack fontWeight="bold" sx={{marginBottom: 5}}>Nouveau produit</Stack>
      <ProductForm handleClose={handleClose}/>
      </ModalContent>
    </Stack>
  );
}

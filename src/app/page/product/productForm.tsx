import { Button, Grid, TextField } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";

interface InputForm {
  name: string;
  code: string;
  price: number;
  description: string;
  tags: string;
  quantity: number;
}
export default function ProductForm(props: any) {
    const { handleClose } = props;
  const methods = useForm<InputForm>();
  const {
    register,
    formState: { errors }
  } = methods;

  const Submit = async (values: InputForm) => {
    alert(JSON.stringify(values));
  };

  return (
    <form noValidate onSubmit={methods.handleSubmit(Submit)}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            {...register("name")}
            label="Nom du produit"
            variant="outlined"
            size="small"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            {...register("code")}
            label="Code du produit"
            variant="outlined"
            size="small"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            {...register("price")}
            label="Prix du produit"
            variant="outlined"
            size="small"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            {...register("description")}
            label="description du produit"
            variant="outlined"
            size="small"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
          select
            {...register("tags")}
            label="Categorie du produit"
            variant="outlined"
            size="small"
            fullWidth
          />
        </Grid>
      </Grid>

      <Grid container spacing={2} marginTop={4}>
        <Grid item xs={12} md={6}>
          <Button variant="contained" color="primary" type="reset" onClick={handleClose} sx={{ color: "#fff" }} fullWidth>
            Annuler
          </Button>
        </Grid>

        <Grid item xs={12} md={6}>
          <Button variant="contained" color="primary" type="submit" sx={{ color: "#fff" }} fullWidth>
            Créer
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

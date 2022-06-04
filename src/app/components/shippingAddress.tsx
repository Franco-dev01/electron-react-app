import { Grid } from "@mui/material"
import React from "react"
import { useFormContext } from "react-hook-form"
import { Input } from "./globalStyle"

export default function ShippingAddress() {

    const { register } = useFormContext()
  return (
    <Grid container spacing={1}>
    <Grid item xs={12} md={12}>
      ADRESSE DE LIVRAISON
    </Grid>

    <Grid item xs={12} md={12}>
      <Input
        type="text"
        {...register("shippingAddress.fullName")}
        placeholder="nom complet"
        color="secondary"
        size="small"
      />
    </Grid>

    <Grid item xs={12} md={12}>
      <Input
        type="text"
        placeholder="addresse"
        multiline
        variant="outlined"
        rows={2}
        size="small"
        color="secondary"
        sx={{ width: "45%" }}
        {...register("shippingAddress.address")}
      />
    </Grid>
    <Grid item xs={12} md={12}>
      <Input
        type="tel"
        {...register("shippingAddress.phoneNumber")}
        placeholder="(225) 09891234"
        color="secondary"
        size="small"
      />
    </Grid>
    <Grid item xs={12} md={12}>
      <Input
        type="text"
        {...register("shippingAddress.taxNumber")}
        placeholder="numéro d'identification fiscale"
        color="secondary"
        size="small"
      />
    </Grid>
  </Grid>
  )
}

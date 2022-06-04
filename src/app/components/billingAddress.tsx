import { Grid } from "@mui/material"
import React from "react"
import { useFormContext } from "react-hook-form"
import { Input } from "./globalStyle"

export default function BillingAddress() {
    const { register } = useFormContext();
  return (
    <Grid container spacing={1}>
    <Grid item xs={12} md={12}>
      ADRESSE DE FACTURATION
    </Grid>

    <Grid item xs={12} md={12}>
      <Input
        type="text"
        {...register("billingAddress.fullName")}
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
        {...register("billingAddress.address")}
      />
    </Grid>
    <Grid item xs={12} md={12}>
      <Input
        type="tel"
        {...register("billingAddress.phoneNumber")}
        placeholder="(225) 09891234"
        color="secondary"
        size="small"
      />
    </Grid>
    <Grid item xs={12} md={12}>
      <Input
        type="text"
        {...register("billingAddress.taxNumber")}
        placeholder="numéro d'identification fiscale"
        color="secondary"
        size="small"
      />
    </Grid>
  </Grid>
  )
}

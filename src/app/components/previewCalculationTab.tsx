import { Divider, Grid } from "@mui/material";
import React from "react";
import { useFormContext } from "react-hook-form";
import { Input } from "./globalStyle";

export default function PreviewCalculationTab() {
  const { register } = useFormContext();
  return (
    <>
      <Grid item md={12} xs={12} textAlign="end">
        <label>Montant prévisionnel</label> {"    "}
        <Input
          type="number"
          disabled

          // {...register("amount")}

          placeholder="$0.00"
          color="secondary"
          size="small"
        />
      </Grid>

      <Grid item md={12} xs={12} textAlign="end">
        <label>Taxe estimée (18%)</label> {"    "}
        <Input
          type="number"
          {...register("taxEstimate")}
          placeholder="$0.00"
          color="secondary"
          size="small"
          disabled
        />
      </Grid>

      <Grid item md={12} xs={12} textAlign="end">
        <label>Remise</label> {"    "}
        <Input
          type="number"
          {...register("discount")}
          placeholder="$0.00"
          color="secondary"
          size="small"
          disabled
        />
      </Grid>

      <Grid item md={12} xs={12} textAlign="end">
        <label>Frais de livraison</label> {"    "}
        <Input
          type="number"
          {...register("shippingCharge")}
          placeholder="$0.00"
          color="secondary"
          size="small"
          disabled
        />
      </Grid>

      <Grid item xs={12} md={12} textAlign="end">
        <Divider
          sx={{
            border: "1px dashed #f2f3f9",
            height: 0,
            width: "40%",
            marginLeft: "60%",
            textAlign: "end"
          }}
        />
      </Grid>
      <Grid item md={12} xs={12} textAlign="end">
        <label>Montant Total</label> {"    "}
        <Input
          type="number"
          {...register("totalAmount")}
          placeholder="$0.00"
          color="secondary"
          size="small"
          disabled
        />
      </Grid>
    </>
  );
}

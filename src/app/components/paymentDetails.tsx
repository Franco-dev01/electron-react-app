import { Grid, MenuItem } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { PAYMENT_METHOD } from "../constants/defaultContant";
import { getValueByPathname } from "../utils/getValueByPathname";
import { Input, InputSelect } from "./globalStyle";

const PaymentDetails = () => {
  const {
    register,
    formState: { errors }
  } = useFormContext();
  return (
    <>
      <Grid item xs={12} md={12}>
        DETAILS DE PAIEMENT
      </Grid>
      <Grid item md={12} xs={12}>
        <InputSelect
          type="text"
          sx={{ width: "22%" }}
          {...register("paymentMethod")}
          placeholder="$0.00"
          color="secondary"
          size="small">
          <MenuItem disabled> ---- Mode de paiement ---- </MenuItem>

          {PAYMENT_METHOD &&
            PAYMENT_METHOD.map((item: any, index: number) => (
              <MenuItem key={index} value={item.value}>
                {item.label}
              </MenuItem>
            ))}
        </InputSelect>
      </Grid>

      <Grid item md={12} xs={12}>
        <Input
          type="text"
          {...register("cardHolderName")}
          placeholder="Nom du titulaire de la carte"
          color="secondary"
          size="small"
          error={!!getValueByPathname(errors, "cardHolderName")}
          helperText={getValueByPathname(errors, "cardHolderName")?.message}
        />
      </Grid>

      <Grid item md={12} xs={12}>
        <Input
          type="text"
          {...register("zipCode")}
          placeholder="xxxx xxxx xxxx xxxx"
          color="secondary"
          size="small"
          error={!!getValueByPathname(errors, "zipCode")}
          helperText={getValueByPathname(errors, "zipCode")?.message}
        />
      </Grid>

      <Grid item md={12} xs={12}>
        <Input
          type="text"
          disabled
          {...register("amount")}
          placeholder="$0.00"
          color="secondary"
          size="small"
          error={!!getValueByPathname(errors, "amount")}
          helperText={getValueByPathname(errors, "amount")?.message}
        />
      </Grid>
      <Grid item xs={12} md={12}>
        NOTES
      </Grid>
      <Grid item xs={12} md={12}>
        <Input
          type="text"
          placeholder="All accounts are to be paid within 7 days from receipt of invoice. To be paid by cheque or credit card or direct payment online. If account is not paid within 7 days the credits details supplied as confirmation of work undertaken will be charged the agreed quoted fee noted above."
          multiline
          rows={2}
          variant="outlined"
          color="secondary"
          size="small"
          fullWidth
          {...register("mention")}
          error={!!getValueByPathname(errors, "mention")}
          helperText={getValueByPathname(errors, "mention")?.message}
        />
      </Grid>
    </>
  );
};

export default PaymentDetails;

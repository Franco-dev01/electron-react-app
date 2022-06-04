/* eslint-disable no-shadow */
import ProductAccordion from "../../../../app/components/productAccordion";
import { Divider, Grid, MenuItem } from "@mui/material";
import { Box } from "@mui/system";
import * as React from "react";
import { useForm, useFieldArray, useWatch, FormProvider } from "react-hook-form";
import { Input, InputSelect } from "../../../../app/components/globalStyle";
import { initialValues, productInitialValue, validateSchema } from "./constants";
import { QUOTE_STATUS } from "../../../../app/constants/defaultContant";
import ValidateButton from "../../../../app/components/invoiceValidateButton";
import PaymentDetails from "../../../../app/components/paymentDetails";
import { yupResolver } from "@hookform/resolvers/yup";
import BillingAddress from "../../../../app/components/billingAddress";
import ShippingAddress from "../../../../app/components/shippingAddress";
import PreviewCalculationTab from "../../../../app/components/previewCalculationTab";
import { getValueByPathname } from "../../../../app/utils/getValueByPathname";

export default function QuoteCreation() {
  const methods = useForm({
    defaultValues: initialValues,
    resolver: yupResolver(validateSchema)
  });
  const {
    register,
    control,
    setValue,
    getValues,
    watch,
    formState: { errors, touchedFields }
  } = methods;

  const { fields, append, remove } = useFieldArray({
    name: "product",
    control
  });

  const Submit = async (values: any) => {
    await alert(JSON.stringify(values));
  };

  const formValues = useWatch({
    name: "product",
    control
  });

  const total = (index: number) => {
    const totalCal = formValues.reduce(
      (acc: any, current: { rate: any; quantity: any }) =>
        acc + (acc.rate || 0) * (current.quantity || 0),
      0
    );
    return setValue(`product.${index}.amount`, totalCal);
  };

  React.useEffect(() => {
    const subscription = watch((value: any, { name, type }: any) =>
      console.log("[] watch", { value, name, type })
    );
    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <FormProvider {...methods}>
      <form noValidate onSubmit={methods.handleSubmit(Submit)}>
        <Grid
          container
          spacing={2}
          style={{
            width: "80%",
            margin: "auto",
            padding: 20,
            backgroundColor: "#fff"
          }}>
          <Grid item xs={12} md={6} textAlign="start">
            <Grid container spacing={1}>
              <Grid item xs={12} md={12} textAlign="start">
                <Box
                  sx={{
                    border: "1px dashed #f2f3f9",
                    padding: 1,
                    width: "45%"
                  }}>
                  Logo
                </Box>
              </Grid>

              <Grid item xs={12} md={12}>
                <Input
                  type="text"
                  placeholder="adresse de la société"
                  multiline
                  variant="outlined"
                  rows={2}
                  size="small"
                  color="secondary"
                  {...register("adressCompany")}
                  sx={{ width: "45%" }}
                  error={!!getValueByPathname(errors, "adressCompany")}
                  helperText={getValueByPathname(errors, "adressCompany")?.message}
                />
              </Grid>

              <Grid item xs={12} md={12}>
                <Input
                  type="text"
                  {...register("postalCode")}
                  placeholder="Entrer le code postal"
                  color="secondary"
                  size="small"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6} textAlign="end">
            <Grid container spacing={1}>
              <Grid item xs={12} md={12}>
                <Input
                  type="text"
                  {...register("nrc")}
                  placeholder="nrc"
                  color="secondary"
                  size="small"
                  error={!!getValueByPathname(errors, "nrc")}
                  helperText={getValueByPathname(errors, "nrc")?.message}
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <Input
                  type="text"
                  {...register("emailAddress")}
                  placeholder="adresse email"
                  color="secondary"
                  size="small"
                  error={!!getValueByPathname(errors, "emailAddress")}
                  helperText={getValueByPathname(errors, "emailAddress")?.message}
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <Input
                  type="text"
                  {...register("webSite")}
                  placeholder="site web"
                  color="secondary"
                  size="small"
                  error={!!getValueByPathname(errors, "webSite")}
                  helperText={getValueByPathname(errors, "webSite")?.message}
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <Input
                  type="text"
                  {...register("contactNumber")}
                  placeholder="contact"
                  color="secondary"
                  size="small"
                  error={!!getValueByPathname(errors, "contactNumber")}
                  helperText={getValueByPathname(errors, "contactNumber")?.message}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={12}>
            <Divider
              variant="fullWidth"
              sx={{
                border: "1px dashed #f2f3f9",
                height: 0,
                width: "100%"
              }}
            />
          </Grid>

          <Grid container spacing={2} alignItems="center" sx={{ padding: 5 }}>
            <Grid item xs={12} md={3}>
              <label>Facture Nº</label>
              <Input
                type="text"
                {...register("invoiceNumber")}
                disabled
                placeholder="#VL2500000"
                color="secondary"
                size="small"
                error={!!getValueByPathname(errors, "invoiceNumber")}
                  helperText={getValueByPathname(errors, "invoiceNumber")?.message}
              />
            </Grid>

            <Grid item xs={12} md={3}>
              <label>Date</label>
              <Input
                type="date"
                {...register("date")}
                placeholder="selectinner la date"
                color="secondary"
                size="small"
                error={!!getValueByPathname(errors, "date")}
                  helperText={getValueByPathname(errors, "date")?.message}
              />
            </Grid>

            <Grid item xs={12} md={3}>
              <label>Status du Paiement </label>
              <InputSelect
                type="text"
                {...register("paymentStatus")}
                placeholder="selectionner le status de payment"
                color="secondary"
                size="small">
                <MenuItem disabled> ---- status ---- </MenuItem>
                {QUOTE_STATUS?.map((item: any, index: number) => (
                  <MenuItem key={index} value={item.value}>
                    {item.label}
                  </MenuItem>
                ))}
              </InputSelect>
            </Grid>

            <Grid item xs={12} md={3}>
              <label>Montant Total</label>
              <Input
                type="text"
                disabled
                {...register("totalAmount")}
                placeholder="$0.000"
                color="secondary"
                size="small"
                error={!!getValueByPathname(errors, "totalAmount")}
                  helperText={getValueByPathname(errors, "totalAmount")?.message}
              />
            </Grid>
          </Grid>

          <Grid item xs={12} md={12} paddingBottom={5}>
            <Divider
              variant="fullWidth"
              sx={{
                border: "1px dashed #f2f3f9",
                height: 0,
                width: "100%"
              }}
            />
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <BillingAddress />
            </Grid>

            <Grid item xs={12} md={6}>
              <ShippingAddress />
            </Grid>
            <Grid item xs={12} md={12}>
              {ProductAccordion(
                errors,
                total,
                fields,
                append,
                remove,
                formValues,
                register,
                setValue,
                getValues,
                productInitialValue
              )}
            </Grid>

            <Grid item xs={12} md={12}>
              <Divider
                variant="fullWidth"
                sx={{
                  border: "1px dashed #f2f3f9",
                  height: 0,
                  width: "100%",
                  marginBottom: 5
                }}
              />
            </Grid>

            <Grid container spacing={1}>
              <PreviewCalculationTab />
            </Grid>

            <Grid container spacing={1} paddingLeft={2}>
              <PaymentDetails />
            </Grid>
            <Grid container spacing={2} justifyContent="right" sx={{ marginTop: 2 }}>
              <ValidateButton />
            </Grid>
          </Grid>
        </Grid>
      </form>
    </FormProvider>
  );
}

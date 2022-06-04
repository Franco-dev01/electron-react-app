/* eslint-disable no-shadow */
import { Add, HorizontalRule } from "@mui/icons-material";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useFormContext } from "react-hook-form";
import { getValueByPathname } from "../utils/getValueByPathname";
import { classes, Input } from "./globalStyle";

const ProductAccordion = (
  errors: any,
  total: any,
  fields: any,
  append: any,
  remove: any,
  formValues: any,
  register: any,
  setValue: any,
  getValues: any,
  productInitialValue: any
) => {
  return (
    <table>
      <thead style={{ background: "#f2f3f9" }}>
        <th align="left">#</th>
        <th>Details Produit</th>
        <th>Prix unitaire</th>
        <th>Quantité</th>
        <th>montant</th>
        <th></th>
      </thead>

      {fields?.map((item: any, index: any) => {
        return (
          <tbody key={item.id}>
            <tr>
              <td>{index + 1}</td>
              <td align="center">
                <Input
                  type="text"
                  placeholder="Nom du produit"
                  color="secondary"
                  size="small"
                  {...register(`product.${index}.productName`)}
                  error={!!getValueByPathname(errors, `product.${index}.productName`)}
                  helperText={getValueByPathname(errors, `product.${index}.productName`)?.message}
                />
              </td>
              <td align="center">
                <Input
                  placeholder="0.00"
                  color="secondary"
                  size="small"
                  {...register(`product.${index}.rate`)}
                  error={!!getValueByPathname(errors, `product.${index}.rate`)}
                  helperText={getValueByPathname(errors, `product.${index}.rate`)?.message}
                />
              </td>

              <td>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignContent: "center",
                    border: "1px solid #f2f3f9",
                    padding: 1,
                    borderRadius: "2px"
                  }}>
                  <HorizontalRule
                    sx={{ background: "#80808036", cursor: "pointer" }}
                    onClick={() => {
                      const getquantityVal = getValues(`product.${index}.quantity`);

                      setValue(
                        `product.${index}.quantity`,
                        getquantityVal < 10 ? getquantityVal - 1 : getquantityVal
                      );

                      total(index);
                    }}
                  />
                  <input style={classes} {...register(`product.${index}.quantity`)} disabled />
                  <Add
                    sx={{ background: "#80808036", cursor: "pointer" }}
                    onClick={() => {
                      const getquantityVal = getValues(`product.${index}.quantity`);
                      setValue(
                        `product.${index}.quantity`,
                        getquantityVal <= 10 ? getquantityVal + 1 : getquantityVal
                      );
                      total(index);
                    }}
                  />
                </Box>
              </td>
              <td align="center">
                <Input
                  type="text"
                  placeholder="$0.00"
                  color="secondary"
                  size="small"
                  {...register(`product.${index}.amount`)}
                  disabled
                  error={!!getValueByPathname(errors, `product.${index}.amount`)}
                  helperText={getValueByPathname(errors, `product.${index}.amount`)?.message}
                />
              </td>
              <td align="center">
                <Button color="error" variant="contained" onClick={() => remove(index)}>
                  Supprimer
                </Button>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <Input
                  type="text"
                  placeholder="description"
                  multiline
                  rows={2}
                  variant="outlined"
                  color="secondary"
                  size="small"
                  {...register(`product.${index}.description`)}
                  error={!!getValueByPathname(errors, `product.${index}.description`)}
                  helperText={getValueByPathname(errors, `product.${index}.description`)?.message}
                />
              </td>
            </tr>
          </tbody>
        );
      })}

      <tbody>
        <tr>
          <td></td>
          <td>
            <Button
              color="primary"
              variant="outlined"
              startIcon={<Add />}
              onClick={() => append(productInitialValue)}>
              Ajouter
            </Button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default ProductAccordion;

/* eslint-disable @typescript-eslint/no-explicit-any */
import * as yup from "yup";

export const productInitialValue = {
  productName: "",
  quantity: 0,
  rate: 0,
  amount: 0,
  description: ""
};
export const initialValues = {
  adressCompany: "",
  cardHolderName: "",
  contactNumber: "",
  date: "",
  discount: null,
  emailAddress: "",
  invoiceNumber: "DV-25000355",

  billingAddress: {
    address: "",
    fullName: "",
    taxNumber: null,
    phoneNumber: null,

  },
  shippingAddress: {
    address: "",
    fullName: "",
    taxNumber: null,
    phoneNumber: null,
  },
  nrc: "",
  product: [productInitialValue],
  paymentMethod: "",
  paymentStatus: "",
  shippingCharge: "",
  postalCode: "",
  taxEstimate: "",
  webSite: "",
  zipCode: "",
  mention: "",
  totalAmount: 0
};

export type ProductType = {
  productName: string;
  quantity: number;
  rate: number;
  amount: number;
  totalAmount: number;
  description: string;
};

export type InitialValueType = {
  adressCompany: string;
  cardHolderName: string;
  contactNumber: string;
  date: string;
  discount: string;
  emailAddress: string;
  invoiceNumber: string;
  nrc: string;
  product: [ProductType];
  paymentMethod: string;
  paymentStatus: string;
  postalCode: string;
  shippingCharge: string;
  taxEstimate: string;
  billingAddress: object
  shippingAddress: object,
  webSite: string;
  zipCode: string;
  mention: string;
  totalAmount: string;
};

export const validateSchema = yup.object().shape({
  adressCompany: yup.string(),
  cardHolderName: yup.string(),
  contactNumber: yup.string(),
  date: yup.date(),
  discount: yup.string(),
  emailAddress: yup.string(),
  invoiceNumber: yup.string(),
  nrc: yup.string(),
  product: yup.array().of (
    yup.object().shape({
      productName: yup.string(),
      quantity: yup.number().test("quantity", "bla", (context, value): any => {
        console.log("context value", { context, value });
      }),
      rate: yup.number().required(),
      amount: yup.number(),
      totalAmount: yup.number(),
      description: yup.string()
    }),
  ),
  paymentMethod: yup.string(),
  paymentStatus: yup.string(),
  postalCode: yup.string(),
  shippingCharge: yup.string(),
  taxEstimate: yup.string(),
  webSite: yup.string(),
  zipCode: yup.string(),
  mention: yup.string(),
  totalAmount: yup.string()
});

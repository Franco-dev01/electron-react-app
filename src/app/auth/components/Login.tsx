/* eslint-disable react/jsx-no-duplicate-props */
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Button, CircularProgress, Stack, TextField, Typography } from "@mui/material";

import { PAGE_ROOT } from "../../routes/paths";
import { Facebook, Google, Twitter } from "@mui/icons-material";
import React from "react";
import { useAuth } from "../../../app/lib/auth";

export default function Login() {
  const { login, isLoggingIn } = useAuth();
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: ""
  };

  const schema = yup.object().shape({
    email: yup
      .string()
      .email("Veuillez enter un email valide")
      .required("L'adresse email est obligatoire")
      .trim(),
    password: yup.string().required("Le mot de passe est obligatoire")
  });

  const methods = useForm({
    defaultValues: initialValues,
    resolver: yupResolver(schema),
    delayError: 200
  });

  const onSubmit = async (values: any) => {
    try {
      await login(values);
      navigate("/app/dashboard");
    } catch (error) {
      console.error("error", error);
    }
  };

  const {
    register,
    formState: { errors }
  } = methods;

  return (
    <form onSubmit={methods.handleSubmit(onSubmit)} noValidate>
      <Stack display="flex" alignItems="center" justifyContent="center" spacing={4}>
        <Typography fontWeight="bold" fontSize={25}>
          Sign in{" "}
        </Typography>
        <Typography fontSize={15} color="gray">
          Login to your account to continue{" "}
        </Typography>
        <Stack
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          columnGap={2}
          alignItems="center"
          width="100%">
          <Button variant="outlined" color="primary" fullWidth>
            <Facebook />
          </Button>
          <Button variant="outlined" color="primary" fullWidth>
            <Google />
          </Button>
          <Button variant="outlined" color="primary" fullWidth>
            <Twitter />
          </Button>
        </Stack>

        <Stack
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          width="50%">
          <span
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: 16
            }}>
            {" "}
            Or Log in with your mail{" "}
          </span>
        </Stack>

        <TextField
          type="email"
          size="small"
          label="Email"
          color="primary"
          placeholder="email"
          {...register("email")}
          error={!!errors["email"]}
          helperText={errors["email"]?.message}
          fullWidth
        />
        <TextField
          size="small"
          color="primary"
          placeholder="pasvsword"
          label="Password"
          type="password"
          {...register("password")}
          error={!!errors["password"]}
          helperText={errors["password"]?.message}
          fullWidth
        />
        <Button
          type="submit"
          color="primary"
          variant="contained"
          fullWidth
          disabled={isLoggingIn}
          endIcon={isLoggingIn ? <CircularProgress color="primary" size={20} /> : null}>
          <Typography color="white">Log in</Typography>
        </Button>
        <Typography>
          <Link to={PAGE_ROOT.global.register}>
            <span style={{ color: "#11A1F2", textDecoration: "underline" }}>
              Inscrivez-vous ici
            </span>
          </Link>
        </Typography>
      </Stack>
    </form>
  );
}

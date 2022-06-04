import { Button, CircularProgress, Grid, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useRegister } from "../api/register";
import { registerDto } from "../types";

export default function SignUp() {
  const initialValue = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
  };
  const methods = useForm({
    defaultValues: initialValue,
    mode: "onSubmit",
    reValidateMode: "onBlur"
  });
  const navigate = useNavigate();

  const {
    register,
    formState: { errors }
  } = methods;

  const { mutate, isLoading } = useRegister();
  

  const submitForm = async (values: registerDto) => {
     mutate(values);
     navigate("auth/login");
  };

  
  return (
    <>
      <form autoComplete="none" onSubmit={methods.handleSubmit(submitForm)}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <Typography color="secondary" fontSize={25} fontWeight="bold">
              Welcome to register windows
            </Typography>
          </Grid>
          <Grid item xs={12} md={12}>
            <Typography color="secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea nulla amet repellat
            </Typography>
          </Grid>
          <Grid item xs={12} md={12}>
            <TextField
              color="primary"
              type="text"
              label="Nom"
              fullWidth
              size="small"
              error={!!errors["firstName"]}
              helperText={errors["firstName"]?.message}
              {...register("firstName")}
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <TextField
              color="primary"
              type="text"
              label="Prénom"
              fullWidth
              size="small"
              error={!!errors["lastName"]}
              helperText={errors["lastName"]?.message}
              {...register("lastName")}
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <TextField
              color="primary"
              type="email"
              label="Email"
              fullWidth
              size="small"
              error={!!errors["email"]}
              helperText={errors["email"]?.message}
              {...register("email")}
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <TextField
              color="primary"
              type="text"
              label="Numéro téléphonique"
              fullWidth
              size="small"
              error={!!errors["phoneNumber"]}
              helperText={errors["phoneNumber"]?.message}
              {...register("phoneNumber")}
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <TextField
              color="primary"
              type="password"
              label="Mot de passe"
              fullWidth
              size="small"
              error={!!errors["password"]}
              helperText={errors["password"]?.message}
              {...register("password")}
            />
          </Grid>
          <Grid item xs={12} md={12} textAlign="center" width={100}>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              disabled={isLoading}
              endIcon={isLoading ? <CircularProgress color="primary" size={20} /> : null}>
              <Typography color="white">Signup</Typography>{" "}
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
}

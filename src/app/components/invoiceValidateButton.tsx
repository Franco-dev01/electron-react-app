import { Download, Save, Send } from "@mui/icons-material";
import { Button, Grid } from "@mui/material";

const ValidateButton = () => {
  return (
    <>
      <Grid item xs={12} md={2} textAlign="right">
        <Button type="submit" variant="contained" color="success" startIcon={<Save />}>
          Enregistrer
        </Button>
      </Grid>
      <Grid item xs={12} md={2} textAlign="right">
        <Button variant="contained" color="primary" startIcon={<Download />}>
          Télécharger
        </Button>
      </Grid>
      <Grid item xs={12} md={2} textAlign="right">
        <Button variant="contained" color="warning" startIcon={<Send />}>
          Envoyer
        </Button>
      </Grid>
    </>
  );
};

export default ValidateButton;

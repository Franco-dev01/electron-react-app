import { Box, Button } from "@mui/material";

const ErrorBoundaryFallback = () => {
    return (
        <Box
            flexGrow={1}
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                heigth: "100vh",
            }}
            role="alert">
            <h2> Erreur d affichage </h2>
            <Button variant="outlined" onClick={() => window.location.assign(window.location.origin)}>Reload</Button>
        </Box>
    );
};

export default ErrorBoundaryFallback;

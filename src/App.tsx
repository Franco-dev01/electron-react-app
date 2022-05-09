import "./App.css";
import { ThemeProvider } from "@emotion/react";
import CustomTheme from "./app/themes/index";
import { AppRoutes } from "./app/routes";
import { ErrorBoundary } from "react-error-boundary";
import ErrorBoundaryFallback from "./app/components/errorBoundaryFallback";
import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter } from "react-router-dom";
import { queryClient } from "./app/lib/react-query";
import { QueryClientProvider } from "react-query";
import { AuthProvider } from "./app/lib/auth";

function App() {
  return (
    <ThemeProvider theme={CustomTheme}>
      <BrowserRouter>
          <ErrorBoundary fallback={<ErrorBoundaryFallback />}>
        <QueryClientProvider client={queryClient}>
            <AuthProvider>
              <AppRoutes />
            </AuthProvider>
            <ReactQueryDevtools initialIsOpen/>
        </QueryClientProvider>
          </ErrorBoundary>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

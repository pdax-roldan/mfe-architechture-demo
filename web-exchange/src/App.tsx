import { Box, Container, Group } from "@mantine/core";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Page, CryptoPrices } from "./components";
import { AuthProvider } from "./contexts";

import LoginForm from "webKYC/LoginForm";
import RegistrationForm from "webKYC/RegistrationForm";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Page>
          <Container
            size="xl"
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Routes>
              <Route
                path="/"
                element={
                  <Group
                    direction="column"
                    align="center"
                    spacing="xl"
                    sx={{ width: "100%" }}
                  >
                    <CryptoPrices />
                  </Group>
                }
              />
              <Route
                path="/login"
                element={
                  <Box mt="xl">
                    <LoginForm />
                  </Box>
                }
              />
              <Route
                path="/register"
                element={
                  <Box mt="xl">
                    <RegistrationForm />
                  </Box>
                }
              />
            </Routes>
          </Container>
        </Page>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

import { Container } from "@mantine/core";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Page, LoginForm, RegistrationForm } from "./components";

function App() {
  return (
    <BrowserRouter>
      <Page>
        <Container
          sx={{
            minHeight: "75vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Routes>
            <Route path="/" element={<Navigate replace to="/login" />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegistrationForm />} />
          </Routes>
        </Container>
      </Page>
    </BrowserRouter>
  );
}

export default App;

import { useState } from "react";
import {
  Button,
  Container,
  Group,
  Header,
  Image,
  Modal,
  Text,
} from "@mantine/core";

import LoginForm from "webKYC/LoginForm";
import RegistrationForm from "webKYC/RegistrationForm";

export function Navbar() {
  const [isOpenLogin, setOpenLogin] = useState(false);

  const [isOpenRegistration, setOpenRegistration] = useState(false);

  return (
    <>
      <Modal
        opened={isOpenLogin}
        onClose={() => {
          setOpenLogin(false);
        }}
      >
        <LoginForm
          onSubmit={({ isAuthenticated, email, password }) => {
            console.log("isAuthenticated: ", isAuthenticated);
            console.log("Email: ", email);
            console.log("Password: ", password);
          }}
        />
      </Modal>

      <Modal
        opened={isOpenRegistration}
        onClose={() => {
          setOpenRegistration(false);
        }}
      >
        <RegistrationForm />
      </Modal>

      <Header height={60} sx={{ display: "flex", alignItems: "center" }}>
        <Container sx={{ width: "100%" }}>
          <Group sx={{ justifyContent: "space-between" }}>
            <Group spacing="xs">
              <Image
                src="https://w7.pngwing.com/pngs/32/936/png-transparent-cryptocurrency-bitcoin-logo-symbol-initial-coin-offering-cryptocurrency-logo-monochrome-eye.png"
                width="1.75rem"
              />
              <Text sx={{ fontSize: "1.25rem", fontWeight: "bold" }}>
                Cryptoko
              </Text>
            </Group>

            <Group>
              <Button
                variant="outline"
                onClick={() => {
                  setOpenLogin(true);
                }}
              >
                Login
              </Button>
              <Button
                variant="gradient"
                onClick={() => {
                  setOpenRegistration(true);
                }}
              >
                Create Account
              </Button>
            </Group>
          </Group>
        </Container>
      </Header>
    </>
  );
}

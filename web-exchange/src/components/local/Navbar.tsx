import { useState } from "react";
import {
  Avatar,
  Button,
  Container,
  Group,
  Header,
  Image,
  Modal,
  Text,
} from "@mantine/core";
import { useAuth } from "../../hooks";

import LoginForm from "webKYC/LoginForm";
import RegistrationForm from "webKYC/RegistrationForm";

export function Navbar() {
  const { isAuthenticated, setAuthenticated } = useAuth();

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
          onSubmit={() => {
            if (setAuthenticated) {
              setOpenLogin(false);
              setAuthenticated(true);
            }
          }}
        />
      </Modal>

      <Modal
        opened={isOpenRegistration}
        onClose={() => {
          setOpenRegistration(false);
        }}
      >
        <RegistrationForm
          onSubmit={() => {
            if (setAuthenticated) {
              setOpenRegistration(false);
              setAuthenticated(true);
            }
          }}
        />
      </Modal>
      <Header height={60} sx={{ display: "flex", alignItems: "center" }}>
        <Container size="xl" sx={{ width: "100%" }}>
          <Group sx={{ justifyContent: "space-between" }}>
            <Group spacing="xs" onClick={() => {}} sx={{ cursor: "pointer" }}>
              <Image
                src="https://w7.pngwing.com/pngs/32/936/png-transparent-cryptocurrency-bitcoin-logo-symbol-initial-coin-offering-cryptocurrency-logo-monochrome-eye.png"
                width="1.75rem"
              />
              <Text sx={{ fontSize: "1.25rem", fontWeight: "bold" }}>
                Cryptoko
              </Text>
            </Group>

            <Group>
              {isAuthenticated ? (
                <Avatar src="https://avatars.dicebear.com/api/adventurer/john-doe.svg" />
              ) : (
                <>
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
                </>
              )}
            </Group>
          </Group>
        </Container>
      </Header>
    </>
  );
}

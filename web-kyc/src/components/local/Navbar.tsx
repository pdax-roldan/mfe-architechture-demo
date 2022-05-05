import { useLocation, useNavigate } from "react-router-dom";
import { Button, Container, Group, Header, Image, Text } from "@mantine/core";

export function Navbar() {
  const navigate = useNavigate();

  const location = useLocation();

  return (
    <Header height={60} sx={{ display: "flex", alignItems: "center" }}>
      <Container size="xl" sx={{ width: "100%" }}>
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
            {location.pathname === "/register" && (
              <Button
                variant="outline"
                onClick={() => {
                  navigate("/login");
                }}
              >
                Login
              </Button>
            )}

            {location.pathname === "/login" && (
              <Button
                variant="gradient"
                onClick={() => {
                  navigate("/register");
                }}
              >
                Create Account
              </Button>
            )}
          </Group>
        </Group>
      </Container>
    </Header>
  );
}

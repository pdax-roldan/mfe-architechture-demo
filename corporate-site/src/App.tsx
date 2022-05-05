import { lazy, Suspense } from "react";
import {
  Button,
  Container,
  Group,
  LoadingOverlay,
  Text,
  Title,
} from "@mantine/core";
import { ErrorBoundary, Page } from "./components";

const CryptoPrices = lazy(() => import("webExchange/CryptoPrices"));

function App() {
  return (
    <Page>
      <Container>
        <Group
          direction="column"
          align="center"
          sx={{ padding: "5rem 0" }}
          spacing="xl"
        >
          <Group direction="column" align="center">
            <Title>Buy and Sell Crypto Currency</Title>
            <Text>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </Text>
          </Group>

          <Group>
            <Button size="md" variant="gradient">
              Get Started
            </Button>
            <Button size="md" variant="outline">
              Learn More
            </Button>
          </Group>

          <Suspense fallback={<LoadingOverlay visible />}>
            <ErrorBoundary>
              <CryptoPrices />
            </ErrorBoundary>
          </Suspense>
        </Group>
      </Container>
    </Page>
  );
}

export default App;

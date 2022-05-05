import { useState } from "react";
import {
  Button,
  Checkbox,
  PasswordInput,
  SimpleGrid,
  TextInput,
  Title,
} from "@mantine/core";

type LoginFormProps = {
  onSubmit?: (props: {
    isAuthenticated?: boolean;
    email?: string;
    password?: string;
  }) => void;
};

export default function LoginForm({ onSubmit }: LoginFormProps) {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  return (
    <form
      noValidate
      style={{ minWidth: "25rem", maxWidth: "30rem" }}
      onSubmit={(e) => {
        e.preventDefault();

        if (onSubmit) {
          onSubmit({ isAuthenticated: true, ...formValues });
        }
      }}
    >
      <SimpleGrid>
        <Title order={2} sx={{ textAlign: "center" }}>
          Login to your account.
        </Title>

        <TextInput
          required
          type="email"
          label="Email"
          placeholder="Email"
          width="100%"
          size="md"
          onChange={(e) => {
            setFormValues((prevValues) => ({
              ...prevValues,
              email: e.target.value,
            }));
          }}
        />

        <PasswordInput
          required
          label="Password"
          placeholder="Password"
          width="100%"
          size="md"
          onChange={(e) => {
            setFormValues((prevValues) => ({
              ...prevValues,
              password: e.target.value,
            }));
          }}
        />

        <Checkbox label="I'm not a robot" mt="sm" />

        <Button type="submit" mt="md" size="md">
          Submit
        </Button>
      </SimpleGrid>
    </form>
  );
}

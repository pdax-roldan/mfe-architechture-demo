import {
  Button,
  Checkbox,
  Group,
  PasswordInput,
  SimpleGrid,
  TextInput,
  Title,
} from "@mantine/core";

type RegistrationFormProps = {
  onSubmit?: (props: { isAuthenticated?: boolean }) => void;
};

export default function RegistrationForm({ onSubmit }: RegistrationFormProps) {
  return (
    <form
      noValidate
      style={{ minWidth: "25rem", maxWidth: "30rem" }}
      onSubmit={(e) => {
        e.preventDefault();

        if (onSubmit) {
          onSubmit({ isAuthenticated: true });
        }
      }}
    >
      <SimpleGrid>
        <Title order={2} sx={{ textAlign: "center" }}>
          Create your account.
        </Title>

        <TextInput
          required
          label="First Name"
          placeholder="First Name"
          width="100%"
          size="md"
        />
        <TextInput
          required
          label="Last Name"
          placeholder="Last Name"
          width="100%"
          size="md"
        />

        <TextInput
          required
          type="email"
          label="Email"
          placeholder="Email"
          width="100%"
          size="md"
        />

        <PasswordInput
          required
          label="Password"
          placeholder="Password"
          width="100%"
          size="md"
        />

        <Checkbox label="I'm not a robot" mt="sm" />

        <Button type="submit" mt="md" size="md">
          Submit
        </Button>
      </SimpleGrid>
    </form>
  );
}

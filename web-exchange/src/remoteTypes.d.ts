type RemoteFormProps = {
  onSubmit?: (props: { isAuthenticated?: boolean }) => void;
};

declare module "webKYC/LoginForm" {
  const LoginForm: React.ComponentType<RemoteFormProps>;

  export default LoginForm;
}

declare module "webKYC/RegistrationForm" {
  const RegistrationForm: React.ComponentType<RemoteFormProps>;

  export default RegistrationForm;
}

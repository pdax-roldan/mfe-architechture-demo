declare module "webExchange/CryptoPrices" {
  const CryptoPrices: React.ComponentType;

  export default CryptoPrices;
}

type RemoteFormProps = {
  onSubmit?: (props: {
    isAuthenticated?: boolean;
    email?: string;
    password?: string;
  }) => void;
};

declare module "webKYC/LoginForm" {
  const LoginForm: React.ComponentType<RemoteFormProps>;

  export default LoginForm;
}

declare module "webKYC/RegistrationForm" {
  const RegistrationForm: React.ComponentType<RemoteFormProps>;

  export default RegistrationForm;
}

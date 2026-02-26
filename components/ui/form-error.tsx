interface FormErrorProps {
  touched?: boolean;
  error?: string;
}

export function FormError({ touched, error }: FormErrorProps) {
  if (!touched || !error) return null;

  return <p className="text-red-500 text-xs">{error}</p>;
}
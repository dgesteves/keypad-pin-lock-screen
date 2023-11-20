import { useState, ChangeEvent } from 'react';

type ReturnProps<T> = [
  T,
  (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => void,
  () => void,
  { [K in keyof T]?: string }
];

type ValidationFunc<T> = (value: T) => string | null;

export function useFormInput<T extends object>(
  initialState: T,
  validations: { [K in keyof T]?: ValidationFunc<T[K]> }
): ReturnProps<T> {
  const [values, setValues] = useState<T>(initialState);
  const [errors, setErrors] = useState<{ [K in keyof T]?: string }>({});

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    if ('name' in e.target) {
      const name = e.target.name as keyof T;
      const value = (e.target.value as string).trim() as T[keyof T];
      setValues({
        ...values,
        [name]: value,
      });

      if (validations[name]) {
        const error = validations[name]!(value);
        setErrors({
          ...errors,
          [name]: error,
        });
      }
    }
  };

  const reset = () => {
    setValues(initialState);
    setErrors({});
  };

  return [values, handleChange, reset, errors];
}

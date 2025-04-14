export type InputProps = {
  type?: string;
  name?: string;
  id?: string;
  label?: string;
  place?: string;
  error?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
};

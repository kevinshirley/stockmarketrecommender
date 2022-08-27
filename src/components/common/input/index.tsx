import TextField from '@mui/material/TextField';

interface IInputField {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
  ariaLabel?: string;
}

export default function InputField({
  onChange = () => {},
  placeholder,
  className,
  ariaLabel,
}: IInputField) {
  return (
    <TextField
      placeholder={placeholder}
      className={className}
      inputProps={{ 'aria-label': ariaLabel }}
      onChange={onChange}
    />
  )
}

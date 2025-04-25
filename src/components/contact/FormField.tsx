import React, { forwardRef } from 'react';
import { IMaskInput } from 'react-imask';
interface FormFieldProps {
  id: string;
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | string) => void;
  placeholder: string;
  error?: string;
  required?: boolean;
  isTextarea?: boolean;
  isPhone?: boolean;
}
type PhoneInputProps = {
  onChange: (value: string) => void;
  value: string;
  placeholder: string;
  id: string;
};
const PhoneInputMask = forwardRef<HTMLInputElement, PhoneInputProps>((props, ref) => {
  const {
    onChange,
    ...rest
  } = props;
  return <IMaskInput {...rest} mask="+{7} (000) 000-00-00" unmask={false} inputRef={ref as any} onAccept={value => onChange(value)} overwrite className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/30" />;
});
const FormField: React.FC<FormFieldProps> = ({
  id,
  label,
  type,
  value,
  onChange,
  placeholder,
  error,
  required = false,
  isTextarea = false,
  isPhone = false
}) => {
  const InputComponent = isTextarea ? 'textarea' : 'input';
  const handlePhoneChange = (value: string) => {
    onChange(value);
  };
  return <div>
      <label htmlFor={id} className="block text-foreground font-medium mb-2">
        {label}{required ? '*' : ''}
      </label>
      
      {isPhone ? <PhoneInputMask id={id} value={value} onChange={handlePhoneChange} placeholder={placeholder} /> : <InputComponent id={id} type={type} value={value} onChange={e => onChange(e)} className={`w-full px-4 py-3 rounded-lg border ${error ? 'border-destructive' : 'border-border'} bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 ${isTextarea ? 'min-h-[120px]' : ''}`} placeholder={placeholder} />}
      
      {error && <p className="mt-1 text-red-600 text-sm font-normal mx-0 px-0 my-[3px]">{error}</p>}
    </div>;
};
export default FormField;
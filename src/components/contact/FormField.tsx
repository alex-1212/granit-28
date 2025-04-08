
import React from 'react';

interface FormFieldProps {
  id: string;
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  placeholder: string;
  error?: string;
  required?: boolean;
  isTextarea?: boolean;
}

const FormField: React.FC<FormFieldProps> = ({
  id,
  label,
  type,
  value,
  onChange,
  placeholder,
  error,
  required = false,
  isTextarea = false
}) => {
  const InputComponent = isTextarea ? 'textarea' : 'input';
  
  return (
    <div>
      <label htmlFor={id} className="block text-foreground font-medium mb-2">
        {label}{required ? '*' : ''}
      </label>
      <InputComponent 
        id={id} 
        type={type} 
        value={value} 
        onChange={onChange} 
        className={`w-full px-4 py-3 rounded-lg border ${error ? 'border-destructive' : 'border-border'} bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 ${isTextarea ? 'min-h-[120px]' : ''}`} 
        placeholder={placeholder} 
      />
      {error && <p className="mt-1 text-sm text-destructive">{error}</p>}
    </div>
  );
};

export default FormField;

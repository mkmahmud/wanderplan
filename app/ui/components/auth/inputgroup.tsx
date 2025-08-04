interface InputGroupProps {
    label: string;
    name: string;
    type?: string;
    placeholder?: string;
    register: any; // You can use `UseFormRegister` from react-hook-form for better typing
    error?: any;
}

export default function InputGroup({ name, label, type = 'text', placeholder, register, error }: InputGroupProps) {
    return (
        <div className="mt-10">
            <label htmlFor={name} className="block  font-medium text-neutral-700">{label}</label>
            <input
                {...register(name, { required: `${label} is required` })}

                type={type}
                id={name}
                className="mt-1 block w-full rounded-lg border-neutral-300 shadow-sm focus:border-primary focus:ring-primary"
                placeholder={placeholder}
            />
            {error && <span className="text-red-500 text-xs">{error.message}</span>}

        </div>
    )
}
import React from 'react';
import { useForm } from 'react-hook-form';

const FormBoilerplate = ({ onSubmitForm, defaultValues = {}, fields = [] }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ defaultValues });

    const renderField = (field) => {
        const { name, label, type, options, validation } = field;

        switch (type) {
            case 'text':
            case 'email':
            case 'password':
            case 'number':
                return (
                    <div key={name} className="mb-4">
                        <label className="block mb-1 font-medium">{label}</label>
                        <input
                            {...register(name, validation)}
                            type={type}
                            className="w-full p-2 border rounded"
                        />
                        {errors[name] && (
                            <p className="text-red-500 text-sm">{errors[name].message}</p>
                        )}
                    </div>
                );
            case 'select':
                return (
                    <div key={name} className="mb-4">
                        <label className="block mb-1 font-medium">{label}</label>
                        <select {...register(name, validation)} className="w-full p-2 border rounded">
                            {options.map((opt) => (
                                <option key={opt.value} value={opt.value}>
                                    {opt.label}
                                </option>
                            ))}
                        </select>
                        {errors[name] && (
                            <p className="text-red-500 text-sm">{errors[name].message}</p>
                        )}
                    </div>
                );
            case 'checkbox':
                return (
                    <div key={name} className="mb-4 flex items-center">
                        <input
                            type="checkbox"
                            {...register(name, validation)}
                            className="mr-2"
                        />
                        <label>{label}</label>
                        {errors[name] && (
                            <p className="text-red-500 text-sm">{errors[name].message}</p>
                        )}
                    </div>
                );
            case 'radio':
                return (
                    <div key={name} className="mb-4">
                        <p className="mb-1 font-medium">{label}</p>
                        {options.map((opt) => (
                            <label key={opt.value} className="mr-4">
                                <input
                                    {...register(name, validation)}
                                    type="radio"
                                    value={opt.value}
                                    className="mr-1"
                                />
                                {opt.label}
                            </label>
                        ))}
                        {errors[name] && (
                            <p className="text-red-500 text-sm">{errors[name].message}</p>
                        )}
                    </div>
                );
            default:
                return null;
        }
    };

    const onSubmit = (data) => {
        onSubmitForm(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-4 bg-white shadow-md rounded">
            {fields.map((field) => renderField(field))}
            <button
                type="submit"
                className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            >
                Submit
            </button>
        </form>
    );
};

export default FormBoilerplate;

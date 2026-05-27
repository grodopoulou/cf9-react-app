import {useState} from "react";

type FormValues = {
    name: string,
    email: string,
    message: string,
}

// const formSchema = z.objext({
//     name: z.string().trim().min(1, {error: "Name is required"}),
//     email: z.email().min(1, {error: "Email is required"}),
//     message: z
//         .string()
//         .trim()
//         .min(5, {error: "Message must be at least 5 characters long"})
//         .max(500, {error: "Message must be at most 500 characters long"}),
// })

type FormErrors = {
    name?: string,
    email?: string,
    message?: string,
}

// type FormErrors = Partial<FormValues>;

const initialValues: FormValues = {
    name: "",
    email: "",
    message: "",
}

const emailRegex =
/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;

const MultiFieldFormWithValidation = () => {
    const [values, setValues] = useState<FormValues>(initialValues);
    const [errors, setErrors] = useState<FormErrors>({});
    const [submittedData, setSubmittedData] = useState<FormValues | null>(null);

    const validatedForm = (values: FormValues): FormErrors => {
        const errors: FormErrors = {}

        if (!values.name.trim()) {
            errors.name = "Name is required";
        }
        if (!values.email.trim() || !emailRegex.test(values.email)) {
            errors.email = "Invalid Email Address";
        }
        if (!values.message.trim() || values.message.length < 5) {
            errors.message = "Message must be at least 5 characters";
        }
        return errors;
    }

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const {name, value} = e.target;
        setValues((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: undefined }));
    }

    const handleClear = () => {
        setValues(initialValues);
        setErrors({});
    }

    const handleSubmit = (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        const validationErrors = validatedForm(values);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setSubmittedData(null);
            return;
        }

        setSubmittedData(values)
        setValues(initialValues)
        setErrors({});
    }

    return (
        <>
            <form
                onSubmit={handleSubmit}
                className="max-w-md mx-auto space-y-4">
                <div>
                    <input
                        type="text"
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                        placeholder="Type your Name"
                        className="w-full border rounded px-4 py-2"
                    />
                    {errors.name && (
                        <p className="text-cf-dark-red text-sm mt-1">{errors.name}</p>
                    )}
                </div>
                <div>
                    <input
                        type="text"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        placeholder="Type your Name"
                        className="w-full border rounded px-4 py-2"
                    />
                    {errors.email && (
                        <p className="text-cf-dark-red text-sm mt-1">{errors.email}</p>
                    )}
                </div>
                <div>
                    <textarea
                        name="message"
                        value={values.message}
                        onChange={handleChange}
                        placeholder="Type your Message"
                        className="w-full border rounded px-4 py-2"
                    >
                    </textarea>
                    {errors.message && (
                        <p className="text-cf-dark-red text-sm mt-1">{errors.message}</p>
                    )}
                </div>

                <div className="flex gap-4">
                    <button
                        type="submit"
                        className="bg-cf-dark-red text-white px-4 py-2">
                        Submit
                    </button>
                    <button
                        onClick={handleClear}
                        className="bg-cf-dark-gray text-white px-4 py-2">
                        Clear
                    </button>
                </div>
            </form>

            {submittedData && (
                <>
                <div className="mt-6 pt-4 max-w-md mx-auto border-t space-y-2">
                    <p><strong>Name:</strong>{submittedData.name}</p>
                    <p><strong>Name:</strong>{submittedData.email}</p>
                    <p><strong>Name:</strong>{submittedData.message}</p>
                </div>
                </>
            )}
        </>
    )
}

export default MultiFieldFormWithValidation;
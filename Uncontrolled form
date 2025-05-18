import { useForm } from "react-hook-form";

export const ReactHookForms = () => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            firstName:'Jhon',
            lastName:'',
            Email: '',
            mobileNumber: ['', ''],
            social : {
                linkedIn: '',
                instagram: '',
            }
        },
    });
    const onSubmit = data => console.log('Form submitted : ',data);

    return (
        <form onSubmit={handleSubmit(onSubmit)} id='ReactHookForm' className=" mx-auto my-5 border border-3 border-primary p-3 rounded-4 " noValidate>

            <h3 className="fw-bold text-center my-3"> React Hook Form </h3>

            <div className="py-2">
                <label htmlFor="Name" className="form-label m-0 fw-semibold text-muted">Name : </label>
                <input type="text" placeholder="First name" className="form-control"
                    {...register("firstName", { required: {    
                        //--- firstName mentioned here is the name attribute value which must be same as the htmlFor value in the label element ---
                        value: true,
                        message:'First name is required *'
                    }, maxLength: 10 })} />
                <input type="text" placeholder="Last name" className="form-control mt-1"
                    {...register("lastName", {
                        required: {
                            value: false,
                        }, maxLength: 10
                    })} />
                <p className="error text-danger m-0 pt-2">{errors.firstName?.message}</p>  
                {/* --- firstName mentioned here is same as the contnt given in the htmlFor value in the label tag ---  */}
            </div>

            <div className="py-2">
                <label htmlFor="Email" className="form-label m-0 fw-semibold text-muted">Email : </label>
                <input type="email" placeholder="Email" className="form-control"
                    {...register("Email", { 
                    required: {
                        value: true,
                        message: 'E-mail is required *'
                    }, 
                    pattern: {
                        value: /^\S+@\S+$/i, 
                        message: 'Invalid email format'
                    }, 
                    validate: {
                        notAdmin: (fieldValue) => {
                            return fieldValue !== 'admin@gmail.com' || 'Enter a diffrent email'
                        }
                    }
                     })} />
                <p className="error text-danger m-0 pt-2">{errors.Email?.message}</p>
            </div>

            <div className="py-2">
                <label htmlFor="mobileNumber" className="form-label m-0 fw-semibold text-muted">Mobile : </label>
                <input type="tel" placeholder="Primary number" className="form-control"
                    {...register("mobileNumber.0", { required: {
                        value: true,
                        message: 'Primary mobile number is required *'
                    }, maxLength: 13 })} />

                <input type="tel" placeholder="Secondary number" className="form-control mt-1"
                    {...register("mobileNumber.1", { required: {
                        value: false,
                    }, maxLength: 13 })} />
                <p className="error text-danger m-0 pt-2">{errors.mobileNumber?.[0]?.message}</p>
            </div>

            <div className="py-2">
                <label htmlFor="social" className="form-label m-0 fw-semibold text-muted">Social Links : </label>
                <input type="text" placeholder="Linked In" className="form-control"
                    {...register("social.linkedIn", { required: {
                        value: true,
                        message: 'Provide LinkedIn profile URL *'
                    }}  )} />

                <input type="text" placeholder="Instagram" className="form-control mt-1"
                    {...register("social.instagram")} />
                    <p className="error text-danger m-0 pt-2">{errors.social?.linkedIn?.message}</p>
            </div>

            <button type="submit" className="btn btn-primary w-100 my-3"> Submit</button>

        </form>
    )
}

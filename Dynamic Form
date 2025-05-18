import { useFieldArray, useForm } from 'react-hook-form';

export const DynamicForms = () => {

    const { register, handleSubmit, control} = useForm({
        defaultValues: {
            skills:[{
                skill: ''
            }],
        },
    });

    const {fields, append, remove} = useFieldArray({
        name: 'skills',
        control
    });

    const onSubmit = data => console.log('Form submitted : ', data);

  return (
      <>        
      <form onSubmit={handleSubmit(onSubmit)} id='ReactHookForm' className=" mx-auto my-5 border border-3 border-primary p-3 rounded-4 " noValidate>

          <h3 className="fw-bold text-center my-3"> Dynamic Form </h3>

              <div className="py-2">
                  <label htmlFor="Skills" className="form-label m-0 fw-semibold text-muted">List of Skills : </label>
                    <div>
                        {fields.map((field, index) => {
                            return(
                                <div className='py-2 d-flex' key={field.id}>
                                    <input type="text" placeholder="Skills" className="form-control w-75"
                                        {...register(`Skills.${index}.skill`)} />
                                        {
                                            index > 0 && (
                                                <button type='button' className='btn btn-danger w-25'
                                                    onClick={() => remove(index)}>Remove</button>
                                            )
                                        }
                                </div>
                            );
                        })}
                        <button type='button' className='btn btn-outline-success'
                            onClick={() => append({ skill: ''})} >Add Skill</button>
                    </div>

              </div>
      </form>
      </>
  )
}

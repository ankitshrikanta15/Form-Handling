import { useForm } from "react-hook-form";


const Form = ({handleFormSubmitData}) => {
  const {register, handleSubmit, reset} = useForm();

  const handleFormSubmit = (data) => {
    handleFormSubmitData(data);
    reset();
  }

  return (
    <div className="mt-10 flex gap-10 justify-center">
      <form className="flex gap-10" action="" onSubmit={handleSubmit(handleFormSubmit)}>
        <input {...register('name')} className="rounded-md px-2 py-1 text-base font-semibold outline-none" type="text" placeholder="name" />
        <input {...register('email')} className="rounded-md px-2 py-1 text-base font-semibold outline-none" type="text" placeholder="e-mail" />
        <input {...register('image')} className="rounded-md px-2 py-1 text-base font-semibold outline-none" type="text" placeholder="image URL" />
        <input className="py-1 px-3 bg-sky-500 text-white text-md font-semibold rounded-sm" type="submit" />
      </form>
    </div>
  )
};

export default Form;
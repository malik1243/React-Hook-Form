import { useForm } from "react-hook-form"


export default function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()


  const onSubmit = (data) => console.log(data)


  console.log(watch("example")) 


  return (
    <>
    <h1 className="text-[2rem] mt-3 ml-3">React Hook Form</h1>
    <div className="border-2  ml-4 shadow-xl rounded-xl border-black flex justify-center align-middle h-[250px] mt-5 w-[250px] gap-3">
    
    <form onSubmit={handleSubmit(onSubmit)}>
      <input  className="border-2 rounded-xl mt-7 mb-4 align-middle justify-center border-black" defaultValue="test"{...register("example")} /> <br />
      {errors.exampleRequired && <span className="text-red-600">This field is required</span>}


      <input className="border-2 border-black rounded-xl" {...register("exampleRequired", { required: true })} /> <br />
      {errors.exampleRequired && <span className="text-red-600">This field is required</span>}


      <input className="border-2 mt-5 p-3 bg-black text-white" type="submit" />
    </form>
   
    </div>
    </>
  )
}
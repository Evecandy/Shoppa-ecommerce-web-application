import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup";
import { addProductSchema } from "../../schemas";
 

function ProductsAdmin() {
  const { register, handleSubmit, formState:{errors}, } = useForm({resolver:yupResolver(addProductSchema)})
  const onSubmit = async (data)=>{
    console.log(data);
    console.log({...data, file:data.file[0]});
    const {file, ...fData} = data
    const formData = new FormData()
    formData.append('file', file[0])
    formData.append('json', JSON.stringify({...fData}))
    const response = await fetch("http://localhost:3000/upload", {
      method: "POST",
      body: formData
    })
    console.log(response);
    console.log(await response.json());
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register('name')} placeholder="product name"></input>
        <input type="file" name="file" id="file" {...register("file")} />
        <div>{errors.file?.message}</div>
        <input type="submit" value="upload file" />

      </form>
      <p id="upload-status"></p>
    </>
  )
}

export default ProductsAdmin



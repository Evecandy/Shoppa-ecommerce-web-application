import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { addProductSchema } from "../../schemas";
import "./ProductsAdmin.css"
import { useState } from "react";
import Loader from "../../Components/Loader";

function ProductsAdmin() {
  let [ uploadStatus, setUploadStatus ] = useState(null)
  let [ loading, setLoading ] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({ resolver: yupResolver(addProductSchema) });

  const onSubmit = async (data) => {
    try{
    setLoading(true)
    setUploadStatus(null)
    const { file, ...fData } = data;
    const formData = new FormData();
    formData.append("file", file[0])
    formData.append("json", JSON.stringify({ ...fData }));

    const response = await fetch('http://localhost:8080/products', {
      headers:{
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImRlMjhmMzNjLTI3YzctNDBiOC1iODg2LTkxYjE1NjU0MWVmNiIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY4OTgyMjYxMH0.5E9HuT2woPfw8BFjUnvMjvfoC4Jg1cSFZvzK5zT7944"
      },
      method: "POST",
      body: formData,
    });

    const responseData = await response.json()
   setLoading(false)
   if (response.ok) {
    console.log(responseData);
    setUploadStatus({type:'success', message: responseData.message})
    reset({name:'', category:'', price:'', file:''})
   }else {
    console.log(responseData);
    setUploadStatus({type:'error', message: responseData.message})
   }

  }catch(error) {
    setLoading(false)
    console.log(error);
  }

  };

  return (
    
    <div id="products-container">
      {uploadStatus && <p id="upload-status" className={uploadStatus.type === 'success' ? 'success' : 'error'}>{uploadStatus.message}</p>}
        
      <div>
        <form id="new-product-form" onSubmit={handleSubmit(onSubmit)}>
          <h3>Add Product</h3>
          <div className="input-wrapper">
            <label htmlFor="">Product Name</label>
            <input type="text" {...register("name")} placeholder="product name"/>
          </div>
          <div className="input-wrapper">
            <label htmlFor="">Price in Ksh</label>
            <input type="number"  id="" placeholder="price" {...register("price")} />
          </div>
          <div className="input-wrapper">
            <label htmlFor="">Category</label>
            <select id="category" defaultValue='' {...register("category")}>
              <option value="" disabled >Pick a category</option>
              <option value="women">Women</option>
              <option value="men">Men</option>
              <option value="kids">Kids</option>
            </select>
          </div>
          <div className="input-wrapper">
            <label htmlFor="">Product image</label>
            <input type="file" name="files" id="file" {...register("file")} />
          </div>
          <div>{errors.file?.message}</div>
          { loading ? <Loader/> : <input type="submit" value="Add Product" className="btn green-btn"/>}
          
        </form>
        
      </div>
    </div>
  );
}

export default ProductsAdmin;

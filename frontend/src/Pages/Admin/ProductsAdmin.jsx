import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { addProductSchema } from "../../schemas";
import Sidebar from "../../Components/Sidebar";
import "./ProductsAdmin.css"

function ProductsAdmin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(addProductSchema) });
  const onSubmit = async (data) => {
    const { files, ...fData } = data;
    console.log(data.files);
    const formData = new FormData();
    formData.append("file", files[0]);
    formData.append("json", JSON.stringify({ ...fData }));
    // console.log(formData);
    const response = await fetch("http://localhost:8080/products", {
      headers:{
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImRlMjhmMzNjLTI3YzctNDBiOC1iODg2LTkxYjE1NjU0MWVmNiIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY4OTgyMjYxMH0.5E9HuT2woPfw8BFjUnvMjvfoC4Jg1cSFZvzK5zT7944"
      },
      method: "POST",
      body: formData,
    });
   
    console.log(await response.json());
  };

  return (
    
    <div id="products-container">
      
      <div id="new-product-form">
        <form onSubmit={handleSubmit(onSubmit)}>
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
            <input type="text" placeholder="category" {...register("category")} />
          </div>
          <div className="input-wrapper">
            <label htmlFor="">Product image</label>
            <input type="file" name="file" id="file" {...register("file")} />
          </div>
          <div>{errors.file?.message}</div>
          <input type="submit" value="Add Product" className="btn green-btn"/>
        </form>
        <p id="upload-status"></p>
      </div>
    </div>
  );
}

export default ProductsAdmin;

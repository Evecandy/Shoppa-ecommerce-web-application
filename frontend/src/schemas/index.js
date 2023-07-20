import * as yup from "yup";


export const addProductSchema = yup.object().shape({
    name: yup.string().required("Product name is required"),
    price:yup.number("Price must be a number").required("Please provide a price for your product"),
    category:yup.string().required("Pick a category"),
    file: yup.mixed()
            .test('fileRequired', 'Please select a file', function (value) {
                return value !== undefined && value.length > 0;
            })
            .test("fileType", "Invalid image",value => value && value.length ? value[0].type.startsWith("image/") : true )
  })


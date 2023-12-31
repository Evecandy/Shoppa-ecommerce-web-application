
import joi from "joi";


const createUserSchema = joi.object({
    Username: joi.string().min(2).max(50).required(),
    EmailAddress: joi.string().max(100).required(),
    Password: joi.string().min(6).required()
})


export default createUserSchema;
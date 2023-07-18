
import {getUsers, createUsers, getOneUser, updateUser, deleteUser} from "../controllers/user.controller.js";
import { validateCreateUserData } from "../customMiddlewares/user.validations.js";
import { signup, signin} from "../controllers/user.controller.js";
import { verifyUser } from "../customMiddlewares/auth.js";


const UserRoutes = (app) => {
    app.route('/users').get(getUsers).post(validateCreateUserData, createUsers);
    app
      .route('/users/:Username')
      .get(getOneUser)
      .put(updateUser)
      .delete(deleteUser);

      app.route('/auth/signup').post(signup);

      app.route('/auth/signin').post(signin);

}

export default UserRoutes;
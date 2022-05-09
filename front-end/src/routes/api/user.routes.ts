import { Router } from "express";
import * as controller from '../../controller/user.controller'
const UserRoutes = Router()
UserRoutes.get('/' ,controller.GetUser)
export default UserRoutes
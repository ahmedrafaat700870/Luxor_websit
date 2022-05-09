import { Router } from "express";
import UserRoutes from "./api/user.routes";
const MainRoutes = Router()
MainRoutes.use('/user', UserRoutes)
export default MainRoutes
import { Request , Response , NextFunction } from "express";
import Error from '../interface/Error.interface'
const HendelError = ( error: Error, req: Request , res: Response , next: NextFunction) => {
    const status = error.status || 404  ;
    const message = error.message || 'oh you can not vist this site ...'
    res.status(status).json({
        saccess: "false",
        message: message
    })
}
export default HendelError ;
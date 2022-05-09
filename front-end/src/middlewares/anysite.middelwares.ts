import { Request, Response, NextFunction } from "express"
const Anysite = (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json("this site not avlable")
}
export default Anysite

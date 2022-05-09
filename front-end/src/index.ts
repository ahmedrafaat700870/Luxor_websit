import express , {Application, NextFunction , Request , Response} from 'express'
import config from './config'
import morgan from 'morgan'
import helmet from 'helmet'
import limiter from './middlewares/rateLImiter.middleware'
import MainRoutes from './routes'
import Anysite from './middlewares/anysite.middelwares'
// HendleErrors Packge 
import HendelError from './middlewares/HendelError.middelware'
const app : Application = express()
// middlewares
app.use(express.json())
app.use(morgan('common'))
app.use(helmet())
app.use(limiter)
// test endpint test
app.use(MainRoutes)
// hedleErrors
app.use(HendelError)
app.use(Anysite)
const PORT = config.PORT || 3000 
app.listen(PORT , () => {
    console.log('SERVER is runing on port ' , PORT , ' try url : localhost:',PORT);
})
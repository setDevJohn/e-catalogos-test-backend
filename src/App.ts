import cors from 'cors';
import env from 'dotenv';
import express, {
    Request,
    Response,
    NextFunction
} from "express";
import { routes } from './routes';


export class App {
    app: express.Application;

    constructor() {
        this.app = express();
        this.config();
    }

    private config(): void {
        env.config();
        this.app.use(express.json());
        this.app.use(this.accessControl);
        this.app.use(cors());
        this.app.use(routes);
    }

    private accessControl(_req: Request, res: Response, next: NextFunction): void {
        res.header('Access-Control-Allow-Origin', '*')
        res.header('Access-Control-Allow-Methods', 'GET')
        res.header('Access-Control-Allow-Headers', '*')
        next()
    }

    public start(PORT: number | string): void {
        this.app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        })
    }
}
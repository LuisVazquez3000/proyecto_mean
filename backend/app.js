import  express, { urlencoded }  from "express";
import dotenv from 'dotenv';
import { conexionDB } from "./config/db.js";
import router from './routes/routes.js'
const app = express();

dotenv.config(); //variables de entornos
//middlewares
app.use(express.json());
app.use(urlencoded({extended:true}))
app.use("/api/products", router);
app.get("/saludo", (req, res)=>{
	res.send("Hola mundo");
})
app.use((req, res, next)=>{
	res.send("prueba")
	console.log("hola mundo");
	next();
})


// express.json() función de middleware integrada en Express. Este método se usa para analizar las solicitudes entrantes con cargas JSON y se basa en el analizador de cuerpo.body-parser

const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;



// app.listen(PORT, (req, res)=>{
	
// 	conexionDB(MONGO_URI)
// 	console.log("Mongo DB is connected!!");
// 	console.log(`server is running http://localhost:${PORT}` );
// })

const start = async ()=>{
	try {
		await conexionDB(MONGO_URI)
		console.log("Mongo DB is connected!!");
		app.listen(PORT, () => {
			console.log(`Server started on http://localhost:${PORT}`);
		});
	} catch (error) {
		console.log(error);
	}
}

start();

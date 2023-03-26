import mongoose from "mongoose";

mongoose.set('strictQuery', false);

export const conexionDB = (uri)=>{
	return mongoose.connect(uri)
}  
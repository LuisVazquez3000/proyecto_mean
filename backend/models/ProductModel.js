import mongoose from 'mongoose';
//el modelo nos va a conectar con la base de datos
//creamos un esquema
export const productSchema = new mongoose.Schema(
{
	description:{
		type:String,
		required:[true, "Please complete the field"]
	},
	stock:{
		type:Number,
		required:[true, "Please complete the field"]
	},
	price:{
		type:Number,
		required:[true,"Please complete the field"]
	}	
},
{
	timestamps:true,
	versionKey:false
}
);

//creamos el modelo a partir del esquema
export const ProductModel = mongoose.model('Product',productSchema);


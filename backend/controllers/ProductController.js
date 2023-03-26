import{ProductModel}from '../models/ProductModel.js';

export const getProducts = async (req, res)=>{
	try {
			const products = await ProductModel.find()
			res.status(200).json(products);			
	} catch (error) {
		res.status(500).json({message:error.message})
		console.log(error);
	}
	// res.json({msg:"getProducts"});
}
export const getProduct= async(req, res)=>{
	try {
		const {id} = req.params;
		const product = await ProductModel.findById(id);
		if (!product) {
		return res.status(404).json(`Product with ID: ${id} not found`);	
		}
		res.status(200).json(product);
	} catch (error) {
		res.status(500).json({message:error.message})
		console.log(error);
	}
	
	
// const {id}=	req.params;
// 	res.json({id});
//	res.json({msg:"getProduct"});
}
export const createProduct= async (req, res)=>{
	//console.log(req.body);
	const obj = req.body;
	try {
		const product = await ProductModel.create(obj)
		console.log('producto',product);
		res.status(201).json(product);
	} catch (error) {
		res.status(500).json({message:error.message})
	}
}
export const updateProduct= async (req, res)=>{
	
	try {
		const {id} = req.params;
		const product = await ProductModel.findOneAndUpdate({
			_id:id
		},req.body,
		{new:true});
		res.status(200).json(product);
	} catch (error) {
		res.status(500).json({message:error.message})
	}
	
	
	
	res.json({msg:"updateProduct"});	
}
export const deleteProduct= async(req, res)=>{
	try {
		const {id} = req.params;
		const product = await ProductModel.findByIdAndDelete(id)
		if (!product) {
			return res.status(404).json(`Product with ID: ${id} not found`);	
		}
		res.status(200).json("Product successfully removed");	
	} catch (error) {
		res.status(500).json({message:error.message})
	}	
}

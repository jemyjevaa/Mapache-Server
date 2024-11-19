import mongoose, { Schema, Document } from "mongoose";

interface IPetSchema extends Document {
    nombre: string;
    tipo: string;
    edad: Number;
    descripcion: string;
    userId: mongoose.Schema.Types.ObjectId; 
  }

const PetSchema = new Schema({
    nombre: { type: String, required: true },
    tipo: { type: String, required: true }, 
    edad: { type: Number, required: true },
    descripcion: { type: String, required: true }, 
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true }, 
}, { collection: "Pets" }); 

export default mongoose.model<IPetSchema>("Pet", PetSchema);

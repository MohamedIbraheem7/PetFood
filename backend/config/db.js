import mongoose from "mongoose";


export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://mohamdibraheemm:B122001@cluster0.lymxz0w.mongodb.net/pet-food').then(() => console.log("DB Connected"));    
}





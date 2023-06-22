import mongoose from 'mongoose';

const Connection=async ()=>{
    const URL='mongodb+srv://user1000:user2000@clone-whatsapp.nlk5c0r.mongodb.net/?retryWrites=true&w=majority';
    try {
        await mongoose.connect(URL, {useUnifiedTopology : true});
        console.log("Database connected successfully!!!");
    } catch (error) {
        console.log("Error while connecting with database" , error.message);
    }
}



export default Connection;
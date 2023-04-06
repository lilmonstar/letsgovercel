import { connectMongoDB } from "@/libs/MongoConnect";
import Name from "@/models/taskModel.js"

export default async function handler (req, res){

    if(req.method !== "GET"){
        res.status(405).send("Only GET request is allowed.")
    }

    try{
        await connectMongoDB();
        const data = await Name.find();
        console.log(data)
        res.status(200).send(data);
        
    }catch(err){
        console.log(err)
        res.status(400).send("Something went wrong.")
    }
}
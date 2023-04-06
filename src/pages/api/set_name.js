import { connectMongoDB } from "@/libs/MongoConnect";
import Name from "@/models/taskModel.js"

export default async function handler (req, res){

    if(req.method !== "POST"){
        res.status(405).send("Only POST request is allowed.")
    }

    const {name} = req.body;

    try{
        await connectMongoDB();
        Name.create({name}).then((data)=>{
            res.status(201).send(data)
        })
    }catch(err){
        console.log(err)
        res.status(400).send("Something went wrong.")
    }
}
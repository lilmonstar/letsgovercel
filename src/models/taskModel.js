import {Schema, model, models} from 'mongoose';

const NameSchema = new Schema({
    name:{
        type: String,
        required: true
    }
});

const Name = models.Name || model("Name", NameSchema)

export default Name;
// export default mongoose.model("Name", NameSchema);
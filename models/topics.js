import mongoose , {Schema} from "mongoose";

const todoschema = new Schema (

    {
        title : String , 
        description : String , 
        status : String , 

    } , 
{
    timestamps : true  ,
}
)

const Todo = mongoose.models.Todo || mongoose.model ('Todo' , todoschema)

export default Todo
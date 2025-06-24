import mongoose from "mongoose";

const contactSchema= mongoose.Schema(
    {
        name:
        {
            type:"String",
            required:true

        },
        email:
        {
            type:"String",
            required:true
        },
        number:
        {
            type:"String",
            required:true

        }


    },
)
export default mongoose.model("contact",contactSchema);
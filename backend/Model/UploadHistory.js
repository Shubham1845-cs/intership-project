import mongoose from "mongoose";
const uploadHistorySchema=mongoose.Schema({
      userID:
      {
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
      },
      fileName:
      {
        type:String,
        required:true
      },
      uploadDate:
      {
        type:Date,
        default:Date.now
      },
      headers:
      {
        type:[String],
        required:true
      },
      rawData:
      {
        type:Array,
        required:true
      }
}) 
export default mongoose.model("uploadHistory",uploadHistorySchema);

import uploadHistory from "../Model/UploadHistory";
const XLSX=require('xlsx');

export const uploadandparse=async (req,res)=>
{
    try {
        
        if(!req.file)
        {
           return res.status(400).json({message:"file not provided"})
        }

        // read the file from the buffer
        const workbook=XLSX.read(req.file.buffer,{type:"buffer"})

        // read only the first sheet
        const sheetName=workbook.sheetNames[0]
    } catch (error) {
        
    }
}

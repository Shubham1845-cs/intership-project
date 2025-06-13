import uploadHistory from "../Model/UploadHistory.js";
import XLSX from "xlsx";

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
        const sheetName=workbook.SheetNames[0];
        const workSheet=workbook.Sheets[sheetName];

        // convert the sheet to json
        const jsonData=XLSX.utils.sheet_to_json(workSheet,{header:1});

        // Extract headers (first row) and data rows (remaining rows)
        const header=jsonData[0].map(String);
        const  rows=jsonData.slice(1)

        // save to uploadhistory to mongodb
        const newHistory=new uploadHistory({
            userID:req.user.id,
            fileName:req.file.originalname,
            headers:header,
            rawData:rows
        })
        await newHistory.save();

        //return headers and raw rows to the frontend
        res.status.json({header,rows});


    } catch (error) {
        console.error(error);
        res.status(500).json({message:"Error parsing the excel file"})
        
    }
}

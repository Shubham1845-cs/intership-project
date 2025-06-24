export const contactdata=async(req,res)=>
{
  try {
    const {name,email,number}=req.body;
    if(!name || !email || !number)
    {
       return  res.status(400).json({message:"all fields are madatery"})
    }
    else
    {
       return  res.status(201).json({message:"DATA SEND SUCCESSFULLY"})
    }

  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Server error" });
  }
}
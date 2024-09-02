import express, { Request, Response } from "express"
import cors from "cors"
import "dotenv/config"
import mongoose from "mongoose"


mongoose.connect(process.env.MONGO_URL as string).then(() => {
    console.log("Connection successfull")
})


const app = express()
const port = process.env.PORT || 4001;
app.use(express.json())
app.use(cors())

app.get("/health", async(req:Request, res:Response) =>{
    res.send({message: "Health OK"})
})

app.use("/api/my/user", require("./routes/MyUserRoute"))

app.get("/test", (req,res) => {
    res.status(200).json({message : "Hi"})
})

app.listen(port, () => {
    console.log(`port running at ${port}`)
}) 
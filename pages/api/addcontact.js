import Contact from "../../models/Contact";
import connectDb from "../../middleware/mongoose";

const handler = async (req, res) => {
    if (req.method == 'POST') {
        console.log("I am from addcontact api", req.body)
        console.log(typeof req.body)
        let arr = [];
        req.body = arr.concat(req.body)
        console.log("I am below req.body  ", req.body);
        for (let i = 0; i < req.body.length; i++) {
            let p = new Contact({
                title: req.body[i].title
            })
            await p.save()
        }
        res.status(200).json({ success: "success" })
    }
    else {
        res.status(400).json({ error: "This method is not allowed" })
    }

}

export default connectDb(handler);
import { mongo, Mongoose, Schema } from "mongoose";

const meetingUser = new Schema
(
    {
        meeting_id:
        {
            type:String
        },
        meeting_code:
        {
            type:String,
            required:true
        },
        date:
        {
            type:Date,
            default:Date.now,
            required:true
        }
    }
);
const Meeting=Mongoose.model("Meeting",meetingUser);

export {Meeting};
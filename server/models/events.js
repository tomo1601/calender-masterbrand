const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EventSchema = new Schema(
  {
    title: {
        type: String,
        required: true,
        minlength: [3, 'Title must be three characters long!']
    },
    email: {
        type: String,
        required: true,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            'Please add a valid email'
        ]
    },
    name: {
        type: String,
        reuired: true
    },
    description: {
        type: String
    },
    avatar: {
        type: String,
        default: 'https://picsum.photos/200/300'
    },
    address: {
        type: String,
        default: ''
    },
    startTime: {
        type: String,
        default: ""
    },
    endTime: {
        type: String,
        default: ""
    },
    label:{
        type: String,
        default: 'gray'
    },
    day:{
        type: Number,
        default: Date.now
    },
    id:{
        type: Number,
        default: Date.now
    },
    createDate: {
        type: Date,
        default: Date.now
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    }
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true }, timestamps: true }
);

module.exports = mongoose.model("events", EventSchema);

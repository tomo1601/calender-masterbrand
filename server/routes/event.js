const express = require('express')
const router = express.Router()
const Event = require('../models/events')
require('dotenv').config()

router.get('/', async(req, res) => {
    try {
        const events = await Event.find().sort({id:-1}).select('-createdAt -updatedAt -createDate -__v')
        if (!events) return res.status(400).json({ success: false, message: 'Events not found' })
        res.status(200).json({ success: true, events })
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: 'Internal server error!' })
    }
})

router.get('/:id', async(req, res) => {
    try {
        const events = await Event.find({id:req.params.id}).sort({id:-1}).select('-createdAt -updatedAt -createDate -__v')
        if (!events) return res.status(400).json({ success: false, message: 'Events not found' })
        res.status(200).json({ success: true, events })
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: 'Internal server error!' })
    }
})

router.post('/new', async(req, res) => {
    const { title, email, name, address, description, startTime, endTime, label, day, id } = req.body
    try {
        const newEvent = new Event({
            title, email, name, address, description, startTime, endTime, label, day, id
        })
        await newEvent.save()
        return res.json({ success: true, newEvent })
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: 'Internal server error!' })
    }
})

router.put('/update/:id', async(req, res) => {
    const { title, email, name, address, description, startTime, endTime, label, day } = req.body
    try {
        const updateEvent = await Event.findById(req.params.id)
        if (!updateEvent) return res.status(400).json({ success: false, message: 'Event not found' })
        updateEvent.title=title
        updateEvent.email=email
        updateEvent.name=name
        updateEvent.address=address
        updateEvent.description=description
        updateEvent.startTime=startTime
        updateEvent.endTime=endTime
        updateEvent.label=label
        updateEvent.day=day
        await updateEvent.save()
        return res.json({ success: true, updateEvent })
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: 'Internal server error!' })
    }
})

router.delete('/delete/:id', async(req, res) => {
    try {
        const eventWillDelete = await Event.findById(req.params.id)
        if(!eventWillDelete){
            return res.status(400).json({success:false, message:"Not found event, can not delete this event!!"})
        }
        else {
            Event.deleteOne({_id:req.params.id})
            .then(result => {
                return res.status(400).json({success:true, message:"Delete successfully!", eventDeleted: eventWillDelete})
            })
            .catch(err => {
                res.status(500).json({ success: false, message: err.message })
            });
        }
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: 'Internal server error!' })
    }
})

module.exports = router
const express = require('express');
const Student = require("../modules/studentsSchema");

const router = new express.Router();


// create data
router.post('/students', async (req, res) => {
    const userData = new Student(req.body);

    try {

        const createUser = await userData.save();
        res.status(201).send(createUser);
    } catch (err) {
        if (err) {
            res.status(400).send(err)
        }
    }

})


//find data
router.get('/students', async (req, res) => {
    try {
        const studentsData = await Student.find();
        res.send(studentsData);

    } catch (e) {
        res.send(e);
    }
})


//find perticular data
router.get('/students/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const studentData = await Student.findById(_id)

        if (!studentData) {
            res.status(404).send("no data found")
        } else {
            res.send(studentData);
        }

    } catch (e) {
        res.status(400).send(e);
    }
})

//delete data
router.delete('/students/:id', async(req, res) => {
    try {
        const deletedStd = await Student.findByIdAndDelete(req.params.id)

        res.status(200).send(deletedStd);
    } catch (e) {
        res.status(500).send(e);
    }
})

//update data
router.patch("/students/:id", async(req, res) => {
    try{
        const updateStd = await Student.findByIdAndUpdate({_id: req.params.id}, req.body, {
            new : true
        })
        res.send(updateStd)
    }catch(e){
        res.status(400).send(e);
    }
})


module.exports = router;
const express = require("express")
const { displayAllProjects, displayParticularProject, createProjects, updateProject, deleteProject } = require("../controler/controler")
const router = express.Router()

router.get("/projects/find",displayAllProjects)

router.get("/projects/findOne/:id",displayParticularProject)

router.post("/projects/create",createProjects)

router.patch("/projects/update/:id",updateProject)

router.delete("/projects/delete/:id",deleteProject)


module.exports = router

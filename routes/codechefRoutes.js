import express from 'express'

import { codechef } from '../codechef.js'

const router = express.Router()

router.get('/all', async (req, res) => {
    res.send(codechef)
})

router.get('/ongoing', async (req, res) => {
    res.send(codechef.ongoingContests)
})

router.get('/upcoming', async (req, res) => {
    res.send(codechef.upcomingContests)
})

router.get('/past', async (req, res) => {
    res.send(codechef.pastContests)
})

router.get('/practise', async (req, res) => {
    res.send(codechef.practiseContests)
})

export default router
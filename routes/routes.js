const express = require('express');
const router = express.Router();

router.get('/:id', (req, res) => {
    const id = req.params.id;
    res.json({
        message: "Using GET - by id",
        metadata:{
            id: id,
            host: req.hostname,
            port: process.env.port,
            method: req.method,
        },
    });
});

router.put('/:id', (req, res) => {
    const id = req.params.id;
    res.status(200).json({
        message: "Using PUT - by id",
        metadata:{
            id: id,
            host: req.hostname,
            port: process.env.port,
            method: req.method,
        }
    })
})

router.post('/', (req, res) => {
    const id = req.params.id;
    res.status(200).json({
        message: "Using POST",
        metadata:{
            host: req.hostname,
            port: process.env.port,
            method: req.method,
        }
    })
})

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    res.status(200).json({
        message: "Using DELETE - by id",
        metadata:{
            id: id,
            host: req.hostname,
            port: process.env.port,
            method: req.method,
        }
    })
})

// middleware to handle errors and bad urls
router.use((req, res, next) => {
    const error = new Error('Url not found');
    error.status = 404;
    next(error);
});

router.use((error, req, res, next) => {
    res.status(error.status || 500).json({
        error:{
            message: error.message,
            status: error.status
        },
    });
});

module.exports = router;
const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');

const Page = require('../models/page');

router.post('/add',(req,res,next) => {
    let newPage = new Page({
        name: req.body.name,
        content: req.body.content
    });

    Page.addPage(newPage, (err,page) => {
        if(err) {
            res.json({success: false, msg:'Failed to add Page'});
        }
        else {
            res.json({success: true, msg: 'Page added'});
        }
    });
    
});

router.get('/:id',(req,res,next) => {
    Page.getPageById(req.params.id, (err,page) => {
        if(err) throw err;
        
        if(!page) {
            return res.json({success: false, msg: "Page not found"});
        }
        else {
            res.json({success:true, 
                    page: {
                        id:page._id,
                        name:page.name,
                        content:page.content
                    }
                });
        }
    });
});

router.get('/list',(req,res,next) => {
    Page.getAllPages( (err,page) => {
        if(err) throw err;

        if(!page) {
            return res.json({success: false, msg: "Page not found"});
        }
        else {
            res.json({success:true, 
                    page: {
                        id:page._id,
                        name:page.name,
                        content:page.content
                    }
                });
        }
    });
});

module.exports = router;
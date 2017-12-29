const express = require('express');
const path = require('path');

const api = require('./routes/api');
const search = require('./routes/search');
const index = require('./routes/index');
const router = express.Router();

//view routes
router.get('/', index.index);
router.get('/detail', index.detail);
router.get('/detail/:id', index.detail);

router.get('/search', search.index);
router.get('/search/:id', search.index);

router.get('/about', index.about);

        //API Routes 
router.get('/api/cat',api.catergories);
router.get('/api/products',api.products);
router.get('/api/products/:page',api.products);

router.get('/api/detail/:id',api.detail);


router.get('/api/search/:id/:page',api.search);
router.get('/api/search/:id',api.search);

router.get('/api/store/:id/:page',api.store);
router.get('/api/store/:id',api.store);

module.exports = router;
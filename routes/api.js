const config = require('./../config')();
const pageLimit = 48

let lastItemId=0
let items = []

     function random (low, high) {
      return Math.floor(Math.random() * (high - low + 1) + low);
    }


     exports.contact = function (req, res, next ) {
        var MongoClient = require('mongodb').MongoClient;

        // Connect to the db
        MongoClient.connect(config.contacts_db, function(err, db) {
          if(!err) {
            console.log("We are connected");
          }
          console.log(req.body)
          db.collection('contact').insert(req.body, {w: 1}, function(err, records){
            console.log("Record added as "+records.result);
             res.send(req.body);
          });

        });

       };


      exports.catergories = function (req, res, next) {
       let el = req.db.collection('products').distinct('Program Category',function(err, items) {
                       lastItemId = items[items.length-1];
                         var resultsArr = new Array();
                        for (var i = 0; i < items.length; i++) {
                          if (items[i]) {
                            resultsArr.push(items[i]);
                          }
                        }
                        res.send(resultsArr);
                });
       };

    exports.products = function (req, res, next) {
        let pg = req.param("page");
        let low = random(0,5);
        let high = random(low,10);
        let skip = pg > 1 ? pageLimit * (pg-1) : 0;
        skip = !skip ?  random(low,high) : skip;

       let el = req.db.collection('products').aggregate([ 
          { $match:{ $and:[
            {"image":{$ne:""}},
            { $or:
              [{"name":/T Shirt/i},{"name":/T-Shirt/i},{"name":/TShirt/i},{"name":/Tee/i} ] 
            }
            ]  }}, 
          { $group: { _id: { Name:'$name',productId:'$productid','Big Image':'$image',Link:'$url','Short Description':'$description' },count: { $sum:  1 } } },
          { $match: { count: { $lt : 2 } }},
          { $skip : skip },
          { $limit : pageLimit }
           ]).toArray(function(err, items) {
                       lastItemId = items[items.length-1];
                       result = []
                       items.forEach(function(element) {
                          result.push(element._id)
                        }, this);
                        res.send(result);
                });  
       };

    exports.search = function(req, res, next) {
       let pg = req.param("page");
       let key = req.param("id");
       let skip = pg > 1 ? pageLimit * (pg-1) : 0;

       let el = req.db.collection('products').aggregate([ 
          { $match:{ $and:[
            {"image":{$ne:""}},
            { $or:[ 
              {"name":new RegExp(key, 'i')},
              {"image":new RegExp(key, 'i')},
              {"description":new RegExp(key, 'i')}
              ] 
            }]  }}, 
          { $group: { _id: { Name:'$name',productId:'$productid','Big Image':'$image',Link:'$url','Short Description':'$description' },count: { $sum:  1 } } },
          { $match: { count: { $lt : 2 } }} ])
          .skip(skip).limit(pageLimit)
          .toArray(function(err, items) {
            lastItemId = items[items.length-1];
            result = []
            items.forEach(function(element) {
               result.push(element._id)
             }, this);
             res.send(result);
          });  
        };


    exports.store = function(req, res, next){

        let pg = req.param("page");
        let key = req.param("id");
        let skip = pg > 1 ? pageLimit * (pg-1) : 0;

        console.log(key)

       let el = req.db.collection('products').aggregate([ 
          { $match:{ 'merchantid': key}},
          { $group: { _id: { Name:'$name',productId:'$productid','Big Image':'$image',Link:'$url','Short Description':'$description' },count: { $sum:  1 } } },
          { $match: { count: { $lt : 2 } }} ])
          .skip(skip).limit(pageLimit)
                  .toArray(function(err, items) {
                      lastItemId = items[items.length-1];
                       res.send(items);
                  });
    };

    exports.detail = function(req, res){
        let key = req.param("id");
        let el = req.db.collection('products').find(
                     {'productid': key})
                     .limit(1)
                     .toArray(function(err, items) {
                      res.send(items[0]);
            });



    };

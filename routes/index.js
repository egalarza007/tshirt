const path = require('path');
const React = require('react');
const {
  ReactDOMServer,
  renderToString
} = require('react-dom/server');
const fs = require('fs');


function handleRender(req, res) {
  let key = req.param("id");

  // Load contents of index.html
  fs.readFile('build/index.html', 'utf8', function (err, data) {
    if (err) throw err;

    req.db.collection('products').find({
        'productid': key
      })
      .limit(1)
      .toArray(function (err, items) {
        const html = renderToString('<Hello />');
        const document = data.replace(/<title>TSHIRTHUSTLE<\/title>/,
          `<title>${items[0].title}</title>
           <meta property="og:title" content="${items[0].title}" />
           <meta property="og:image" content="${items[0].image}" />
           <meta property="og:description" content="${items[0].description}" />
           <meta name="description" content="${items[0].description}"/>
           <meta name="keywords" content= "${items[0].description}" />`);

        res.send(document);
      });

  });
}

exports.index = function (req, res) {
    fs.readFile('build/index.html', 'utf8', function (err, data) {
    if (err) throw err;
    const document = data.replace(/<title>TSHIRTHUSTLE<\/title>/,
          `<title>TShirt Hustle</title>
           <meta property="og:title" content="TShirt Hustle Product List" />
           <meta property="og:description" content="Funny t-shirts on high quality soft t-shirt,cool designs from top online retailers, cool shirts and retro vintage tees" />
           <meta name="description" content="Funny t-shirts on high quality soft t-shirt,cool designs from top online retailers, cool shirts and retro vintage tees"/>
           <meta name="keywords" content= "Funny t-shirts on high quality soft t-shirt,cool designs from top online retailers, cool shirts and retro vintage tees" />
                        `);

        res.send(document);
  });

};


exports.detail = function (req, res) {
  id = req.param("id");
  handleRender(req, res)
};

exports.about = function (req, res) {
  res.sendfile('build/index.html');
};

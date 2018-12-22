const path = require('path');
const React = require('react');
const {
  ReactDOMServer,
  renderToString
} = require('react-dom/server');
const fs = require('fs');

 exports.index = function (req, res) {
    let key = req.param("id");
  fs.readFile('build/index.html', 'utf8', function (err, data) {
    if (err) throw err;
    const document = data.replace(/<title>TSHIRTHUSTLE<\/title>/,
          `<title>TShirt Hustle Search ${key}</title>
           <meta property="og:title" content="TShirt Hustle Product List" />
           <meta property="og:description" content="Funny t-shirts on high quality soft t-shirt,cool designs from top online retailers, cool shirts and retro vintage tees" />
           <meta name="description" content="Funny t-shirts on high quality soft t-shirt,cool designs from top online retailers, cool shirts and retro vintage tees"/>
           <meta name="keywords" content= "Funny t-shirts on high quality soft t-shirt,cool designs from top online retailers, cool shirts and retro vintage tees" />
                        `);

        res.send(document);
  });
 };

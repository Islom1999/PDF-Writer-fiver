var pdf = require("pdf-creator-node");
var fs = require("fs");
var path = require("path");

// data: variables obj, 
// fileHTML string(docs1.html),
// filePDF string(docs1.pdf)

const writePDF = async (data, fileHTML, filePDF, res) => {
  try {
    var html = fs.readFileSync(path.join(__dirname, '../',"tamplates", fileHTML), "utf8");
    var options = {
      format: "A3",
      orientation: "portrait",
      border: "20mm",
    };

    var document = {
      html: html,
      data: { data },
      path: `./public/pdf/${filePDF}`,
    };

    await pdf
      .create(document, options)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.error(error);
      });
    
    // return res.redirect(`/pdf/${filePDF}`)

  }catch(err){
    console.log(err)
  }
}

module.exports = {writePDF}

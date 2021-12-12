const fs = require("fs")
fs.writeFile( "test.vue", `<div>12<div>`, function(err) {
  if(err) {
      return console.log(err);
  }
  console.log("The file was saved!");
});

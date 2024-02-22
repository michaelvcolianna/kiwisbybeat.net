const fs = require('fs');

fs.readdir(`${__dirname}/../cache/.cache`, (err, files) => {
  if(err) {
    console.log(err);
  }
  else {
    console.log("\nContents:");
    files.forEach(file => {
      console.log(`- ${file}`);
    });
  }
});

return 0;

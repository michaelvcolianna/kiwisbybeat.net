const fs = require('fs');

fs.readdir(`${__dirname}/../cache/.build`, (err, files) => {
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

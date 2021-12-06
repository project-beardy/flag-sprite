const codes = require("../data/iso-country-codes.json");
const fs = require('fs');

console.log(codes.data.length);

const create = async () => {
  let baseFolder = "./flags/";

  //  iterate over a list of files in the folder
  fs.readdirSync(`${baseFolder}2 char`)
  .forEach( async file => {
    let twoCharCode = file.split(".")[0];

    if (file.indexOf("svg") !== -1 ) {
      let country = codes.data.find(i => i["alpha-2"] === twoCharCode.toUpperCase());

      if (country) {
        //  theres been a match for the 2 char code
        await fs.copyFileSync(
          `${baseFolder}2 char/${file}`,
          `${baseFolder}3 char/${country["alpha-3"].toLowerCase()}.svg`,
        )
      }
    }

  })
}

const run = async() => {
  await create();
}

run();

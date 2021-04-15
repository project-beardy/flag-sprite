const SpriteSheet = require("@project-beardy/svg-sprite-sheets-factory");
const path = require("path");


const run = async() => {
  let srcdir = path.join(__dirname, "flags");

  await SpriteSheet.make(srcdir, "./out/flag-sprite.svg", { width: 720, height: 480});
}

run();

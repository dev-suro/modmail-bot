import fs from "fs";
const config = (() => {
  let file, file2;
  try {
    file = fs.readFileSync("../config.json");
  } catch (err) {
    file = fs.readFileSync("./config.json");
  }
  try {
    file2 = fs.readFileSync("../bot/assets/config.json");
  } catch (err) {
    file2 = fs.readFileSync("./bot/assets/config.json");
  }
  let config2 = JSON.parse(file), config22 = JSON.parse(file2);
  return {
    ...config2,
    sub: config22
  };
})();
export {
  config as c
};

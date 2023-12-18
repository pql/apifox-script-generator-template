import fs from "fs";

/**
 * 添加启动脚本
 *
 * 向package.json中添加 yarn api启动命令
 */
let pgFile = fs.existsSync("./package.json")
  ? fs.readFileSync("./package.json", { encoding: "utf-8" })
  : "";
if (pgFile) {
  if (!pgFile.includes(`"api": "ts-node middleware/apifox/main.mjs"`)) {
    pgFile = pgFile.replace(
      /([^\n\S]+)("scripts":\s*\{)/,
      '$1$2\n$1$1"api": "node middleware/apifox/main.mjs",'
    );
    fs.writeFileSync("./package.json", pgFile, { encoding: "utf-8" });
  }
}

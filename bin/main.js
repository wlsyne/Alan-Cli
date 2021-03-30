#!/usr/bin/env node
const program = require("commander");

program
  .version(require("../package").version)
  .description("frontend cli version")
  .usage("<command> [options]");

program
  .command("create <project-name>")
  .description("初始化项目")
  .action(async (name, cmd) => {
    require("../lib/create")(name);
  });

program.command("*").action(function (env) {
  console.log("指令错误");
});

program.parse(process.argv);

const inquirer = require("inquirer");
const ora = require("ora");
const path = require("path");

const repoList = require("../data.json");
const { download } = require("./utils/download");

const CWD = process.cwd();
let targetDir = CWD;

async function getTemplate() {
  const types = repoList.map((item) => `${item.name}:${item.description}`);
  const msg = "请选择一个预设模板";
  const { repoType } = await inquirer.prompt({
    type: "list",
    name: "repoType",
    message: msg,
    choices: types,
  });
  let repo = repoList[types.indexOf(repoType)];
  return repo;
}

async function initTpl(projectName, repo) {
  const spinner = ora(" ⚡️ 正在初始化项目...");
  spinner.start();
  spinner.succeed();
  targetDir = path.resolve(CWD, projectName);
  await download(targetDir, `${repo.url}`);
}

module.exports = {
  getTemplate,
  initTpl,
};

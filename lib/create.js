const ora = require("ora");
const { getTemplate, initTpl } = require("./template");

module.exports = async (projectName) => {
  const spinner = ora();
  const repo = await getTemplate();
  await initTpl(projectName, repo);
  spinner.succeed("success");
};

const ora = require("ora");
const downloadGit = require("download-git-repo");
const spinner = ora("🚀  初始化模板...");

async function download(targetDir, gitPath) {
  try {
    spinner.start();
    await new Promise((resolve, reject) => {
      downloadGit(
        gitPath,
        targetDir,
        {
          clone: false,
        },
        (error) => {
          if (error) {
            console.log(error);
            reject(error);
          } else {
            resolve(targetDir);
          }
        }
      );
    });
    spinner.succeed();
  } catch ({ message = "初始化模板失败" }) {
    spinner.fail(message);
    process.exit();
  }
}

module.exports = { download };

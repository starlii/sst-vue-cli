#!/usr/bin/env node
const clear = require('clear')
const chalk = require('chalk')
const figlet = require('figlet')
const program = require('commander')
const dowmload = require('download-git-repo')
const ora = require('ora')
const files = require('./lib/files')
const log = console.log
const confirm = require('./lib/confirms')



clear()

/********************
 * banner
 ******************/

if(files.directoryExists('.git')) {
  log(chalk.red('Already a git reposition !'))
  process.exit()
}



program
  .command('create [dir]')
  .description('create a product base on sst-vue-cli')
  .action(async function(dir) {
    if(files.directoryExists(dir)) {
      log(chalk.red('Already a git reposition !'))
      process.exit()
    }

    log(
      chalk.yellow(
        figlet.textSync('sst-vue-cli', {horizontalLayout: 'full'})
      )
    )

    answers = await confirm()
    

    log(
      chalk.green(`create ${dir} product base on sst-vue-cli`)
    )

    const spinner = ora('downloading template')
    spinner.start()

    dowmload(`summerstarlee/sst-vue-template${answers.isPermission ? '' : '#template-default-menu'}`, dir, false, error => {
      spinner.stop()
      if (error) {
        return log(chalk.red(error))
      }

      log(chalk.white(`           cd ${dir}                 `))
      log(chalk.white('           npm install               '))
      log(chalk.white('           npm run dev               '))
    })
  })

  program.parse(process.argv)

  


const inquirer = require('inquirer')

module.exports = () => {
    return inquirer
            .prompt([
                {
                type: 'confirm',
                name: 'isPermission', 
                message: 'whether add router permission in your project ?', 
                default: false
                }
            ])
            .then(answers => {
                return Promise.resolve(answers)
            })
}
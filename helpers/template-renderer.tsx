/*
* Server-site template rendering using EJS.
*
* https://ejs.co
* */
import fs from 'fs'
import ejs from 'ejs'

//
const templateRootPath = "./templates"

function getTemplate(filepath: string) {
  const fullFilepath = `${templateRootPath}/${filepath}`
  return fs.readFileSync(fullFilepath, "utf8")
}

export function render(templatePath: string, data: any) {
  const template = getTemplate(templatePath)
  return ejs.render(template, data)
}

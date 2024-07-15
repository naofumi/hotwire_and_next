/*
* Server-site template rendering using EJS.
*
* https://ejs.co
* */
import fs from 'fs'
import ejs from 'ejs'

//
const templateRootPath = "./templates"

function getTemplate(fullFilepath: string) {
  return fs.readFileSync(fullFilepath, "utf8")
}

export function render(templatePath: string, data: any) {
  const fullFilepath = `${templateRootPath}/${templatePath}`
  const template = getTemplate(fullFilepath)

  return ejs.render(template, data, {filename: fullFilepath})
}

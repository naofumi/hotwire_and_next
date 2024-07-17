/*
* Server-site template rendering using EJS.
*
* https://ejs.co
* */
import fs from 'fs'
import ejs from 'ejs'
import path from 'path'

//
const templateRootPath = "./templates"

function getTemplate(fullFilepath: string) {
  return fs.readFileSync(fullFilepath, "utf8")
}

export function render(templatePath: string, data: any) {
  const fullFilepath = path.resolve(`${templateRootPath}/${templatePath}`)
  const template = getTemplate(fullFilepath)

  return ejs.render(template, data, {filename: fullFilepath})
}

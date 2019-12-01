#!/usr/bin/env node

const { readFileSync, writeFile } = require('fs');
const { resolve } = require('path');
const ejs = require('ejs');

const themes = [{
    outFile: resolve('./', 'themes/Trash Panda Theme - Dark.json'),
    data: require('../themes_data/dark.json')
}];

const themeTmpl = readFileSync(resolve('./', 'templates/theme.json'), 'utf8');

themes.forEach(theme => {
    let result = ejs.render(themeTmpl, theme.data);

    writeFile(theme.outFile, result, 'utf8', (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log(`Theme file '${theme.outFile}' written.`);
        }
    });
});
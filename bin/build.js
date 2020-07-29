#!/usr/bin/env node

const { readFileSync, writeFile } = require('fs');
const { resolve } = require('path');
const ejs = require('ejs');

const themes = [{
    outFile: resolve('./', 'themes/Easy Night.json'),
    data: require('../themes_data/night.json')
}, {
    outFile: resolve('./', 'themes/Easy Day.json'),
    data: require('../themes_data/day.json')
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
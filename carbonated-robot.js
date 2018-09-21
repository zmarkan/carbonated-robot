'use strict';

const fs = require('fs');
const exec = require("child_process").execSync

const inDir = process.argv[2];
const preset = process.argv[3];
const outDir = process.argv[4];

fs.readdirSync(inDir).forEach(file => {

exec(`carbon-now ${inDir}/${file} -p ${preset} -l  ${outDir}`)

});


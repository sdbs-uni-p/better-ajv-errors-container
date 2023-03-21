import { argv } from 'node:process'
import fs from 'node:fs';

import Ajv from 'ajv';
import betterAjvErrors from 'better-ajv-errors';

if (argv.length < 2) {
    console.log("Usage: node validate.js schemaFile dataFile [format]")
}


const ajv = new Ajv();

const schema = JSON.parse(fs.readFileSync(argv[2]));
const data = JSON.parse(fs.readFileSync(argv[3]));

const validate = ajv.compile(schema);
const valid = validate(data);

if (!valid) {
    const output = betterAjvErrors(schema, data, validate.errors);
    console.log(output);
}
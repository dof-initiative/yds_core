#!/usr/bin/env node
/*
This script cleans up merged LinkML schema to remove extra new lines generated from gen-yaml

== Proposed architecture ==

Take input YAML file from command line and output to stdout cleaned schema
    yaml.load() of file to parse as object
    recursively iterate through object looking for complex strings
        If complex string exists, remove every other consecutive new line and store formatted complex string in parent object
    console.log(yaml.dump(data, width=-1))
*/

import { argv } from "node:process";
import { parseArgs } from "node:util";
import fs from "node:fs";
import path from "path";
import yaml from "js-yaml";

const args = argv.slice(2);
const numArgs = args.length;

// Print help text for no args or --help flag
if (numArgs == 0 || args.includes("--help") || args.includes("-h")) {
    console.log("Usage: clean-merged-schema <path> [OPTIONS]");
    console.log("");
    console.log(
      "  Clean up merged LinkML schema to remove extra new lines (generated from gen-yaml) from path to LinkML schema"
    );
    console.log("");
    console.log("Options:");
    console.log(
        "  --help, -h   Print this help text"
    );
    process.exit(0);
}

const options = {};

const parser = parseArgs({ options, allowPositionals: true, args: args });

const elementFilePath = path.parse(parser.positionals[0]);
const elementContents = fs.readFileSync(
    path.join(elementFilePath.dir, elementFilePath.base),
    "utf-8"
);

if (elementFilePath.ext !== ".yaml") {
    console.log("Invalid file extension. Expected yaml file")
    process.exit(-1)
}

let element = yaml.load(elementContents);
console.log(yaml.dump(element, { lineWidth: -1 }).trimEnd())

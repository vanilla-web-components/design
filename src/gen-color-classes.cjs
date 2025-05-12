#!/usr/bin/env node

const { readFileSync, writeFileSync } = require("fs");

const css = readFileSync("src/color.css", "utf8");
const rootMatch = css.match(/:root\s*{([\s\S]*?)}/);
if (!rootMatch) throw new Error(":root block not found");

const vars = rootMatch[1].match(/--[\w-]+:\s*[^;]+;/g) || [];

const classes = vars
    .filter(line => !/--[\w]+-hue:/.test(line)) // Exclude --*-hue
    .map((line) => {
        const [key] = line.split(":");
        const varName = key.trim();
        const className = varName.replace(/^--/, "");

        return [
            `.bg-${className} { background-color: var(${varName}); }`,
            `.text-${className} { color: var(${varName}); }`,
        ].join("\n");
    })
    .join("\n\n");

writeFileSync("src/color-classes.css", classes);

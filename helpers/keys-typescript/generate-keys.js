const fs = require('fs').promises;
const model = require('./model.json');
const {getNodePaths} = require('../shared');

const nodePathsAsNestedArray = getNodePaths(model);

const nodePathsAsTypeScript = [
  `// DO NOT EDIT. This file was generated.`,
  `export type ContentKeys =`,
  ...nodePathsAsNestedArray.map(path => `| '${path.join('.')}'`),
].join('\n');

fs.writeFile(`./ContentKeys.ts`, nodePathsAsTypeScript);

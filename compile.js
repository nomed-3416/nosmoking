const path = require('path');
const fs = require('fs');
const solc = require('solc');

const nosmokingPath = path.resolve(__dirname, 'contracts','Nosmoking.sol');
const source = fs.readFileSync(nosmokingPath,'utf8');


console.log(solc.compile(source,1));
module.exports = solc.compile(source, 1).contracts[':Nosmoking'];

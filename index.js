import PKG from './package.json';
import Block from './src/blockchain/block';

const { name, version } = PKG;

console.log(`${name} v${version}`);

// Blocks
const { genesis } = Block;
console.log(genesis.toString())

const block = new Block(Date.now(), genesis.hash, 'H4Sh', 'data');
console.log(block.toString());

const block2 = new Block(Date.now(), block.hash, 'H4Sh-2', 'data-2');
console.log(block2.toString());
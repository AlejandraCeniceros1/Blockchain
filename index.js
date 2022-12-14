import PKG from './package.json';
import Block from './src/blockchain/block';

const { name, version, description, author } = PKG;

console.log(`${name} ${version} ${description} ${author}`);

const { genesis } = Block;
console.log(genesis.toString());

//const block = new Block(Date.now(), genesis.hash, 'h4sh', 'd4t4');
//console.log(block.toString());
//
//const block2 = new Block(Date.now(), block.hash, 'h4sh-2', 'd4t4-2');
//console.log(block2.toString());

const block = Block.mine(genesis, 'd4ata-bn');
console.log(block.toString());

const block_2 = Block.mine(block, 'd4ata-2');
console.log(block_2.toString());
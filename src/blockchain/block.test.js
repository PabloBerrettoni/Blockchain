import Block from "./block";

describe('Block', () => {

    let timeStamp;
    let prevoiusBlock;
    let hash;
    let data;

    beforeEach(() => {
        timeStamp = new Date(2010, 0, 1);
        prevoiusBlock = Block.genesis;
        hash = 'h4S4'
        data = 't3st-d4t4';
    });

    it('create an instance with parameters', () => {
        const block = new Block(timeStamp, prevoiusBlock.hash, hash, data);

        expect(block.timestamp).toEqual(timeStamp);
        expect(block.previousHash).toEqual(prevoiusBlock.hash);
        expect(block.hash).toEqual(hash);
        expect(block.data).toEqual(data);
    });

    it('use static mine()', () => {
        const block = Block.mine(prevoiusBlock, data);

        expect(block.hash.length).toEqual(64);
        expect(block.previousHash).toEqual(prevoiusBlock.hash);
        expect(data).toEqual(data);
    });

    it('use static hash()', () => {
        hash = Block.hash(timeStamp, prevoiusBlock.hash, data);
        const hashOutput = '106c37a5692468744215e060bed58aad7ee6ef975cd7e06daabc72374dafcefe';

        expect(hash).toEqual(hashOutput);
    });

    it('use toString()', () => {
        const block = Block.mine(prevoiusBlock, data);

        expect(typeof block.toString()).toEqual('string');
    });
});
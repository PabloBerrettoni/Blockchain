class Block {
  constructor(timestamp, previousHash, hash, data) {
    this.timestamp = timestamp;
    this.previousHash = previousHash;
    this.hash = hash;
    this.data = data;
  }

  static get genesis() {
    const timestamp = (new Date (2000, 0, 1)).getTime();
    return new this(timestamp, undefined, 'g3n3s1s-h45h', 'museo de grandes novedades');
  }

  toString() {
    return `Block - 
        timeStamp     : ${this.timestamp}
        previousHash  : ${this.previousHash}
        hash          : ${this.hash}
        data          : ${this.data}
        `;
  }
}

export default Block;

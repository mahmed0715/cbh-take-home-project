const { deterministicPartitionKey, deterministicPartitionKeyOriginal } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Shoudl be same for no input", () => {
    let trivialKey = deterministicPartitionKeyOriginal();
    expect(trivialKey).toBe("0");
    const trivialKeyRef = deterministicPartitionKey();
    expect(trivialKey).toBe(trivialKeyRef);
  });
  it("Should be same for {partitionKey: '0'}", () => {
    let trivialKey = deterministicPartitionKeyOriginal({partitionKey: '0'});
    trivialKeyRef = deterministicPartitionKey({partitionKey: '0'});
    expect(trivialKey).toBe(trivialKeyRef);
  });
  it("Should be same for {partitionKey: '10'}", () => {
    const trivialKey = deterministicPartitionKeyOriginal({partitionKey: '110'});
    const trivialKeyRef = deterministicPartitionKey({partitionKey: '110'});
    expect(trivialKey).toBe(trivialKeyRef);
  });
  it("Should be Same for '110'", () => {
    const trivialKey = deterministicPartitionKeyOriginal('110');
    const trivialKeyRef = deterministicPartitionKey('110');
    expect(trivialKey).toBe(trivialKeyRef);
  });
});

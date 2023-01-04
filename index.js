const {deterministicPartitionKey, deterministicPartitionKeyOriginal} = require("./dpk");
console.log(deterministicPartitionKeyOriginal({partitionKey: '0'}));
console.log(deterministicPartitionKey({partitionKey: '0'}));
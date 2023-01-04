# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

What I tried to make is reduce the code size and reduce the logics with if else and nesting if else
Below is the code and the comments are the explanation why I did this way

The whole process was like this
- understanding the function what it does actually
- understanding the internal logic so that I can simplify the logics
- split down the variables and their scopes and final output in that function like event, partitionKey, candidate
- for event we saw that if that is not provided a constant is used and returned so we tried to simplify the process by early checking of presence of event and return
- for the patitionKey we saw there are 2 logics, i.e for not string that should be stringified, but for string it should output as is
-  for the candidate we tried to not use many assignemnts , rather tried to simplify the logic to use the entription if candidate is not existing , so whole event will be hashed and return by that case
- the candidate has a length of a constant we try to re hash the candidate to minimise the length
- finally we tried to write a duplicate function to test in dpk.test.js 
- in test we tried to call the both function with same parameters and tried to check if both returns the same output

Here is the codebase with comments in it
exports.deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
// Tried to return early to performace 
  if (!event) return TRIVIAL_PARTITION_KEY;
  const MAX_PARTITION_KEY_LENGTH = 256;
// tried to do shortcut to destruct variable from event and decide based on that
  const { partitionKey } = event;
// to initiate candiate to partition so if string it can take this inital one 
  let candidate = partitionKey;
// we tried to make readable to reassign if not a string
  if(partitionKey && typeof partitionKey != 'string')
    candidate =  JSON.stringify(partitionKey) 
  
// we do shortcut to check if candidate is present if not whole event should be stringified and entryped to return
  candidate = candidate ??  crypto.createHash("sha3-512").update(JSON.stringify(event)).digest("hex");
  return candidate.length > MAX_PARTITION_KEY_LENGTH ? crypto.createHash("sha3-512").update(candidate).digest("hex") : candidate;
};
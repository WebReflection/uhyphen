const uhyphen = require('../cjs');

const assert = (source, dest) => {
  const hypenized = uhyphen(source);
  console.assert(hypenized === dest, `expected ${dest} but got ${hypenized}`);
};

assert('XMLHttpRequest', 'xml-http-request');
assert('Test', 'test');
assert('camelCase', 'camel-case');
assert('UInt8Array', 'u-int8-array');
assert('UInt16Array', 'u-int16-array');

const uhyphen = require('../cjs');

const assert = (source, dest) => {
  const hypenized = uhyphen(source);
  console.assert(hypenized === dest, `expected ${dest} but got ${hypenized}`);
};

assert('XMLHttpRequest', 'xml-http-request');
assert('XMLHttpRequestXMLHttp', 'xml-http-request-xml-http');
assert('Test', 'test');
assert('camelCase', 'camel-case');
assert('UInt8Array', 'u-int8-array');
assert('UInt16Array', 'u-int16-array');
assert('Foo1BarBaz', 'foo1-bar-baz');
assert('Foo1BaBaz', 'foo1-ba-baz');
assert('foo1BarBaz', 'foo1-bar-baz');
assert('foo1BaBaz', 'foo1-ba-baz');
assert('MP4HDSource', 'mp4-hd-source');

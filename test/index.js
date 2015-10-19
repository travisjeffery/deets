var browser = require('../');
var assert = require('assert');

// TODO: add more browsers...
var tests = {
  chrome: {
    mock: {
      navigator: {
        userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.71 Safari/537.36',
      },
      window: {
        innerWidth: 100,
        innerHeight: 200
      }
    },
    expect: {
      name: 'Chrome',
      version: {
        full: '46.0.2490.71',
        major: 46
      },
      size: {
        width: 100,
        height: 200
      }
    }
  },
  safari: {
    mock: {
      navigator: {
        userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11) AppleWebKit/601.1.56 (KHTML, like Gecko) Version/9.0 Safari/601.1.56',
      },
      window: {
        innerWidth: 100,
        innerHeight: 200,
      }
    },
    expect: {
      name: 'Safari',
      version: {
        full: '9.0',
        major: 9,
      },
      size: {
        width: 100,
        height: 200
      }
    }
  }
};

for (var k in tests) {
  var test = tests[k];
  for (var k in test.mock) {
    global[k] = test.mock[k];
  }
  var info = browser();
  assert.equal(info.name, test.expect.name);
  assert.deepEqual(info.version, test.expect.version);  
  assert.deepEqual(info.size, test.expect.size);
}

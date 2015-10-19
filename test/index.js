var browser = require('../');
var assert = require('assert');

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
      fullVersion: '46.0.2490.71',
      majorVersion: '46',
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
      fullVersion: '9.0',
      majorVersion: '9',
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
  assert.equal(info.fullVersion, test.expect.fullVersion);
  assert.equal(info.majorVersion, test.expect.majorVersion);
  assert.deepEqual(info.size, test.expect.size);
}

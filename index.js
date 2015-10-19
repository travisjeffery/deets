/**
 * Get browser info. Name, version, size, etc.
 *
 * @return {Object}
 * @api public
 */

module.exports = function() {
  var result = {}, agent = parse();
  result.userAgent = navigator.userAgent;
  for (var key in agent) result[key] = agent[key];
  result.size = size();
  return result;
}

/**
 * Parses user agent for version and name.
 *
 * @return {Object}
 * @api private
 */

function parse() {
  var name, fullVersion, majorVersion, offset, nameOffset, idx;
  var userAgent = navigator.userAgent;

  // In Opera 15+, the true version is after "OPR/"
  if ((offset = userAgent.indexOf("OPR/")) != -1) {
    name = "Opera";
    fullVersion = userAgent.substring(offset + 4);
  }
  // In older Opera, the true version is after "Opera" or after "Version"
  else if ((offset = userAgent.indexOf("Opera")) != -1) {
    name = "Opera";
    fullVersion = userAgent.substring(offset + 6);
    if ((offset = userAgent.indexOf("Version")) != -1)
      fullVersion = userAgent.substring(offset + 8);
  }
  // In MSIE, the true version is after "MSIE" in userAgent
  else if ((offset = userAgent.indexOf("MSIE")) != -1) {
    name = "Microsoft Internet Explorer";
    fullVersion = userAgent.substring(offset + 5);
  }
  // In Chrome, the true version is after "Chrome"
  else if ((offset = userAgent.indexOf("Chrome")) != -1) {
    name = "Chrome";
    fullVersion = userAgent.substring(offset + 7);
  }
  // In Safari, the true version is after "Safari" or after "Version"
  else if ((offset = userAgent.indexOf("Safari")) != -1) {
    name = "Safari";
    fullVersion = userAgent.substring(offset + 7);
    if ((offset = userAgent.indexOf("Version")) != -1)
      fullVersion = userAgent.substring(offset + 8);
  }
  // In Firefox, the true version is after "Firefox"
  else if ((offset = userAgent.indexOf("Firefox")) != -1) {
    name = "Firefox";
    fullVersion = userAgent.substring(offset + 8);
  }
  // In most other browsers, "name/version" is at the end of userAgent
  else if ((nameOffset = userAgent.lastIndexOf(' ') + 1) <
    (offset = userAgent.lastIndexOf('/'))) {
    name = userAgent.substring(nameOffset, offset);
    fullVersion = userAgent.substring(offset + 1);
    if (name.toLowerCase() == name.toUpperCase()) {
      name = navigator.appName;
    }
  }

  // trim the version string at semicolon/space if present
  if ((idx = fullVersion.indexOf(";")) != -1)
    fullVersion = fullVersion.substring(0, idx);
  if ((idx = fullVersion.indexOf(" ")) != -1)
    fullVersion = fullVersion.substring(0, idx);

  majorVersion = parseInt('' + fullVersion, 10);
  if (isNaN(majorVersion)) {
    fullVersion = '' + parseFloat(navigator.appVersion);
    majorVersion = parseInt(navigator.appVersion, 10);
  }

  return {
    name: name,
    version: {
      full: fullVersion,
      major: majorVersion
    }
  };
}

/**
 * Return size of browser.
 *
 * @return {Object}
 * @api private
 */

function size() {
  return {
    height: height(),
    width: width()
  };
}

/**
 * Return width of browser.
 *
 * @return {Number}
 * @api private
 */

function width() {
  return window.innerWidth
  || document.documentElement.clientWidth
  || document.body.clientWidth;
}

/**
 * Return height of browser.
 *
 * @return {Number}
 * @api private
 */

function height() {
  return window.innerHeight
  || document.documentElement.clientHeight
  || document.body.clientHeight;
}

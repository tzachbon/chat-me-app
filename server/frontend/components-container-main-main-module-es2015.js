(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-container-main-main-module"],{

/***/ "./node_modules/after/index.js":
/*!*************************************!*\
  !*** ./node_modules/after/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = after

function after(count, callback, err_cb) {
    var bail = false
    err_cb = err_cb || noop
    proxy.count = count

    return (count === 0) ? callback() : proxy

    function proxy(err, result) {
        if (proxy.count <= 0) {
            throw new Error('after called too many times')
        }
        --proxy.count

        // after first error, rest are passed to err_cb
        if (err) {
            bail = true
            callback(err)
            // future error callbacks will go to error handler
            callback = err_cb
        } else if (proxy.count === 0 && !bail) {
            callback(null, result)
        }
    }
}

function noop() {}


/***/ }),

/***/ "./node_modules/arraybuffer.slice/index.js":
/*!*************************************************!*\
  !*** ./node_modules/arraybuffer.slice/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * An abstraction for slicing an arraybuffer even when
 * ArrayBuffer.prototype.slice is not supported
 *
 * @api public
 */

module.exports = function(arraybuffer, start, end) {
  var bytes = arraybuffer.byteLength;
  start = start || 0;
  end = end || bytes;

  if (arraybuffer.slice) { return arraybuffer.slice(start, end); }

  if (start < 0) { start += bytes; }
  if (end < 0) { end += bytes; }
  if (end > bytes) { end = bytes; }

  if (start >= bytes || start >= end || bytes === 0) {
    return new ArrayBuffer(0);
  }

  var abv = new Uint8Array(arraybuffer);
  var result = new Uint8Array(end - start);
  for (var i = start, ii = 0; i < end; i++, ii++) {
    result[ii] = abv[i];
  }
  return result.buffer;
};


/***/ }),

/***/ "./node_modules/backo2/index.js":
/*!**************************************!*\
  !*** ./node_modules/backo2/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * Expose `Backoff`.
 */

module.exports = Backoff;

/**
 * Initialize backoff timer with `opts`.
 *
 * - `min` initial timeout in milliseconds [100]
 * - `max` max timeout [10000]
 * - `jitter` [0]
 * - `factor` [2]
 *
 * @param {Object} opts
 * @api public
 */

function Backoff(opts) {
  opts = opts || {};
  this.ms = opts.min || 100;
  this.max = opts.max || 10000;
  this.factor = opts.factor || 2;
  this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
  this.attempts = 0;
}

/**
 * Return the backoff duration.
 *
 * @return {Number}
 * @api public
 */

Backoff.prototype.duration = function(){
  var ms = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var rand =  Math.random();
    var deviation = Math.floor(rand * this.jitter * ms);
    ms = (Math.floor(rand * 10) & 1) == 0  ? ms - deviation : ms + deviation;
  }
  return Math.min(ms, this.max) | 0;
};

/**
 * Reset the number of attempts.
 *
 * @api public
 */

Backoff.prototype.reset = function(){
  this.attempts = 0;
};

/**
 * Set the minimum duration
 *
 * @api public
 */

Backoff.prototype.setMin = function(min){
  this.ms = min;
};

/**
 * Set the maximum duration
 *
 * @api public
 */

Backoff.prototype.setMax = function(max){
  this.max = max;
};

/**
 * Set the jitter
 *
 * @api public
 */

Backoff.prototype.setJitter = function(jitter){
  this.jitter = jitter;
};



/***/ }),

/***/ "./node_modules/base64-arraybuffer/lib/base64-arraybuffer.js":
/*!*******************************************************************!*\
  !*** ./node_modules/base64-arraybuffer/lib/base64-arraybuffer.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
 * base64-arraybuffer
 * https://github.com/niklasvh/base64-arraybuffer
 *
 * Copyright (c) 2012 Niklas von Hertzen
 * Licensed under the MIT license.
 */
(function(){
  "use strict";

  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

  // Use a lookup table to find the index.
  var lookup = new Uint8Array(256);
  for (var i = 0; i < chars.length; i++) {
    lookup[chars.charCodeAt(i)] = i;
  }

  exports.encode = function(arraybuffer) {
    var bytes = new Uint8Array(arraybuffer),
    i, len = bytes.length, base64 = "";

    for (i = 0; i < len; i+=3) {
      base64 += chars[bytes[i] >> 2];
      base64 += chars[((bytes[i] & 3) << 4) | (bytes[i + 1] >> 4)];
      base64 += chars[((bytes[i + 1] & 15) << 2) | (bytes[i + 2] >> 6)];
      base64 += chars[bytes[i + 2] & 63];
    }

    if ((len % 3) === 2) {
      base64 = base64.substring(0, base64.length - 1) + "=";
    } else if (len % 3 === 1) {
      base64 = base64.substring(0, base64.length - 2) + "==";
    }

    return base64;
  };

  exports.decode =  function(base64) {
    var bufferLength = base64.length * 0.75,
    len = base64.length, i, p = 0,
    encoded1, encoded2, encoded3, encoded4;

    if (base64[base64.length - 1] === "=") {
      bufferLength--;
      if (base64[base64.length - 2] === "=") {
        bufferLength--;
      }
    }

    var arraybuffer = new ArrayBuffer(bufferLength),
    bytes = new Uint8Array(arraybuffer);

    for (i = 0; i < len; i+=4) {
      encoded1 = lookup[base64.charCodeAt(i)];
      encoded2 = lookup[base64.charCodeAt(i+1)];
      encoded3 = lookup[base64.charCodeAt(i+2)];
      encoded4 = lookup[base64.charCodeAt(i+3)];

      bytes[p++] = (encoded1 << 2) | (encoded2 >> 4);
      bytes[p++] = ((encoded2 & 15) << 4) | (encoded3 >> 2);
      bytes[p++] = ((encoded3 & 3) << 6) | (encoded4 & 63);
    }

    return arraybuffer;
  };
})();


/***/ }),

/***/ "./node_modules/blob/index.js":
/*!************************************!*\
  !*** ./node_modules/blob/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Create a blob builder even when vendor prefixes exist
 */

var BlobBuilder = typeof BlobBuilder !== 'undefined' ? BlobBuilder :
  typeof WebKitBlobBuilder !== 'undefined' ? WebKitBlobBuilder :
  typeof MSBlobBuilder !== 'undefined' ? MSBlobBuilder :
  typeof MozBlobBuilder !== 'undefined' ? MozBlobBuilder : 
  false;

/**
 * Check if Blob constructor is supported
 */

var blobSupported = (function() {
  try {
    var a = new Blob(['hi']);
    return a.size === 2;
  } catch(e) {
    return false;
  }
})();

/**
 * Check if Blob constructor supports ArrayBufferViews
 * Fails in Safari 6, so we need to map to ArrayBuffers there.
 */

var blobSupportsArrayBufferView = blobSupported && (function() {
  try {
    var b = new Blob([new Uint8Array([1,2])]);
    return b.size === 2;
  } catch(e) {
    return false;
  }
})();

/**
 * Check if BlobBuilder is supported
 */

var blobBuilderSupported = BlobBuilder
  && BlobBuilder.prototype.append
  && BlobBuilder.prototype.getBlob;

/**
 * Helper function that maps ArrayBufferViews to ArrayBuffers
 * Used by BlobBuilder constructor and old browsers that didn't
 * support it in the Blob constructor.
 */

function mapArrayBufferViews(ary) {
  return ary.map(function(chunk) {
    if (chunk.buffer instanceof ArrayBuffer) {
      var buf = chunk.buffer;

      // if this is a subarray, make a copy so we only
      // include the subarray region from the underlying buffer
      if (chunk.byteLength !== buf.byteLength) {
        var copy = new Uint8Array(chunk.byteLength);
        copy.set(new Uint8Array(buf, chunk.byteOffset, chunk.byteLength));
        buf = copy.buffer;
      }

      return buf;
    }

    return chunk;
  });
}

function BlobBuilderConstructor(ary, options) {
  options = options || {};

  var bb = new BlobBuilder();
  mapArrayBufferViews(ary).forEach(function(part) {
    bb.append(part);
  });

  return (options.type) ? bb.getBlob(options.type) : bb.getBlob();
};

function BlobConstructor(ary, options) {
  return new Blob(mapArrayBufferViews(ary), options || {});
};

if (typeof Blob !== 'undefined') {
  BlobBuilderConstructor.prototype = Blob.prototype;
  BlobConstructor.prototype = Blob.prototype;
}

module.exports = (function() {
  if (blobSupported) {
    return blobSupportsArrayBufferView ? Blob : BlobConstructor;
  } else if (blobBuilderSupported) {
    return BlobBuilderConstructor;
  } else {
    return undefined;
  }
})();


/***/ }),

/***/ "./node_modules/component-bind/index.js":
/*!**********************************************!*\
  !*** ./node_modules/component-bind/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Slice reference.
 */

var slice = [].slice;

/**
 * Bind `obj` to `fn`.
 *
 * @param {Object} obj
 * @param {Function|String} fn or string
 * @return {Function}
 * @api public
 */

module.exports = function(obj, fn){
  if ('string' == typeof fn) fn = obj[fn];
  if ('function' != typeof fn) throw new Error('bind() requires a function');
  var args = slice.call(arguments, 2);
  return function(){
    return fn.apply(obj, args.concat(slice.call(arguments)));
  }
};


/***/ }),

/***/ "./node_modules/component-inherit/index.js":
/*!*************************************************!*\
  !*** ./node_modules/component-inherit/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


module.exports = function(a, b){
  var fn = function(){};
  fn.prototype = b.prototype;
  a.prototype = new fn;
  a.prototype.constructor = a;
};

/***/ }),

/***/ "./node_modules/engine.io-client/lib/index.js":
/*!****************************************************!*\
  !*** ./node_modules/engine.io-client/lib/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


module.exports = __webpack_require__(/*! ./socket */ "./node_modules/engine.io-client/lib/socket.js");

/**
 * Exports parser
 *
 * @api public
 *
 */
module.exports.parser = __webpack_require__(/*! engine.io-parser */ "./node_modules/engine.io-parser/lib/browser.js");


/***/ }),

/***/ "./node_modules/engine.io-client/lib/socket.js":
/*!*****************************************************!*\
  !*** ./node_modules/engine.io-client/lib/socket.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module dependencies.
 */

var transports = __webpack_require__(/*! ./transports/index */ "./node_modules/engine.io-client/lib/transports/index.js");
var Emitter = __webpack_require__(/*! component-emitter */ "./node_modules/engine.io-client/node_modules/component-emitter/index.js");
var debug = __webpack_require__(/*! debug */ "./node_modules/engine.io-client/node_modules/debug/src/browser.js")('engine.io-client:socket');
var index = __webpack_require__(/*! indexof */ "./node_modules/indexof/index.js");
var parser = __webpack_require__(/*! engine.io-parser */ "./node_modules/engine.io-parser/lib/browser.js");
var parseuri = __webpack_require__(/*! parseuri */ "./node_modules/parseuri/index.js");
var parseqs = __webpack_require__(/*! parseqs */ "./node_modules/parseqs/index.js");

/**
 * Module exports.
 */

module.exports = Socket;

/**
 * Socket constructor.
 *
 * @param {String|Object} uri or options
 * @param {Object} options
 * @api public
 */

function Socket (uri, opts) {
  if (!(this instanceof Socket)) return new Socket(uri, opts);

  opts = opts || {};

  if (uri && 'object' === typeof uri) {
    opts = uri;
    uri = null;
  }

  if (uri) {
    uri = parseuri(uri);
    opts.hostname = uri.host;
    opts.secure = uri.protocol === 'https' || uri.protocol === 'wss';
    opts.port = uri.port;
    if (uri.query) opts.query = uri.query;
  } else if (opts.host) {
    opts.hostname = parseuri(opts.host).host;
  }

  this.secure = null != opts.secure ? opts.secure
    : (typeof location !== 'undefined' && 'https:' === location.protocol);

  if (opts.hostname && !opts.port) {
    // if no port is specified manually, use the protocol default
    opts.port = this.secure ? '443' : '80';
  }

  this.agent = opts.agent || false;
  this.hostname = opts.hostname ||
    (typeof location !== 'undefined' ? location.hostname : 'localhost');
  this.port = opts.port || (typeof location !== 'undefined' && location.port
      ? location.port
      : (this.secure ? 443 : 80));
  this.query = opts.query || {};
  if ('string' === typeof this.query) this.query = parseqs.decode(this.query);
  this.upgrade = false !== opts.upgrade;
  this.path = (opts.path || '/engine.io').replace(/\/$/, '') + '/';
  this.forceJSONP = !!opts.forceJSONP;
  this.jsonp = false !== opts.jsonp;
  this.forceBase64 = !!opts.forceBase64;
  this.enablesXDR = !!opts.enablesXDR;
  this.timestampParam = opts.timestampParam || 't';
  this.timestampRequests = opts.timestampRequests;
  this.transports = opts.transports || ['polling', 'websocket'];
  this.transportOptions = opts.transportOptions || {};
  this.readyState = '';
  this.writeBuffer = [];
  this.prevBufferLen = 0;
  this.policyPort = opts.policyPort || 843;
  this.rememberUpgrade = opts.rememberUpgrade || false;
  this.binaryType = null;
  this.onlyBinaryUpgrades = opts.onlyBinaryUpgrades;
  this.perMessageDeflate = false !== opts.perMessageDeflate ? (opts.perMessageDeflate || {}) : false;

  if (true === this.perMessageDeflate) this.perMessageDeflate = {};
  if (this.perMessageDeflate && null == this.perMessageDeflate.threshold) {
    this.perMessageDeflate.threshold = 1024;
  }

  // SSL options for Node.js client
  this.pfx = opts.pfx || null;
  this.key = opts.key || null;
  this.passphrase = opts.passphrase || null;
  this.cert = opts.cert || null;
  this.ca = opts.ca || null;
  this.ciphers = opts.ciphers || null;
  this.rejectUnauthorized = opts.rejectUnauthorized === undefined ? true : opts.rejectUnauthorized;
  this.forceNode = !!opts.forceNode;

  // detect ReactNative environment
  this.isReactNative = (typeof navigator !== 'undefined' && typeof navigator.product === 'string' && navigator.product.toLowerCase() === 'reactnative');

  // other options for Node.js or ReactNative client
  if (typeof self === 'undefined' || this.isReactNative) {
    if (opts.extraHeaders && Object.keys(opts.extraHeaders).length > 0) {
      this.extraHeaders = opts.extraHeaders;
    }

    if (opts.localAddress) {
      this.localAddress = opts.localAddress;
    }
  }

  // set on handshake
  this.id = null;
  this.upgrades = null;
  this.pingInterval = null;
  this.pingTimeout = null;

  // set on heartbeat
  this.pingIntervalTimer = null;
  this.pingTimeoutTimer = null;

  this.open();
}

Socket.priorWebsocketSuccess = false;

/**
 * Mix in `Emitter`.
 */

Emitter(Socket.prototype);

/**
 * Protocol version.
 *
 * @api public
 */

Socket.protocol = parser.protocol; // this is an int

/**
 * Expose deps for legacy compatibility
 * and standalone browser access.
 */

Socket.Socket = Socket;
Socket.Transport = __webpack_require__(/*! ./transport */ "./node_modules/engine.io-client/lib/transport.js");
Socket.transports = __webpack_require__(/*! ./transports/index */ "./node_modules/engine.io-client/lib/transports/index.js");
Socket.parser = __webpack_require__(/*! engine.io-parser */ "./node_modules/engine.io-parser/lib/browser.js");

/**
 * Creates transport of the given type.
 *
 * @param {String} transport name
 * @return {Transport}
 * @api private
 */

Socket.prototype.createTransport = function (name) {
  debug('creating transport "%s"', name);
  var query = clone(this.query);

  // append engine.io protocol identifier
  query.EIO = parser.protocol;

  // transport name
  query.transport = name;

  // per-transport options
  var options = this.transportOptions[name] || {};

  // session id if we already have one
  if (this.id) query.sid = this.id;

  var transport = new transports[name]({
    query: query,
    socket: this,
    agent: options.agent || this.agent,
    hostname: options.hostname || this.hostname,
    port: options.port || this.port,
    secure: options.secure || this.secure,
    path: options.path || this.path,
    forceJSONP: options.forceJSONP || this.forceJSONP,
    jsonp: options.jsonp || this.jsonp,
    forceBase64: options.forceBase64 || this.forceBase64,
    enablesXDR: options.enablesXDR || this.enablesXDR,
    timestampRequests: options.timestampRequests || this.timestampRequests,
    timestampParam: options.timestampParam || this.timestampParam,
    policyPort: options.policyPort || this.policyPort,
    pfx: options.pfx || this.pfx,
    key: options.key || this.key,
    passphrase: options.passphrase || this.passphrase,
    cert: options.cert || this.cert,
    ca: options.ca || this.ca,
    ciphers: options.ciphers || this.ciphers,
    rejectUnauthorized: options.rejectUnauthorized || this.rejectUnauthorized,
    perMessageDeflate: options.perMessageDeflate || this.perMessageDeflate,
    extraHeaders: options.extraHeaders || this.extraHeaders,
    forceNode: options.forceNode || this.forceNode,
    localAddress: options.localAddress || this.localAddress,
    requestTimeout: options.requestTimeout || this.requestTimeout,
    protocols: options.protocols || void (0),
    isReactNative: this.isReactNative
  });

  return transport;
};

function clone (obj) {
  var o = {};
  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      o[i] = obj[i];
    }
  }
  return o;
}

/**
 * Initializes transport to use and starts probe.
 *
 * @api private
 */
Socket.prototype.open = function () {
  var transport;
  if (this.rememberUpgrade && Socket.priorWebsocketSuccess && this.transports.indexOf('websocket') !== -1) {
    transport = 'websocket';
  } else if (0 === this.transports.length) {
    // Emit error on next tick so it can be listened to
    var self = this;
    setTimeout(function () {
      self.emit('error', 'No transports available');
    }, 0);
    return;
  } else {
    transport = this.transports[0];
  }
  this.readyState = 'opening';

  // Retry with the next transport if the transport is disabled (jsonp: false)
  try {
    transport = this.createTransport(transport);
  } catch (e) {
    this.transports.shift();
    this.open();
    return;
  }

  transport.open();
  this.setTransport(transport);
};

/**
 * Sets the current transport. Disables the existing one (if any).
 *
 * @api private
 */

Socket.prototype.setTransport = function (transport) {
  debug('setting transport %s', transport.name);
  var self = this;

  if (this.transport) {
    debug('clearing existing transport %s', this.transport.name);
    this.transport.removeAllListeners();
  }

  // set up transport
  this.transport = transport;

  // set up transport listeners
  transport
  .on('drain', function () {
    self.onDrain();
  })
  .on('packet', function (packet) {
    self.onPacket(packet);
  })
  .on('error', function (e) {
    self.onError(e);
  })
  .on('close', function () {
    self.onClose('transport close');
  });
};

/**
 * Probes a transport.
 *
 * @param {String} transport name
 * @api private
 */

Socket.prototype.probe = function (name) {
  debug('probing transport "%s"', name);
  var transport = this.createTransport(name, { probe: 1 });
  var failed = false;
  var self = this;

  Socket.priorWebsocketSuccess = false;

  function onTransportOpen () {
    if (self.onlyBinaryUpgrades) {
      var upgradeLosesBinary = !this.supportsBinary && self.transport.supportsBinary;
      failed = failed || upgradeLosesBinary;
    }
    if (failed) return;

    debug('probe transport "%s" opened', name);
    transport.send([{ type: 'ping', data: 'probe' }]);
    transport.once('packet', function (msg) {
      if (failed) return;
      if ('pong' === msg.type && 'probe' === msg.data) {
        debug('probe transport "%s" pong', name);
        self.upgrading = true;
        self.emit('upgrading', transport);
        if (!transport) return;
        Socket.priorWebsocketSuccess = 'websocket' === transport.name;

        debug('pausing current transport "%s"', self.transport.name);
        self.transport.pause(function () {
          if (failed) return;
          if ('closed' === self.readyState) return;
          debug('changing transport and sending upgrade packet');

          cleanup();

          self.setTransport(transport);
          transport.send([{ type: 'upgrade' }]);
          self.emit('upgrade', transport);
          transport = null;
          self.upgrading = false;
          self.flush();
        });
      } else {
        debug('probe transport "%s" failed', name);
        var err = new Error('probe error');
        err.transport = transport.name;
        self.emit('upgradeError', err);
      }
    });
  }

  function freezeTransport () {
    if (failed) return;

    // Any callback called by transport should be ignored since now
    failed = true;

    cleanup();

    transport.close();
    transport = null;
  }

  // Handle any error that happens while probing
  function onerror (err) {
    var error = new Error('probe error: ' + err);
    error.transport = transport.name;

    freezeTransport();

    debug('probe transport "%s" failed because of error: %s', name, err);

    self.emit('upgradeError', error);
  }

  function onTransportClose () {
    onerror('transport closed');
  }

  // When the socket is closed while we're probing
  function onclose () {
    onerror('socket closed');
  }

  // When the socket is upgraded while we're probing
  function onupgrade (to) {
    if (transport && to.name !== transport.name) {
      debug('"%s" works - aborting "%s"', to.name, transport.name);
      freezeTransport();
    }
  }

  // Remove all listeners on the transport and on self
  function cleanup () {
    transport.removeListener('open', onTransportOpen);
    transport.removeListener('error', onerror);
    transport.removeListener('close', onTransportClose);
    self.removeListener('close', onclose);
    self.removeListener('upgrading', onupgrade);
  }

  transport.once('open', onTransportOpen);
  transport.once('error', onerror);
  transport.once('close', onTransportClose);

  this.once('close', onclose);
  this.once('upgrading', onupgrade);

  transport.open();
};

/**
 * Called when connection is deemed open.
 *
 * @api public
 */

Socket.prototype.onOpen = function () {
  debug('socket open');
  this.readyState = 'open';
  Socket.priorWebsocketSuccess = 'websocket' === this.transport.name;
  this.emit('open');
  this.flush();

  // we check for `readyState` in case an `open`
  // listener already closed the socket
  if ('open' === this.readyState && this.upgrade && this.transport.pause) {
    debug('starting upgrade probes');
    for (var i = 0, l = this.upgrades.length; i < l; i++) {
      this.probe(this.upgrades[i]);
    }
  }
};

/**
 * Handles a packet.
 *
 * @api private
 */

Socket.prototype.onPacket = function (packet) {
  if ('opening' === this.readyState || 'open' === this.readyState ||
      'closing' === this.readyState) {
    debug('socket receive: type "%s", data "%s"', packet.type, packet.data);

    this.emit('packet', packet);

    // Socket is live - any packet counts
    this.emit('heartbeat');

    switch (packet.type) {
      case 'open':
        this.onHandshake(JSON.parse(packet.data));
        break;

      case 'pong':
        this.setPing();
        this.emit('pong');
        break;

      case 'error':
        var err = new Error('server error');
        err.code = packet.data;
        this.onError(err);
        break;

      case 'message':
        this.emit('data', packet.data);
        this.emit('message', packet.data);
        break;
    }
  } else {
    debug('packet received with socket readyState "%s"', this.readyState);
  }
};

/**
 * Called upon handshake completion.
 *
 * @param {Object} handshake obj
 * @api private
 */

Socket.prototype.onHandshake = function (data) {
  this.emit('handshake', data);
  this.id = data.sid;
  this.transport.query.sid = data.sid;
  this.upgrades = this.filterUpgrades(data.upgrades);
  this.pingInterval = data.pingInterval;
  this.pingTimeout = data.pingTimeout;
  this.onOpen();
  // In case open handler closes socket
  if ('closed' === this.readyState) return;
  this.setPing();

  // Prolong liveness of socket on heartbeat
  this.removeListener('heartbeat', this.onHeartbeat);
  this.on('heartbeat', this.onHeartbeat);
};

/**
 * Resets ping timeout.
 *
 * @api private
 */

Socket.prototype.onHeartbeat = function (timeout) {
  clearTimeout(this.pingTimeoutTimer);
  var self = this;
  self.pingTimeoutTimer = setTimeout(function () {
    if ('closed' === self.readyState) return;
    self.onClose('ping timeout');
  }, timeout || (self.pingInterval + self.pingTimeout));
};

/**
 * Pings server every `this.pingInterval` and expects response
 * within `this.pingTimeout` or closes connection.
 *
 * @api private
 */

Socket.prototype.setPing = function () {
  var self = this;
  clearTimeout(self.pingIntervalTimer);
  self.pingIntervalTimer = setTimeout(function () {
    debug('writing ping packet - expecting pong within %sms', self.pingTimeout);
    self.ping();
    self.onHeartbeat(self.pingTimeout);
  }, self.pingInterval);
};

/**
* Sends a ping packet.
*
* @api private
*/

Socket.prototype.ping = function () {
  var self = this;
  this.sendPacket('ping', function () {
    self.emit('ping');
  });
};

/**
 * Called on `drain` event
 *
 * @api private
 */

Socket.prototype.onDrain = function () {
  this.writeBuffer.splice(0, this.prevBufferLen);

  // setting prevBufferLen = 0 is very important
  // for example, when upgrading, upgrade packet is sent over,
  // and a nonzero prevBufferLen could cause problems on `drain`
  this.prevBufferLen = 0;

  if (0 === this.writeBuffer.length) {
    this.emit('drain');
  } else {
    this.flush();
  }
};

/**
 * Flush write buffers.
 *
 * @api private
 */

Socket.prototype.flush = function () {
  if ('closed' !== this.readyState && this.transport.writable &&
    !this.upgrading && this.writeBuffer.length) {
    debug('flushing %d packets in socket', this.writeBuffer.length);
    this.transport.send(this.writeBuffer);
    // keep track of current length of writeBuffer
    // splice writeBuffer and callbackBuffer on `drain`
    this.prevBufferLen = this.writeBuffer.length;
    this.emit('flush');
  }
};

/**
 * Sends a message.
 *
 * @param {String} message.
 * @param {Function} callback function.
 * @param {Object} options.
 * @return {Socket} for chaining.
 * @api public
 */

Socket.prototype.write =
Socket.prototype.send = function (msg, options, fn) {
  this.sendPacket('message', msg, options, fn);
  return this;
};

/**
 * Sends a packet.
 *
 * @param {String} packet type.
 * @param {String} data.
 * @param {Object} options.
 * @param {Function} callback function.
 * @api private
 */

Socket.prototype.sendPacket = function (type, data, options, fn) {
  if ('function' === typeof data) {
    fn = data;
    data = undefined;
  }

  if ('function' === typeof options) {
    fn = options;
    options = null;
  }

  if ('closing' === this.readyState || 'closed' === this.readyState) {
    return;
  }

  options = options || {};
  options.compress = false !== options.compress;

  var packet = {
    type: type,
    data: data,
    options: options
  };
  this.emit('packetCreate', packet);
  this.writeBuffer.push(packet);
  if (fn) this.once('flush', fn);
  this.flush();
};

/**
 * Closes the connection.
 *
 * @api private
 */

Socket.prototype.close = function () {
  if ('opening' === this.readyState || 'open' === this.readyState) {
    this.readyState = 'closing';

    var self = this;

    if (this.writeBuffer.length) {
      this.once('drain', function () {
        if (this.upgrading) {
          waitForUpgrade();
        } else {
          close();
        }
      });
    } else if (this.upgrading) {
      waitForUpgrade();
    } else {
      close();
    }
  }

  function close () {
    self.onClose('forced close');
    debug('socket closing - telling transport to close');
    self.transport.close();
  }

  function cleanupAndClose () {
    self.removeListener('upgrade', cleanupAndClose);
    self.removeListener('upgradeError', cleanupAndClose);
    close();
  }

  function waitForUpgrade () {
    // wait for upgrade to finish since we can't send packets while pausing a transport
    self.once('upgrade', cleanupAndClose);
    self.once('upgradeError', cleanupAndClose);
  }

  return this;
};

/**
 * Called upon transport error
 *
 * @api private
 */

Socket.prototype.onError = function (err) {
  debug('socket error %j', err);
  Socket.priorWebsocketSuccess = false;
  this.emit('error', err);
  this.onClose('transport error', err);
};

/**
 * Called upon transport close.
 *
 * @api private
 */

Socket.prototype.onClose = function (reason, desc) {
  if ('opening' === this.readyState || 'open' === this.readyState || 'closing' === this.readyState) {
    debug('socket close with reason: "%s"', reason);
    var self = this;

    // clear timers
    clearTimeout(this.pingIntervalTimer);
    clearTimeout(this.pingTimeoutTimer);

    // stop event from firing again for transport
    this.transport.removeAllListeners('close');

    // ensure transport won't stay open
    this.transport.close();

    // ignore further transport communication
    this.transport.removeAllListeners();

    // set ready state
    this.readyState = 'closed';

    // clear session id
    this.id = null;

    // emit close event
    this.emit('close', reason, desc);

    // clean buffers after, so users can still
    // grab the buffers on `close` event
    self.writeBuffer = [];
    self.prevBufferLen = 0;
  }
};

/**
 * Filters upgrades, returning only those matching client transports.
 *
 * @param {Array} server upgrades
 * @api private
 *
 */

Socket.prototype.filterUpgrades = function (upgrades) {
  var filteredUpgrades = [];
  for (var i = 0, j = upgrades.length; i < j; i++) {
    if (~index(this.transports, upgrades[i])) filteredUpgrades.push(upgrades[i]);
  }
  return filteredUpgrades;
};


/***/ }),

/***/ "./node_modules/engine.io-client/lib/transport.js":
/*!********************************************************!*\
  !*** ./node_modules/engine.io-client/lib/transport.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module dependencies.
 */

var parser = __webpack_require__(/*! engine.io-parser */ "./node_modules/engine.io-parser/lib/browser.js");
var Emitter = __webpack_require__(/*! component-emitter */ "./node_modules/engine.io-client/node_modules/component-emitter/index.js");

/**
 * Module exports.
 */

module.exports = Transport;

/**
 * Transport abstract constructor.
 *
 * @param {Object} options.
 * @api private
 */

function Transport (opts) {
  this.path = opts.path;
  this.hostname = opts.hostname;
  this.port = opts.port;
  this.secure = opts.secure;
  this.query = opts.query;
  this.timestampParam = opts.timestampParam;
  this.timestampRequests = opts.timestampRequests;
  this.readyState = '';
  this.agent = opts.agent || false;
  this.socket = opts.socket;
  this.enablesXDR = opts.enablesXDR;

  // SSL options for Node.js client
  this.pfx = opts.pfx;
  this.key = opts.key;
  this.passphrase = opts.passphrase;
  this.cert = opts.cert;
  this.ca = opts.ca;
  this.ciphers = opts.ciphers;
  this.rejectUnauthorized = opts.rejectUnauthorized;
  this.forceNode = opts.forceNode;

  // results of ReactNative environment detection
  this.isReactNative = opts.isReactNative;

  // other options for Node.js client
  this.extraHeaders = opts.extraHeaders;
  this.localAddress = opts.localAddress;
}

/**
 * Mix in `Emitter`.
 */

Emitter(Transport.prototype);

/**
 * Emits an error.
 *
 * @param {String} str
 * @return {Transport} for chaining
 * @api public
 */

Transport.prototype.onError = function (msg, desc) {
  var err = new Error(msg);
  err.type = 'TransportError';
  err.description = desc;
  this.emit('error', err);
  return this;
};

/**
 * Opens the transport.
 *
 * @api public
 */

Transport.prototype.open = function () {
  if ('closed' === this.readyState || '' === this.readyState) {
    this.readyState = 'opening';
    this.doOpen();
  }

  return this;
};

/**
 * Closes the transport.
 *
 * @api private
 */

Transport.prototype.close = function () {
  if ('opening' === this.readyState || 'open' === this.readyState) {
    this.doClose();
    this.onClose();
  }

  return this;
};

/**
 * Sends multiple packets.
 *
 * @param {Array} packets
 * @api private
 */

Transport.prototype.send = function (packets) {
  if ('open' === this.readyState) {
    this.write(packets);
  } else {
    throw new Error('Transport not open');
  }
};

/**
 * Called upon open
 *
 * @api private
 */

Transport.prototype.onOpen = function () {
  this.readyState = 'open';
  this.writable = true;
  this.emit('open');
};

/**
 * Called with data.
 *
 * @param {String} data
 * @api private
 */

Transport.prototype.onData = function (data) {
  var packet = parser.decodePacket(data, this.socket.binaryType);
  this.onPacket(packet);
};

/**
 * Called with a decoded packet.
 */

Transport.prototype.onPacket = function (packet) {
  this.emit('packet', packet);
};

/**
 * Called upon close.
 *
 * @api private
 */

Transport.prototype.onClose = function () {
  this.readyState = 'closed';
  this.emit('close');
};


/***/ }),

/***/ "./node_modules/engine.io-client/lib/transports/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/engine.io-client/lib/transports/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module dependencies
 */

var XMLHttpRequest = __webpack_require__(/*! xmlhttprequest-ssl */ "./node_modules/engine.io-client/lib/xmlhttprequest.js");
var XHR = __webpack_require__(/*! ./polling-xhr */ "./node_modules/engine.io-client/lib/transports/polling-xhr.js");
var JSONP = __webpack_require__(/*! ./polling-jsonp */ "./node_modules/engine.io-client/lib/transports/polling-jsonp.js");
var websocket = __webpack_require__(/*! ./websocket */ "./node_modules/engine.io-client/lib/transports/websocket.js");

/**
 * Export transports.
 */

exports.polling = polling;
exports.websocket = websocket;

/**
 * Polling transport polymorphic constructor.
 * Decides on xhr vs jsonp based on feature detection.
 *
 * @api private
 */

function polling (opts) {
  var xhr;
  var xd = false;
  var xs = false;
  var jsonp = false !== opts.jsonp;

  if (typeof location !== 'undefined') {
    var isSSL = 'https:' === location.protocol;
    var port = location.port;

    // some user agents have empty `location.port`
    if (!port) {
      port = isSSL ? 443 : 80;
    }

    xd = opts.hostname !== location.hostname || port !== opts.port;
    xs = opts.secure !== isSSL;
  }

  opts.xdomain = xd;
  opts.xscheme = xs;
  xhr = new XMLHttpRequest(opts);

  if ('open' in xhr && !opts.forceJSONP) {
    return new XHR(opts);
  } else {
    if (!jsonp) throw new Error('JSONP disabled');
    return new JSONP(opts);
  }
}


/***/ }),

/***/ "./node_modules/engine.io-client/lib/transports/polling-jsonp.js":
/*!***********************************************************************!*\
  !*** ./node_modules/engine.io-client/lib/transports/polling-jsonp.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module requirements.
 */

var Polling = __webpack_require__(/*! ./polling */ "./node_modules/engine.io-client/lib/transports/polling.js");
var inherit = __webpack_require__(/*! component-inherit */ "./node_modules/component-inherit/index.js");

/**
 * Module exports.
 */

module.exports = JSONPPolling;

/**
 * Cached regular expressions.
 */

var rNewline = /\n/g;
var rEscapedNewline = /\\n/g;

/**
 * Global JSONP callbacks.
 */

var callbacks;

/**
 * Noop.
 */

function empty () { }

/**
 * Until https://github.com/tc39/proposal-global is shipped.
 */
function glob () {
  return typeof self !== 'undefined' ? self
      : typeof window !== 'undefined' ? window
      : typeof global !== 'undefined' ? global : {};
}

/**
 * JSONP Polling constructor.
 *
 * @param {Object} opts.
 * @api public
 */

function JSONPPolling (opts) {
  Polling.call(this, opts);

  this.query = this.query || {};

  // define global callbacks array if not present
  // we do this here (lazily) to avoid unneeded global pollution
  if (!callbacks) {
    // we need to consider multiple engines in the same page
    var global = glob();
    callbacks = global.___eio = (global.___eio || []);
  }

  // callback identifier
  this.index = callbacks.length;

  // add callback to jsonp global
  var self = this;
  callbacks.push(function (msg) {
    self.onData(msg);
  });

  // append to query string
  this.query.j = this.index;

  // prevent spurious errors from being emitted when the window is unloaded
  if (typeof addEventListener === 'function') {
    addEventListener('beforeunload', function () {
      if (self.script) self.script.onerror = empty;
    }, false);
  }
}

/**
 * Inherits from Polling.
 */

inherit(JSONPPolling, Polling);

/*
 * JSONP only supports binary as base64 encoded strings
 */

JSONPPolling.prototype.supportsBinary = false;

/**
 * Closes the socket.
 *
 * @api private
 */

JSONPPolling.prototype.doClose = function () {
  if (this.script) {
    this.script.parentNode.removeChild(this.script);
    this.script = null;
  }

  if (this.form) {
    this.form.parentNode.removeChild(this.form);
    this.form = null;
    this.iframe = null;
  }

  Polling.prototype.doClose.call(this);
};

/**
 * Starts a poll cycle.
 *
 * @api private
 */

JSONPPolling.prototype.doPoll = function () {
  var self = this;
  var script = document.createElement('script');

  if (this.script) {
    this.script.parentNode.removeChild(this.script);
    this.script = null;
  }

  script.async = true;
  script.src = this.uri();
  script.onerror = function (e) {
    self.onError('jsonp poll error', e);
  };

  var insertAt = document.getElementsByTagName('script')[0];
  if (insertAt) {
    insertAt.parentNode.insertBefore(script, insertAt);
  } else {
    (document.head || document.body).appendChild(script);
  }
  this.script = script;

  var isUAgecko = 'undefined' !== typeof navigator && /gecko/i.test(navigator.userAgent);

  if (isUAgecko) {
    setTimeout(function () {
      var iframe = document.createElement('iframe');
      document.body.appendChild(iframe);
      document.body.removeChild(iframe);
    }, 100);
  }
};

/**
 * Writes with a hidden iframe.
 *
 * @param {String} data to send
 * @param {Function} called upon flush.
 * @api private
 */

JSONPPolling.prototype.doWrite = function (data, fn) {
  var self = this;

  if (!this.form) {
    var form = document.createElement('form');
    var area = document.createElement('textarea');
    var id = this.iframeId = 'eio_iframe_' + this.index;
    var iframe;

    form.className = 'socketio';
    form.style.position = 'absolute';
    form.style.top = '-1000px';
    form.style.left = '-1000px';
    form.target = id;
    form.method = 'POST';
    form.setAttribute('accept-charset', 'utf-8');
    area.name = 'd';
    form.appendChild(area);
    document.body.appendChild(form);

    this.form = form;
    this.area = area;
  }

  this.form.action = this.uri();

  function complete () {
    initIframe();
    fn();
  }

  function initIframe () {
    if (self.iframe) {
      try {
        self.form.removeChild(self.iframe);
      } catch (e) {
        self.onError('jsonp polling iframe removal error', e);
      }
    }

    try {
      // ie6 dynamic iframes with target="" support (thanks Chris Lambacher)
      var html = '<iframe src="javascript:0" name="' + self.iframeId + '">';
      iframe = document.createElement(html);
    } catch (e) {
      iframe = document.createElement('iframe');
      iframe.name = self.iframeId;
      iframe.src = 'javascript:0';
    }

    iframe.id = self.iframeId;

    self.form.appendChild(iframe);
    self.iframe = iframe;
  }

  initIframe();

  // escape \n to prevent it from being converted into \r\n by some UAs
  // double escaping is required for escaped new lines because unescaping of new lines can be done safely on server-side
  data = data.replace(rEscapedNewline, '\\\n');
  this.area.value = data.replace(rNewline, '\\n');

  try {
    this.form.submit();
  } catch (e) {}

  if (this.iframe.attachEvent) {
    this.iframe.onreadystatechange = function () {
      if (self.iframe.readyState === 'complete') {
        complete();
      }
    };
  } else {
    this.iframe.onload = complete;
  }
};


/***/ }),

/***/ "./node_modules/engine.io-client/lib/transports/polling-xhr.js":
/*!*********************************************************************!*\
  !*** ./node_modules/engine.io-client/lib/transports/polling-xhr.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* global attachEvent */

/**
 * Module requirements.
 */

var XMLHttpRequest = __webpack_require__(/*! xmlhttprequest-ssl */ "./node_modules/engine.io-client/lib/xmlhttprequest.js");
var Polling = __webpack_require__(/*! ./polling */ "./node_modules/engine.io-client/lib/transports/polling.js");
var Emitter = __webpack_require__(/*! component-emitter */ "./node_modules/engine.io-client/node_modules/component-emitter/index.js");
var inherit = __webpack_require__(/*! component-inherit */ "./node_modules/component-inherit/index.js");
var debug = __webpack_require__(/*! debug */ "./node_modules/engine.io-client/node_modules/debug/src/browser.js")('engine.io-client:polling-xhr');

/**
 * Module exports.
 */

module.exports = XHR;
module.exports.Request = Request;

/**
 * Empty function
 */

function empty () {}

/**
 * XHR Polling constructor.
 *
 * @param {Object} opts
 * @api public
 */

function XHR (opts) {
  Polling.call(this, opts);
  this.requestTimeout = opts.requestTimeout;
  this.extraHeaders = opts.extraHeaders;

  if (typeof location !== 'undefined') {
    var isSSL = 'https:' === location.protocol;
    var port = location.port;

    // some user agents have empty `location.port`
    if (!port) {
      port = isSSL ? 443 : 80;
    }

    this.xd = (typeof location !== 'undefined' && opts.hostname !== location.hostname) ||
      port !== opts.port;
    this.xs = opts.secure !== isSSL;
  }
}

/**
 * Inherits from Polling.
 */

inherit(XHR, Polling);

/**
 * XHR supports binary
 */

XHR.prototype.supportsBinary = true;

/**
 * Creates a request.
 *
 * @param {String} method
 * @api private
 */

XHR.prototype.request = function (opts) {
  opts = opts || {};
  opts.uri = this.uri();
  opts.xd = this.xd;
  opts.xs = this.xs;
  opts.agent = this.agent || false;
  opts.supportsBinary = this.supportsBinary;
  opts.enablesXDR = this.enablesXDR;

  // SSL options for Node.js client
  opts.pfx = this.pfx;
  opts.key = this.key;
  opts.passphrase = this.passphrase;
  opts.cert = this.cert;
  opts.ca = this.ca;
  opts.ciphers = this.ciphers;
  opts.rejectUnauthorized = this.rejectUnauthorized;
  opts.requestTimeout = this.requestTimeout;

  // other options for Node.js client
  opts.extraHeaders = this.extraHeaders;

  return new Request(opts);
};

/**
 * Sends data.
 *
 * @param {String} data to send.
 * @param {Function} called upon flush.
 * @api private
 */

XHR.prototype.doWrite = function (data, fn) {
  var isBinary = typeof data !== 'string' && data !== undefined;
  var req = this.request({ method: 'POST', data: data, isBinary: isBinary });
  var self = this;
  req.on('success', fn);
  req.on('error', function (err) {
    self.onError('xhr post error', err);
  });
  this.sendXhr = req;
};

/**
 * Starts a poll cycle.
 *
 * @api private
 */

XHR.prototype.doPoll = function () {
  debug('xhr poll');
  var req = this.request();
  var self = this;
  req.on('data', function (data) {
    self.onData(data);
  });
  req.on('error', function (err) {
    self.onError('xhr poll error', err);
  });
  this.pollXhr = req;
};

/**
 * Request constructor
 *
 * @param {Object} options
 * @api public
 */

function Request (opts) {
  this.method = opts.method || 'GET';
  this.uri = opts.uri;
  this.xd = !!opts.xd;
  this.xs = !!opts.xs;
  this.async = false !== opts.async;
  this.data = undefined !== opts.data ? opts.data : null;
  this.agent = opts.agent;
  this.isBinary = opts.isBinary;
  this.supportsBinary = opts.supportsBinary;
  this.enablesXDR = opts.enablesXDR;
  this.requestTimeout = opts.requestTimeout;

  // SSL options for Node.js client
  this.pfx = opts.pfx;
  this.key = opts.key;
  this.passphrase = opts.passphrase;
  this.cert = opts.cert;
  this.ca = opts.ca;
  this.ciphers = opts.ciphers;
  this.rejectUnauthorized = opts.rejectUnauthorized;

  // other options for Node.js client
  this.extraHeaders = opts.extraHeaders;

  this.create();
}

/**
 * Mix in `Emitter`.
 */

Emitter(Request.prototype);

/**
 * Creates the XHR object and sends the request.
 *
 * @api private
 */

Request.prototype.create = function () {
  var opts = { agent: this.agent, xdomain: this.xd, xscheme: this.xs, enablesXDR: this.enablesXDR };

  // SSL options for Node.js client
  opts.pfx = this.pfx;
  opts.key = this.key;
  opts.passphrase = this.passphrase;
  opts.cert = this.cert;
  opts.ca = this.ca;
  opts.ciphers = this.ciphers;
  opts.rejectUnauthorized = this.rejectUnauthorized;

  var xhr = this.xhr = new XMLHttpRequest(opts);
  var self = this;

  try {
    debug('xhr open %s: %s', this.method, this.uri);
    xhr.open(this.method, this.uri, this.async);
    try {
      if (this.extraHeaders) {
        xhr.setDisableHeaderCheck && xhr.setDisableHeaderCheck(true);
        for (var i in this.extraHeaders) {
          if (this.extraHeaders.hasOwnProperty(i)) {
            xhr.setRequestHeader(i, this.extraHeaders[i]);
          }
        }
      }
    } catch (e) {}

    if ('POST' === this.method) {
      try {
        if (this.isBinary) {
          xhr.setRequestHeader('Content-type', 'application/octet-stream');
        } else {
          xhr.setRequestHeader('Content-type', 'text/plain;charset=UTF-8');
        }
      } catch (e) {}
    }

    try {
      xhr.setRequestHeader('Accept', '*/*');
    } catch (e) {}

    // ie6 check
    if ('withCredentials' in xhr) {
      xhr.withCredentials = true;
    }

    if (this.requestTimeout) {
      xhr.timeout = this.requestTimeout;
    }

    if (this.hasXDR()) {
      xhr.onload = function () {
        self.onLoad();
      };
      xhr.onerror = function () {
        self.onError(xhr.responseText);
      };
    } else {
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 2) {
          try {
            var contentType = xhr.getResponseHeader('Content-Type');
            if (self.supportsBinary && contentType === 'application/octet-stream') {
              xhr.responseType = 'arraybuffer';
            }
          } catch (e) {}
        }
        if (4 !== xhr.readyState) return;
        if (200 === xhr.status || 1223 === xhr.status) {
          self.onLoad();
        } else {
          // make sure the `error` event handler that's user-set
          // does not throw in the same tick and gets caught here
          setTimeout(function () {
            self.onError(xhr.status);
          }, 0);
        }
      };
    }

    debug('xhr data %s', this.data);
    xhr.send(this.data);
  } catch (e) {
    // Need to defer since .create() is called directly fhrom the constructor
    // and thus the 'error' event can only be only bound *after* this exception
    // occurs.  Therefore, also, we cannot throw here at all.
    setTimeout(function () {
      self.onError(e);
    }, 0);
    return;
  }

  if (typeof document !== 'undefined') {
    this.index = Request.requestsCount++;
    Request.requests[this.index] = this;
  }
};

/**
 * Called upon successful response.
 *
 * @api private
 */

Request.prototype.onSuccess = function () {
  this.emit('success');
  this.cleanup();
};

/**
 * Called if we have data.
 *
 * @api private
 */

Request.prototype.onData = function (data) {
  this.emit('data', data);
  this.onSuccess();
};

/**
 * Called upon error.
 *
 * @api private
 */

Request.prototype.onError = function (err) {
  this.emit('error', err);
  this.cleanup(true);
};

/**
 * Cleans up house.
 *
 * @api private
 */

Request.prototype.cleanup = function (fromError) {
  if ('undefined' === typeof this.xhr || null === this.xhr) {
    return;
  }
  // xmlhttprequest
  if (this.hasXDR()) {
    this.xhr.onload = this.xhr.onerror = empty;
  } else {
    this.xhr.onreadystatechange = empty;
  }

  if (fromError) {
    try {
      this.xhr.abort();
    } catch (e) {}
  }

  if (typeof document !== 'undefined') {
    delete Request.requests[this.index];
  }

  this.xhr = null;
};

/**
 * Called upon load.
 *
 * @api private
 */

Request.prototype.onLoad = function () {
  var data;
  try {
    var contentType;
    try {
      contentType = this.xhr.getResponseHeader('Content-Type');
    } catch (e) {}
    if (contentType === 'application/octet-stream') {
      data = this.xhr.response || this.xhr.responseText;
    } else {
      data = this.xhr.responseText;
    }
  } catch (e) {
    this.onError(e);
  }
  if (null != data) {
    this.onData(data);
  }
};

/**
 * Check if it has XDomainRequest.
 *
 * @api private
 */

Request.prototype.hasXDR = function () {
  return typeof XDomainRequest !== 'undefined' && !this.xs && this.enablesXDR;
};

/**
 * Aborts the request.
 *
 * @api public
 */

Request.prototype.abort = function () {
  this.cleanup();
};

/**
 * Aborts pending requests when unloading the window. This is needed to prevent
 * memory leaks (e.g. when using IE) and to ensure that no spurious error is
 * emitted.
 */

Request.requestsCount = 0;
Request.requests = {};

if (typeof document !== 'undefined') {
  if (typeof attachEvent === 'function') {
    attachEvent('onunload', unloadHandler);
  } else if (typeof addEventListener === 'function') {
    var terminationEvent = 'onpagehide' in self ? 'pagehide' : 'unload';
    addEventListener(terminationEvent, unloadHandler, false);
  }
}

function unloadHandler () {
  for (var i in Request.requests) {
    if (Request.requests.hasOwnProperty(i)) {
      Request.requests[i].abort();
    }
  }
}


/***/ }),

/***/ "./node_modules/engine.io-client/lib/transports/polling.js":
/*!*****************************************************************!*\
  !*** ./node_modules/engine.io-client/lib/transports/polling.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module dependencies.
 */

var Transport = __webpack_require__(/*! ../transport */ "./node_modules/engine.io-client/lib/transport.js");
var parseqs = __webpack_require__(/*! parseqs */ "./node_modules/parseqs/index.js");
var parser = __webpack_require__(/*! engine.io-parser */ "./node_modules/engine.io-parser/lib/browser.js");
var inherit = __webpack_require__(/*! component-inherit */ "./node_modules/component-inherit/index.js");
var yeast = __webpack_require__(/*! yeast */ "./node_modules/yeast/index.js");
var debug = __webpack_require__(/*! debug */ "./node_modules/engine.io-client/node_modules/debug/src/browser.js")('engine.io-client:polling');

/**
 * Module exports.
 */

module.exports = Polling;

/**
 * Is XHR2 supported?
 */

var hasXHR2 = (function () {
  var XMLHttpRequest = __webpack_require__(/*! xmlhttprequest-ssl */ "./node_modules/engine.io-client/lib/xmlhttprequest.js");
  var xhr = new XMLHttpRequest({ xdomain: false });
  return null != xhr.responseType;
})();

/**
 * Polling interface.
 *
 * @param {Object} opts
 * @api private
 */

function Polling (opts) {
  var forceBase64 = (opts && opts.forceBase64);
  if (!hasXHR2 || forceBase64) {
    this.supportsBinary = false;
  }
  Transport.call(this, opts);
}

/**
 * Inherits from Transport.
 */

inherit(Polling, Transport);

/**
 * Transport name.
 */

Polling.prototype.name = 'polling';

/**
 * Opens the socket (triggers polling). We write a PING message to determine
 * when the transport is open.
 *
 * @api private
 */

Polling.prototype.doOpen = function () {
  this.poll();
};

/**
 * Pauses polling.
 *
 * @param {Function} callback upon buffers are flushed and transport is paused
 * @api private
 */

Polling.prototype.pause = function (onPause) {
  var self = this;

  this.readyState = 'pausing';

  function pause () {
    debug('paused');
    self.readyState = 'paused';
    onPause();
  }

  if (this.polling || !this.writable) {
    var total = 0;

    if (this.polling) {
      debug('we are currently polling - waiting to pause');
      total++;
      this.once('pollComplete', function () {
        debug('pre-pause polling complete');
        --total || pause();
      });
    }

    if (!this.writable) {
      debug('we are currently writing - waiting to pause');
      total++;
      this.once('drain', function () {
        debug('pre-pause writing complete');
        --total || pause();
      });
    }
  } else {
    pause();
  }
};

/**
 * Starts polling cycle.
 *
 * @api public
 */

Polling.prototype.poll = function () {
  debug('polling');
  this.polling = true;
  this.doPoll();
  this.emit('poll');
};

/**
 * Overloads onData to detect payloads.
 *
 * @api private
 */

Polling.prototype.onData = function (data) {
  var self = this;
  debug('polling got data %s', data);
  var callback = function (packet, index, total) {
    // if its the first message we consider the transport open
    if ('opening' === self.readyState) {
      self.onOpen();
    }

    // if its a close packet, we close the ongoing requests
    if ('close' === packet.type) {
      self.onClose();
      return false;
    }

    // otherwise bypass onData and handle the message
    self.onPacket(packet);
  };

  // decode payload
  parser.decodePayload(data, this.socket.binaryType, callback);

  // if an event did not trigger closing
  if ('closed' !== this.readyState) {
    // if we got data we're not polling
    this.polling = false;
    this.emit('pollComplete');

    if ('open' === this.readyState) {
      this.poll();
    } else {
      debug('ignoring poll - transport state "%s"', this.readyState);
    }
  }
};

/**
 * For polling, send a close packet.
 *
 * @api private
 */

Polling.prototype.doClose = function () {
  var self = this;

  function close () {
    debug('writing close packet');
    self.write([{ type: 'close' }]);
  }

  if ('open' === this.readyState) {
    debug('transport open - closing');
    close();
  } else {
    // in case we're trying to close while
    // handshaking is in progress (GH-164)
    debug('transport not open - deferring close');
    this.once('open', close);
  }
};

/**
 * Writes a packets payload.
 *
 * @param {Array} data packets
 * @param {Function} drain callback
 * @api private
 */

Polling.prototype.write = function (packets) {
  var self = this;
  this.writable = false;
  var callbackfn = function () {
    self.writable = true;
    self.emit('drain');
  };

  parser.encodePayload(packets, this.supportsBinary, function (data) {
    self.doWrite(data, callbackfn);
  });
};

/**
 * Generates uri for connection.
 *
 * @api private
 */

Polling.prototype.uri = function () {
  var query = this.query || {};
  var schema = this.secure ? 'https' : 'http';
  var port = '';

  // cache busting is forced
  if (false !== this.timestampRequests) {
    query[this.timestampParam] = yeast();
  }

  if (!this.supportsBinary && !query.sid) {
    query.b64 = 1;
  }

  query = parseqs.encode(query);

  // avoid port if default for schema
  if (this.port && (('https' === schema && Number(this.port) !== 443) ||
     ('http' === schema && Number(this.port) !== 80))) {
    port = ':' + this.port;
  }

  // prepend ? to query
  if (query.length) {
    query = '?' + query;
  }

  var ipv6 = this.hostname.indexOf(':') !== -1;
  return schema + '://' + (ipv6 ? '[' + this.hostname + ']' : this.hostname) + port + this.path + query;
};


/***/ }),

/***/ "./node_modules/engine.io-client/lib/transports/websocket.js":
/*!*******************************************************************!*\
  !*** ./node_modules/engine.io-client/lib/transports/websocket.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module dependencies.
 */

var Transport = __webpack_require__(/*! ../transport */ "./node_modules/engine.io-client/lib/transport.js");
var parser = __webpack_require__(/*! engine.io-parser */ "./node_modules/engine.io-parser/lib/browser.js");
var parseqs = __webpack_require__(/*! parseqs */ "./node_modules/parseqs/index.js");
var inherit = __webpack_require__(/*! component-inherit */ "./node_modules/component-inherit/index.js");
var yeast = __webpack_require__(/*! yeast */ "./node_modules/yeast/index.js");
var debug = __webpack_require__(/*! debug */ "./node_modules/engine.io-client/node_modules/debug/src/browser.js")('engine.io-client:websocket');

var BrowserWebSocket, NodeWebSocket;

if (typeof WebSocket !== 'undefined') {
  BrowserWebSocket = WebSocket;
} else if (typeof self !== 'undefined') {
  BrowserWebSocket = self.WebSocket || self.MozWebSocket;
} else {
  try {
    NodeWebSocket = __webpack_require__(/*! ws */ 4);
  } catch (e) { }
}

/**
 * Get either the `WebSocket` or `MozWebSocket` globals
 * in the browser or try to resolve WebSocket-compatible
 * interface exposed by `ws` for Node-like environment.
 */

var WebSocketImpl = BrowserWebSocket || NodeWebSocket;

/**
 * Module exports.
 */

module.exports = WS;

/**
 * WebSocket transport constructor.
 *
 * @api {Object} connection options
 * @api public
 */

function WS (opts) {
  var forceBase64 = (opts && opts.forceBase64);
  if (forceBase64) {
    this.supportsBinary = false;
  }
  this.perMessageDeflate = opts.perMessageDeflate;
  this.usingBrowserWebSocket = BrowserWebSocket && !opts.forceNode;
  this.protocols = opts.protocols;
  if (!this.usingBrowserWebSocket) {
    WebSocketImpl = NodeWebSocket;
  }
  Transport.call(this, opts);
}

/**
 * Inherits from Transport.
 */

inherit(WS, Transport);

/**
 * Transport name.
 *
 * @api public
 */

WS.prototype.name = 'websocket';

/*
 * WebSockets support binary
 */

WS.prototype.supportsBinary = true;

/**
 * Opens socket.
 *
 * @api private
 */

WS.prototype.doOpen = function () {
  if (!this.check()) {
    // let probe timeout
    return;
  }

  var uri = this.uri();
  var protocols = this.protocols;
  var opts = {
    agent: this.agent,
    perMessageDeflate: this.perMessageDeflate
  };

  // SSL options for Node.js client
  opts.pfx = this.pfx;
  opts.key = this.key;
  opts.passphrase = this.passphrase;
  opts.cert = this.cert;
  opts.ca = this.ca;
  opts.ciphers = this.ciphers;
  opts.rejectUnauthorized = this.rejectUnauthorized;
  if (this.extraHeaders) {
    opts.headers = this.extraHeaders;
  }
  if (this.localAddress) {
    opts.localAddress = this.localAddress;
  }

  try {
    this.ws =
      this.usingBrowserWebSocket && !this.isReactNative
        ? protocols
          ? new WebSocketImpl(uri, protocols)
          : new WebSocketImpl(uri)
        : new WebSocketImpl(uri, protocols, opts);
  } catch (err) {
    return this.emit('error', err);
  }

  if (this.ws.binaryType === undefined) {
    this.supportsBinary = false;
  }

  if (this.ws.supports && this.ws.supports.binary) {
    this.supportsBinary = true;
    this.ws.binaryType = 'nodebuffer';
  } else {
    this.ws.binaryType = 'arraybuffer';
  }

  this.addEventListeners();
};

/**
 * Adds event listeners to the socket
 *
 * @api private
 */

WS.prototype.addEventListeners = function () {
  var self = this;

  this.ws.onopen = function () {
    self.onOpen();
  };
  this.ws.onclose = function () {
    self.onClose();
  };
  this.ws.onmessage = function (ev) {
    self.onData(ev.data);
  };
  this.ws.onerror = function (e) {
    self.onError('websocket error', e);
  };
};

/**
 * Writes data to socket.
 *
 * @param {Array} array of packets.
 * @api private
 */

WS.prototype.write = function (packets) {
  var self = this;
  this.writable = false;

  // encodePacket efficient as it uses WS framing
  // no need for encodePayload
  var total = packets.length;
  for (var i = 0, l = total; i < l; i++) {
    (function (packet) {
      parser.encodePacket(packet, self.supportsBinary, function (data) {
        if (!self.usingBrowserWebSocket) {
          // always create a new object (GH-437)
          var opts = {};
          if (packet.options) {
            opts.compress = packet.options.compress;
          }

          if (self.perMessageDeflate) {
            var len = 'string' === typeof data ? Buffer.byteLength(data) : data.length;
            if (len < self.perMessageDeflate.threshold) {
              opts.compress = false;
            }
          }
        }

        // Sometimes the websocket has already been closed but the browser didn't
        // have a chance of informing us about it yet, in that case send will
        // throw an error
        try {
          if (self.usingBrowserWebSocket) {
            // TypeError is thrown when passing the second argument on Safari
            self.ws.send(data);
          } else {
            self.ws.send(data, opts);
          }
        } catch (e) {
          debug('websocket closed before onclose event');
        }

        --total || done();
      });
    })(packets[i]);
  }

  function done () {
    self.emit('flush');

    // fake drain
    // defer to next tick to allow Socket to clear writeBuffer
    setTimeout(function () {
      self.writable = true;
      self.emit('drain');
    }, 0);
  }
};

/**
 * Called upon close
 *
 * @api private
 */

WS.prototype.onClose = function () {
  Transport.prototype.onClose.call(this);
};

/**
 * Closes socket.
 *
 * @api private
 */

WS.prototype.doClose = function () {
  if (typeof this.ws !== 'undefined') {
    this.ws.close();
  }
};

/**
 * Generates uri for connection.
 *
 * @api private
 */

WS.prototype.uri = function () {
  var query = this.query || {};
  var schema = this.secure ? 'wss' : 'ws';
  var port = '';

  // avoid port if default for schema
  if (this.port && (('wss' === schema && Number(this.port) !== 443) ||
    ('ws' === schema && Number(this.port) !== 80))) {
    port = ':' + this.port;
  }

  // append timestamp to URI
  if (this.timestampRequests) {
    query[this.timestampParam] = yeast();
  }

  // communicate binary support capabilities
  if (!this.supportsBinary) {
    query.b64 = 1;
  }

  query = parseqs.encode(query);

  // prepend ? to query
  if (query.length) {
    query = '?' + query;
  }

  var ipv6 = this.hostname.indexOf(':') !== -1;
  return schema + '://' + (ipv6 ? '[' + this.hostname + ']' : this.hostname) + port + this.path + query;
};

/**
 * Feature detection for WebSocket.
 *
 * @return {Boolean} whether this transport is available.
 * @api public
 */

WS.prototype.check = function () {
  return !!WebSocketImpl && !('__initialize' in WebSocketImpl && this.name === WS.prototype.name);
};


/***/ }),

/***/ "./node_modules/engine.io-client/lib/xmlhttprequest.js":
/*!*************************************************************!*\
  !*** ./node_modules/engine.io-client/lib/xmlhttprequest.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// browser shim for xmlhttprequest module

var hasCORS = __webpack_require__(/*! has-cors */ "./node_modules/has-cors/index.js");

module.exports = function (opts) {
  var xdomain = opts.xdomain;

  // scheme must be same when usign XDomainRequest
  // http://blogs.msdn.com/b/ieinternals/archive/2010/05/13/xdomainrequest-restrictions-limitations-and-workarounds.aspx
  var xscheme = opts.xscheme;

  // XDomainRequest has a flow of not sending cookie, therefore it should be disabled as a default.
  // https://github.com/Automattic/engine.io-client/pull/217
  var enablesXDR = opts.enablesXDR;

  // XMLHttpRequest can be disabled on IE
  try {
    if ('undefined' !== typeof XMLHttpRequest && (!xdomain || hasCORS)) {
      return new XMLHttpRequest();
    }
  } catch (e) { }

  // Use XDomainRequest for IE8 if enablesXDR is true
  // because loading bar keeps flashing when using jsonp-polling
  // https://github.com/yujiosaka/socke.io-ie8-loading-example
  try {
    if ('undefined' !== typeof XDomainRequest && !xscheme && enablesXDR) {
      return new XDomainRequest();
    }
  } catch (e) { }

  if (!xdomain) {
    try {
      return new self[['Active'].concat('Object').join('X')]('Microsoft.XMLHTTP');
    } catch (e) { }
  }
};


/***/ }),

/***/ "./node_modules/engine.io-client/node_modules/component-emitter/index.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/engine.io-client/node_modules/component-emitter/index.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


/**
 * Expose `Emitter`.
 */

if (true) {
  module.exports = Emitter;
}

/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */

function Emitter(obj) {
  if (obj) return mixin(obj);
};

/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }
  return obj;
}

/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.on =
Emitter.prototype.addEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};
  (this._callbacks['$' + event] = this._callbacks['$' + event] || [])
    .push(fn);
  return this;
};

/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.once = function(event, fn){
  function on() {
    this.off(event, on);
    fn.apply(this, arguments);
  }

  on.fn = fn;
  this.on(event, on);
  return this;
};

/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.off =
Emitter.prototype.removeListener =
Emitter.prototype.removeAllListeners =
Emitter.prototype.removeEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};

  // all
  if (0 == arguments.length) {
    this._callbacks = {};
    return this;
  }

  // specific event
  var callbacks = this._callbacks['$' + event];
  if (!callbacks) return this;

  // remove all handlers
  if (1 == arguments.length) {
    delete this._callbacks['$' + event];
    return this;
  }

  // remove specific handler
  var cb;
  for (var i = 0; i < callbacks.length; i++) {
    cb = callbacks[i];
    if (cb === fn || cb.fn === fn) {
      callbacks.splice(i, 1);
      break;
    }
  }
  return this;
};

/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */

Emitter.prototype.emit = function(event){
  this._callbacks = this._callbacks || {};
  var args = [].slice.call(arguments, 1)
    , callbacks = this._callbacks['$' + event];

  if (callbacks) {
    callbacks = callbacks.slice(0);
    for (var i = 0, len = callbacks.length; i < len; ++i) {
      callbacks[i].apply(this, args);
    }
  }

  return this;
};

/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */

Emitter.prototype.listeners = function(event){
  this._callbacks = this._callbacks || {};
  return this._callbacks['$' + event] || [];
};

/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */

Emitter.prototype.hasListeners = function(event){
  return !! this.listeners(event).length;
};


/***/ }),

/***/ "./node_modules/engine.io-client/node_modules/debug/src/browser.js":
/*!*************************************************************************!*\
  !*** ./node_modules/engine.io-client/node_modules/debug/src/browser.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * This is the web browser implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = __webpack_require__(/*! ./debug */ "./node_modules/engine.io-client/node_modules/debug/src/debug.js");
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = 'undefined' != typeof chrome
               && 'undefined' != typeof chrome.storage
                  ? chrome.storage.local
                  : localstorage();

/**
 * Colors.
 */

exports.colors = [
  '#0000CC', '#0000FF', '#0033CC', '#0033FF', '#0066CC', '#0066FF', '#0099CC',
  '#0099FF', '#00CC00', '#00CC33', '#00CC66', '#00CC99', '#00CCCC', '#00CCFF',
  '#3300CC', '#3300FF', '#3333CC', '#3333FF', '#3366CC', '#3366FF', '#3399CC',
  '#3399FF', '#33CC00', '#33CC33', '#33CC66', '#33CC99', '#33CCCC', '#33CCFF',
  '#6600CC', '#6600FF', '#6633CC', '#6633FF', '#66CC00', '#66CC33', '#9900CC',
  '#9900FF', '#9933CC', '#9933FF', '#99CC00', '#99CC33', '#CC0000', '#CC0033',
  '#CC0066', '#CC0099', '#CC00CC', '#CC00FF', '#CC3300', '#CC3333', '#CC3366',
  '#CC3399', '#CC33CC', '#CC33FF', '#CC6600', '#CC6633', '#CC9900', '#CC9933',
  '#CCCC00', '#CCCC33', '#FF0000', '#FF0033', '#FF0066', '#FF0099', '#FF00CC',
  '#FF00FF', '#FF3300', '#FF3333', '#FF3366', '#FF3399', '#FF33CC', '#FF33FF',
  '#FF6600', '#FF6633', '#FF9900', '#FF9933', '#FFCC00', '#FFCC33'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

function useColors() {
  // NB: In an Electron preload script, document will be defined but not fully
  // initialized. Since we know we're in Chrome, we'll just detect this case
  // explicitly
  if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {
    return true;
  }

  // Internet Explorer and Edge do not support colors.
  if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
    return false;
  }

  // is webkit? http://stackoverflow.com/a/16459606/376773
  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
  return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
    // is firebug? http://stackoverflow.com/a/398120/376773
    (typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
    // is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
    // double check webkit in userAgent just in case we are in a worker
    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
}

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

exports.formatters.j = function(v) {
  try {
    return JSON.stringify(v);
  } catch (err) {
    return '[UnexpectedJSONParseError]: ' + err.message;
  }
};


/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
  var useColors = this.useColors;

  args[0] = (useColors ? '%c' : '')
    + this.namespace
    + (useColors ? ' %c' : ' ')
    + args[0]
    + (useColors ? '%c ' : ' ')
    + '+' + exports.humanize(this.diff);

  if (!useColors) return;

  var c = 'color: ' + this.color;
  args.splice(1, 0, c, 'color: inherit')

  // the final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into
  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, function(match) {
    if ('%%' === match) return;
    index++;
    if ('%c' === match) {
      // we only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });

  args.splice(lastC, 0, c);
}

/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */

function log() {
  // this hackery is required for IE8/9, where
  // the `console.log` function doesn't have 'apply'
  return 'object' === typeof console
    && console.log
    && Function.prototype.apply.call(console.log, console, arguments);
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */

function save(namespaces) {
  try {
    if (null == namespaces) {
      exports.storage.removeItem('debug');
    } else {
      exports.storage.debug = namespaces;
    }
  } catch(e) {}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
  var r;
  try {
    r = exports.storage.debug;
  } catch(e) {}

  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
  if (!r && typeof process !== 'undefined' && 'env' in process) {
    r = process.env.DEBUG;
  }

  return r;
}

/**
 * Enable namespaces listed in `localStorage.debug` initially.
 */

exports.enable(load());

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
  try {
    return window.localStorage;
  } catch (e) {}
}


/***/ }),

/***/ "./node_modules/engine.io-client/node_modules/debug/src/debug.js":
/*!***********************************************************************!*\
  !*** ./node_modules/engine.io-client/node_modules/debug/src/debug.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = createDebug.debug = createDebug['default'] = createDebug;
exports.coerce = coerce;
exports.disable = disable;
exports.enable = enable;
exports.enabled = enabled;
exports.humanize = __webpack_require__(/*! ms */ "./node_modules/ms/index.js");

/**
 * Active `debug` instances.
 */
exports.instances = [];

/**
 * The currently active debug mode names, and names to skip.
 */

exports.names = [];
exports.skips = [];

/**
 * Map of special "%n" handling functions, for the debug "format" argument.
 *
 * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
 */

exports.formatters = {};

/**
 * Select a color.
 * @param {String} namespace
 * @return {Number}
 * @api private
 */

function selectColor(namespace) {
  var hash = 0, i;

  for (i in namespace) {
    hash  = ((hash << 5) - hash) + namespace.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }

  return exports.colors[Math.abs(hash) % exports.colors.length];
}

/**
 * Create a debugger with the given `namespace`.
 *
 * @param {String} namespace
 * @return {Function}
 * @api public
 */

function createDebug(namespace) {

  var prevTime;

  function debug() {
    // disabled?
    if (!debug.enabled) return;

    var self = debug;

    // set `diff` timestamp
    var curr = +new Date();
    var ms = curr - (prevTime || curr);
    self.diff = ms;
    self.prev = prevTime;
    self.curr = curr;
    prevTime = curr;

    // turn the `arguments` into a proper Array
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }

    args[0] = exports.coerce(args[0]);

    if ('string' !== typeof args[0]) {
      // anything else let's inspect with %O
      args.unshift('%O');
    }

    // apply any `formatters` transformations
    var index = 0;
    args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {
      // if we encounter an escaped % then don't increase the array index
      if (match === '%%') return match;
      index++;
      var formatter = exports.formatters[format];
      if ('function' === typeof formatter) {
        var val = args[index];
        match = formatter.call(self, val);

        // now we need to remove `args[index]` since it's inlined in the `format`
        args.splice(index, 1);
        index--;
      }
      return match;
    });

    // apply env-specific formatting (colors, etc.)
    exports.formatArgs.call(self, args);

    var logFn = debug.log || exports.log || console.log.bind(console);
    logFn.apply(self, args);
  }

  debug.namespace = namespace;
  debug.enabled = exports.enabled(namespace);
  debug.useColors = exports.useColors();
  debug.color = selectColor(namespace);
  debug.destroy = destroy;

  // env-specific initialization logic for debug instances
  if ('function' === typeof exports.init) {
    exports.init(debug);
  }

  exports.instances.push(debug);

  return debug;
}

function destroy () {
  var index = exports.instances.indexOf(this);
  if (index !== -1) {
    exports.instances.splice(index, 1);
    return true;
  } else {
    return false;
  }
}

/**
 * Enables a debug mode by namespaces. This can include modes
 * separated by a colon and wildcards.
 *
 * @param {String} namespaces
 * @api public
 */

function enable(namespaces) {
  exports.save(namespaces);

  exports.names = [];
  exports.skips = [];

  var i;
  var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
  var len = split.length;

  for (i = 0; i < len; i++) {
    if (!split[i]) continue; // ignore empty strings
    namespaces = split[i].replace(/\*/g, '.*?');
    if (namespaces[0] === '-') {
      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
    } else {
      exports.names.push(new RegExp('^' + namespaces + '$'));
    }
  }

  for (i = 0; i < exports.instances.length; i++) {
    var instance = exports.instances[i];
    instance.enabled = exports.enabled(instance.namespace);
  }
}

/**
 * Disable debug output.
 *
 * @api public
 */

function disable() {
  exports.enable('');
}

/**
 * Returns true if the given mode name is enabled, false otherwise.
 *
 * @param {String} name
 * @return {Boolean}
 * @api public
 */

function enabled(name) {
  if (name[name.length - 1] === '*') {
    return true;
  }
  var i, len;
  for (i = 0, len = exports.skips.length; i < len; i++) {
    if (exports.skips[i].test(name)) {
      return false;
    }
  }
  for (i = 0, len = exports.names.length; i < len; i++) {
    if (exports.names[i].test(name)) {
      return true;
    }
  }
  return false;
}

/**
 * Coerce `val`.
 *
 * @param {Mixed} val
 * @return {Mixed}
 * @api private
 */

function coerce(val) {
  if (val instanceof Error) return val.stack || val.message;
  return val;
}


/***/ }),

/***/ "./node_modules/engine.io-parser/lib/browser.js":
/*!******************************************************!*\
  !*** ./node_modules/engine.io-parser/lib/browser.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module dependencies.
 */

var keys = __webpack_require__(/*! ./keys */ "./node_modules/engine.io-parser/lib/keys.js");
var hasBinary = __webpack_require__(/*! has-binary2 */ "./node_modules/has-binary2/index.js");
var sliceBuffer = __webpack_require__(/*! arraybuffer.slice */ "./node_modules/arraybuffer.slice/index.js");
var after = __webpack_require__(/*! after */ "./node_modules/after/index.js");
var utf8 = __webpack_require__(/*! ./utf8 */ "./node_modules/engine.io-parser/lib/utf8.js");

var base64encoder;
if (typeof ArrayBuffer !== 'undefined') {
  base64encoder = __webpack_require__(/*! base64-arraybuffer */ "./node_modules/base64-arraybuffer/lib/base64-arraybuffer.js");
}

/**
 * Check if we are running an android browser. That requires us to use
 * ArrayBuffer with polling transports...
 *
 * http://ghinda.net/jpeg-blob-ajax-android/
 */

var isAndroid = typeof navigator !== 'undefined' && /Android/i.test(navigator.userAgent);

/**
 * Check if we are running in PhantomJS.
 * Uploading a Blob with PhantomJS does not work correctly, as reported here:
 * https://github.com/ariya/phantomjs/issues/11395
 * @type boolean
 */
var isPhantomJS = typeof navigator !== 'undefined' && /PhantomJS/i.test(navigator.userAgent);

/**
 * When true, avoids using Blobs to encode payloads.
 * @type boolean
 */
var dontSendBlobs = isAndroid || isPhantomJS;

/**
 * Current protocol version.
 */

exports.protocol = 3;

/**
 * Packet types.
 */

var packets = exports.packets = {
    open:     0    // non-ws
  , close:    1    // non-ws
  , ping:     2
  , pong:     3
  , message:  4
  , upgrade:  5
  , noop:     6
};

var packetslist = keys(packets);

/**
 * Premade error packet.
 */

var err = { type: 'error', data: 'parser error' };

/**
 * Create a blob api even for blob builder when vendor prefixes exist
 */

var Blob = __webpack_require__(/*! blob */ "./node_modules/blob/index.js");

/**
 * Encodes a packet.
 *
 *     <packet type id> [ <data> ]
 *
 * Example:
 *
 *     5hello world
 *     3
 *     4
 *
 * Binary is encoded in an identical principle
 *
 * @api private
 */

exports.encodePacket = function (packet, supportsBinary, utf8encode, callback) {
  if (typeof supportsBinary === 'function') {
    callback = supportsBinary;
    supportsBinary = false;
  }

  if (typeof utf8encode === 'function') {
    callback = utf8encode;
    utf8encode = null;
  }

  var data = (packet.data === undefined)
    ? undefined
    : packet.data.buffer || packet.data;

  if (typeof ArrayBuffer !== 'undefined' && data instanceof ArrayBuffer) {
    return encodeArrayBuffer(packet, supportsBinary, callback);
  } else if (typeof Blob !== 'undefined' && data instanceof Blob) {
    return encodeBlob(packet, supportsBinary, callback);
  }

  // might be an object with { base64: true, data: dataAsBase64String }
  if (data && data.base64) {
    return encodeBase64Object(packet, callback);
  }

  // Sending data as a utf-8 string
  var encoded = packets[packet.type];

  // data fragment is optional
  if (undefined !== packet.data) {
    encoded += utf8encode ? utf8.encode(String(packet.data), { strict: false }) : String(packet.data);
  }

  return callback('' + encoded);

};

function encodeBase64Object(packet, callback) {
  // packet data is an object { base64: true, data: dataAsBase64String }
  var message = 'b' + exports.packets[packet.type] + packet.data.data;
  return callback(message);
}

/**
 * Encode packet helpers for binary types
 */

function encodeArrayBuffer(packet, supportsBinary, callback) {
  if (!supportsBinary) {
    return exports.encodeBase64Packet(packet, callback);
  }

  var data = packet.data;
  var contentArray = new Uint8Array(data);
  var resultBuffer = new Uint8Array(1 + data.byteLength);

  resultBuffer[0] = packets[packet.type];
  for (var i = 0; i < contentArray.length; i++) {
    resultBuffer[i+1] = contentArray[i];
  }

  return callback(resultBuffer.buffer);
}

function encodeBlobAsArrayBuffer(packet, supportsBinary, callback) {
  if (!supportsBinary) {
    return exports.encodeBase64Packet(packet, callback);
  }

  var fr = new FileReader();
  fr.onload = function() {
    exports.encodePacket({ type: packet.type, data: fr.result }, supportsBinary, true, callback);
  };
  return fr.readAsArrayBuffer(packet.data);
}

function encodeBlob(packet, supportsBinary, callback) {
  if (!supportsBinary) {
    return exports.encodeBase64Packet(packet, callback);
  }

  if (dontSendBlobs) {
    return encodeBlobAsArrayBuffer(packet, supportsBinary, callback);
  }

  var length = new Uint8Array(1);
  length[0] = packets[packet.type];
  var blob = new Blob([length.buffer, packet.data]);

  return callback(blob);
}

/**
 * Encodes a packet with binary data in a base64 string
 *
 * @param {Object} packet, has `type` and `data`
 * @return {String} base64 encoded message
 */

exports.encodeBase64Packet = function(packet, callback) {
  var message = 'b' + exports.packets[packet.type];
  if (typeof Blob !== 'undefined' && packet.data instanceof Blob) {
    var fr = new FileReader();
    fr.onload = function() {
      var b64 = fr.result.split(',')[1];
      callback(message + b64);
    };
    return fr.readAsDataURL(packet.data);
  }

  var b64data;
  try {
    b64data = String.fromCharCode.apply(null, new Uint8Array(packet.data));
  } catch (e) {
    // iPhone Safari doesn't let you apply with typed arrays
    var typed = new Uint8Array(packet.data);
    var basic = new Array(typed.length);
    for (var i = 0; i < typed.length; i++) {
      basic[i] = typed[i];
    }
    b64data = String.fromCharCode.apply(null, basic);
  }
  message += btoa(b64data);
  return callback(message);
};

/**
 * Decodes a packet. Changes format to Blob if requested.
 *
 * @return {Object} with `type` and `data` (if any)
 * @api private
 */

exports.decodePacket = function (data, binaryType, utf8decode) {
  if (data === undefined) {
    return err;
  }
  // String data
  if (typeof data === 'string') {
    if (data.charAt(0) === 'b') {
      return exports.decodeBase64Packet(data.substr(1), binaryType);
    }

    if (utf8decode) {
      data = tryDecode(data);
      if (data === false) {
        return err;
      }
    }
    var type = data.charAt(0);

    if (Number(type) != type || !packetslist[type]) {
      return err;
    }

    if (data.length > 1) {
      return { type: packetslist[type], data: data.substring(1) };
    } else {
      return { type: packetslist[type] };
    }
  }

  var asArray = new Uint8Array(data);
  var type = asArray[0];
  var rest = sliceBuffer(data, 1);
  if (Blob && binaryType === 'blob') {
    rest = new Blob([rest]);
  }
  return { type: packetslist[type], data: rest };
};

function tryDecode(data) {
  try {
    data = utf8.decode(data, { strict: false });
  } catch (e) {
    return false;
  }
  return data;
}

/**
 * Decodes a packet encoded in a base64 string
 *
 * @param {String} base64 encoded message
 * @return {Object} with `type` and `data` (if any)
 */

exports.decodeBase64Packet = function(msg, binaryType) {
  var type = packetslist[msg.charAt(0)];
  if (!base64encoder) {
    return { type: type, data: { base64: true, data: msg.substr(1) } };
  }

  var data = base64encoder.decode(msg.substr(1));

  if (binaryType === 'blob' && Blob) {
    data = new Blob([data]);
  }

  return { type: type, data: data };
};

/**
 * Encodes multiple messages (payload).
 *
 *     <length>:data
 *
 * Example:
 *
 *     11:hello world2:hi
 *
 * If any contents are binary, they will be encoded as base64 strings. Base64
 * encoded strings are marked with a b before the length specifier
 *
 * @param {Array} packets
 * @api private
 */

exports.encodePayload = function (packets, supportsBinary, callback) {
  if (typeof supportsBinary === 'function') {
    callback = supportsBinary;
    supportsBinary = null;
  }

  var isBinary = hasBinary(packets);

  if (supportsBinary && isBinary) {
    if (Blob && !dontSendBlobs) {
      return exports.encodePayloadAsBlob(packets, callback);
    }

    return exports.encodePayloadAsArrayBuffer(packets, callback);
  }

  if (!packets.length) {
    return callback('0:');
  }

  function setLengthHeader(message) {
    return message.length + ':' + message;
  }

  function encodeOne(packet, doneCallback) {
    exports.encodePacket(packet, !isBinary ? false : supportsBinary, false, function(message) {
      doneCallback(null, setLengthHeader(message));
    });
  }

  map(packets, encodeOne, function(err, results) {
    return callback(results.join(''));
  });
};

/**
 * Async array map using after
 */

function map(ary, each, done) {
  var result = new Array(ary.length);
  var next = after(ary.length, done);

  var eachWithIndex = function(i, el, cb) {
    each(el, function(error, msg) {
      result[i] = msg;
      cb(error, result);
    });
  };

  for (var i = 0; i < ary.length; i++) {
    eachWithIndex(i, ary[i], next);
  }
}

/*
 * Decodes data when a payload is maybe expected. Possible binary contents are
 * decoded from their base64 representation
 *
 * @param {String} data, callback method
 * @api public
 */

exports.decodePayload = function (data, binaryType, callback) {
  if (typeof data !== 'string') {
    return exports.decodePayloadAsBinary(data, binaryType, callback);
  }

  if (typeof binaryType === 'function') {
    callback = binaryType;
    binaryType = null;
  }

  var packet;
  if (data === '') {
    // parser error - ignoring payload
    return callback(err, 0, 1);
  }

  var length = '', n, msg;

  for (var i = 0, l = data.length; i < l; i++) {
    var chr = data.charAt(i);

    if (chr !== ':') {
      length += chr;
      continue;
    }

    if (length === '' || (length != (n = Number(length)))) {
      // parser error - ignoring payload
      return callback(err, 0, 1);
    }

    msg = data.substr(i + 1, n);

    if (length != msg.length) {
      // parser error - ignoring payload
      return callback(err, 0, 1);
    }

    if (msg.length) {
      packet = exports.decodePacket(msg, binaryType, false);

      if (err.type === packet.type && err.data === packet.data) {
        // parser error in individual packet - ignoring payload
        return callback(err, 0, 1);
      }

      var ret = callback(packet, i + n, l);
      if (false === ret) return;
    }

    // advance cursor
    i += n;
    length = '';
  }

  if (length !== '') {
    // parser error - ignoring payload
    return callback(err, 0, 1);
  }

};

/**
 * Encodes multiple messages (payload) as binary.
 *
 * <1 = binary, 0 = string><number from 0-9><number from 0-9>[...]<number
 * 255><data>
 *
 * Example:
 * 1 3 255 1 2 3, if the binary contents are interpreted as 8 bit integers
 *
 * @param {Array} packets
 * @return {ArrayBuffer} encoded payload
 * @api private
 */

exports.encodePayloadAsArrayBuffer = function(packets, callback) {
  if (!packets.length) {
    return callback(new ArrayBuffer(0));
  }

  function encodeOne(packet, doneCallback) {
    exports.encodePacket(packet, true, true, function(data) {
      return doneCallback(null, data);
    });
  }

  map(packets, encodeOne, function(err, encodedPackets) {
    var totalLength = encodedPackets.reduce(function(acc, p) {
      var len;
      if (typeof p === 'string'){
        len = p.length;
      } else {
        len = p.byteLength;
      }
      return acc + len.toString().length + len + 2; // string/binary identifier + separator = 2
    }, 0);

    var resultArray = new Uint8Array(totalLength);

    var bufferIndex = 0;
    encodedPackets.forEach(function(p) {
      var isString = typeof p === 'string';
      var ab = p;
      if (isString) {
        var view = new Uint8Array(p.length);
        for (var i = 0; i < p.length; i++) {
          view[i] = p.charCodeAt(i);
        }
        ab = view.buffer;
      }

      if (isString) { // not true binary
        resultArray[bufferIndex++] = 0;
      } else { // true binary
        resultArray[bufferIndex++] = 1;
      }

      var lenStr = ab.byteLength.toString();
      for (var i = 0; i < lenStr.length; i++) {
        resultArray[bufferIndex++] = parseInt(lenStr[i]);
      }
      resultArray[bufferIndex++] = 255;

      var view = new Uint8Array(ab);
      for (var i = 0; i < view.length; i++) {
        resultArray[bufferIndex++] = view[i];
      }
    });

    return callback(resultArray.buffer);
  });
};

/**
 * Encode as Blob
 */

exports.encodePayloadAsBlob = function(packets, callback) {
  function encodeOne(packet, doneCallback) {
    exports.encodePacket(packet, true, true, function(encoded) {
      var binaryIdentifier = new Uint8Array(1);
      binaryIdentifier[0] = 1;
      if (typeof encoded === 'string') {
        var view = new Uint8Array(encoded.length);
        for (var i = 0; i < encoded.length; i++) {
          view[i] = encoded.charCodeAt(i);
        }
        encoded = view.buffer;
        binaryIdentifier[0] = 0;
      }

      var len = (encoded instanceof ArrayBuffer)
        ? encoded.byteLength
        : encoded.size;

      var lenStr = len.toString();
      var lengthAry = new Uint8Array(lenStr.length + 1);
      for (var i = 0; i < lenStr.length; i++) {
        lengthAry[i] = parseInt(lenStr[i]);
      }
      lengthAry[lenStr.length] = 255;

      if (Blob) {
        var blob = new Blob([binaryIdentifier.buffer, lengthAry.buffer, encoded]);
        doneCallback(null, blob);
      }
    });
  }

  map(packets, encodeOne, function(err, results) {
    return callback(new Blob(results));
  });
};

/*
 * Decodes data when a payload is maybe expected. Strings are decoded by
 * interpreting each byte as a key code for entries marked to start with 0. See
 * description of encodePayloadAsBinary
 *
 * @param {ArrayBuffer} data, callback method
 * @api public
 */

exports.decodePayloadAsBinary = function (data, binaryType, callback) {
  if (typeof binaryType === 'function') {
    callback = binaryType;
    binaryType = null;
  }

  var bufferTail = data;
  var buffers = [];

  while (bufferTail.byteLength > 0) {
    var tailArray = new Uint8Array(bufferTail);
    var isString = tailArray[0] === 0;
    var msgLength = '';

    for (var i = 1; ; i++) {
      if (tailArray[i] === 255) break;

      // 310 = char length of Number.MAX_VALUE
      if (msgLength.length > 310) {
        return callback(err, 0, 1);
      }

      msgLength += tailArray[i];
    }

    bufferTail = sliceBuffer(bufferTail, 2 + msgLength.length);
    msgLength = parseInt(msgLength);

    var msg = sliceBuffer(bufferTail, 0, msgLength);
    if (isString) {
      try {
        msg = String.fromCharCode.apply(null, new Uint8Array(msg));
      } catch (e) {
        // iPhone Safari doesn't let you apply to typed arrays
        var typed = new Uint8Array(msg);
        msg = '';
        for (var i = 0; i < typed.length; i++) {
          msg += String.fromCharCode(typed[i]);
        }
      }
    }

    buffers.push(msg);
    bufferTail = sliceBuffer(bufferTail, msgLength);
  }

  var total = buffers.length;
  buffers.forEach(function(buffer, i) {
    callback(exports.decodePacket(buffer, binaryType, true), i, total);
  });
};


/***/ }),

/***/ "./node_modules/engine.io-parser/lib/keys.js":
/*!***************************************************!*\
  !*** ./node_modules/engine.io-parser/lib/keys.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * Gets the keys for an object.
 *
 * @return {Array} keys
 * @api private
 */

module.exports = Object.keys || function keys (obj){
  var arr = [];
  var has = Object.prototype.hasOwnProperty;

  for (var i in obj) {
    if (has.call(obj, i)) {
      arr.push(i);
    }
  }
  return arr;
};


/***/ }),

/***/ "./node_modules/engine.io-parser/lib/utf8.js":
/*!***************************************************!*\
  !*** ./node_modules/engine.io-parser/lib/utf8.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*! https://mths.be/utf8js v2.1.2 by @mathias */

var stringFromCharCode = String.fromCharCode;

// Taken from https://mths.be/punycode
function ucs2decode(string) {
	var output = [];
	var counter = 0;
	var length = string.length;
	var value;
	var extra;
	while (counter < length) {
		value = string.charCodeAt(counter++);
		if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
			// high surrogate, and there is a next character
			extra = string.charCodeAt(counter++);
			if ((extra & 0xFC00) == 0xDC00) { // low surrogate
				output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
			} else {
				// unmatched surrogate; only append this code unit, in case the next
				// code unit is the high surrogate of a surrogate pair
				output.push(value);
				counter--;
			}
		} else {
			output.push(value);
		}
	}
	return output;
}

// Taken from https://mths.be/punycode
function ucs2encode(array) {
	var length = array.length;
	var index = -1;
	var value;
	var output = '';
	while (++index < length) {
		value = array[index];
		if (value > 0xFFFF) {
			value -= 0x10000;
			output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
			value = 0xDC00 | value & 0x3FF;
		}
		output += stringFromCharCode(value);
	}
	return output;
}

function checkScalarValue(codePoint, strict) {
	if (codePoint >= 0xD800 && codePoint <= 0xDFFF) {
		if (strict) {
			throw Error(
				'Lone surrogate U+' + codePoint.toString(16).toUpperCase() +
				' is not a scalar value'
			);
		}
		return false;
	}
	return true;
}
/*--------------------------------------------------------------------------*/

function createByte(codePoint, shift) {
	return stringFromCharCode(((codePoint >> shift) & 0x3F) | 0x80);
}

function encodeCodePoint(codePoint, strict) {
	if ((codePoint & 0xFFFFFF80) == 0) { // 1-byte sequence
		return stringFromCharCode(codePoint);
	}
	var symbol = '';
	if ((codePoint & 0xFFFFF800) == 0) { // 2-byte sequence
		symbol = stringFromCharCode(((codePoint >> 6) & 0x1F) | 0xC0);
	}
	else if ((codePoint & 0xFFFF0000) == 0) { // 3-byte sequence
		if (!checkScalarValue(codePoint, strict)) {
			codePoint = 0xFFFD;
		}
		symbol = stringFromCharCode(((codePoint >> 12) & 0x0F) | 0xE0);
		symbol += createByte(codePoint, 6);
	}
	else if ((codePoint & 0xFFE00000) == 0) { // 4-byte sequence
		symbol = stringFromCharCode(((codePoint >> 18) & 0x07) | 0xF0);
		symbol += createByte(codePoint, 12);
		symbol += createByte(codePoint, 6);
	}
	symbol += stringFromCharCode((codePoint & 0x3F) | 0x80);
	return symbol;
}

function utf8encode(string, opts) {
	opts = opts || {};
	var strict = false !== opts.strict;

	var codePoints = ucs2decode(string);
	var length = codePoints.length;
	var index = -1;
	var codePoint;
	var byteString = '';
	while (++index < length) {
		codePoint = codePoints[index];
		byteString += encodeCodePoint(codePoint, strict);
	}
	return byteString;
}

/*--------------------------------------------------------------------------*/

function readContinuationByte() {
	if (byteIndex >= byteCount) {
		throw Error('Invalid byte index');
	}

	var continuationByte = byteArray[byteIndex] & 0xFF;
	byteIndex++;

	if ((continuationByte & 0xC0) == 0x80) {
		return continuationByte & 0x3F;
	}

	// If we end up here, it’s not a continuation byte
	throw Error('Invalid continuation byte');
}

function decodeSymbol(strict) {
	var byte1;
	var byte2;
	var byte3;
	var byte4;
	var codePoint;

	if (byteIndex > byteCount) {
		throw Error('Invalid byte index');
	}

	if (byteIndex == byteCount) {
		return false;
	}

	// Read first byte
	byte1 = byteArray[byteIndex] & 0xFF;
	byteIndex++;

	// 1-byte sequence (no continuation bytes)
	if ((byte1 & 0x80) == 0) {
		return byte1;
	}

	// 2-byte sequence
	if ((byte1 & 0xE0) == 0xC0) {
		byte2 = readContinuationByte();
		codePoint = ((byte1 & 0x1F) << 6) | byte2;
		if (codePoint >= 0x80) {
			return codePoint;
		} else {
			throw Error('Invalid continuation byte');
		}
	}

	// 3-byte sequence (may include unpaired surrogates)
	if ((byte1 & 0xF0) == 0xE0) {
		byte2 = readContinuationByte();
		byte3 = readContinuationByte();
		codePoint = ((byte1 & 0x0F) << 12) | (byte2 << 6) | byte3;
		if (codePoint >= 0x0800) {
			return checkScalarValue(codePoint, strict) ? codePoint : 0xFFFD;
		} else {
			throw Error('Invalid continuation byte');
		}
	}

	// 4-byte sequence
	if ((byte1 & 0xF8) == 0xF0) {
		byte2 = readContinuationByte();
		byte3 = readContinuationByte();
		byte4 = readContinuationByte();
		codePoint = ((byte1 & 0x07) << 0x12) | (byte2 << 0x0C) |
			(byte3 << 0x06) | byte4;
		if (codePoint >= 0x010000 && codePoint <= 0x10FFFF) {
			return codePoint;
		}
	}

	throw Error('Invalid UTF-8 detected');
}

var byteArray;
var byteCount;
var byteIndex;
function utf8decode(byteString, opts) {
	opts = opts || {};
	var strict = false !== opts.strict;

	byteArray = ucs2decode(byteString);
	byteCount = byteArray.length;
	byteIndex = 0;
	var codePoints = [];
	var tmp;
	while ((tmp = decodeSymbol(strict)) !== false) {
		codePoints.push(tmp);
	}
	return ucs2encode(codePoints);
}

module.exports = {
	version: '2.1.2',
	encode: utf8encode,
	decode: utf8decode
};


/***/ }),

/***/ "./node_modules/has-binary2/index.js":
/*!*******************************************!*\
  !*** ./node_modules/has-binary2/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* global Blob File */

/*
 * Module requirements.
 */

var isArray = __webpack_require__(/*! isarray */ "./node_modules/has-binary2/node_modules/isarray/index.js");

var toString = Object.prototype.toString;
var withNativeBlob = typeof Blob === 'function' ||
                        typeof Blob !== 'undefined' && toString.call(Blob) === '[object BlobConstructor]';
var withNativeFile = typeof File === 'function' ||
                        typeof File !== 'undefined' && toString.call(File) === '[object FileConstructor]';

/**
 * Module exports.
 */

module.exports = hasBinary;

/**
 * Checks for binary data.
 *
 * Supports Buffer, ArrayBuffer, Blob and File.
 *
 * @param {Object} anything
 * @api public
 */

function hasBinary (obj) {
  if (!obj || typeof obj !== 'object') {
    return false;
  }

  if (isArray(obj)) {
    for (var i = 0, l = obj.length; i < l; i++) {
      if (hasBinary(obj[i])) {
        return true;
      }
    }
    return false;
  }

  if ((typeof Buffer === 'function' && Buffer.isBuffer && Buffer.isBuffer(obj)) ||
    (typeof ArrayBuffer === 'function' && obj instanceof ArrayBuffer) ||
    (withNativeBlob && obj instanceof Blob) ||
    (withNativeFile && obj instanceof File)
  ) {
    return true;
  }

  // see: https://github.com/Automattic/has-binary/pull/4
  if (obj.toJSON && typeof obj.toJSON === 'function' && arguments.length === 1) {
    return hasBinary(obj.toJSON(), true);
  }

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key) && hasBinary(obj[key])) {
      return true;
    }
  }

  return false;
}


/***/ }),

/***/ "./node_modules/has-binary2/node_modules/isarray/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/has-binary2/node_modules/isarray/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ "./node_modules/has-cors/index.js":
/*!****************************************!*\
  !*** ./node_modules/has-cors/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * Module exports.
 *
 * Logic borrowed from Modernizr:
 *
 *   - https://github.com/Modernizr/Modernizr/blob/master/feature-detects/cors.js
 */

try {
  module.exports = typeof XMLHttpRequest !== 'undefined' &&
    'withCredentials' in new XMLHttpRequest();
} catch (err) {
  // if XMLHttp support is disabled in IE then it will throw
  // when trying to create
  module.exports = false;
}


/***/ }),

/***/ "./node_modules/indexof/index.js":
/*!***************************************!*\
  !*** ./node_modules/indexof/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {


var indexOf = [].indexOf;

module.exports = function(arr, obj){
  if (indexOf) return arr.indexOf(obj);
  for (var i = 0; i < arr.length; ++i) {
    if (arr[i] === obj) return i;
  }
  return -1;
};

/***/ }),

/***/ "./node_modules/ms/index.js":
/*!**********************************!*\
  !*** ./node_modules/ms/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isNaN(val) === false) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  if (ms >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (ms >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (ms >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (ms >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  return plural(ms, d, 'day') ||
    plural(ms, h, 'hour') ||
    plural(ms, m, 'minute') ||
    plural(ms, s, 'second') ||
    ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, n, name) {
  if (ms < n) {
    return;
  }
  if (ms < n * 1.5) {
    return Math.floor(ms / n) + ' ' + name;
  }
  return Math.ceil(ms / n) + ' ' + name + 's';
}


/***/ }),

/***/ "./node_modules/parseqs/index.js":
/*!***************************************!*\
  !*** ./node_modules/parseqs/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Compiles a querystring
 * Returns string representation of the object
 *
 * @param {Object}
 * @api private
 */

exports.encode = function (obj) {
  var str = '';

  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      if (str.length) str += '&';
      str += encodeURIComponent(i) + '=' + encodeURIComponent(obj[i]);
    }
  }

  return str;
};

/**
 * Parses a simple querystring into an object
 *
 * @param {String} qs
 * @api private
 */

exports.decode = function(qs){
  var qry = {};
  var pairs = qs.split('&');
  for (var i = 0, l = pairs.length; i < l; i++) {
    var pair = pairs[i].split('=');
    qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
  }
  return qry;
};


/***/ }),

/***/ "./node_modules/parseuri/index.js":
/*!****************************************!*\
  !*** ./node_modules/parseuri/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Parses an URI
 *
 * @author Steven Levithan <stevenlevithan.com> (MIT license)
 * @api private
 */

var re = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;

var parts = [
    'source', 'protocol', 'authority', 'userInfo', 'user', 'password', 'host', 'port', 'relative', 'path', 'directory', 'file', 'query', 'anchor'
];

module.exports = function parseuri(str) {
    var src = str,
        b = str.indexOf('['),
        e = str.indexOf(']');

    if (b != -1 && e != -1) {
        str = str.substring(0, b) + str.substring(b, e).replace(/:/g, ';') + str.substring(e, str.length);
    }

    var m = re.exec(str || ''),
        uri = {},
        i = 14;

    while (i--) {
        uri[parts[i]] = m[i] || '';
    }

    if (b != -1 && e != -1) {
        uri.source = src;
        uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ':');
        uri.authority = uri.authority.replace('[', '').replace(']', '').replace(/;/g, ':');
        uri.ipv6uri = true;
    }

    return uri;
};


/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/container/main/group-list/chat-room/chat-message/chat-message.component.html":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/container/main/group-list/chat-room/chat-message/chat-message.component.html ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div (click)=\"showControl = !showControl\">\n  <ng-container *ngIf=\"!isCurrentUser; else currentUserRef\">\n    <div class=\"other-user\">\n      <img\n        [style.opacity]=\"isSiblingMessage ? '0' : '1'\"\n        matCardAvatar\n        class=\"other-user-image\"\n        [src]=\"getUserImage()\"\n      />\n      <span\n        class=\"other-user-message\"\n        [ngClass]=\"{ 'other-user-sibling': isSiblingMessage }\"\n      >\n        <span class=\"other-user-message-author\" *ngIf=\"!isSiblingMessage\">{{\n          message.userId.fullName\n        }}</span>\n        <span class=\"other-user-message-content\">{{ message.message }}</span>\n        <span class=\"other-user-message-control\">{{\n          message.date | date: 'shortTime'\n        }}</span>\n      </span>\n    </div>\n  </ng-container>\n  <ng-template #currentUserRef>\n    <div class=\"user\">\n      <span\n        class=\"user-message\"\n        [ngClass]=\"{ 'user-sibling': isSiblingMessage }\"\n      >\n        <span class=\"user-message-author\" *ngIf=\"!isSiblingMessage\">{{\n          message.userId.fullName\n        }}</span>\n        <span class=\"user-message-content\">{{ message.message }}</span>\n        <span class=\"user-message-control\">{{\n          message.date | date: 'shortTime'\n        }}</span>\n      </span>\n      <img\n        [style.opacity]=\"isSiblingMessage ? '0' : '1'\"\n        matCardAvatar\n        class=\"user-image\"\n        [src]=\"message.userId.image.image\"\n      />\n    </div>\n  </ng-template>\n</div>\n<span class=\"message-control\" *ngIf=\"showControl\">\n  Control Panel In Work\n</span>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/container/main/group-list/chat-room/chat-room.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/container/main/group-list/chat-room/chat-room.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"!isLoading; else loaderRef\">\n  <div class=\"control-container\">\n    <button [routerLink]=\"['../']\" mat-icon-button>\n      <mat-icon class=\"mat-18\">arrow_back_ios</mat-icon>\n    </button>\n    <div class=\"group-data\" *ngIf=\"group\">\n      <img [src]=\"getPic()\" matCardAvatar />\n      <span>{{ group.name }}</span>\n    </div>\n  </div>\n\n  <mat-nav-list>\n    <mat-divider></mat-divider>\n    <div class=\"messages-container\" #messagesContainerRef>\n      <div class=\"message\" *ngFor=\"let message of messages; let i = index\">\n        <app-chat-message\n          [message]=\"message\"\n          [isCurrentUser]=\"isCurrentUser(message.userId)\"\n          [isSiblingMessage]=\"isSiblingMessage(i, message.userId)\"\n        ></app-chat-message>\n      </div>\n    </div>\n  </mat-nav-list>\n  <div class=\"input-container\">\n    <mat-form-field appearance=\"outline\">\n      <input\n        (keydown)=\"onKeyDownSend($event)\"\n        autocomplete=\"off\"\n        [(ngModel)]=\"messageInput\"\n        matInput\n        type=\"text\"\n      />\n    </mat-form-field>\n    <button\n      [disabled]=\"!messageInput\"\n      (click)=\"onSendMessage()\"\n      mat-fab\n      class=\"fab-button\"\n    >\n      <mat-icon class=\"mat-18\">send</mat-icon>\n    </button>\n  </div>\n</ng-container>\n<ng-template #loaderRef>\n  <app-polygon-loader></app-polygon-loader>\n</ng-template>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/container/main/group-list/create-group/create-group.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/container/main/group-list/create-group/create-group.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-polygons></app-polygons>\n\n<button class=\"close-button\" (click)=\"onCreateGroupDialog()\" mat-icon-button>\n  <mat-icon class=\"mat-18\">keyboard_arrow_down</mat-icon>\n</button>\n\n<div class=\"create-group-container\">\n  <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n    <mat-vertical-stepper>\n      <mat-step>\n        <ng-template matStepLabel>Find People To Chat With</ng-template>\n        <mat-form-field>\n          <input\n            type=\"text\"\n            placeholder=\"Pick one\"\n            matInput\n            formControlName=\"user\"\n            [matAutocomplete]=\"auto\"\n            (input)=\"onSearchUsers($event)\"\n          />\n\n          <mat-progress-spinner\n            [diameter]=\"20\"\n            *ngIf=\"!isOptionLoaded\"\n            class=\"spinning-auto\"\n            mode=\"indeterminate\"\n          >\n          </mat-progress-spinner>\n          <mat-autocomplete\n            #auto=\"matAutocomplete\"\n            (opened)=\"onSearchUsers()\"\n            (optionSelected)=\"addToUsers($event)\"\n            [displayWith]=\"displayWithFunction\"\n          >\n            <mat-option\n              class=\"option\"\n              *ngFor=\"let user of options\"\n              [value]=\"user\"\n            >\n              <img\n                matCardAvatar\n                class=\"example-option-img\"\n                aria-hidden\n                [src]=\"getUserImage(user)\"\n              />\n              <span>{{ user.fullName }}</span> |\n              <small>Email: {{ user.email }}</small>\n            </mat-option>\n          </mat-autocomplete>\n        </mat-form-field>\n        <div class=\"user-list\" *ngIf=\"selectedUsers.length > 0\">\n          <mat-list dense>\n            <mat-list-item *ngFor=\"let user of selectedUsers\">\n              <img\n                matCardAvatar\n                class=\"example-option-img\"\n                aria-hidden\n                [src]=\"user.image\"\n              />\n              <span>{{\n                user.fullName.length > 10\n                  ? (user.fullName | slice: 0:10) + '...'\n                  : user.fullName\n              }}</span>\n              <button\n                class=\"remove-button\"\n                mat-icon-button\n                (click)=\"removeUser(user._id)\"\n              >\n                <mat-icon class=\"mat-18\">clear</mat-icon>\n              </button>\n            </mat-list-item>\n          </mat-list>\n        </div>\n        <div class=\"button-group\">\n          <button type=\"button\" mat-button matStepperNext>Next</button>\n        </div>\n      </mat-step>\n      <mat-step>\n        <ng-template matStepLabel>Group Name</ng-template>\n        <mat-form-field>\n          <input\n            matInput\n            type=\"text\"\n            placeholder=\"Group Name\"\n            formControlName=\"name\"\n            required\n          />\n        </mat-form-field>\n\n        <div class=\"button-group\">\n          <button type=\"button\" mat-button matStepperPrevious>Back</button>\n          <button type=\"button\" mat-button matStepperNext>Next</button>\n        </div>\n      </mat-step>\n      <mat-step>\n        <ng-template matStepLabel>Group Image</ng-template>\n        <div class=\"image-control-container\">\n          <div class=\"image-control\">\n            <app-upload-image\n              [onImagePicked]=\"onImagePicked.bind(this)\"\n            ></app-upload-image>\n          </div>\n          <img\n            matCardAvatar\n            class=\"image\"\n            *ngIf=\"form.get('image').value\"\n            [src]=\"form.get('image').value\"\n            alt=\"Image\"\n          />\n        </div>\n        <div class=\"button-group\">\n          <button type=\"button\" mat-button matStepperPrevious>Back</button>\n          <button type=\"button\" mat-button matStepperNext>Next</button>\n        </div>\n      </mat-step>\n      <mat-step>\n        <ng-template matStepLabel>Finish Line</ng-template>\n        <button\n          class=\"primary-button \"\n          [disabled]=\"form.invalid\"\n          [ngClass]=\"{\n            'submitted-button': isLoading\n          }\"\n          color=\"primary\"\n        >\n          Save Group\n        </button>\n      </mat-step>\n    </mat-vertical-stepper>\n  </form>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/container/main/group-list/group-list.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/container/main/group-list/group-list.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"!isLoading\">\n  <div class=\"search-container\">\n    <mat-form-field appearance=\"outline\">\n      <input\n        autocomplete=\"off\"\n        placeholder=\"Search For Group\"\n        matInput\n        type=\"text\"\n        [(ngModel)]=\"searchGroupInput\"\n      />\n      <mat-icon *ngIf=\"!searchGroupInput\" matSuffix>search</mat-icon>\n      <mat-icon\n        *ngIf=\"searchGroupInput\"\n        matSuffix\n        (click)=\"searchGroupInput = ''\"\n        >clear</mat-icon\n      >\n    </mat-form-field>\n  </div>\n  <mat-nav-list dense *ngIf=\"filterGroupList().length\">\n    <ng-container *ngFor=\"let groupData of filterGroupList(); let i = index\">\n      <mat-list-item\n        *ngIf=\"groupData.group\"\n        (click)=\"routeToChat(groupData.group._id)\"\n      >\n        <a mat-list-item>\n          <img\n            matCardAvatar\n            class=\"group-image\"\n            [src]=\"getPic(groupData.group)\"\n          />\n          <span>{{ groupData.group.name }}</span>\n        </a>\n        <mat-divider></mat-divider>\n      </mat-list-item>\n    </ng-container>\n  </mat-nav-list>\n  <div class=\"no-groups\" *ngIf=\"!filterGroupList().length\">\n    <span>\n      Opss, we did not find any groups yet\n    </span>\n    <a (click)=\"onCreateGroupDialog()\">Click here to create one</a>\n  </div>\n</ng-container>\n\n<app-polygon-loader *ngIf=\"isLoading\"></app-polygon-loader>\n\n<button\n  mat-fab\n  color=\"primary\"\n  class=\"add-group-button\"\n  (click)=\"onCreateGroupDialog()\"\n>\n  <mat-icon class=\"mat-18\">add</mat-icon>\n</button>\n\n<app-create-group\n  [@slideBottom]\n  [initFetchGroups]=\"initFetchGroups.bind(this)\"\n  [onCreateGroupDialog]=\"onCreateGroupDialog.bind(this)\"\n  *ngIf=\"showCreateGroupDialog\"\n></app-create-group>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/container/main/main.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/container/main/main.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/socket.io-client/lib/index.js":
/*!****************************************************!*\
  !*** ./node_modules/socket.io-client/lib/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


/**
 * Module dependencies.
 */

var url = __webpack_require__(/*! ./url */ "./node_modules/socket.io-client/lib/url.js");
var parser = __webpack_require__(/*! socket.io-parser */ "./node_modules/socket.io-client/node_modules/socket.io-parser/index.js");
var Manager = __webpack_require__(/*! ./manager */ "./node_modules/socket.io-client/lib/manager.js");
var debug = __webpack_require__(/*! debug */ "./node_modules/socket.io-client/node_modules/debug/src/browser.js")('socket.io-client');

/**
 * Module exports.
 */

module.exports = exports = lookup;

/**
 * Managers cache.
 */

var cache = exports.managers = {};

/**
 * Looks up an existing `Manager` for multiplexing.
 * If the user summons:
 *
 *   `io('http://localhost/a');`
 *   `io('http://localhost/b');`
 *
 * We reuse the existing instance based on same scheme/port/host,
 * and we initialize sockets for each namespace.
 *
 * @api public
 */

function lookup (uri, opts) {
  if (typeof uri === 'object') {
    opts = uri;
    uri = undefined;
  }

  opts = opts || {};

  var parsed = url(uri);
  var source = parsed.source;
  var id = parsed.id;
  var path = parsed.path;
  var sameNamespace = cache[id] && path in cache[id].nsps;
  var newConnection = opts.forceNew || opts['force new connection'] ||
                      false === opts.multiplex || sameNamespace;

  var io;

  if (newConnection) {
    debug('ignoring socket cache for %s', source);
    io = Manager(source, opts);
  } else {
    if (!cache[id]) {
      debug('new io instance for %s', source);
      cache[id] = Manager(source, opts);
    }
    io = cache[id];
  }
  if (parsed.query && !opts.query) {
    opts.query = parsed.query;
  }
  return io.socket(parsed.path, opts);
}

/**
 * Protocol version.
 *
 * @api public
 */

exports.protocol = parser.protocol;

/**
 * `connect`.
 *
 * @param {String} uri
 * @api public
 */

exports.connect = lookup;

/**
 * Expose constructors for standalone build.
 *
 * @api public
 */

exports.Manager = __webpack_require__(/*! ./manager */ "./node_modules/socket.io-client/lib/manager.js");
exports.Socket = __webpack_require__(/*! ./socket */ "./node_modules/socket.io-client/lib/socket.js");


/***/ }),

/***/ "./node_modules/socket.io-client/lib/manager.js":
/*!******************************************************!*\
  !*** ./node_modules/socket.io-client/lib/manager.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


/**
 * Module dependencies.
 */

var eio = __webpack_require__(/*! engine.io-client */ "./node_modules/engine.io-client/lib/index.js");
var Socket = __webpack_require__(/*! ./socket */ "./node_modules/socket.io-client/lib/socket.js");
var Emitter = __webpack_require__(/*! component-emitter */ "./node_modules/socket.io-client/node_modules/component-emitter/index.js");
var parser = __webpack_require__(/*! socket.io-parser */ "./node_modules/socket.io-client/node_modules/socket.io-parser/index.js");
var on = __webpack_require__(/*! ./on */ "./node_modules/socket.io-client/lib/on.js");
var bind = __webpack_require__(/*! component-bind */ "./node_modules/component-bind/index.js");
var debug = __webpack_require__(/*! debug */ "./node_modules/socket.io-client/node_modules/debug/src/browser.js")('socket.io-client:manager');
var indexOf = __webpack_require__(/*! indexof */ "./node_modules/indexof/index.js");
var Backoff = __webpack_require__(/*! backo2 */ "./node_modules/backo2/index.js");

/**
 * IE6+ hasOwnProperty
 */

var has = Object.prototype.hasOwnProperty;

/**
 * Module exports
 */

module.exports = Manager;

/**
 * `Manager` constructor.
 *
 * @param {String} engine instance or engine uri/opts
 * @param {Object} options
 * @api public
 */

function Manager (uri, opts) {
  if (!(this instanceof Manager)) return new Manager(uri, opts);
  if (uri && ('object' === typeof uri)) {
    opts = uri;
    uri = undefined;
  }
  opts = opts || {};

  opts.path = opts.path || '/socket.io';
  this.nsps = {};
  this.subs = [];
  this.opts = opts;
  this.reconnection(opts.reconnection !== false);
  this.reconnectionAttempts(opts.reconnectionAttempts || Infinity);
  this.reconnectionDelay(opts.reconnectionDelay || 1000);
  this.reconnectionDelayMax(opts.reconnectionDelayMax || 5000);
  this.randomizationFactor(opts.randomizationFactor || 0.5);
  this.backoff = new Backoff({
    min: this.reconnectionDelay(),
    max: this.reconnectionDelayMax(),
    jitter: this.randomizationFactor()
  });
  this.timeout(null == opts.timeout ? 20000 : opts.timeout);
  this.readyState = 'closed';
  this.uri = uri;
  this.connecting = [];
  this.lastPing = null;
  this.encoding = false;
  this.packetBuffer = [];
  var _parser = opts.parser || parser;
  this.encoder = new _parser.Encoder();
  this.decoder = new _parser.Decoder();
  this.autoConnect = opts.autoConnect !== false;
  if (this.autoConnect) this.open();
}

/**
 * Propagate given event to sockets and emit on `this`
 *
 * @api private
 */

Manager.prototype.emitAll = function () {
  this.emit.apply(this, arguments);
  for (var nsp in this.nsps) {
    if (has.call(this.nsps, nsp)) {
      this.nsps[nsp].emit.apply(this.nsps[nsp], arguments);
    }
  }
};

/**
 * Update `socket.id` of all sockets
 *
 * @api private
 */

Manager.prototype.updateSocketIds = function () {
  for (var nsp in this.nsps) {
    if (has.call(this.nsps, nsp)) {
      this.nsps[nsp].id = this.generateId(nsp);
    }
  }
};

/**
 * generate `socket.id` for the given `nsp`
 *
 * @param {String} nsp
 * @return {String}
 * @api private
 */

Manager.prototype.generateId = function (nsp) {
  return (nsp === '/' ? '' : (nsp + '#')) + this.engine.id;
};

/**
 * Mix in `Emitter`.
 */

Emitter(Manager.prototype);

/**
 * Sets the `reconnection` config.
 *
 * @param {Boolean} true/false if it should automatically reconnect
 * @return {Manager} self or value
 * @api public
 */

Manager.prototype.reconnection = function (v) {
  if (!arguments.length) return this._reconnection;
  this._reconnection = !!v;
  return this;
};

/**
 * Sets the reconnection attempts config.
 *
 * @param {Number} max reconnection attempts before giving up
 * @return {Manager} self or value
 * @api public
 */

Manager.prototype.reconnectionAttempts = function (v) {
  if (!arguments.length) return this._reconnectionAttempts;
  this._reconnectionAttempts = v;
  return this;
};

/**
 * Sets the delay between reconnections.
 *
 * @param {Number} delay
 * @return {Manager} self or value
 * @api public
 */

Manager.prototype.reconnectionDelay = function (v) {
  if (!arguments.length) return this._reconnectionDelay;
  this._reconnectionDelay = v;
  this.backoff && this.backoff.setMin(v);
  return this;
};

Manager.prototype.randomizationFactor = function (v) {
  if (!arguments.length) return this._randomizationFactor;
  this._randomizationFactor = v;
  this.backoff && this.backoff.setJitter(v);
  return this;
};

/**
 * Sets the maximum delay between reconnections.
 *
 * @param {Number} delay
 * @return {Manager} self or value
 * @api public
 */

Manager.prototype.reconnectionDelayMax = function (v) {
  if (!arguments.length) return this._reconnectionDelayMax;
  this._reconnectionDelayMax = v;
  this.backoff && this.backoff.setMax(v);
  return this;
};

/**
 * Sets the connection timeout. `false` to disable
 *
 * @return {Manager} self or value
 * @api public
 */

Manager.prototype.timeout = function (v) {
  if (!arguments.length) return this._timeout;
  this._timeout = v;
  return this;
};

/**
 * Starts trying to reconnect if reconnection is enabled and we have not
 * started reconnecting yet
 *
 * @api private
 */

Manager.prototype.maybeReconnectOnOpen = function () {
  // Only try to reconnect if it's the first time we're connecting
  if (!this.reconnecting && this._reconnection && this.backoff.attempts === 0) {
    // keeps reconnection from firing twice for the same reconnection loop
    this.reconnect();
  }
};

/**
 * Sets the current transport `socket`.
 *
 * @param {Function} optional, callback
 * @return {Manager} self
 * @api public
 */

Manager.prototype.open =
Manager.prototype.connect = function (fn, opts) {
  debug('readyState %s', this.readyState);
  if (~this.readyState.indexOf('open')) return this;

  debug('opening %s', this.uri);
  this.engine = eio(this.uri, this.opts);
  var socket = this.engine;
  var self = this;
  this.readyState = 'opening';
  this.skipReconnect = false;

  // emit `open`
  var openSub = on(socket, 'open', function () {
    self.onopen();
    fn && fn();
  });

  // emit `connect_error`
  var errorSub = on(socket, 'error', function (data) {
    debug('connect_error');
    self.cleanup();
    self.readyState = 'closed';
    self.emitAll('connect_error', data);
    if (fn) {
      var err = new Error('Connection error');
      err.data = data;
      fn(err);
    } else {
      // Only do this if there is no fn to handle the error
      self.maybeReconnectOnOpen();
    }
  });

  // emit `connect_timeout`
  if (false !== this._timeout) {
    var timeout = this._timeout;
    debug('connect attempt will timeout after %d', timeout);

    // set timer
    var timer = setTimeout(function () {
      debug('connect attempt timed out after %d', timeout);
      openSub.destroy();
      socket.close();
      socket.emit('error', 'timeout');
      self.emitAll('connect_timeout', timeout);
    }, timeout);

    this.subs.push({
      destroy: function () {
        clearTimeout(timer);
      }
    });
  }

  this.subs.push(openSub);
  this.subs.push(errorSub);

  return this;
};

/**
 * Called upon transport open.
 *
 * @api private
 */

Manager.prototype.onopen = function () {
  debug('open');

  // clear old subs
  this.cleanup();

  // mark as open
  this.readyState = 'open';
  this.emit('open');

  // add new subs
  var socket = this.engine;
  this.subs.push(on(socket, 'data', bind(this, 'ondata')));
  this.subs.push(on(socket, 'ping', bind(this, 'onping')));
  this.subs.push(on(socket, 'pong', bind(this, 'onpong')));
  this.subs.push(on(socket, 'error', bind(this, 'onerror')));
  this.subs.push(on(socket, 'close', bind(this, 'onclose')));
  this.subs.push(on(this.decoder, 'decoded', bind(this, 'ondecoded')));
};

/**
 * Called upon a ping.
 *
 * @api private
 */

Manager.prototype.onping = function () {
  this.lastPing = new Date();
  this.emitAll('ping');
};

/**
 * Called upon a packet.
 *
 * @api private
 */

Manager.prototype.onpong = function () {
  this.emitAll('pong', new Date() - this.lastPing);
};

/**
 * Called with data.
 *
 * @api private
 */

Manager.prototype.ondata = function (data) {
  this.decoder.add(data);
};

/**
 * Called when parser fully decodes a packet.
 *
 * @api private
 */

Manager.prototype.ondecoded = function (packet) {
  this.emit('packet', packet);
};

/**
 * Called upon socket error.
 *
 * @api private
 */

Manager.prototype.onerror = function (err) {
  debug('error', err);
  this.emitAll('error', err);
};

/**
 * Creates a new socket for the given `nsp`.
 *
 * @return {Socket}
 * @api public
 */

Manager.prototype.socket = function (nsp, opts) {
  var socket = this.nsps[nsp];
  if (!socket) {
    socket = new Socket(this, nsp, opts);
    this.nsps[nsp] = socket;
    var self = this;
    socket.on('connecting', onConnecting);
    socket.on('connect', function () {
      socket.id = self.generateId(nsp);
    });

    if (this.autoConnect) {
      // manually call here since connecting event is fired before listening
      onConnecting();
    }
  }

  function onConnecting () {
    if (!~indexOf(self.connecting, socket)) {
      self.connecting.push(socket);
    }
  }

  return socket;
};

/**
 * Called upon a socket close.
 *
 * @param {Socket} socket
 */

Manager.prototype.destroy = function (socket) {
  var index = indexOf(this.connecting, socket);
  if (~index) this.connecting.splice(index, 1);
  if (this.connecting.length) return;

  this.close();
};

/**
 * Writes a packet.
 *
 * @param {Object} packet
 * @api private
 */

Manager.prototype.packet = function (packet) {
  debug('writing packet %j', packet);
  var self = this;
  if (packet.query && packet.type === 0) packet.nsp += '?' + packet.query;

  if (!self.encoding) {
    // encode, then write to engine with result
    self.encoding = true;
    this.encoder.encode(packet, function (encodedPackets) {
      for (var i = 0; i < encodedPackets.length; i++) {
        self.engine.write(encodedPackets[i], packet.options);
      }
      self.encoding = false;
      self.processPacketQueue();
    });
  } else { // add packet to the queue
    self.packetBuffer.push(packet);
  }
};

/**
 * If packet buffer is non-empty, begins encoding the
 * next packet in line.
 *
 * @api private
 */

Manager.prototype.processPacketQueue = function () {
  if (this.packetBuffer.length > 0 && !this.encoding) {
    var pack = this.packetBuffer.shift();
    this.packet(pack);
  }
};

/**
 * Clean up transport subscriptions and packet buffer.
 *
 * @api private
 */

Manager.prototype.cleanup = function () {
  debug('cleanup');

  var subsLength = this.subs.length;
  for (var i = 0; i < subsLength; i++) {
    var sub = this.subs.shift();
    sub.destroy();
  }

  this.packetBuffer = [];
  this.encoding = false;
  this.lastPing = null;

  this.decoder.destroy();
};

/**
 * Close the current socket.
 *
 * @api private
 */

Manager.prototype.close =
Manager.prototype.disconnect = function () {
  debug('disconnect');
  this.skipReconnect = true;
  this.reconnecting = false;
  if ('opening' === this.readyState) {
    // `onclose` will not fire because
    // an open event never happened
    this.cleanup();
  }
  this.backoff.reset();
  this.readyState = 'closed';
  if (this.engine) this.engine.close();
};

/**
 * Called upon engine close.
 *
 * @api private
 */

Manager.prototype.onclose = function (reason) {
  debug('onclose');

  this.cleanup();
  this.backoff.reset();
  this.readyState = 'closed';
  this.emit('close', reason);

  if (this._reconnection && !this.skipReconnect) {
    this.reconnect();
  }
};

/**
 * Attempt a reconnection.
 *
 * @api private
 */

Manager.prototype.reconnect = function () {
  if (this.reconnecting || this.skipReconnect) return this;

  var self = this;

  if (this.backoff.attempts >= this._reconnectionAttempts) {
    debug('reconnect failed');
    this.backoff.reset();
    this.emitAll('reconnect_failed');
    this.reconnecting = false;
  } else {
    var delay = this.backoff.duration();
    debug('will wait %dms before reconnect attempt', delay);

    this.reconnecting = true;
    var timer = setTimeout(function () {
      if (self.skipReconnect) return;

      debug('attempting reconnect');
      self.emitAll('reconnect_attempt', self.backoff.attempts);
      self.emitAll('reconnecting', self.backoff.attempts);

      // check again for the case socket closed in above events
      if (self.skipReconnect) return;

      self.open(function (err) {
        if (err) {
          debug('reconnect attempt error');
          self.reconnecting = false;
          self.reconnect();
          self.emitAll('reconnect_error', err.data);
        } else {
          debug('reconnect success');
          self.onreconnect();
        }
      });
    }, delay);

    this.subs.push({
      destroy: function () {
        clearTimeout(timer);
      }
    });
  }
};

/**
 * Called upon successful reconnect.
 *
 * @api private
 */

Manager.prototype.onreconnect = function () {
  var attempt = this.backoff.attempts;
  this.reconnecting = false;
  this.backoff.reset();
  this.updateSocketIds();
  this.emitAll('reconnect', attempt);
};


/***/ }),

/***/ "./node_modules/socket.io-client/lib/on.js":
/*!*************************************************!*\
  !*** ./node_modules/socket.io-client/lib/on.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * Module exports.
 */

module.exports = on;

/**
 * Helper for subscriptions.
 *
 * @param {Object|EventEmitter} obj with `Emitter` mixin or `EventEmitter`
 * @param {String} event name
 * @param {Function} callback
 * @api public
 */

function on (obj, ev, fn) {
  obj.on(ev, fn);
  return {
    destroy: function () {
      obj.removeListener(ev, fn);
    }
  };
}


/***/ }),

/***/ "./node_modules/socket.io-client/lib/socket.js":
/*!*****************************************************!*\
  !*** ./node_modules/socket.io-client/lib/socket.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


/**
 * Module dependencies.
 */

var parser = __webpack_require__(/*! socket.io-parser */ "./node_modules/socket.io-client/node_modules/socket.io-parser/index.js");
var Emitter = __webpack_require__(/*! component-emitter */ "./node_modules/socket.io-client/node_modules/component-emitter/index.js");
var toArray = __webpack_require__(/*! to-array */ "./node_modules/to-array/index.js");
var on = __webpack_require__(/*! ./on */ "./node_modules/socket.io-client/lib/on.js");
var bind = __webpack_require__(/*! component-bind */ "./node_modules/component-bind/index.js");
var debug = __webpack_require__(/*! debug */ "./node_modules/socket.io-client/node_modules/debug/src/browser.js")('socket.io-client:socket');
var parseqs = __webpack_require__(/*! parseqs */ "./node_modules/parseqs/index.js");
var hasBin = __webpack_require__(/*! has-binary2 */ "./node_modules/has-binary2/index.js");

/**
 * Module exports.
 */

module.exports = exports = Socket;

/**
 * Internal events (blacklisted).
 * These events can't be emitted by the user.
 *
 * @api private
 */

var events = {
  connect: 1,
  connect_error: 1,
  connect_timeout: 1,
  connecting: 1,
  disconnect: 1,
  error: 1,
  reconnect: 1,
  reconnect_attempt: 1,
  reconnect_failed: 1,
  reconnect_error: 1,
  reconnecting: 1,
  ping: 1,
  pong: 1
};

/**
 * Shortcut to `Emitter#emit`.
 */

var emit = Emitter.prototype.emit;

/**
 * `Socket` constructor.
 *
 * @api public
 */

function Socket (io, nsp, opts) {
  this.io = io;
  this.nsp = nsp;
  this.json = this; // compat
  this.ids = 0;
  this.acks = {};
  this.receiveBuffer = [];
  this.sendBuffer = [];
  this.connected = false;
  this.disconnected = true;
  this.flags = {};
  if (opts && opts.query) {
    this.query = opts.query;
  }
  if (this.io.autoConnect) this.open();
}

/**
 * Mix in `Emitter`.
 */

Emitter(Socket.prototype);

/**
 * Subscribe to open, close and packet events
 *
 * @api private
 */

Socket.prototype.subEvents = function () {
  if (this.subs) return;

  var io = this.io;
  this.subs = [
    on(io, 'open', bind(this, 'onopen')),
    on(io, 'packet', bind(this, 'onpacket')),
    on(io, 'close', bind(this, 'onclose'))
  ];
};

/**
 * "Opens" the socket.
 *
 * @api public
 */

Socket.prototype.open =
Socket.prototype.connect = function () {
  if (this.connected) return this;

  this.subEvents();
  this.io.open(); // ensure open
  if ('open' === this.io.readyState) this.onopen();
  this.emit('connecting');
  return this;
};

/**
 * Sends a `message` event.
 *
 * @return {Socket} self
 * @api public
 */

Socket.prototype.send = function () {
  var args = toArray(arguments);
  args.unshift('message');
  this.emit.apply(this, args);
  return this;
};

/**
 * Override `emit`.
 * If the event is in `events`, it's emitted normally.
 *
 * @param {String} event name
 * @return {Socket} self
 * @api public
 */

Socket.prototype.emit = function (ev) {
  if (events.hasOwnProperty(ev)) {
    emit.apply(this, arguments);
    return this;
  }

  var args = toArray(arguments);
  var packet = {
    type: (this.flags.binary !== undefined ? this.flags.binary : hasBin(args)) ? parser.BINARY_EVENT : parser.EVENT,
    data: args
  };

  packet.options = {};
  packet.options.compress = !this.flags || false !== this.flags.compress;

  // event ack callback
  if ('function' === typeof args[args.length - 1]) {
    debug('emitting packet with ack id %d', this.ids);
    this.acks[this.ids] = args.pop();
    packet.id = this.ids++;
  }

  if (this.connected) {
    this.packet(packet);
  } else {
    this.sendBuffer.push(packet);
  }

  this.flags = {};

  return this;
};

/**
 * Sends a packet.
 *
 * @param {Object} packet
 * @api private
 */

Socket.prototype.packet = function (packet) {
  packet.nsp = this.nsp;
  this.io.packet(packet);
};

/**
 * Called upon engine `open`.
 *
 * @api private
 */

Socket.prototype.onopen = function () {
  debug('transport is open - connecting');

  // write connect packet if necessary
  if ('/' !== this.nsp) {
    if (this.query) {
      var query = typeof this.query === 'object' ? parseqs.encode(this.query) : this.query;
      debug('sending connect packet with query %s', query);
      this.packet({type: parser.CONNECT, query: query});
    } else {
      this.packet({type: parser.CONNECT});
    }
  }
};

/**
 * Called upon engine `close`.
 *
 * @param {String} reason
 * @api private
 */

Socket.prototype.onclose = function (reason) {
  debug('close (%s)', reason);
  this.connected = false;
  this.disconnected = true;
  delete this.id;
  this.emit('disconnect', reason);
};

/**
 * Called with socket packet.
 *
 * @param {Object} packet
 * @api private
 */

Socket.prototype.onpacket = function (packet) {
  var sameNamespace = packet.nsp === this.nsp;
  var rootNamespaceError = packet.type === parser.ERROR && packet.nsp === '/';

  if (!sameNamespace && !rootNamespaceError) return;

  switch (packet.type) {
    case parser.CONNECT:
      this.onconnect();
      break;

    case parser.EVENT:
      this.onevent(packet);
      break;

    case parser.BINARY_EVENT:
      this.onevent(packet);
      break;

    case parser.ACK:
      this.onack(packet);
      break;

    case parser.BINARY_ACK:
      this.onack(packet);
      break;

    case parser.DISCONNECT:
      this.ondisconnect();
      break;

    case parser.ERROR:
      this.emit('error', packet.data);
      break;
  }
};

/**
 * Called upon a server event.
 *
 * @param {Object} packet
 * @api private
 */

Socket.prototype.onevent = function (packet) {
  var args = packet.data || [];
  debug('emitting event %j', args);

  if (null != packet.id) {
    debug('attaching ack callback to event');
    args.push(this.ack(packet.id));
  }

  if (this.connected) {
    emit.apply(this, args);
  } else {
    this.receiveBuffer.push(args);
  }
};

/**
 * Produces an ack callback to emit with an event.
 *
 * @api private
 */

Socket.prototype.ack = function (id) {
  var self = this;
  var sent = false;
  return function () {
    // prevent double callbacks
    if (sent) return;
    sent = true;
    var args = toArray(arguments);
    debug('sending ack %j', args);

    self.packet({
      type: hasBin(args) ? parser.BINARY_ACK : parser.ACK,
      id: id,
      data: args
    });
  };
};

/**
 * Called upon a server acknowlegement.
 *
 * @param {Object} packet
 * @api private
 */

Socket.prototype.onack = function (packet) {
  var ack = this.acks[packet.id];
  if ('function' === typeof ack) {
    debug('calling ack %s with %j', packet.id, packet.data);
    ack.apply(this, packet.data);
    delete this.acks[packet.id];
  } else {
    debug('bad ack %s', packet.id);
  }
};

/**
 * Called upon server connect.
 *
 * @api private
 */

Socket.prototype.onconnect = function () {
  this.connected = true;
  this.disconnected = false;
  this.emit('connect');
  this.emitBuffered();
};

/**
 * Emit buffered events (received and emitted).
 *
 * @api private
 */

Socket.prototype.emitBuffered = function () {
  var i;
  for (i = 0; i < this.receiveBuffer.length; i++) {
    emit.apply(this, this.receiveBuffer[i]);
  }
  this.receiveBuffer = [];

  for (i = 0; i < this.sendBuffer.length; i++) {
    this.packet(this.sendBuffer[i]);
  }
  this.sendBuffer = [];
};

/**
 * Called upon server disconnect.
 *
 * @api private
 */

Socket.prototype.ondisconnect = function () {
  debug('server disconnect (%s)', this.nsp);
  this.destroy();
  this.onclose('io server disconnect');
};

/**
 * Called upon forced client/server side disconnections,
 * this method ensures the manager stops tracking us and
 * that reconnections don't get triggered for this.
 *
 * @api private.
 */

Socket.prototype.destroy = function () {
  if (this.subs) {
    // clean subscriptions to avoid reconnections
    for (var i = 0; i < this.subs.length; i++) {
      this.subs[i].destroy();
    }
    this.subs = null;
  }

  this.io.destroy(this);
};

/**
 * Disconnects the socket manually.
 *
 * @return {Socket} self
 * @api public
 */

Socket.prototype.close =
Socket.prototype.disconnect = function () {
  if (this.connected) {
    debug('performing disconnect (%s)', this.nsp);
    this.packet({ type: parser.DISCONNECT });
  }

  // remove socket from pool
  this.destroy();

  if (this.connected) {
    // fire events
    this.onclose('io client disconnect');
  }
  return this;
};

/**
 * Sets the compress flag.
 *
 * @param {Boolean} if `true`, compresses the sending data
 * @return {Socket} self
 * @api public
 */

Socket.prototype.compress = function (compress) {
  this.flags.compress = compress;
  return this;
};

/**
 * Sets the binary flag
 *
 * @param {Boolean} whether the emitted data contains binary
 * @return {Socket} self
 * @api public
 */

Socket.prototype.binary = function (binary) {
  this.flags.binary = binary;
  return this;
};


/***/ }),

/***/ "./node_modules/socket.io-client/lib/url.js":
/*!**************************************************!*\
  !*** ./node_modules/socket.io-client/lib/url.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


/**
 * Module dependencies.
 */

var parseuri = __webpack_require__(/*! parseuri */ "./node_modules/parseuri/index.js");
var debug = __webpack_require__(/*! debug */ "./node_modules/socket.io-client/node_modules/debug/src/browser.js")('socket.io-client:url');

/**
 * Module exports.
 */

module.exports = url;

/**
 * URL parser.
 *
 * @param {String} url
 * @param {Object} An object meant to mimic window.location.
 *                 Defaults to window.location.
 * @api public
 */

function url (uri, loc) {
  var obj = uri;

  // default to window.location
  loc = loc || (typeof location !== 'undefined' && location);
  if (null == uri) uri = loc.protocol + '//' + loc.host;

  // relative path support
  if ('string' === typeof uri) {
    if ('/' === uri.charAt(0)) {
      if ('/' === uri.charAt(1)) {
        uri = loc.protocol + uri;
      } else {
        uri = loc.host + uri;
      }
    }

    if (!/^(https?|wss?):\/\//.test(uri)) {
      debug('protocol-less url %s', uri);
      if ('undefined' !== typeof loc) {
        uri = loc.protocol + '//' + uri;
      } else {
        uri = 'https://' + uri;
      }
    }

    // parse
    debug('parse %s', uri);
    obj = parseuri(uri);
  }

  // make sure we treat `localhost:80` and `localhost` equally
  if (!obj.port) {
    if (/^(http|ws)$/.test(obj.protocol)) {
      obj.port = '80';
    } else if (/^(http|ws)s$/.test(obj.protocol)) {
      obj.port = '443';
    }
  }

  obj.path = obj.path || '/';

  var ipv6 = obj.host.indexOf(':') !== -1;
  var host = ipv6 ? '[' + obj.host + ']' : obj.host;

  // define unique id
  obj.id = obj.protocol + '://' + host + ':' + obj.port;
  // define href
  obj.href = obj.protocol + '://' + host + (loc && loc.port === obj.port ? '' : (':' + obj.port));

  return obj;
}


/***/ }),

/***/ "./node_modules/socket.io-client/node_modules/component-emitter/index.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/socket.io-client/node_modules/component-emitter/index.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


/**
 * Expose `Emitter`.
 */

if (true) {
  module.exports = Emitter;
}

/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */

function Emitter(obj) {
  if (obj) return mixin(obj);
};

/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }
  return obj;
}

/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.on =
Emitter.prototype.addEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};
  (this._callbacks['$' + event] = this._callbacks['$' + event] || [])
    .push(fn);
  return this;
};

/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.once = function(event, fn){
  function on() {
    this.off(event, on);
    fn.apply(this, arguments);
  }

  on.fn = fn;
  this.on(event, on);
  return this;
};

/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.off =
Emitter.prototype.removeListener =
Emitter.prototype.removeAllListeners =
Emitter.prototype.removeEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};

  // all
  if (0 == arguments.length) {
    this._callbacks = {};
    return this;
  }

  // specific event
  var callbacks = this._callbacks['$' + event];
  if (!callbacks) return this;

  // remove all handlers
  if (1 == arguments.length) {
    delete this._callbacks['$' + event];
    return this;
  }

  // remove specific handler
  var cb;
  for (var i = 0; i < callbacks.length; i++) {
    cb = callbacks[i];
    if (cb === fn || cb.fn === fn) {
      callbacks.splice(i, 1);
      break;
    }
  }
  return this;
};

/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */

Emitter.prototype.emit = function(event){
  this._callbacks = this._callbacks || {};
  var args = [].slice.call(arguments, 1)
    , callbacks = this._callbacks['$' + event];

  if (callbacks) {
    callbacks = callbacks.slice(0);
    for (var i = 0, len = callbacks.length; i < len; ++i) {
      callbacks[i].apply(this, args);
    }
  }

  return this;
};

/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */

Emitter.prototype.listeners = function(event){
  this._callbacks = this._callbacks || {};
  return this._callbacks['$' + event] || [];
};

/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */

Emitter.prototype.hasListeners = function(event){
  return !! this.listeners(event).length;
};


/***/ }),

/***/ "./node_modules/socket.io-client/node_modules/debug/src/browser.js":
/*!*************************************************************************!*\
  !*** ./node_modules/socket.io-client/node_modules/debug/src/browser.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * This is the web browser implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = __webpack_require__(/*! ./debug */ "./node_modules/socket.io-client/node_modules/debug/src/debug.js");
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = 'undefined' != typeof chrome
               && 'undefined' != typeof chrome.storage
                  ? chrome.storage.local
                  : localstorage();

/**
 * Colors.
 */

exports.colors = [
  '#0000CC', '#0000FF', '#0033CC', '#0033FF', '#0066CC', '#0066FF', '#0099CC',
  '#0099FF', '#00CC00', '#00CC33', '#00CC66', '#00CC99', '#00CCCC', '#00CCFF',
  '#3300CC', '#3300FF', '#3333CC', '#3333FF', '#3366CC', '#3366FF', '#3399CC',
  '#3399FF', '#33CC00', '#33CC33', '#33CC66', '#33CC99', '#33CCCC', '#33CCFF',
  '#6600CC', '#6600FF', '#6633CC', '#6633FF', '#66CC00', '#66CC33', '#9900CC',
  '#9900FF', '#9933CC', '#9933FF', '#99CC00', '#99CC33', '#CC0000', '#CC0033',
  '#CC0066', '#CC0099', '#CC00CC', '#CC00FF', '#CC3300', '#CC3333', '#CC3366',
  '#CC3399', '#CC33CC', '#CC33FF', '#CC6600', '#CC6633', '#CC9900', '#CC9933',
  '#CCCC00', '#CCCC33', '#FF0000', '#FF0033', '#FF0066', '#FF0099', '#FF00CC',
  '#FF00FF', '#FF3300', '#FF3333', '#FF3366', '#FF3399', '#FF33CC', '#FF33FF',
  '#FF6600', '#FF6633', '#FF9900', '#FF9933', '#FFCC00', '#FFCC33'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

function useColors() {
  // NB: In an Electron preload script, document will be defined but not fully
  // initialized. Since we know we're in Chrome, we'll just detect this case
  // explicitly
  if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {
    return true;
  }

  // Internet Explorer and Edge do not support colors.
  if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
    return false;
  }

  // is webkit? http://stackoverflow.com/a/16459606/376773
  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
  return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
    // is firebug? http://stackoverflow.com/a/398120/376773
    (typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
    // is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
    // double check webkit in userAgent just in case we are in a worker
    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
}

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

exports.formatters.j = function(v) {
  try {
    return JSON.stringify(v);
  } catch (err) {
    return '[UnexpectedJSONParseError]: ' + err.message;
  }
};


/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
  var useColors = this.useColors;

  args[0] = (useColors ? '%c' : '')
    + this.namespace
    + (useColors ? ' %c' : ' ')
    + args[0]
    + (useColors ? '%c ' : ' ')
    + '+' + exports.humanize(this.diff);

  if (!useColors) return;

  var c = 'color: ' + this.color;
  args.splice(1, 0, c, 'color: inherit')

  // the final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into
  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, function(match) {
    if ('%%' === match) return;
    index++;
    if ('%c' === match) {
      // we only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });

  args.splice(lastC, 0, c);
}

/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */

function log() {
  // this hackery is required for IE8/9, where
  // the `console.log` function doesn't have 'apply'
  return 'object' === typeof console
    && console.log
    && Function.prototype.apply.call(console.log, console, arguments);
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */

function save(namespaces) {
  try {
    if (null == namespaces) {
      exports.storage.removeItem('debug');
    } else {
      exports.storage.debug = namespaces;
    }
  } catch(e) {}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
  var r;
  try {
    r = exports.storage.debug;
  } catch(e) {}

  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
  if (!r && typeof process !== 'undefined' && 'env' in process) {
    r = process.env.DEBUG;
  }

  return r;
}

/**
 * Enable namespaces listed in `localStorage.debug` initially.
 */

exports.enable(load());

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
  try {
    return window.localStorage;
  } catch (e) {}
}


/***/ }),

/***/ "./node_modules/socket.io-client/node_modules/debug/src/debug.js":
/*!***********************************************************************!*\
  !*** ./node_modules/socket.io-client/node_modules/debug/src/debug.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = createDebug.debug = createDebug['default'] = createDebug;
exports.coerce = coerce;
exports.disable = disable;
exports.enable = enable;
exports.enabled = enabled;
exports.humanize = __webpack_require__(/*! ms */ "./node_modules/ms/index.js");

/**
 * Active `debug` instances.
 */
exports.instances = [];

/**
 * The currently active debug mode names, and names to skip.
 */

exports.names = [];
exports.skips = [];

/**
 * Map of special "%n" handling functions, for the debug "format" argument.
 *
 * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
 */

exports.formatters = {};

/**
 * Select a color.
 * @param {String} namespace
 * @return {Number}
 * @api private
 */

function selectColor(namespace) {
  var hash = 0, i;

  for (i in namespace) {
    hash  = ((hash << 5) - hash) + namespace.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }

  return exports.colors[Math.abs(hash) % exports.colors.length];
}

/**
 * Create a debugger with the given `namespace`.
 *
 * @param {String} namespace
 * @return {Function}
 * @api public
 */

function createDebug(namespace) {

  var prevTime;

  function debug() {
    // disabled?
    if (!debug.enabled) return;

    var self = debug;

    // set `diff` timestamp
    var curr = +new Date();
    var ms = curr - (prevTime || curr);
    self.diff = ms;
    self.prev = prevTime;
    self.curr = curr;
    prevTime = curr;

    // turn the `arguments` into a proper Array
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }

    args[0] = exports.coerce(args[0]);

    if ('string' !== typeof args[0]) {
      // anything else let's inspect with %O
      args.unshift('%O');
    }

    // apply any `formatters` transformations
    var index = 0;
    args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {
      // if we encounter an escaped % then don't increase the array index
      if (match === '%%') return match;
      index++;
      var formatter = exports.formatters[format];
      if ('function' === typeof formatter) {
        var val = args[index];
        match = formatter.call(self, val);

        // now we need to remove `args[index]` since it's inlined in the `format`
        args.splice(index, 1);
        index--;
      }
      return match;
    });

    // apply env-specific formatting (colors, etc.)
    exports.formatArgs.call(self, args);

    var logFn = debug.log || exports.log || console.log.bind(console);
    logFn.apply(self, args);
  }

  debug.namespace = namespace;
  debug.enabled = exports.enabled(namespace);
  debug.useColors = exports.useColors();
  debug.color = selectColor(namespace);
  debug.destroy = destroy;

  // env-specific initialization logic for debug instances
  if ('function' === typeof exports.init) {
    exports.init(debug);
  }

  exports.instances.push(debug);

  return debug;
}

function destroy () {
  var index = exports.instances.indexOf(this);
  if (index !== -1) {
    exports.instances.splice(index, 1);
    return true;
  } else {
    return false;
  }
}

/**
 * Enables a debug mode by namespaces. This can include modes
 * separated by a colon and wildcards.
 *
 * @param {String} namespaces
 * @api public
 */

function enable(namespaces) {
  exports.save(namespaces);

  exports.names = [];
  exports.skips = [];

  var i;
  var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
  var len = split.length;

  for (i = 0; i < len; i++) {
    if (!split[i]) continue; // ignore empty strings
    namespaces = split[i].replace(/\*/g, '.*?');
    if (namespaces[0] === '-') {
      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
    } else {
      exports.names.push(new RegExp('^' + namespaces + '$'));
    }
  }

  for (i = 0; i < exports.instances.length; i++) {
    var instance = exports.instances[i];
    instance.enabled = exports.enabled(instance.namespace);
  }
}

/**
 * Disable debug output.
 *
 * @api public
 */

function disable() {
  exports.enable('');
}

/**
 * Returns true if the given mode name is enabled, false otherwise.
 *
 * @param {String} name
 * @return {Boolean}
 * @api public
 */

function enabled(name) {
  if (name[name.length - 1] === '*') {
    return true;
  }
  var i, len;
  for (i = 0, len = exports.skips.length; i < len; i++) {
    if (exports.skips[i].test(name)) {
      return false;
    }
  }
  for (i = 0, len = exports.names.length; i < len; i++) {
    if (exports.names[i].test(name)) {
      return true;
    }
  }
  return false;
}

/**
 * Coerce `val`.
 *
 * @param {Mixed} val
 * @return {Mixed}
 * @api private
 */

function coerce(val) {
  if (val instanceof Error) return val.stack || val.message;
  return val;
}


/***/ }),

/***/ "./node_modules/socket.io-client/node_modules/isarray/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/socket.io-client/node_modules/isarray/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ "./node_modules/socket.io-client/node_modules/socket.io-parser/binary.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/socket.io-client/node_modules/socket.io-parser/binary.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*global Blob,File*/

/**
 * Module requirements
 */

var isArray = __webpack_require__(/*! isarray */ "./node_modules/socket.io-client/node_modules/isarray/index.js");
var isBuf = __webpack_require__(/*! ./is-buffer */ "./node_modules/socket.io-client/node_modules/socket.io-parser/is-buffer.js");
var toString = Object.prototype.toString;
var withNativeBlob = typeof Blob === 'function' || (typeof Blob !== 'undefined' && toString.call(Blob) === '[object BlobConstructor]');
var withNativeFile = typeof File === 'function' || (typeof File !== 'undefined' && toString.call(File) === '[object FileConstructor]');

/**
 * Replaces every Buffer | ArrayBuffer in packet with a numbered placeholder.
 * Anything with blobs or files should be fed through removeBlobs before coming
 * here.
 *
 * @param {Object} packet - socket.io event packet
 * @return {Object} with deconstructed packet and list of buffers
 * @api public
 */

exports.deconstructPacket = function(packet) {
  var buffers = [];
  var packetData = packet.data;
  var pack = packet;
  pack.data = _deconstructPacket(packetData, buffers);
  pack.attachments = buffers.length; // number of binary 'attachments'
  return {packet: pack, buffers: buffers};
};

function _deconstructPacket(data, buffers) {
  if (!data) return data;

  if (isBuf(data)) {
    var placeholder = { _placeholder: true, num: buffers.length };
    buffers.push(data);
    return placeholder;
  } else if (isArray(data)) {
    var newData = new Array(data.length);
    for (var i = 0; i < data.length; i++) {
      newData[i] = _deconstructPacket(data[i], buffers);
    }
    return newData;
  } else if (typeof data === 'object' && !(data instanceof Date)) {
    var newData = {};
    for (var key in data) {
      newData[key] = _deconstructPacket(data[key], buffers);
    }
    return newData;
  }
  return data;
}

/**
 * Reconstructs a binary packet from its placeholder packet and buffers
 *
 * @param {Object} packet - event packet with placeholders
 * @param {Array} buffers - binary buffers to put in placeholder positions
 * @return {Object} reconstructed packet
 * @api public
 */

exports.reconstructPacket = function(packet, buffers) {
  packet.data = _reconstructPacket(packet.data, buffers);
  packet.attachments = undefined; // no longer useful
  return packet;
};

function _reconstructPacket(data, buffers) {
  if (!data) return data;

  if (data && data._placeholder) {
    return buffers[data.num]; // appropriate buffer (should be natural order anyway)
  } else if (isArray(data)) {
    for (var i = 0; i < data.length; i++) {
      data[i] = _reconstructPacket(data[i], buffers);
    }
  } else if (typeof data === 'object') {
    for (var key in data) {
      data[key] = _reconstructPacket(data[key], buffers);
    }
  }

  return data;
}

/**
 * Asynchronously removes Blobs or Files from data via
 * FileReader's readAsArrayBuffer method. Used before encoding
 * data as msgpack. Calls callback with the blobless data.
 *
 * @param {Object} data
 * @param {Function} callback
 * @api private
 */

exports.removeBlobs = function(data, callback) {
  function _removeBlobs(obj, curKey, containingObject) {
    if (!obj) return obj;

    // convert any blob
    if ((withNativeBlob && obj instanceof Blob) ||
        (withNativeFile && obj instanceof File)) {
      pendingBlobs++;

      // async filereader
      var fileReader = new FileReader();
      fileReader.onload = function() { // this.result == arraybuffer
        if (containingObject) {
          containingObject[curKey] = this.result;
        }
        else {
          bloblessData = this.result;
        }

        // if nothing pending its callback time
        if(! --pendingBlobs) {
          callback(bloblessData);
        }
      };

      fileReader.readAsArrayBuffer(obj); // blob -> arraybuffer
    } else if (isArray(obj)) { // handle array
      for (var i = 0; i < obj.length; i++) {
        _removeBlobs(obj[i], i, obj);
      }
    } else if (typeof obj === 'object' && !isBuf(obj)) { // and object
      for (var key in obj) {
        _removeBlobs(obj[key], key, obj);
      }
    }
  }

  var pendingBlobs = 0;
  var bloblessData = data;
  _removeBlobs(bloblessData);
  if (!pendingBlobs) {
    callback(bloblessData);
  }
};


/***/ }),

/***/ "./node_modules/socket.io-client/node_modules/socket.io-parser/index.js":
/*!******************************************************************************!*\
  !*** ./node_modules/socket.io-client/node_modules/socket.io-parser/index.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


/**
 * Module dependencies.
 */

var debug = __webpack_require__(/*! debug */ "./node_modules/socket.io-client/node_modules/debug/src/browser.js")('socket.io-parser');
var Emitter = __webpack_require__(/*! component-emitter */ "./node_modules/socket.io-client/node_modules/component-emitter/index.js");
var binary = __webpack_require__(/*! ./binary */ "./node_modules/socket.io-client/node_modules/socket.io-parser/binary.js");
var isArray = __webpack_require__(/*! isarray */ "./node_modules/socket.io-client/node_modules/isarray/index.js");
var isBuf = __webpack_require__(/*! ./is-buffer */ "./node_modules/socket.io-client/node_modules/socket.io-parser/is-buffer.js");

/**
 * Protocol version.
 *
 * @api public
 */

exports.protocol = 4;

/**
 * Packet types.
 *
 * @api public
 */

exports.types = [
  'CONNECT',
  'DISCONNECT',
  'EVENT',
  'ACK',
  'ERROR',
  'BINARY_EVENT',
  'BINARY_ACK'
];

/**
 * Packet type `connect`.
 *
 * @api public
 */

exports.CONNECT = 0;

/**
 * Packet type `disconnect`.
 *
 * @api public
 */

exports.DISCONNECT = 1;

/**
 * Packet type `event`.
 *
 * @api public
 */

exports.EVENT = 2;

/**
 * Packet type `ack`.
 *
 * @api public
 */

exports.ACK = 3;

/**
 * Packet type `error`.
 *
 * @api public
 */

exports.ERROR = 4;

/**
 * Packet type 'binary event'
 *
 * @api public
 */

exports.BINARY_EVENT = 5;

/**
 * Packet type `binary ack`. For acks with binary arguments.
 *
 * @api public
 */

exports.BINARY_ACK = 6;

/**
 * Encoder constructor.
 *
 * @api public
 */

exports.Encoder = Encoder;

/**
 * Decoder constructor.
 *
 * @api public
 */

exports.Decoder = Decoder;

/**
 * A socket.io Encoder instance
 *
 * @api public
 */

function Encoder() {}

var ERROR_PACKET = exports.ERROR + '"encode error"';

/**
 * Encode a packet as a single string if non-binary, or as a
 * buffer sequence, depending on packet type.
 *
 * @param {Object} obj - packet object
 * @param {Function} callback - function to handle encodings (likely engine.write)
 * @return Calls callback with Array of encodings
 * @api public
 */

Encoder.prototype.encode = function(obj, callback){
  debug('encoding packet %j', obj);

  if (exports.BINARY_EVENT === obj.type || exports.BINARY_ACK === obj.type) {
    encodeAsBinary(obj, callback);
  } else {
    var encoding = encodeAsString(obj);
    callback([encoding]);
  }
};

/**
 * Encode packet as string.
 *
 * @param {Object} packet
 * @return {String} encoded
 * @api private
 */

function encodeAsString(obj) {

  // first is type
  var str = '' + obj.type;

  // attachments if we have them
  if (exports.BINARY_EVENT === obj.type || exports.BINARY_ACK === obj.type) {
    str += obj.attachments + '-';
  }

  // if we have a namespace other than `/`
  // we append it followed by a comma `,`
  if (obj.nsp && '/' !== obj.nsp) {
    str += obj.nsp + ',';
  }

  // immediately followed by the id
  if (null != obj.id) {
    str += obj.id;
  }

  // json data
  if (null != obj.data) {
    var payload = tryStringify(obj.data);
    if (payload !== false) {
      str += payload;
    } else {
      return ERROR_PACKET;
    }
  }

  debug('encoded %j as %s', obj, str);
  return str;
}

function tryStringify(str) {
  try {
    return JSON.stringify(str);
  } catch(e){
    return false;
  }
}

/**
 * Encode packet as 'buffer sequence' by removing blobs, and
 * deconstructing packet into object with placeholders and
 * a list of buffers.
 *
 * @param {Object} packet
 * @return {Buffer} encoded
 * @api private
 */

function encodeAsBinary(obj, callback) {

  function writeEncoding(bloblessData) {
    var deconstruction = binary.deconstructPacket(bloblessData);
    var pack = encodeAsString(deconstruction.packet);
    var buffers = deconstruction.buffers;

    buffers.unshift(pack); // add packet info to beginning of data list
    callback(buffers); // write all the buffers
  }

  binary.removeBlobs(obj, writeEncoding);
}

/**
 * A socket.io Decoder instance
 *
 * @return {Object} decoder
 * @api public
 */

function Decoder() {
  this.reconstructor = null;
}

/**
 * Mix in `Emitter` with Decoder.
 */

Emitter(Decoder.prototype);

/**
 * Decodes an encoded packet string into packet JSON.
 *
 * @param {String} obj - encoded packet
 * @return {Object} packet
 * @api public
 */

Decoder.prototype.add = function(obj) {
  var packet;
  if (typeof obj === 'string') {
    packet = decodeString(obj);
    if (exports.BINARY_EVENT === packet.type || exports.BINARY_ACK === packet.type) { // binary packet's json
      this.reconstructor = new BinaryReconstructor(packet);

      // no attachments, labeled binary but no binary data to follow
      if (this.reconstructor.reconPack.attachments === 0) {
        this.emit('decoded', packet);
      }
    } else { // non-binary full packet
      this.emit('decoded', packet);
    }
  } else if (isBuf(obj) || obj.base64) { // raw binary data
    if (!this.reconstructor) {
      throw new Error('got binary data when not reconstructing a packet');
    } else {
      packet = this.reconstructor.takeBinaryData(obj);
      if (packet) { // received final buffer
        this.reconstructor = null;
        this.emit('decoded', packet);
      }
    }
  } else {
    throw new Error('Unknown type: ' + obj);
  }
};

/**
 * Decode a packet String (JSON data)
 *
 * @param {String} str
 * @return {Object} packet
 * @api private
 */

function decodeString(str) {
  var i = 0;
  // look up type
  var p = {
    type: Number(str.charAt(0))
  };

  if (null == exports.types[p.type]) {
    return error('unknown packet type ' + p.type);
  }

  // look up attachments if type binary
  if (exports.BINARY_EVENT === p.type || exports.BINARY_ACK === p.type) {
    var buf = '';
    while (str.charAt(++i) !== '-') {
      buf += str.charAt(i);
      if (i == str.length) break;
    }
    if (buf != Number(buf) || str.charAt(i) !== '-') {
      throw new Error('Illegal attachments');
    }
    p.attachments = Number(buf);
  }

  // look up namespace (if any)
  if ('/' === str.charAt(i + 1)) {
    p.nsp = '';
    while (++i) {
      var c = str.charAt(i);
      if (',' === c) break;
      p.nsp += c;
      if (i === str.length) break;
    }
  } else {
    p.nsp = '/';
  }

  // look up id
  var next = str.charAt(i + 1);
  if ('' !== next && Number(next) == next) {
    p.id = '';
    while (++i) {
      var c = str.charAt(i);
      if (null == c || Number(c) != c) {
        --i;
        break;
      }
      p.id += str.charAt(i);
      if (i === str.length) break;
    }
    p.id = Number(p.id);
  }

  // look up json data
  if (str.charAt(++i)) {
    var payload = tryParse(str.substr(i));
    var isPayloadValid = payload !== false && (p.type === exports.ERROR || isArray(payload));
    if (isPayloadValid) {
      p.data = payload;
    } else {
      return error('invalid payload');
    }
  }

  debug('decoded %s as %j', str, p);
  return p;
}

function tryParse(str) {
  try {
    return JSON.parse(str);
  } catch(e){
    return false;
  }
}

/**
 * Deallocates a parser's resources
 *
 * @api public
 */

Decoder.prototype.destroy = function() {
  if (this.reconstructor) {
    this.reconstructor.finishedReconstruction();
  }
};

/**
 * A manager of a binary event's 'buffer sequence'. Should
 * be constructed whenever a packet of type BINARY_EVENT is
 * decoded.
 *
 * @param {Object} packet
 * @return {BinaryReconstructor} initialized reconstructor
 * @api private
 */

function BinaryReconstructor(packet) {
  this.reconPack = packet;
  this.buffers = [];
}

/**
 * Method to be called when binary data received from connection
 * after a BINARY_EVENT packet.
 *
 * @param {Buffer | ArrayBuffer} binData - the raw binary data received
 * @return {null | Object} returns null if more binary data is expected or
 *   a reconstructed packet object if all buffers have been received.
 * @api private
 */

BinaryReconstructor.prototype.takeBinaryData = function(binData) {
  this.buffers.push(binData);
  if (this.buffers.length === this.reconPack.attachments) { // done with buffer list
    var packet = binary.reconstructPacket(this.reconPack, this.buffers);
    this.finishedReconstruction();
    return packet;
  }
  return null;
};

/**
 * Cleans up binary packet reconstruction variables.
 *
 * @api private
 */

BinaryReconstructor.prototype.finishedReconstruction = function() {
  this.reconPack = null;
  this.buffers = [];
};

function error(msg) {
  return {
    type: exports.ERROR,
    data: 'parser error: ' + msg
  };
}


/***/ }),

/***/ "./node_modules/socket.io-client/node_modules/socket.io-parser/is-buffer.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/socket.io-client/node_modules/socket.io-parser/is-buffer.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


module.exports = isBuf;

var withNativeBuffer = typeof Buffer === 'function' && typeof Buffer.isBuffer === 'function';
var withNativeArrayBuffer = typeof ArrayBuffer === 'function';

var isView = function (obj) {
  return typeof ArrayBuffer.isView === 'function' ? ArrayBuffer.isView(obj) : (obj.buffer instanceof ArrayBuffer);
};

/**
 * Returns true if obj is a buffer or an arraybuffer.
 *
 * @api private
 */

function isBuf(obj) {
  return (withNativeBuffer && Buffer.isBuffer(obj)) ||
          (withNativeArrayBuffer && (obj instanceof ArrayBuffer || isView(obj)));
}


/***/ }),

/***/ "./node_modules/to-array/index.js":
/*!****************************************!*\
  !*** ./node_modules/to-array/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = toArray

function toArray(list, index) {
    var array = []

    index = index || 0

    for (var i = index || 0; i < list.length; i++) {
        array[i - index] = list[i]
    }

    return array
}


/***/ }),

/***/ "./node_modules/yeast/index.js":
/*!*************************************!*\
  !*** ./node_modules/yeast/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_'.split('')
  , length = 64
  , map = {}
  , seed = 0
  , i = 0
  , prev;

/**
 * Return a string representing the specified number.
 *
 * @param {Number} num The number to convert.
 * @returns {String} The string representation of the number.
 * @api public
 */
function encode(num) {
  var encoded = '';

  do {
    encoded = alphabet[num % length] + encoded;
    num = Math.floor(num / length);
  } while (num > 0);

  return encoded;
}

/**
 * Return the integer value specified by the given string.
 *
 * @param {String} str The string to convert.
 * @returns {Number} The integer value represented by the string.
 * @api public
 */
function decode(str) {
  var decoded = 0;

  for (i = 0; i < str.length; i++) {
    decoded = decoded * length + map[str.charAt(i)];
  }

  return decoded;
}

/**
 * Yeast: A tiny growing id generator.
 *
 * @returns {String} A unique id.
 * @api public
 */
function yeast() {
  var now = encode(+new Date());

  if (now !== prev) return seed = 0, prev = now;
  return now +'.'+ encode(seed++);
}

//
// Map each character to its index.
//
for (; i < length; i++) map[alphabet[i]] = i;

//
// Expose the `yeast`, `encode` and `decode` functions.
//
yeast.encode = encode;
yeast.decode = decode;
module.exports = yeast;


/***/ }),

/***/ "./src/app/components/container/main/group-list/chat-room/chat-message/chat-message.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/app/components/container/main/group-list/chat-room/chat-message/chat-message.component.scss ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@-webkit-keyframes slide-in-top {\n  0% {\n    transform: translateY(-100vh);\n  }\n  100% {\n    transform: translateY(0);\n  }\n}\n@keyframes slide-in-top {\n  0% {\n    transform: translateY(-100vh);\n  }\n  100% {\n    transform: translateY(0);\n  }\n}\n@-webkit-keyframes slide-in-bottom {\n  0% {\n    transform: translateY(100vh);\n  }\n  100% {\n    transform: translateY(0);\n  }\n}\n@keyframes slide-in-bottom {\n  0% {\n    transform: translateY(100vh);\n  }\n  100% {\n    transform: translateY(0);\n  }\n}\n@-webkit-keyframes slideRight {\n  0% {\n    transform: translateX(-100vw);\n  }\n  100% {\n    transform: translateX(0vw);\n  }\n}\n@keyframes slideRight {\n  0% {\n    transform: translateX(-100vw);\n  }\n  100% {\n    transform: translateX(0vw);\n  }\n}\n@-webkit-keyframes slideLeft {\n  0% {\n    transform: translateX(100vw);\n  }\n  100% {\n    transform: translateX(0vw);\n  }\n}\n@keyframes slideLeft {\n  0% {\n    transform: translateX(100vw);\n  }\n  100% {\n    transform: translateX(0vw);\n  }\n}\n@-webkit-keyframes ease-out-right {\n  0% {\n    transform: translateX(-5rem);\n  }\n  85% {\n    transform: translateX(0.3rem);\n  }\n  97% {\n    transform: translateX(-0.2rem);\n  }\n  100% {\n    transform: translateX(0);\n  }\n}\n@keyframes ease-out-right {\n  0% {\n    transform: translateX(-5rem);\n  }\n  85% {\n    transform: translateX(0.3rem);\n  }\n  97% {\n    transform: translateX(-0.2rem);\n  }\n  100% {\n    transform: translateX(0);\n  }\n}\n@-webkit-keyframes shadow {\n  0% {\n    box-shadow: 0 0.1rem 0.2rem 0 rgba(0, 0, 0, 0.101);\n  }\n  100% {\n    box-shadow: 0 1rem 2rem 0 rgba(0, 0, 0, 0.201);\n  }\n}\n@keyframes shadow {\n  0% {\n    box-shadow: 0 0.1rem 0.2rem 0 rgba(0, 0, 0, 0.101);\n  }\n  100% {\n    box-shadow: 0 1rem 2rem 0 rgba(0, 0, 0, 0.201);\n  }\n}\n@-webkit-keyframes rotate {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes rotate {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@-webkit-keyframes AnimationName {\n  0% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0% 50%;\n  }\n}\n@-webkit-keyframes move-background {\n  0% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0% 50%;\n  }\n}\n@keyframes move-background {\n  0% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0% 50%;\n  }\n}\n:host {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  height: auto;\n  margin: 0.5rem 0;\n}\n:host .message-control {\n  text-align: center;\n  font-weight: bold;\n  font-style: italic;\n  margin: 0.5rem;\n  -webkit-animation: slideLeft 0.7s ease-out forwards;\n          animation: slideLeft 0.7s ease-out forwards;\n}\n:host .user,\n:host .other-user {\n  width: 100%;\n  display: flex;\n  height: auto;\n  padding: 0 1rem;\n}\n:host .user-message,\n:host .other-user-message {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  border-radius: 0.4em;\n  height: auto;\n  padding: 0.5rem;\n  box-sizing: border-box;\n}\n:host .user-message-content,\n:host .other-user-message-content {\n  width: 100%;\n  text-align: center;\n  font-size: 1.5rem;\n}\n:host .user-message-author,\n:host .other-user-message-author {\n  opacity: 0.6;\n  font-weight: bold;\n  font-style: italic;\n  margin: 0.1rem 0.3rem;\n}\n:host .user-message-date,\n:host .other-user-message-date {\n  opacity: 0.6;\n  font-size: 1rem;\n  font-style: italic;\n  margin-top: 0.3rem;\n}\n:host .user-sibling.user-message::after,\n:host .other-user-sibling.user-message::after {\n  display: none;\n}\n:host .user-sibling.other-user-message::after,\n:host .other-user-sibling.other-user-message::after {\n  display: none;\n}\n:host .user {\n  justify-content: flex-end;\n}\n:host .user-message {\n  color: white;\n  background: #00c9ff;\n  background: linear-gradient(to left, #54a0ff, #00c9ff);\n  margin-right: 2rem;\n  align-items: flex-end;\n}\n:host .user-message:after {\n  content: \"\";\n  position: absolute;\n  right: 0;\n  top: 50%;\n  width: 0;\n  height: 0;\n  border: 1rem solid transparent;\n  border-left-color: #54a0ff;\n  border-right: 0;\n  margin-top: -1rem;\n  margin-right: -1rem;\n}\n:host .other-user-image {\n  transform: scale(0.9);\n  -webkit-filter: drop-shadow(0 0 0.3rem rgba(51, 51, 51, 0.27));\n          filter: drop-shadow(0 0 0.3rem rgba(51, 51, 51, 0.27));\n}\n:host .other-user-message {\n  background: #eee;\n  margin-left: 2rem;\n}\n:host .other-user-message:after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 50%;\n  width: 0;\n  height: 0;\n  border: 1rem solid transparent;\n  border-right-color: #eee;\n  border-left: 0;\n  margin-top: -1rem;\n  margin-left: -1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90emFjaGJvbmZpbC9Qcm9qZWN0cy9jaGF0LW1lLWFwcC9zcmMvYXNzZXRzL3Njc3MvX2FuaW1hdGlvbi5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NvbnRhaW5lci9tYWluL2dyb3VwLWxpc3QvY2hhdC1yb29tL2NoYXQtbWVzc2FnZS9jaGF0LW1lc3NhZ2UuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvdHphY2hib25maWwvUHJvamVjdHMvY2hhdC1tZS1hcHAvc3JjL2FwcC9jb21wb25lbnRzL2NvbnRhaW5lci9tYWluL2dyb3VwLWxpc3QvY2hhdC1yb29tL2NoYXQtbWVzc2FnZS9jaGF0LW1lc3NhZ2UuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvdHphY2hib25maWwvUHJvamVjdHMvY2hhdC1tZS1hcHAvc3JjL2Fzc2V0cy9zY3NzL19jb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFO0lBQ0UsNkJBQUE7RUNDRjtFREVBO0lBQ0Usd0JBQUE7RUNBRjtBQUNGO0FEUEE7RUFDRTtJQUNFLDZCQUFBO0VDQ0Y7RURFQTtJQUNFLHdCQUFBO0VDQUY7QUFDRjtBREdBO0VBQ0U7SUFDRSw0QkFBQTtFQ0RGO0VESUE7SUFDRSx3QkFBQTtFQ0ZGO0FBQ0Y7QURMQTtFQUNFO0lBQ0UsNEJBQUE7RUNERjtFRElBO0lBQ0Usd0JBQUE7RUNGRjtBQUNGO0FETUE7RUFDRTtJQUNFLDZCQUFBO0VDSkY7RURPQTtJQUNFLDBCQUFBO0VDTEY7QUFDRjtBREZBO0VBQ0U7SUFDRSw2QkFBQTtFQ0pGO0VET0E7SUFDRSwwQkFBQTtFQ0xGO0FBQ0Y7QURTQTtFQUNFO0lBQ0UsNEJBQUE7RUNQRjtFRFVBO0lBQ0UsMEJBQUE7RUNSRjtBQUNGO0FEQ0E7RUFDRTtJQUNFLDRCQUFBO0VDUEY7RURVQTtJQUNFLDBCQUFBO0VDUkY7QUFDRjtBRGFBO0VBQ0U7SUFDRSw0QkFBQTtFQ1hGO0VEY0E7SUFDRSw2QkFBQTtFQ1pGO0VEZUE7SUFDRSw4QkFBQTtFQ2JGO0VEZ0JBO0lBQ0Usd0JBQUE7RUNkRjtBQUNGO0FEREE7RUFDRTtJQUNFLDRCQUFBO0VDWEY7RURjQTtJQUNFLDZCQUFBO0VDWkY7RURlQTtJQUNFLDhCQUFBO0VDYkY7RURnQkE7SUFDRSx3QkFBQTtFQ2RGO0FBQ0Y7QURrQkE7RUFDRTtJQUNFLGtEQUFBO0VDaEJGO0VEbUJBO0lBQ0UsOENBQUE7RUNqQkY7QUFDRjtBRFVBO0VBQ0U7SUFDRSxrREFBQTtFQ2hCRjtFRG1CQTtJQUNFLDhDQUFBO0VDakJGO0FBQ0Y7QURvQkE7RUFDRTtJQUNFLHVCQUFBO0VDbEJGO0VEcUJBO0lBQ0UseUJBQUE7RUNuQkY7QUFDRjtBRFlBO0VBQ0U7SUFDRSx1QkFBQTtFQ2xCRjtFRHFCQTtJQUNFLHlCQUFBO0VDbkJGO0FBQ0Y7QUR1QkE7RUFDRTtJQUNFLDJCQUFBO0VDckJGO0VEd0JBO0lBQ0UsNkJBQUE7RUN0QkY7RUR5QkE7SUFDRSwyQkFBQTtFQ3ZCRjtBQUNGO0FEd0NBO0VBQ0U7SUFDRSwyQkFBQTtFQzNCRjtFRDhCQTtJQUNFLDZCQUFBO0VDNUJGO0VEK0JBO0lBQ0UsMkJBQUE7RUM3QkY7QUFDRjtBRGtCQTtFQUNFO0lBQ0UsMkJBQUE7RUMzQkY7RUQ4QkE7SUFDRSw2QkFBQTtFQzVCRjtFRCtCQTtJQUNFLDJCQUFBO0VDN0JGO0FBQ0Y7QUMzRkE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FENkZGO0FDM0ZFO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLG1EQUFBO1VBQUEsMkNBQUE7QUQ2Rko7QUMxRkU7O0VBRUUsV0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBRDRGSjtBQzFGSTs7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0FENkZOO0FDM0ZNOztFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FEOEZSO0FDM0ZNOztFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUQ4RlI7QUMzRk07O0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FEOEZSO0FDekZJOztFQUNFLGFBQUE7QUQ0Rk47QUN6Rkk7O0VBQ0UsYUFBQTtBRDRGTjtBQ3RGRTtFQUNFLHlCQUFBO0FEd0ZKO0FDcEZJO0VBRUUsWUFBQTtFQUNBLG1CQUFBO0VBRUEsc0RBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FEcUZOO0FDbEZNO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLDhCQUFBO0VBQ0EsMEJDM0ZFO0VENEZGLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FEb0ZSO0FDM0VJO0VBQ0UscUJBQUE7RUFDQSw4REFBQTtVQUFBLHNEQUFBO0FENkVOO0FDMUVJO0VBRUUsZ0JBQUE7RUFDQSxpQkFBQTtBRDJFTjtBQ3ZFTTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSw4QkFBQTtFQUNBLHdCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUR5RVIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbnRhaW5lci9tYWluL2dyb3VwLWxpc3QvY2hhdC1yb29tL2NoYXQtbWVzc2FnZS9jaGF0LW1lc3NhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAa2V5ZnJhbWVzIHNsaWRlLWluLXRvcCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMHZoKTtcbiAgfVxuXG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHNsaWRlLWluLWJvdHRvbSB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwdmgpO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG59XG5cblxuQGtleWZyYW1lcyBzbGlkZVJpZ2h0IHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwdncpO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDB2dyk7XG5cbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHNsaWRlTGVmdCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwdncpO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDB2dyk7XG5cbiAgfVxufVxuXG5cbkBrZXlmcmFtZXMgZWFzZS1vdXQtcmlnaHQge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01cmVtKTtcbiAgfVxuXG4gIDg1JSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC4zcmVtKTtcbiAgfVxuXG4gIDk3JSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0uMnJlbSk7XG4gIH1cblxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMClcbiAgfVxufVxuXG5cbkBrZXlmcmFtZXMgc2hhZG93IHtcbiAgMCUge1xuICAgIGJveC1zaGFkb3c6IDAgLjFyZW0gLjJyZW0gMCByZ2JhKDAsIDAsIDAsIDAuMTAxKTtcbiAgfVxuXG4gIDEwMCUge1xuICAgIGJveC1zaGFkb3c6IDAgMXJlbSAycmVtIDAgcmdiYSgwLCAwLCAwLCAwLjIwMSk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyByb3RhdGUge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cblxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG5cblxuQC13ZWJraXQta2V5ZnJhbWVzIEFuaW1hdGlvbk5hbWUge1xuICAwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgNTAlXG4gIH1cblxuICA1MCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgNTAlXG4gIH1cblxuICAxMDAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSA1MCVcbiAgfVxufVxuXG5ALW1vei1rZXlmcmFtZXMgbW92ZS1iYWNrZ3JvdW5kIHtcbiAgMCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDUwJVxuICB9XG5cbiAgNTAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDUwJVxuICB9XG5cbiAgMTAwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgNTAlXG4gIH1cbn1cblxuQGtleWZyYW1lcyBtb3ZlLWJhY2tncm91bmQge1xuICAwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgNTAlXG4gIH1cblxuICA1MCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgNTAlXG4gIH1cblxuICAxMDAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSA1MCVcbiAgfVxufVxuIiwiQGtleWZyYW1lcyBzbGlkZS1pbi10b3Age1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDB2aCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHNsaWRlLWluLWJvdHRvbSB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwdmgpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgfVxufVxuQGtleWZyYW1lcyBzbGlkZVJpZ2h0IHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwdncpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwdncpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHNsaWRlTGVmdCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwdncpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwdncpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGVhc2Utb3V0LXJpZ2h0IHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNXJlbSk7XG4gIH1cbiAgODUlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMC4zcmVtKTtcbiAgfVxuICA5NyUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMC4ycmVtKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc2hhZG93IHtcbiAgMCUge1xuICAgIGJveC1zaGFkb3c6IDAgMC4xcmVtIDAuMnJlbSAwIHJnYmEoMCwgMCwgMCwgMC4xMDEpO1xuICB9XG4gIDEwMCUge1xuICAgIGJveC1zaGFkb3c6IDAgMXJlbSAycmVtIDAgcmdiYSgwLCAwLCAwLCAwLjIwMSk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgcm90YXRlIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cbkAtd2Via2l0LWtleWZyYW1lcyBBbmltYXRpb25OYW1lIHtcbiAgMCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDUwJTtcbiAgfVxuICA1MCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgNTAlO1xuICB9XG4gIDEwMCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDUwJTtcbiAgfVxufVxuQC1tb3ota2V5ZnJhbWVzIG1vdmUtYmFja2dyb3VuZCB7XG4gIDAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSA1MCU7XG4gIH1cbiAgNTAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDUwJTtcbiAgfVxuICAxMDAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSA1MCU7XG4gIH1cbn1cbkBrZXlmcmFtZXMgbW92ZS1iYWNrZ3JvdW5kIHtcbiAgMCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDUwJTtcbiAgfVxuICA1MCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgNTAlO1xuICB9XG4gIDEwMCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDUwJTtcbiAgfVxufVxuOmhvc3Qge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW46IDAuNXJlbSAwO1xufVxuOmhvc3QgLm1lc3NhZ2UtY29udHJvbCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgbWFyZ2luOiAwLjVyZW07XG4gIGFuaW1hdGlvbjogc2xpZGVMZWZ0IDAuN3MgZWFzZS1vdXQgZm9yd2FyZHM7XG59XG46aG9zdCAudXNlcixcbjpob3N0IC5vdGhlci11c2VyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogYXV0bztcbiAgcGFkZGluZzogMCAxcmVtO1xufVxuOmhvc3QgLnVzZXItbWVzc2FnZSxcbjpob3N0IC5vdGhlci11c2VyLW1lc3NhZ2Uge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAwLjRlbTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG46aG9zdCAudXNlci1tZXNzYWdlLWNvbnRlbnQsXG46aG9zdCAub3RoZXItdXNlci1tZXNzYWdlLWNvbnRlbnQge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cbjpob3N0IC51c2VyLW1lc3NhZ2UtYXV0aG9yLFxuOmhvc3QgLm90aGVyLXVzZXItbWVzc2FnZS1hdXRob3Ige1xuICBvcGFjaXR5OiAwLjY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIG1hcmdpbjogMC4xcmVtIDAuM3JlbTtcbn1cbjpob3N0IC51c2VyLW1lc3NhZ2UtZGF0ZSxcbjpob3N0IC5vdGhlci11c2VyLW1lc3NhZ2UtZGF0ZSB7XG4gIG9wYWNpdHk6IDAuNjtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIG1hcmdpbi10b3A6IDAuM3JlbTtcbn1cbjpob3N0IC51c2VyLXNpYmxpbmcudXNlci1tZXNzYWdlOjphZnRlcixcbjpob3N0IC5vdGhlci11c2VyLXNpYmxpbmcudXNlci1tZXNzYWdlOjphZnRlciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG46aG9zdCAudXNlci1zaWJsaW5nLm90aGVyLXVzZXItbWVzc2FnZTo6YWZ0ZXIsXG46aG9zdCAub3RoZXItdXNlci1zaWJsaW5nLm90aGVyLXVzZXItbWVzc2FnZTo6YWZ0ZXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuOmhvc3QgLnVzZXIge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuOmhvc3QgLnVzZXItbWVzc2FnZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZDogIzAwYzlmZjtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gbGVmdCwgIzU0YTBmZiwgIzAwYzlmZik7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjNTRhMGZmLCAjMDBjOWZmKTtcbiAgbWFyZ2luLXJpZ2h0OiAycmVtO1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG59XG46aG9zdCAudXNlci1tZXNzYWdlOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiA1MCU7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIGJvcmRlcjogMXJlbSBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWxlZnQtY29sb3I6ICM1NGEwZmY7XG4gIGJvcmRlci1yaWdodDogMDtcbiAgbWFyZ2luLXRvcDogLTFyZW07XG4gIG1hcmdpbi1yaWdodDogLTFyZW07XG59XG46aG9zdCAub3RoZXItdXNlci1pbWFnZSB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDAgMC4zcmVtIHJnYmEoNTEsIDUxLCA1MSwgMC4yNykpO1xufVxuOmhvc3QgLm90aGVyLXVzZXItbWVzc2FnZSB7XG4gIGJhY2tncm91bmQ6ICNlZWU7XG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xufVxuOmhvc3QgLm90aGVyLXVzZXItbWVzc2FnZTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiA1MCU7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIGJvcmRlcjogMXJlbSBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAjZWVlO1xuICBib3JkZXItbGVmdDogMDtcbiAgbWFyZ2luLXRvcDogLTFyZW07XG4gIG1hcmdpbi1sZWZ0OiAtMXJlbTtcbn0iLCJAaW1wb3J0ICcuLi8uLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvc2Nzcy9jb2xvcnMnO1xuQGltcG9ydCAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3Njc3MvYW5pbWF0aW9uJztcblxuOmhvc3Qge1xuICB3aWR0aCAgICAgICAgIDogMTAwJTtcbiAgZGlzcGxheSAgICAgICA6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodCAgICAgICAgOiBhdXRvO1xuICBtYXJnaW4gICAgICAgIDogLjVyZW0gMDtcblxuICAubWVzc2FnZS1jb250cm9sIHtcbiAgICB0ZXh0LWFsaWduIDogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc3R5bGUgOiBpdGFsaWM7XG4gICAgbWFyZ2luICAgICA6IC41cmVtO1xuICAgIGFuaW1hdGlvbjogc2xpZGVMZWZ0IC43cyBlYXNlLW91dCBmb3J3YXJkcztcbiAgfVxuXG4gIC51c2VyLFxuICAub3RoZXItdXNlciB7XG4gICAgd2lkdGggIDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGhlaWdodCA6IGF1dG87XG4gICAgcGFkZGluZzogMCAxcmVtO1xuXG4gICAgJi1tZXNzYWdlIHtcbiAgICAgIHBvc2l0aW9uICAgICAgIDogcmVsYXRpdmU7XG4gICAgICBkaXNwbGF5ICAgICAgICA6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbiA6IGNvbHVtbjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYm9yZGVyLXJhZGl1cyAgOiAuNGVtO1xuICAgICAgaGVpZ2h0ICAgICAgICAgOiBhdXRvO1xuICAgICAgcGFkZGluZyAgICAgICAgOiAuNXJlbTtcbiAgICAgIGJveC1zaXppbmcgICAgIDogYm9yZGVyLWJveDtcblxuICAgICAgJi1jb250ZW50IHtcbiAgICAgICAgd2lkdGggICAgIDogMTAwJTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXNpemUgOiAxLjVyZW07XG4gICAgICB9XG5cbiAgICAgICYtYXV0aG9yIHtcbiAgICAgICAgb3BhY2l0eSAgICA6IC42O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgZm9udC1zdHlsZSA6IGl0YWxpYztcbiAgICAgICAgbWFyZ2luICAgICA6IC4xcmVtIC4zcmVtO1xuICAgICAgfVxuXG4gICAgICAmLWRhdGUge1xuICAgICAgICBvcGFjaXR5ICAgOiAuNjtcbiAgICAgICAgZm9udC1zaXplIDogMXJlbTtcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgICBtYXJnaW4tdG9wOiAuM3JlbTtcblxuICAgICAgfVxuICAgIH1cblxuICAgICYtc2libGluZy51c2VyLW1lc3NhZ2U6OmFmdGVyIHtcbiAgICAgIGRpc3BsYXk6IG5vbmVcbiAgICB9XG5cbiAgICAmLXNpYmxpbmcub3RoZXItdXNlci1tZXNzYWdlOjphZnRlciB7XG4gICAgICBkaXNwbGF5OiBub25lXG4gICAgfVxuXG5cbiAgfVxuXG4gIC51c2VyIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuXG5cblxuICAgICYtbWVzc2FnZSB7XG5cbiAgICAgIGNvbG9yICAgICAgIDogd2hpdGU7XG4gICAgICBiYWNrZ3JvdW5kICA6ICMwMGM5ZmY7XG4gICAgICBiYWNrZ3JvdW5kICA6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICRwcmltYXJ5LCAjMDBjOWZmKTtcbiAgICAgIGJhY2tncm91bmQgIDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICRwcmltYXJ5LCAjMDBjOWZmKTtcbiAgICAgIG1hcmdpbi1yaWdodDogMnJlbTtcbiAgICAgIGFsaWduLWl0ZW1zIDogZmxleC1lbmQ7XG5cblxuICAgICAgJjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQgICAgICAgICAgOiAnJztcbiAgICAgICAgcG9zaXRpb24gICAgICAgICA6IGFic29sdXRlO1xuICAgICAgICByaWdodCAgICAgICAgICAgIDogMDtcbiAgICAgICAgdG9wICAgICAgICAgICAgICA6IDUwJTtcbiAgICAgICAgd2lkdGggICAgICAgICAgICA6IDA7XG4gICAgICAgIGhlaWdodCAgICAgICAgICAgOiAwO1xuICAgICAgICBib3JkZXIgICAgICAgICAgIDogMXJlbSBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyLWxlZnQtY29sb3I6ICRwcmltYXJ5O1xuICAgICAgICBib3JkZXItcmlnaHQgICAgIDogMDtcbiAgICAgICAgbWFyZ2luLXRvcCAgICAgICA6IC0xcmVtO1xuICAgICAgICBtYXJnaW4tcmlnaHQgICAgIDogLTFyZW07XG4gICAgICB9XG4gICAgfVxuXG5cbiAgfVxuXG4gIC5vdGhlci11c2VyIHtcblxuICAgICYtaW1hZ2Uge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSguOSk7XG4gICAgICBmaWx0ZXIgICA6IGRyb3Atc2hhZG93KDAgMCAuM3JlbSByZ2JhKDUxLCA1MSwgNTEsIDAuMjcpKTtcbiAgICB9XG5cbiAgICAmLW1lc3NhZ2Uge1xuXG4gICAgICBiYWNrZ3JvdW5kIDogI2VlZTtcbiAgICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xuXG5cblxuICAgICAgJjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQgICAgICAgICAgIDogJyc7XG4gICAgICAgIHBvc2l0aW9uICAgICAgICAgIDogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQgICAgICAgICAgICAgIDogMDtcbiAgICAgICAgdG9wICAgICAgICAgICAgICAgOiA1MCU7XG4gICAgICAgIHdpZHRoICAgICAgICAgICAgIDogMDtcbiAgICAgICAgaGVpZ2h0ICAgICAgICAgICAgOiAwO1xuICAgICAgICBib3JkZXIgICAgICAgICAgICA6IDFyZW0gc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJvcmRlci1yaWdodC1jb2xvcjogI2VlZTtcbiAgICAgICAgYm9yZGVyLWxlZnQgICAgICAgOiAwO1xuICAgICAgICBtYXJnaW4tdG9wICAgICAgICA6IC0xcmVtO1xuICAgICAgICBtYXJnaW4tbGVmdCAgICAgICA6IC0xcmVtO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG59XG4iLCIkcHJpbWFyeTogIzU0YTBmZjtcbiRhY2NlbnQ6ICMxZjI1MzQ7XG4iXX0= */");

/***/ }),

/***/ "./src/app/components/container/main/group-list/chat-room/chat-message/chat-message.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/components/container/main/group-list/chat-room/chat-message/chat-message.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: ChatMessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatMessageComponent", function() { return ChatMessageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let ChatMessageComponent = class ChatMessageComponent {
    constructor() {
        this.showControl = false;
    }
    ngOnInit() {
        console.log(this.isSiblingMessage);
    }
    getUserImage() {
        const defaultImage = 'https://newsroom.stitchfix.com/wp-content/uploads/2016/08/default-user.png';
        if (typeof this.message.userId.image !== 'string' && this.message.userId.image.image) {
            return this.message.userId.image.image;
        }
        return defaultImage;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ChatMessageComponent.prototype, "message", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ChatMessageComponent.prototype, "isCurrentUser", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ChatMessageComponent.prototype, "isSiblingMessage", void 0);
ChatMessageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chat-message',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./chat-message.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/container/main/group-list/chat-room/chat-message/chat-message.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./chat-message.component.scss */ "./src/app/components/container/main/group-list/chat-room/chat-message/chat-message.component.scss")).default]
    })
], ChatMessageComponent);



/***/ }),

/***/ "./src/app/components/container/main/group-list/chat-room/chat-room.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/container/main/group-list/chat-room/chat-room.component.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  position: absolute;\n  width: 100%;\n  height: calc(100vh - 5.6rem);\n}\n:host .control-container {\n  height: 5rem;\n  position: relative;\n  padding: 0 1rem;\n}\n:host .control-container .group-data {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1.6rem;\n  color: #54a0ff;\n  font-weight: bold;\n  font-style: italic;\n}\n:host .control-container .group-data > * {\n  margin: 0 0.4rem;\n}\n:host mat-nav-list {\n  height: calc(100% - 7.5rem - 5rem);\n}\n:host mat-nav-list .messages-container {\n  height: 100%;\n  overflow: scroll;\n}\n:host mat-nav-list .messages-container mat-list-item {\n  height: auto;\n}\n:host .input-container {\n  height: 7.5rem;\n  width: 100%;\n  background-color: #fff;\n  box-shadow: 0rem 0rem 1.5rem 0rem rgba(84, 160, 255, 0.109);\n}\n:host .input-container .mat-form-field {\n  width: calc(100% - 9.8rem);\n  margin: 0 1rem;\n}\n:host .input-container button {\n  margin: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90emFjaGJvbmZpbC9Qcm9qZWN0cy9jaGF0LW1lLWFwcC9zcmMvYXBwL2NvbXBvbmVudHMvY29udGFpbmVyL21haW4vZ3JvdXAtbGlzdC9jaGF0LXJvb20vY2hhdC1yb29tLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NvbnRhaW5lci9tYWluL2dyb3VwLWxpc3QvY2hhdC1yb29tL2NoYXQtcm9vbS5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy90emFjaGJvbmZpbC9Qcm9qZWN0cy9jaGF0LW1lLWFwcC9zcmMvYXNzZXRzL3Njc3MvX21peGluLnNjc3MiLCIvVXNlcnMvdHphY2hib25maWwvUHJvamVjdHMvY2hhdC1tZS1hcHAvc3JjL2Fzc2V0cy9zY3NzL19jb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0FDRkY7QURJRTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNGSjtBREtJO0VFTUYsa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VGUEksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNHcEJJO0VIcUJKLGlCQUFBO0VBQ0Esa0JBQUE7QUNBTjtBREVNO0VBQ0UsZ0JBQUE7QUNBUjtBREtFO0VBQ0Usa0NBQUE7QUNISjtBREtJO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0FDSE47QURLTTtFQUNFLFlBQUE7QUNIUjtBRFlFO0VBSUUsY0FBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLDJEQUFBO0FDYko7QURlSTtFQUNFLDBCQUFBO0VBQ0EsY0FBQTtBQ2JOO0FEZ0JJO0VBQ0UsWUFBQTtBQ2ROIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb250YWluZXIvbWFpbi9ncm91cC1saXN0L2NoYXQtcm9vbS9jaGF0LXJvb20uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdzcmMvYXNzZXRzL3Njc3MvY29sb3JzJztcbkBpbXBvcnQgJ3NyYy9hc3NldHMvc2Nzcy9taXhpbic7XG5cbjpob3N0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aCAgIDogMTAwJTtcbiAgaGVpZ2h0ICA6IGNhbGMoMTAwdmggLSA1LjZyZW0pO1xuXG4gIC5jb250cm9sLWNvbnRhaW5lciB7XG4gICAgaGVpZ2h0ICA6IDVyZW07XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmcgOiAwIDFyZW07XG5cblxuICAgIC5ncm91cC1kYXRhIHtcbiAgICAgIEBpbmNsdWRlIHBvc2l0aW9uLWNlbnRlcjtcbiAgICAgIGRpc3BsYXkgICAgICAgIDogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXMgICAgOiBjZW50ZXI7XG4gICAgICBmb250LXNpemUgICAgICA6IDEuNnJlbTtcbiAgICAgIGNvbG9yICAgICAgICAgIDogJHByaW1hcnk7XG4gICAgICBmb250LXdlaWdodCAgICA6IGJvbGQ7XG4gICAgICBmb250LXN0eWxlICAgICA6IGl0YWxpYztcblxuICAgICAgJj4qIHtcbiAgICAgICAgbWFyZ2luOiAwIC40cmVtO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG1hdC1uYXYtbGlzdCB7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA3LjVyZW0gLSA1cmVtKTtcblxuICAgIC5tZXNzYWdlcy1jb250YWluZXIge1xuICAgICAgaGVpZ2h0ICA6IDEwMCU7XG4gICAgICBvdmVyZmxvdzogc2Nyb2xsO1xuXG4gICAgICBtYXQtbGlzdC1pdGVtIHtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuXG5cblxuXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmlucHV0LWNvbnRhaW5lciB7XG4gICAgLy8gcG9zaXRpb24gICAgICAgIDogYWJzb2x1dGU7XG4gICAgLy8gYm90dG9tICAgICAgICAgIDogMDtcbiAgICAvLyBsZWZ0ICAgICAgICAgICAgOiAwO1xuICAgIGhlaWdodCAgICAgICAgICAgICA6IDcuNXJlbTtcbiAgICB3aWR0aCAgICAgICAgICAgICAgOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3IgICA6ICNmZmY7XG4gICAgYm94LXNoYWRvdyAgICAgICAgIDogMHJlbSAwcmVtIDEuNXJlbSAwcmVtIHJnYmEoJHByaW1hcnksIDAuMTA5KTtcblxuICAgIC5tYXQtZm9ybS1maWVsZCB7XG4gICAgICB3aWR0aCA6IGNhbGMoMTAwJSAtIDkuOHJlbSk7XG4gICAgICBtYXJnaW46IDAgMXJlbTtcbiAgICB9XG5cbiAgICBidXR0b24ge1xuICAgICAgbWFyZ2luOiAxcmVtO1xuICAgIH1cbiAgfVxufVxuIiwiOmhvc3Qge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA1LjZyZW0pO1xufVxuOmhvc3QgLmNvbnRyb2wtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiA1cmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDAgMXJlbTtcbn1cbjpob3N0IC5jb250cm9sLWNvbnRhaW5lciAuZ3JvdXAtZGF0YSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDEuNnJlbTtcbiAgY29sb3I6ICM1NGEwZmY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG46aG9zdCAuY29udHJvbC1jb250YWluZXIgLmdyb3VwLWRhdGEgPiAqIHtcbiAgbWFyZ2luOiAwIDAuNHJlbTtcbn1cbjpob3N0IG1hdC1uYXYtbGlzdCB7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gNy41cmVtIC0gNXJlbSk7XG59XG46aG9zdCBtYXQtbmF2LWxpc3QgLm1lc3NhZ2VzLWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbn1cbjpob3N0IG1hdC1uYXYtbGlzdCAubWVzc2FnZXMtY29udGFpbmVyIG1hdC1saXN0LWl0ZW0ge1xuICBoZWlnaHQ6IGF1dG87XG59XG46aG9zdCAuaW5wdXQtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiA3LjVyZW07XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3gtc2hhZG93OiAwcmVtIDByZW0gMS41cmVtIDByZW0gcmdiYSg4NCwgMTYwLCAyNTUsIDAuMTA5KTtcbn1cbjpob3N0IC5pbnB1dC1jb250YWluZXIgLm1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDkuOHJlbSk7XG4gIG1hcmdpbjogMCAxcmVtO1xufVxuOmhvc3QgLmlucHV0LWNvbnRhaW5lciBidXR0b24ge1xuICBtYXJnaW46IDFyZW07XG59IiwiQG1peGluIGhvc3Qge1xuICB3aWR0aCAgOiAxMDAlO1xuICBoZWlnaHQgOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG5AbWl4aW4gZmxleC1jZW50ZXIge1xuICBkaXNwbGF5ICAgICAgICA6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uIDogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXMgICAgOiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQgIDogY2VudGVyO1xufVxuXG5AbWl4aW4gZmxleC1yb3ctc3BhY2UtYmV0d2VlbiB7XG4gIGRpc3BsYXkgICAgICAgIDogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG5AbWl4aW4gcG9zaXRpb24tY2VudGVyIHtcbiAgcG9zaXRpb24gOiBhYnNvbHV0ZTtcbiAgdG9wICAgICAgOiA1MCU7XG4gIGxlZnQgICAgIDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuXG5AbWl4aW4gcmVndWxhci1jbXAge1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA1LjZyZW0pO1xufVxuXG5cbkBtaXhpbiBsYW5kaW5nLWNtcCB7XG4gIGhlaWdodDogMTAwdmg7XG59XG4iLCIkcHJpbWFyeTogIzU0YTBmZjtcbiRhY2NlbnQ6ICMxZjI1MzQ7XG4iXX0= */");

/***/ }),

/***/ "./src/app/components/container/main/group-list/chat-room/chat-room.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/components/container/main/group-list/chat-room/chat-room.component.ts ***!
  \***************************************************************************************/
/*! exports provided: ChatRoomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatRoomComponent", function() { return ChatRoomComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var src_app_services_group_group_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/group/group.service */ "./src/app/services/group/group.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_websocket_websocket_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/websocket/websocket.service */ "./src/app/services/websocket/websocket.service.ts");






let ChatRoomComponent = class ChatRoomComponent {
    constructor(groupService, authService, route, wws) {
        this.groupService = groupService;
        this.authService = authService;
        this.route = route;
        this.wws = wws;
        this.messages = [];
        this.messageInput = '';
        this.isLoading = true;
        this.isImageLoaded = false;
    }
    ngOnInit() {
        this.fetchParams();
    }
    connect() {
        this.wws.listen(this.groupId)
            .subscribe((res) => {
            if (res.action === 'message') {
                const message = res.data.message;
                this.pushMessage(message);
                this.messageInput = '';
                this.scrollToTheLastMessage();
            }
        });
    }
    pushMessage(message) {
        this.messages.push(message);
    }
    getPic() {
        const loader = 'https://i.gifer.com/ZZ5H.gif';
        if (this.group && typeof this.group.image !== 'string') {
            return this.isImageLoaded ? this.getTemplateGroupImage() : loader;
        }
        return loader;
    }
    fetchParams() {
        this.groupId = this.route.snapshot.params['id'];
        if (this.groupId) {
            this.onGetMessages();
        }
        this.groupId$ = this.route.paramMap.subscribe(params => {
            const id = params.get('id');
            if (id) {
                this.groupId = id;
            }
        });
    }
    scrollToTheLastMessage() {
        setTimeout(() => {
            // const lastMsgRef = (this.messagesContainerRef.nativeElement.lastChild as HTMLDivElement);
            // lastMsgRef.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'end' });
            this.messagesContainerRef.nativeElement.scrollTop = this.messagesContainerRef.nativeElement.scrollHeight;
        }, 1);
    }
    onGetMessages() {
        this.isLoading = true;
        this.groupService.onGetMessages(this.groupId, this.authService.getUser()._id)
            .subscribe((res) => {
            if (res.isValid) {
                this.messages = res.body.messages;
                this.group = res.body.group;
                this.connect();
                this.onGetGroupImage();
                this.isLoading = false;
                this.scrollToTheLastMessage();
            }
        });
    }
    getTemplateGroupImage() {
        const defaultImage = 'https://dk1xgl0d43mu1.cloudfront.net/static_assets/images/default_medium_group_icon.png';
        if (typeof this.group.image !== 'string' && this.group.image.image) {
            return this.group.image.image;
        }
        return defaultImage;
    }
    onGetGroupImage() {
        const callBack = () => {
            this.isImageLoaded = true;
        };
        this.groupService.onGetImage(this.group, callBack);
    }
    isSiblingMessage(index, user) {
        if (index) {
            return this.messages[index - 1].userId._id === user._id;
        }
        return false;
    }
    onKeyDownSend(event) {
        if (event.code === 'Enter' && this.messageInput) {
            this.onSendMessage();
        }
    }
    onSendMessage() {
        const message = {
            date: new Date().toString(),
            message: this.messageInput,
            userId: this.authService.getUser()
        };
        this.groupService.onSendMessage(this.groupId, message)
            .subscribe((res) => {
            console.log('====================================');
            console.log('Message Send');
            console.log('====================================');
        });
    }
    isCurrentUser(user) {
        const id = user._id;
        return id === this.authService.getUser()._id;
    }
    ngOnDestroy() {
        if (this.groupId$) {
            this.groupId$.unsubscribe();
        }
    }
};
ChatRoomComponent.ctorParameters = () => [
    { type: src_app_services_group_group_service__WEBPACK_IMPORTED_MODULE_3__["GroupService"] },
    { type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: src_app_services_websocket_websocket_service__WEBPACK_IMPORTED_MODULE_5__["WebsocketService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('messagesContainerRef', { static: false })
], ChatRoomComponent.prototype, "messagesContainerRef", void 0);
ChatRoomComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chat-room',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./chat-room.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/container/main/group-list/chat-room/chat-room.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./chat-room.component.scss */ "./src/app/components/container/main/group-list/chat-room/chat-room.component.scss")).default]
    })
], ChatRoomComponent);



/***/ }),

/***/ "./src/app/components/container/main/group-list/create-group/create-group.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/container/main/group-list/create-group/create-group.component.scss ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  width: 100vw;\n  height: calc(100vh - 5.6rem);\n  background: #fafafa;\n}\n:host .create-group-container {\n  width: 100%;\n}\n:host .create-group-container form .mat-step {\n  display: flex;\n  flex-direction: column;\n}\n:host .create-group-container form .mat-step .image-control-container {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: space-between;\n}\n:host .create-group-container form .mat-step .image-control-container .image {\n  max-height: 10rem;\n  max-width: auto;\n}\n:host .create-group-container form .user-list {\n  height: 12rem;\n  overflow: scroll;\n}\n:host .create-group-container form .user-list .mat-list-item {\n  margin: 0.3rem 0;\n}\n:host .create-group-container form .spinning-auto {\n  right: 0;\n  position: absolute;\n  top: 0;\n}\n:host .create-group-container form .example-option-img {\n  vertical-align: middle;\n  margin-right: 8px;\n}\n@media (max-width: 501px) {\n  .lines {\n    margin-top: -30rem;\n  }\n}\n::ng-deep .mat-stepper-vertical {\n  background: none;\n}\n::ng-deep .mat-option {\n  height: 6rem !important;\n  cursor: pointer;\n}\n::ng-deep .mat-option .mat-option-text {\n  display: flex;\n  justify-content: flex-start;\n}\n::ng-deep .mat-option .mat-option-text > * {\n  vertical-align: middle;\n  margin: 0.3rem;\n}\n@media (min-width: 501px) {\n  .remove-button {\n    opacity: 0;\n    transform: translateX(0.5rem);\n    transition: all 0.3s ease-out;\n  }\n  .remove-button:hover {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90emFjaGJvbmZpbC9Qcm9qZWN0cy9jaGF0LW1lLWFwcC9zcmMvYXBwL2NvbXBvbmVudHMvY29udGFpbmVyL21haW4vZ3JvdXAtbGlzdC9jcmVhdGUtZ3JvdXAvY3JlYXRlLWdyb3VwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NvbnRhaW5lci9tYWluL2dyb3VwLWxpc3QvY3JlYXRlLWdyb3VwL2NyZWF0ZS1ncm91cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGVBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0FDREY7QURHRTtFQUNFLFdBQUE7QUNESjtBRElNO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FDRlI7QURJUTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsOEJBQUE7QUNGVjtBRElVO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0FDRlo7QURPTTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtBQ0xSO0FET1E7RUFDRSxnQkFBQTtBQ0xWO0FEVU07RUFDRSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0FDUlI7QURZTTtFQUNFLHNCQUFBO0VBQ0EsaUJBQUE7QUNWUjtBRGtCQTtFQUNFO0lBQ0Usa0JBQUE7RUNmRjtBQUNGO0FEbUJBO0VBQ0UsZ0JBQUE7QUNqQkY7QURvQkE7RUFDRSx1QkFBQTtFQUNBLGVBQUE7QUNqQkY7QURtQkU7RUFDRSxhQUFBO0VBQ0EsMkJBQUE7QUNqQko7QURtQkk7RUFDRSxzQkFBQTtFQUNBLGNBQUE7QUNqQk47QUR1QkE7RUFFRTtJQUNFLFVBQUE7SUFDQSw2QkFBQTtJQUNBLDZCQUFBO0VDckJGO0VEdUJFO0lBQ0UsVUFBQTtJQUNBLHdCQUFBO0VDckJKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbnRhaW5lci9tYWluL2dyb3VwLWxpc3QvY3JlYXRlLWdyb3VwL2NyZWF0ZS1ncm91cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3NyYy9hc3NldHMvc2Nzcy9taXhpbic7XG5cbjpob3N0IHtcbiAgcG9zaXRpb24gIDogZml4ZWQ7XG4gIGJvdHRvbSAgICA6IDA7XG4gIGxlZnQgICAgICA6IDA7XG4gIHdpZHRoICAgICA6IDEwMHZ3O1xuICBoZWlnaHQgICAgOiBjYWxjKDEwMHZoIC0gNS42cmVtKTtcbiAgYmFja2dyb3VuZDogI2ZhZmFmYTtcblxuICAuY3JlYXRlLWdyb3VwLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICBmb3JtIHtcbiAgICAgIC5tYXQtc3RlcCB7XG4gICAgICAgIGRpc3BsYXkgICAgICAgOiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgICAgIC5pbWFnZS1jb250cm9sLWNvbnRhaW5lciB7XG4gICAgICAgICAgZGlzcGxheSAgICAgICAgOiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uIDogcm93O1xuICAgICAgICAgIGZsZXgtd3JhcCAgICAgIDogbm93cmFwO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAgICAgICAgIC5pbWFnZSB7XG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAxMHJlbTtcbiAgICAgICAgICAgIG1heC13aWR0aCA6IGF1dG87XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC51c2VyLWxpc3Qge1xuICAgICAgICBoZWlnaHQgIDogMTJyZW07XG4gICAgICAgIG92ZXJmbG93OiBzY3JvbGw7XG5cbiAgICAgICAgLm1hdC1saXN0LWl0ZW0ge1xuICAgICAgICAgIG1hcmdpbjogLjNyZW0gMDtcbiAgICAgICAgfVxuXG4gICAgICB9XG5cbiAgICAgIC5zcGlubmluZy1hdXRvIHtcbiAgICAgICAgcmlnaHQgICA6IDA7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wICAgICA6IDA7XG5cbiAgICAgIH1cblxuICAgICAgLmV4YW1wbGUtb3B0aW9uLWltZyB7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgIG1hcmdpbi1yaWdodCAgOiA4cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG5cblxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTAxcHgpIHtcbiAgLmxpbmVzIHtcbiAgICBtYXJnaW4tdG9wOiAtMzByZW07XG4gIH1cbn1cblxuXG46Om5nLWRlZXAgLm1hdC1zdGVwcGVyLXZlcnRpY2FsIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn1cblxuOjpuZy1kZWVwIC5tYXQtb3B0aW9uIHtcbiAgaGVpZ2h0OiA2cmVtICFpbXBvcnRhbnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcblxuICAubWF0LW9wdGlvbi10ZXh0IHtcbiAgICBkaXNwbGF5ICAgICAgICA6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuXG4gICAgJj4qIHtcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICBtYXJnaW4gICAgICAgIDogLjNyZW07XG4gICAgfVxuICB9XG59XG5cblxuQG1lZGlhIChtaW4td2lkdGg6IDUwMXB4KSB7XG5cbiAgLnJlbW92ZS1idXR0b24ge1xuICAgIG9wYWNpdHkgICA6IDA7XG4gICAgdHJhbnNmb3JtIDogdHJhbnNsYXRlWCguNXJlbSk7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlLW91dDtcblxuICAgICY6aG92ZXIge1xuICAgICAgb3BhY2l0eSAgOiAxO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApXG4gICAgfVxuICB9XG59XG4iLCI6aG9zdCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDUuNnJlbSk7XG4gIGJhY2tncm91bmQ6ICNmYWZhZmE7XG59XG46aG9zdCAuY3JlYXRlLWdyb3VwLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xufVxuOmhvc3QgLmNyZWF0ZS1ncm91cC1jb250YWluZXIgZm9ybSAubWF0LXN0ZXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuOmhvc3QgLmNyZWF0ZS1ncm91cC1jb250YWluZXIgZm9ybSAubWF0LXN0ZXAgLmltYWdlLWNvbnRyb2wtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiBub3dyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbjpob3N0IC5jcmVhdGUtZ3JvdXAtY29udGFpbmVyIGZvcm0gLm1hdC1zdGVwIC5pbWFnZS1jb250cm9sLWNvbnRhaW5lciAuaW1hZ2Uge1xuICBtYXgtaGVpZ2h0OiAxMHJlbTtcbiAgbWF4LXdpZHRoOiBhdXRvO1xufVxuOmhvc3QgLmNyZWF0ZS1ncm91cC1jb250YWluZXIgZm9ybSAudXNlci1saXN0IHtcbiAgaGVpZ2h0OiAxMnJlbTtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbn1cbjpob3N0IC5jcmVhdGUtZ3JvdXAtY29udGFpbmVyIGZvcm0gLnVzZXItbGlzdCAubWF0LWxpc3QtaXRlbSB7XG4gIG1hcmdpbjogMC4zcmVtIDA7XG59XG46aG9zdCAuY3JlYXRlLWdyb3VwLWNvbnRhaW5lciBmb3JtIC5zcGlubmluZy1hdXRvIHtcbiAgcmlnaHQ6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xufVxuOmhvc3QgLmNyZWF0ZS1ncm91cC1jb250YWluZXIgZm9ybSAuZXhhbXBsZS1vcHRpb24taW1nIHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1MDFweCkge1xuICAubGluZXMge1xuICAgIG1hcmdpbi10b3A6IC0zMHJlbTtcbiAgfVxufVxuOjpuZy1kZWVwIC5tYXQtc3RlcHBlci12ZXJ0aWNhbCB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59XG5cbjo6bmctZGVlcCAubWF0LW9wdGlvbiB7XG4gIGhlaWdodDogNnJlbSAhaW1wb3J0YW50O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG46Om5nLWRlZXAgLm1hdC1vcHRpb24gLm1hdC1vcHRpb24tdGV4dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbn1cbjo6bmctZGVlcCAubWF0LW9wdGlvbiAubWF0LW9wdGlvbi10ZXh0ID4gKiB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIG1hcmdpbjogMC4zcmVtO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNTAxcHgpIHtcbiAgLnJlbW92ZS1idXR0b24ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAuNXJlbSk7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XG4gIH1cbiAgLnJlbW92ZS1idXR0b246aG92ZXIge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/components/container/main/group-list/create-group/create-group.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/container/main/group-list/create-group/create-group.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: CreateGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateGroupComponent", function() { return CreateGroupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_services_group_group_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/group/group.service */ "./src/app/services/group/group.service.ts");
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var _models_group_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../models/group.model */ "./src/app/models/group.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");







let CreateGroupComponent = class CreateGroupComponent {
    constructor(groupService, authService, router, route) {
        this.groupService = groupService;
        this.authService = authService;
        this.router = router;
        this.route = route;
        this.options = [];
        this.isOptionLoaded = true;
        this.selectedUsers = [];
        this.isLoading = false;
        this.isUserImageLoaded = true;
        this.defaultUserImage = [
            'https://newsroom.stitchfix.com/wp-content/uploads/2016/08/default-user.png',
            'https://i.gifer.com/ZZ5H.gif'
        ];
    }
    ngOnInit() {
        this.initForm();
    }
    getUserImage(user) {
        if (typeof user.image !== 'string' && user.image.image) {
            return user.image.image;
        }
        return this.getDefaultUserImage();
    }
    getDefaultUserImage() {
        return this.isUserImageLoaded ? this.defaultUserImage[0] : this.defaultUserImage[1];
    }
    loadUserImages() {
        this.isUserImageLoaded = false;
        this.groupService.onGetUsersImages(this.options, () => {
            this.isUserImageLoaded = true;
        });
    }
    onSearchUsers(event) {
        if (event) {
            this.isOptionLoaded = false;
            const { value } = event.target;
            const name = value;
            this.groupService.onGetUsers(name).subscribe((res) => {
                if (res.isValid) {
                    this.options = res.body.users;
                    this.options = this.options
                        .filter(opn => opn._id !== this.authService.getUser()._id);
                    this.loadUserImages();
                }
                this.isOptionLoaded = true;
            }, e => {
                console.log(e);
                this.isOptionLoaded = true;
            });
        }
    }
    displayWithFunction(user) {
        return user ? user.fullName : '';
    }
    addToUsers(event) {
        const value = event.option.value;
        const userAlreadyInSelected = this.selectedUsers.find(user => user._id === value._id);
        if (!userAlreadyInSelected) {
            this.selectedUsers.push(value);
        }
        this.form.get('user').setValue('');
        this.form.updateValueAndValidity();
    }
    removeUser(id) {
        this.selectedUsers = this.selectedUsers.filter(user => user._id !== id);
    }
    initForm() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            user: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
        });
    }
    onImagePicked(event) {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            const base64Value = reader.result;
            this.form.controls['image'].setValue(base64Value);
            this.form.updateValueAndValidity();
        };
    }
    onSubmit() {
        this.isLoading = true;
        const { name, image } = this.form.value;
        const users = this.selectedUsers
            .map(user => ({ userId: user._id, role: _models_group_model__WEBPACK_IMPORTED_MODULE_5__["ERole"].regular }));
        users.push({ userId: this.authService.getUser()._id, role: _models_group_model__WEBPACK_IMPORTED_MODULE_5__["ERole"].admin });
        const group = {
            name,
            image,
            users
        };
        this.groupService.onCreateGroup(group).subscribe((res) => {
            if (res.isValid) {
                this.router.navigate(['/'], { relativeTo: this.route });
                this.onCreateGroupDialog();
                this.initFetchGroups();
            }
            this.isLoading = false;
        });
    }
};
CreateGroupComponent.ctorParameters = () => [
    { type: src_app_services_group_group_service__WEBPACK_IMPORTED_MODULE_3__["GroupService"] },
    { type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('auto', { static: false })
], CreateGroupComponent.prototype, "auto", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CreateGroupComponent.prototype, "onCreateGroupDialog", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CreateGroupComponent.prototype, "initFetchGroups", void 0);
CreateGroupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-group',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./create-group.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/container/main/group-list/create-group/create-group.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./create-group.component.scss */ "./src/app/components/container/main/group-list/create-group/create-group.component.scss")).default]
    })
], CreateGroupComponent);



/***/ }),

/***/ "./src/app/components/container/main/group-list/group-list.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/components/container/main/group-list/group-list.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host .search-container {\n  width: 100%;\n  padding: 1rem;\n}\n:host .search-container .mat-form-field {\n  width: inherit;\n}\n:host .add-group-button {\n  position: fixed;\n  bottom: 7%;\n  right: 7%;\n}\n:host .group-image {\n  margin: 1rem;\n}\n:host .no-groups {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n  font-size: 1.5rem;\n}\n:host .no-groups a {\n  font-weight: bold;\n  color: #54a0ff;\n  font-style: italic;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90emFjaGJvbmZpbC9Qcm9qZWN0cy9jaGF0LW1lLWFwcC9zcmMvYXBwL2NvbXBvbmVudHMvY29udGFpbmVyL21haW4vZ3JvdXAtbGlzdC9ncm91cC1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NvbnRhaW5lci9tYWluL2dyb3VwLWxpc3QvZ3JvdXAtbGlzdC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy90emFjaGJvbmZpbC9Qcm9qZWN0cy9jaGF0LW1lLWFwcC9zcmMvYXNzZXRzL3Njc3MvX21peGluLnNjc3MiLCIvVXNlcnMvdHphY2hib25maWwvUHJvamVjdHMvY2hhdC1tZS1hcHAvc3JjL2Fzc2V0cy9zY3NzL19jb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLRTtFQUNFLFdBQUE7RUFDQSxhQUFBO0FDSko7QURNSTtFQUNFLGNBQUE7QUNKTjtBRFFFO0VBQ0UsZUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FDTko7QURTRTtFQUNFLFlBQUE7QUNQSjtBRFVFO0VFSkEsa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VGR0Usa0JBQUE7RUFDQSxpQkFBQTtBQ0xKO0FET0k7RUFDRSxpQkFBQTtFQUNBLGNHL0JJO0VIZ0NKLGtCQUFBO0FDTE4iLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbnRhaW5lci9tYWluL2dyb3VwLWxpc3QvZ3JvdXAtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3NyYy9hc3NldHMvc2Nzcy9jb2xvcnMnO1xuQGltcG9ydCAnc3JjL2Fzc2V0cy9zY3NzL21peGluJztcblxuOmhvc3Qge1xuXG4gIC5zZWFyY2gtY29udGFpbmVyIHtcbiAgICB3aWR0aCAgOiAxMDAlO1xuICAgIHBhZGRpbmc6IDFyZW07XG5cbiAgICAubWF0LWZvcm0tZmllbGQge1xuICAgICAgd2lkdGg6IGluaGVyaXQ7XG4gICAgfVxuICB9XG5cbiAgLmFkZC1ncm91cC1idXR0b24ge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b20gIDogNyU7XG4gICAgcmlnaHQgICA6IDclO1xuICB9XG5cbiAgLmdyb3VwLWltYWdlIHtcbiAgICBtYXJnaW46IDFyZW07XG4gIH1cblxuICAubm8tZ3JvdXBzIHtcbiAgICBAaW5jbHVkZSBwb3NpdGlvbi1jZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZSA6IDEuNXJlbTtcblxuICAgIGEge1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBjb2xvciAgICAgIDogJHByaW1hcnk7XG4gICAgICBmb250LXN0eWxlIDogaXRhbGljO1xuICAgIH1cbiAgfVxufVxuIiwiOmhvc3QgLnNlYXJjaC1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMXJlbTtcbn1cbjpob3N0IC5zZWFyY2gtY29udGFpbmVyIC5tYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiBpbmhlcml0O1xufVxuOmhvc3QgLmFkZC1ncm91cC1idXR0b24ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogNyU7XG4gIHJpZ2h0OiA3JTtcbn1cbjpob3N0IC5ncm91cC1pbWFnZSB7XG4gIG1hcmdpbjogMXJlbTtcbn1cbjpob3N0IC5uby1ncm91cHMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuOmhvc3QgLm5vLWdyb3VwcyBhIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjNTRhMGZmO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59IiwiQG1peGluIGhvc3Qge1xuICB3aWR0aCAgOiAxMDAlO1xuICBoZWlnaHQgOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG5AbWl4aW4gZmxleC1jZW50ZXIge1xuICBkaXNwbGF5ICAgICAgICA6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uIDogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXMgICAgOiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQgIDogY2VudGVyO1xufVxuXG5AbWl4aW4gZmxleC1yb3ctc3BhY2UtYmV0d2VlbiB7XG4gIGRpc3BsYXkgICAgICAgIDogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG5AbWl4aW4gcG9zaXRpb24tY2VudGVyIHtcbiAgcG9zaXRpb24gOiBhYnNvbHV0ZTtcbiAgdG9wICAgICAgOiA1MCU7XG4gIGxlZnQgICAgIDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuXG5AbWl4aW4gcmVndWxhci1jbXAge1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA1LjZyZW0pO1xufVxuXG5cbkBtaXhpbiBsYW5kaW5nLWNtcCB7XG4gIGhlaWdodDogMTAwdmg7XG59XG4iLCIkcHJpbWFyeTogIzU0YTBmZjtcbiRhY2NlbnQ6ICMxZjI1MzQ7XG4iXX0= */");

/***/ }),

/***/ "./src/app/components/container/main/group-list/group-list.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/container/main/group-list/group-list.component.ts ***!
  \******************************************************************************/
/*! exports provided: GroupListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupListComponent", function() { return GroupListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_group_group_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/group/group.service */ "./src/app/services/group/group.service.ts");
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");






let GroupListComponent = class GroupListComponent {
    constructor(groupService, authService, router, route) {
        this.groupService = groupService;
        this.authService = authService;
        this.router = router;
        this.route = route;
        this.showCreateGroupDialog = false;
        this.groups = [];
        this.isLoading = false;
        this.imagesLoaded = false;
        this.searchGroupInput = '';
    }
    ngOnInit() {
        this.initGroups();
        this.initFetchGroups();
    }
    initGroups() {
        this.groups$ = this.groupService.groups$.subscribe(groups => {
            this.groups = groups;
        });
    }
    filterGroupList() {
        return this.groups
            .filter(grp => {
            if (!grp.group || this.searchGroupInput === '') {
                return true;
            }
            else {
                return grp.group.name.toLocaleLowerCase().includes(this.searchGroupInput.toLocaleLowerCase());
            }
        });
    }
    routeToChat(id) {
        this.router.navigate([id], { relativeTo: this.route });
    }
    onCreateGroupDialog() {
        this.showCreateGroupDialog = !this.showCreateGroupDialog;
    }
    initFetchGroups() {
        this.isLoading = true;
        this.imagesLoaded = false;
        this.groupService.onGetGroups(this.authService.getUser()._id)
            .subscribe((res) => {
            if (res.isValid) {
                const groups = res.body.groups.map(grp => ({ group: grp._id, role: grp.role }));
                this.groupService.setGroups(groups);
                this.groupService.onGetImages(() => {
                    this.imagesLoaded = true;
                });
            }
            this.isLoading = false;
        });
    }
    getPic(group) {
        const loader = 'https://i.gifer.com/ZZ5H.gif';
        if (group) {
            return this.imagesLoaded ? this.getTemplateGroupImage(group) : loader;
        }
        return loader;
    }
    getTemplateGroupImage(group) {
        const defaultImage = 'https://dk1xgl0d43mu1.cloudfront.net/static_assets/images/default_medium_group_icon.png';
        if (typeof group.image === 'string' && group.image.includes('image')) {
            return group.image;
        }
        return defaultImage;
    }
    ngOnDestroy() {
        if (this.groups$) {
            this.groups$.unsubscribe();
        }
    }
};
GroupListComponent.ctorParameters = () => [
    { type: src_app_services_group_group_service__WEBPACK_IMPORTED_MODULE_2__["GroupService"] },
    { type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
GroupListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-group-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./group-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/container/main/group-list/group-list.component.html")).default,
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])('slideBottom', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({
                    transform: 'translateY(100vh)'
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({
                    transform: 'translateY(0)'
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('0.3s ease-in')),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('0.3s ease-out')),
            ]),
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./group-list.component.scss */ "./src/app/components/container/main/group-list/group-list.component.scss")).default]
    })
], GroupListComponent);



/***/ }),

/***/ "./src/app/components/container/main/main.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/container/main/main.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udGFpbmVyL21haW4vbWFpbi5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/container/main/main.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/container/main/main.component.ts ***!
  \*************************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let MainComponent = class MainComponent {
};
MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./main.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/container/main/main.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./main.component.scss */ "./src/app/components/container/main/main.component.scss")).default]
    })
], MainComponent);



/***/ }),

/***/ "./src/app/components/container/main/main.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/container/main/main.module.ts ***!
  \**********************************************************/
/*! exports provided: MainModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainModule", function() { return MainModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main.component */ "./src/app/components/container/main/main.component.ts");
/* harmony import */ var _main_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main.routing */ "./src/app/components/container/main/main.routing.ts");
/* harmony import */ var _group_list_create_group_create_group_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./group-list/create-group/create-group.component */ "./src/app/components/container/main/group-list/create-group/create-group.component.ts");
/* harmony import */ var _group_list_chat_room_chat_room_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./group-list/chat-room/chat-room.component */ "./src/app/components/container/main/group-list/chat-room/chat-room.component.ts");
/* harmony import */ var _group_list_group_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./group-list/group-list.component */ "./src/app/components/container/main/group-list/group-list.component.ts");
/* harmony import */ var _group_list_chat_room_chat_message_chat_message_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./group-list/chat-room/chat-message/chat-message.component */ "./src/app/components/container/main/group-list/chat-room/chat-message/chat-message.component.ts");










let MainModule = class MainModule {
};
MainModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"], _group_list_create_group_create_group_component__WEBPACK_IMPORTED_MODULE_6__["CreateGroupComponent"], _group_list_chat_room_chat_room_component__WEBPACK_IMPORTED_MODULE_7__["ChatRoomComponent"], _group_list_group_list_component__WEBPACK_IMPORTED_MODULE_8__["GroupListComponent"], _group_list_chat_room_chat_message_chat_message_component__WEBPACK_IMPORTED_MODULE_9__["ChatMessageComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _main_routing__WEBPACK_IMPORTED_MODULE_5__["MainRoutingModule"]
        ]
    })
], MainModule);



/***/ }),

/***/ "./src/app/components/container/main/main.routing.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/container/main/main.routing.ts ***!
  \***********************************************************/
/*! exports provided: MainRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainRoutingModule", function() { return MainRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _group_list_chat_room_chat_room_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./group-list/chat-room/chat-room.component */ "./src/app/components/container/main/group-list/chat-room/chat-room.component.ts");
/* harmony import */ var _group_list_group_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./group-list/group-list.component */ "./src/app/components/container/main/group-list/group-list.component.ts");





const routes = [
    {
        path: '',
        component: _group_list_group_list_component__WEBPACK_IMPORTED_MODULE_4__["GroupListComponent"],
    },
    {
        path: ':id',
        component: _group_list_chat_room_chat_room_component__WEBPACK_IMPORTED_MODULE_3__["ChatRoomComponent"]
    }
];
let MainRoutingModule = class MainRoutingModule {
};
MainRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MainRoutingModule);



/***/ }),

/***/ "./src/app/models/group.model.ts":
/*!***************************************!*\
  !*** ./src/app/models/group.model.ts ***!
  \***************************************/
/*! exports provided: ERole */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERole", function() { return ERole; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var ERole;
(function (ERole) {
    ERole["admin"] = "admin";
    ERole["regular"] = "regular";
})(ERole || (ERole = {}));


/***/ }),

/***/ "./src/app/services/group/group.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/group/group.service.ts ***!
  \*************************************************/
/*! exports provided: GroupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupService", function() { return GroupService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _http_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../http/http.service */ "./src/app/services/http/http.service.ts");




let GroupService = class GroupService {
    constructor(http) {
        this.http = http;
        this.groups = [];
        this.groups$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.groups);
    }
    onGetUsers(name) {
        return this.http.getUsers(name);
    }
    onCreateGroup(group) {
        return this.http.createGroup(group);
    }
    onGetGroups(id) {
        return this.http.getGroups(id);
    }
    setGroups(groups) {
        this.groups = groups;
        this.groupsHasChanged();
    }
    onGetMessages(groupId, userId) {
        return this.http.getMessages(groupId, userId);
    }
    onSendMessage(groupId, message) {
        return this.http.sendMessage(groupId, message);
    }
    onGetImage(group, callBack) {
        if (typeof group.image === 'string') {
            this.http.getImage(group.image).subscribe((res) => {
                if (res.isValid) {
                    group.image = res.body.image;
                    if (callBack) {
                        callBack();
                    }
                }
            });
        }
    }
    onGetUsersImages(users, callback) {
        const usersImages = users.map(user => {
            if (typeof user.image === 'string') {
                return user.image;
            }
            return '';
        });
        this.http.getImages(usersImages).subscribe((res) => {
            if (res.isValid) {
                const images = res.body.images;
                users.map((user, i) => {
                    if (user.image && images[i]) {
                        user.image = images[i];
                    }
                });
                if (callback) {
                    callback();
                }
            }
        });
    }
    onGetImages(callback) {
        const imagesArray = this.groups.map(group => {
            if (group.group) {
                return group.group.image;
            }
            return '';
        });
        this.http.getImages(imagesArray).subscribe((res) => {
            if (res.isValid) {
                const images = res.body.images;
                this.groups = this.groups.map((grp, i) => {
                    if (grp.group && images[i]) {
                        grp.group.image = images[i].image;
                    }
                    return grp;
                }).filter(grp => grp.group);
                this.groupsHasChanged();
            }
            if (callback) {
                callback();
            }
        });
    }
    groupsHasChanged() {
        this.groups$.next(this.groups);
    }
};
GroupService.ctorParameters = () => [
    { type: _http_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] }
];
GroupService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], GroupService);



/***/ }),

/***/ "./src/app/services/websocket/websocket.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/websocket/websocket.service.ts ***!
  \*********************************************************/
/*! exports provided: WebsocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsocketService", function() { return WebsocketService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");





let WebsocketService = class WebsocketService {
    constructor() {
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2__["connect"](src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].WEBSOCKET_URL);
    }
    listen(eventName) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"](subscriber => {
            this.socket.on(eventName, data => {
                subscriber.next(data);
            });
        });
    }
    emit(eventName, data) {
        this.socket.emit(eventName, data);
    }
};
WebsocketService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], WebsocketService);



/***/ }),

/***/ 4:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

}]);
//# sourceMappingURL=components-container-main-main-module-es2015.js.map
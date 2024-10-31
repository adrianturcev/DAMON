(() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined")
      return require.apply(this, arguments);
    throw Error('Dynamic require of "' + x + '" is not supported');
  });
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require2() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // node_modules/tslib/tslib.es6.mjs
  var tslib_es6_exports = {};
  __export(tslib_es6_exports, {
    __addDisposableResource: () => __addDisposableResource,
    __assign: () => __assign,
    __asyncDelegator: () => __asyncDelegator,
    __asyncGenerator: () => __asyncGenerator,
    __asyncValues: () => __asyncValues,
    __await: () => __await,
    __awaiter: () => __awaiter,
    __classPrivateFieldGet: () => __classPrivateFieldGet,
    __classPrivateFieldIn: () => __classPrivateFieldIn,
    __classPrivateFieldSet: () => __classPrivateFieldSet,
    __createBinding: () => __createBinding,
    __decorate: () => __decorate,
    __disposeResources: () => __disposeResources,
    __esDecorate: () => __esDecorate,
    __exportStar: () => __exportStar,
    __extends: () => __extends,
    __generator: () => __generator,
    __importDefault: () => __importDefault,
    __importStar: () => __importStar,
    __makeTemplateObject: () => __makeTemplateObject,
    __metadata: () => __metadata,
    __param: () => __param,
    __propKey: () => __propKey,
    __read: () => __read,
    __rest: () => __rest,
    __runInitializers: () => __runInitializers,
    __setFunctionName: () => __setFunctionName,
    __spread: () => __spread,
    __spreadArray: () => __spreadArray,
    __spreadArrays: () => __spreadArrays,
    __values: () => __values,
    default: () => tslib_es6_default
  });
  function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  }
  function __rest(s, e) {
    var t = {};
    for (var p in s)
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
          t[p[i]] = s[p[i]];
      }
    return t;
  }
  function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  }
  function __param(paramIndex, decorator) {
    return function(target, key) {
      decorator(target, key, paramIndex);
    };
  }
  function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) {
      if (f !== void 0 && typeof f !== "function")
        throw new TypeError("Function expected");
      return f;
    }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
      var context = {};
      for (var p in contextIn)
        context[p] = p === "access" ? {} : contextIn[p];
      for (var p in contextIn.access)
        context.access[p] = contextIn.access[p];
      context.addInitializer = function(f) {
        if (done)
          throw new TypeError("Cannot add initializers after decoration has completed");
        extraInitializers.push(accept(f || null));
      };
      var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
      if (kind === "accessor") {
        if (result === void 0)
          continue;
        if (result === null || typeof result !== "object")
          throw new TypeError("Object expected");
        if (_ = accept(result.get))
          descriptor.get = _;
        if (_ = accept(result.set))
          descriptor.set = _;
        if (_ = accept(result.init))
          initializers.unshift(_);
      } else if (_ = accept(result)) {
        if (kind === "field")
          initializers.unshift(_);
        else
          descriptor[key] = _;
      }
    }
    if (target)
      Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
  }
  function __runInitializers(thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
      value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
  }
  function __propKey(x) {
    return typeof x === "symbol" ? x : "".concat(x);
  }
  function __setFunctionName(f, name, prefix) {
    if (typeof name === "symbol")
      name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
  }
  function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(metadataKey, metadataValue);
  }
  function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  }
  function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() {
      if (t[0] & 1)
        throw t[1];
      return t[1];
    }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
      return this;
    }), g;
    function verb(n) {
      return function(v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f)
        throw new TypeError("Generator is already executing.");
      while (g && (g = 0, op[0] && (_ = 0)), _)
        try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
            return t;
          if (y = 0, t)
            op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2])
                _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      if (op[0] & 5)
        throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  }
  function __exportStar(m, o) {
    for (var p in m)
      if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
        __createBinding(o, m, p);
  }
  function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m)
      return m.call(o);
    if (o && typeof o.length === "number")
      return {
        next: function() {
          if (o && i >= o.length)
            o = void 0;
          return { value: o && o[i++], done: !o };
        }
      };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
  }
  function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m)
      return o;
    var i = m.call(o), r, ar = [], e;
    try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
        ar.push(r.value);
    } catch (error) {
      e = { error };
    } finally {
      try {
        if (r && !r.done && (m = i["return"]))
          m.call(i);
      } finally {
        if (e)
          throw e.error;
      }
    }
    return ar;
  }
  function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
      ar = ar.concat(__read(arguments[i]));
    return ar;
  }
  function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++)
      s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
        r[k] = a[j];
    return r;
  }
  function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2)
      for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
          if (!ar)
            ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
        }
      }
    return to.concat(ar || Array.prototype.slice.call(from));
  }
  function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
  }
  function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator)
      throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
      return this;
    }, i;
    function verb(n) {
      if (g[n])
        i[n] = function(v) {
          return new Promise(function(a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
    }
    function resume(n, v) {
      try {
        step(g[n](v));
      } catch (e) {
        settle(q[0][3], e);
      }
    }
    function step(r) {
      r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
      resume("next", value);
    }
    function reject(value) {
      resume("throw", value);
    }
    function settle(f, v) {
      if (f(v), q.shift(), q.length)
        resume(q[0][0], q[0][1]);
    }
  }
  function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function(e) {
      throw e;
    }), verb("return"), i[Symbol.iterator] = function() {
      return this;
    }, i;
    function verb(n, f) {
      i[n] = o[n] ? function(v) {
        return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v;
      } : f;
    }
  }
  function __asyncValues(o) {
    if (!Symbol.asyncIterator)
      throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
      return this;
    }, i);
    function verb(n) {
      i[n] = o[n] && function(v) {
        return new Promise(function(resolve, reject) {
          v = o[n](v), settle(resolve, reject, v.done, v.value);
        });
      };
    }
    function settle(resolve, reject, d, v) {
      Promise.resolve(v).then(function(v2) {
        resolve({ value: v2, done: d });
      }, reject);
    }
  }
  function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) {
      Object.defineProperty(cooked, "raw", { value: raw });
    } else {
      cooked.raw = raw;
    }
    return cooked;
  }
  function __importStar(mod) {
    if (mod && mod.__esModule)
      return mod;
    var result = {};
    if (mod != null) {
      for (var k in mod)
        if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
          __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
  }
  function __importDefault(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  }
  function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f)
      throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
      throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
  }
  function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m")
      throw new TypeError("Private method is not writable");
    if (kind === "a" && !f)
      throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
      throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
  }
  function __classPrivateFieldIn(state, receiver) {
    if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function")
      throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
  }
  function __addDisposableResource(env, value, async) {
    if (value !== null && value !== void 0) {
      if (typeof value !== "object" && typeof value !== "function")
        throw new TypeError("Object expected.");
      var dispose;
      if (async) {
        if (!Symbol.asyncDispose)
          throw new TypeError("Symbol.asyncDispose is not defined.");
        dispose = value[Symbol.asyncDispose];
      }
      if (dispose === void 0) {
        if (!Symbol.dispose)
          throw new TypeError("Symbol.dispose is not defined.");
        dispose = value[Symbol.dispose];
      }
      if (typeof dispose !== "function")
        throw new TypeError("Object not disposable.");
      env.stack.push({ value, dispose, async });
    } else if (async) {
      env.stack.push({ async: true });
    }
    return value;
  }
  function __disposeResources(env) {
    function fail(e) {
      env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
      env.hasError = true;
    }
    function next() {
      while (env.stack.length) {
        var rec = env.stack.pop();
        try {
          var result = rec.dispose && rec.dispose.call(rec.value);
          if (rec.async)
            return Promise.resolve(result).then(next, function(e) {
              fail(e);
              return next();
            });
        } catch (e) {
          fail(e);
        }
      }
      if (env.hasError)
        throw env.error;
    }
    return next();
  }
  var extendStatics, __assign, __createBinding, __setModuleDefault, _SuppressedError, tslib_es6_default;
  var init_tslib_es6 = __esm({
    "node_modules/tslib/tslib.es6.mjs"() {
      extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      __assign = function() {
        __assign = Object.assign || function __assign2(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s)
              if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
          }
          return t;
        };
        return __assign.apply(this, arguments);
      };
      __createBinding = Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      };
      __setModuleDefault = Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      };
      _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
        var e = new Error(message);
        return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
      };
      tslib_es6_default = {
        __extends,
        __assign,
        __rest,
        __decorate,
        __param,
        __metadata,
        __awaiter,
        __generator,
        __createBinding,
        __exportStar,
        __values,
        __read,
        __spread,
        __spreadArrays,
        __spreadArray,
        __await,
        __asyncGenerator,
        __asyncDelegator,
        __asyncValues,
        __makeTemplateObject,
        __importStar,
        __importDefault,
        __classPrivateFieldGet,
        __classPrivateFieldSet,
        __classPrivateFieldIn,
        __addDisposableResource,
        __disposeResources
      };
    }
  });

  // node_modules/clarinet/clarinet.js
  var require_clarinet = __commonJS({
    "node_modules/clarinet/clarinet.js"(exports) {
      (function(clarinet2) {
        "use strict";
        var env = typeof process === "object" && process.env ? process.env : self;
        clarinet2.parser = function(opt) {
          return new CParser(opt);
        };
        clarinet2.CParser = CParser;
        clarinet2.CStream = CStream;
        clarinet2.createStream = createStream;
        clarinet2.MAX_BUFFER_LENGTH = 64 * 1024;
        clarinet2.DEBUG = env.CDEBUG === "debug";
        clarinet2.INFO = env.CDEBUG === "debug" || env.CDEBUG === "info";
        clarinet2.EVENTS = [
          "value",
          "string",
          "key",
          "openobject",
          "closeobject",
          "openarray",
          "closearray",
          "error",
          "end",
          "ready"
        ];
        var buffers = {
          textNode: void 0,
          numberNode: ""
        }, streamWraps = clarinet2.EVENTS.filter(function(ev) {
          return ev !== "error" && ev !== "end";
        }), S = 0, Stream;
        clarinet2.STATE = {
          BEGIN: S++,
          VALUE: S++,
          OPEN_OBJECT: S++,
          CLOSE_OBJECT: S++,
          OPEN_ARRAY: S++,
          CLOSE_ARRAY: S++,
          TEXT_ESCAPE: S++,
          STRING: S++,
          BACKSLASH: S++,
          END: S++,
          OPEN_KEY: S++,
          CLOSE_KEY: S++,
          TRUE: S++,
          TRUE2: S++,
          TRUE3: S++,
          FALSE: S++,
          FALSE2: S++,
          FALSE3: S++,
          FALSE4: S++,
          NULL: S++,
          NULL2: S++,
          NULL3: S++,
          NUMBER_DECIMAL_POINT: S++,
          NUMBER_DIGIT: S++
          // [0-9]
        };
        for (var s_ in clarinet2.STATE)
          clarinet2.STATE[clarinet2.STATE[s_]] = s_;
        S = clarinet2.STATE;
        const Char = {
          tab: 9,
          // \t
          lineFeed: 10,
          // \n
          carriageReturn: 13,
          // \r
          space: 32,
          // " "
          doubleQuote: 34,
          // "
          plus: 43,
          // +
          comma: 44,
          // ,
          minus: 45,
          // -
          period: 46,
          // .
          _0: 48,
          // 0
          _9: 57,
          // 9
          colon: 58,
          // :
          E: 69,
          // E
          openBracket: 91,
          // [
          backslash: 92,
          // \
          closeBracket: 93,
          // ]
          a: 97,
          // a
          b: 98,
          // b
          e: 101,
          // e 
          f: 102,
          // f
          l: 108,
          // l
          n: 110,
          // n
          r: 114,
          // r
          s: 115,
          // s
          t: 116,
          // t
          u: 117,
          // u
          openBrace: 123,
          // {
          closeBrace: 125
          // }
        };
        if (!Object.create) {
          Object.create = function(o) {
            function f() {
              this["__proto__"] = o;
            }
            f.prototype = o;
            return new f();
          };
        }
        if (!Object.getPrototypeOf) {
          Object.getPrototypeOf = function(o) {
            return o["__proto__"];
          };
        }
        if (!Object.keys) {
          Object.keys = function(o) {
            var a = [];
            for (var i in o)
              if (o.hasOwnProperty(i))
                a.push(i);
            return a;
          };
        }
        function checkBufferLength(parser) {
          var maxAllowed = Math.max(clarinet2.MAX_BUFFER_LENGTH, 10), maxActual = 0;
          for (var buffer in buffers) {
            var len = parser[buffer] === void 0 ? 0 : parser[buffer].length;
            if (len > maxAllowed) {
              switch (buffer) {
                case "text":
                  closeText(parser);
                  break;
                default:
                  error(parser, "Max buffer length exceeded: " + buffer);
              }
            }
            maxActual = Math.max(maxActual, len);
          }
          parser.bufferCheckPosition = clarinet2.MAX_BUFFER_LENGTH - maxActual + parser.position;
        }
        function clearBuffers(parser) {
          for (var buffer in buffers) {
            parser[buffer] = buffers[buffer];
          }
        }
        var stringTokenPattern = /[\\"\n]/g;
        function CParser(opt) {
          if (!(this instanceof CParser))
            return new CParser(opt);
          var parser = this;
          clearBuffers(parser);
          parser.bufferCheckPosition = clarinet2.MAX_BUFFER_LENGTH;
          parser.q = parser.c = parser.p = "";
          parser.opt = opt || {};
          parser.closed = parser.closedRoot = parser.sawRoot = false;
          parser.tag = parser.error = null;
          parser.state = S.BEGIN;
          parser.stack = new Array();
          parser.position = parser.column = 0;
          parser.line = 1;
          parser.slashed = false;
          parser.unicodeI = 0;
          parser.unicodeS = null;
          parser.depth = 0;
          emit(parser, "onready");
        }
        CParser.prototype = {
          end: function() {
            end(this);
          },
          write,
          resume: function() {
            this.error = null;
            return this;
          },
          close: function() {
            return this.write(null);
          }
        };
        try {
          Stream = __require("stream").Stream;
        } catch (ex) {
          Stream = function() {
          };
        }
        function createStream(opt) {
          return new CStream(opt);
        }
        function CStream(opt) {
          if (!(this instanceof CStream))
            return new CStream(opt);
          this._parser = new CParser(opt);
          this.writable = true;
          this.readable = true;
          this.bytes_remaining = 0;
          this.bytes_in_sequence = 0;
          this.temp_buffs = { "2": new Buffer(2), "3": new Buffer(3), "4": new Buffer(4) };
          this.string = "";
          var me = this;
          Stream.apply(me);
          this._parser.onend = function() {
            me.emit("end");
          };
          this._parser.onerror = function(er) {
            me.emit("error", er);
            me._parser.error = null;
          };
          streamWraps.forEach(function(ev) {
            Object.defineProperty(
              me,
              "on" + ev,
              {
                get: function() {
                  return me._parser["on" + ev];
                },
                set: function(h) {
                  if (!h) {
                    me.removeAllListeners(ev);
                    me._parser["on" + ev] = h;
                    return h;
                  }
                  me.on(ev, h);
                },
                enumerable: true,
                configurable: false
              }
            );
          });
        }
        CStream.prototype = Object.create(
          Stream.prototype,
          { constructor: { value: CStream } }
        );
        CStream.prototype.write = function(data) {
          data = new Buffer(data);
          for (var i = 0; i < data.length; i++) {
            var n = data[i];
            if (this.bytes_remaining > 0) {
              for (var j = 0; j < this.bytes_remaining; j++) {
                this.temp_buffs[this.bytes_in_sequence][this.bytes_in_sequence - this.bytes_remaining + j] = data[j];
              }
              this.string = this.temp_buffs[this.bytes_in_sequence].toString();
              this.bytes_in_sequence = this.bytes_remaining = 0;
              i = i + j - 1;
              this._parser.write(this.string);
              this.emit("data", this.string);
              continue;
            }
            if (this.bytes_remaining === 0 && n >= 128) {
              if (n >= 194 && n <= 223)
                this.bytes_in_sequence = 2;
              if (n >= 224 && n <= 239)
                this.bytes_in_sequence = 3;
              if (n >= 240 && n <= 244)
                this.bytes_in_sequence = 4;
              if (this.bytes_in_sequence + i > data.length) {
                for (var k = 0; k <= data.length - 1 - i; k++) {
                  this.temp_buffs[this.bytes_in_sequence][k] = data[i + k];
                }
                this.bytes_remaining = i + this.bytes_in_sequence - data.length;
                return true;
              } else {
                this.string = data.slice(i, i + this.bytes_in_sequence).toString();
                i = i + this.bytes_in_sequence - 1;
                this._parser.write(this.string);
                this.emit("data", this.string);
                continue;
              }
            }
            for (var p = i; p < data.length; p++) {
              if (data[p] >= 128)
                break;
            }
            this.string = data.slice(i, p).toString();
            this._parser.write(this.string);
            this.emit("data", this.string);
            i = p - 1;
            continue;
          }
        };
        CStream.prototype.end = function(chunk) {
          if (chunk && chunk.length)
            this._parser.write(chunk.toString());
          this._parser.end();
          return true;
        };
        CStream.prototype.on = function(ev, handler) {
          var me = this;
          if (!me._parser["on" + ev] && streamWraps.indexOf(ev) !== -1) {
            me._parser["on" + ev] = function() {
              var args = arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments);
              args.splice(0, 0, ev);
              me.emit.apply(me, args);
            };
          }
          return Stream.prototype.on.call(me, ev, handler);
        };
        CStream.prototype.destroy = function() {
          clearBuffers(this._parser);
          this.emit("close");
        };
        function emit(parser, event, data) {
          if (clarinet2.INFO)
            console.log("-- emit", event, data);
          if (parser[event])
            parser[event](data);
        }
        function emitNode(parser, event, data) {
          closeValue(parser);
          emit(parser, event, data);
        }
        function closeValue(parser, event) {
          parser.textNode = textopts(parser.opt, parser.textNode);
          if (parser.textNode !== void 0) {
            emit(parser, event ? event : "onvalue", parser.textNode);
          }
          parser.textNode = void 0;
        }
        function closeNumber(parser) {
          if (parser.numberNode)
            emit(parser, "onvalue", parseFloat(parser.numberNode));
          parser.numberNode = "";
        }
        function textopts(opt, text) {
          if (text === void 0) {
            return text;
          }
          if (opt.trim)
            text = text.trim();
          if (opt.normalize)
            text = text.replace(/\s+/g, " ");
          return text;
        }
        function error(parser, er) {
          closeValue(parser);
          er += "\nLine: " + parser.line + "\nColumn: " + parser.column + "\nChar: " + parser.c;
          er = new Error(er);
          parser.error = er;
          emit(parser, "onerror", er);
          return parser;
        }
        function end(parser) {
          if (parser.state !== S.VALUE || parser.depth !== 0)
            error(parser, "Unexpected end");
          closeValue(parser);
          parser.c = "";
          parser.closed = true;
          emit(parser, "onend");
          CParser.call(parser, parser.opt);
          return parser;
        }
        function isWhitespace(c) {
          return c === Char.carriageReturn || c === Char.lineFeed || c === Char.space || c === Char.tab;
        }
        function write(chunk) {
          var parser = this;
          if (this.error)
            throw this.error;
          if (parser.closed)
            return error(
              parser,
              "Cannot write after close. Assign an onready handler."
            );
          if (chunk === null)
            return end(parser);
          var i = 0, c = chunk.charCodeAt(0), p = parser.p;
          var lockIncrements = false;
          if (clarinet2.DEBUG)
            console.log("write -> [" + chunk + "]");
          while (c) {
            p = c;
            parser.c = c = chunk.charCodeAt(i++);
            if (p !== c)
              parser.p = p;
            else
              p = parser.p;
            if (!c)
              break;
            if (clarinet2.DEBUG)
              console.log(i, c, clarinet2.STATE[parser.state]);
            if (!lockIncrements) {
              parser.position++;
              if (c === Char.lineFeed) {
                parser.line++;
                parser.column = 0;
              } else
                parser.column++;
            } else {
              lockIncrements = false;
            }
            switch (parser.state) {
              case S.BEGIN:
                if (c === Char.openBrace)
                  parser.state = S.OPEN_OBJECT;
                else if (c === Char.openBracket)
                  parser.state = S.OPEN_ARRAY;
                else if (!isWhitespace(c))
                  error(parser, "Non-whitespace before {[.");
                continue;
              case S.OPEN_KEY:
              case S.OPEN_OBJECT:
                if (isWhitespace(c))
                  continue;
                if (parser.state === S.OPEN_KEY)
                  parser.stack.push(S.CLOSE_KEY);
                else {
                  if (c === Char.closeBrace) {
                    emit(parser, "onopenobject");
                    this.depth++;
                    emit(parser, "oncloseobject");
                    this.depth--;
                    parser.state = parser.stack.pop() || S.VALUE;
                    continue;
                  } else
                    parser.stack.push(S.CLOSE_OBJECT);
                }
                if (c === Char.doubleQuote)
                  parser.state = S.STRING;
                else
                  error(parser, 'Malformed object key should start with "');
                continue;
              case S.CLOSE_KEY:
              case S.CLOSE_OBJECT:
                if (isWhitespace(c))
                  continue;
                var event = parser.state === S.CLOSE_KEY ? "key" : "object";
                if (c === Char.colon) {
                  if (parser.state === S.CLOSE_OBJECT) {
                    parser.stack.push(S.CLOSE_OBJECT);
                    closeValue(parser, "onopenobject");
                    this.depth++;
                  } else
                    closeValue(parser, "onkey");
                  parser.state = S.VALUE;
                } else if (c === Char.closeBrace) {
                  emitNode(parser, "oncloseobject");
                  this.depth--;
                  parser.state = parser.stack.pop() || S.VALUE;
                } else if (c === Char.comma) {
                  if (parser.state === S.CLOSE_OBJECT)
                    parser.stack.push(S.CLOSE_OBJECT);
                  closeValue(parser);
                  parser.state = S.OPEN_KEY;
                } else
                  error(parser, "Bad object");
                continue;
              case S.OPEN_ARRAY:
              case S.VALUE:
                if (isWhitespace(c))
                  continue;
                if (parser.state === S.OPEN_ARRAY) {
                  emit(parser, "onopenarray");
                  this.depth++;
                  parser.state = S.VALUE;
                  if (c === Char.closeBracket) {
                    emit(parser, "onclosearray");
                    this.depth--;
                    parser.state = parser.stack.pop() || S.VALUE;
                    continue;
                  } else {
                    parser.stack.push(S.CLOSE_ARRAY);
                  }
                }
                if (c === Char.doubleQuote)
                  parser.state = S.STRING;
                else if (c === Char.openBrace)
                  parser.state = S.OPEN_OBJECT;
                else if (c === Char.openBracket)
                  parser.state = S.OPEN_ARRAY;
                else if (c === Char.t)
                  parser.state = S.TRUE;
                else if (c === Char.f)
                  parser.state = S.FALSE;
                else if (c === Char.n)
                  parser.state = S.NULL;
                else if (c === Char.minus) {
                  parser.numberNode += "-";
                } else if (Char._0 <= c && c <= Char._9) {
                  parser.numberNode += String.fromCharCode(c);
                  parser.state = S.NUMBER_DIGIT;
                } else
                  error(parser, "Bad value");
                continue;
              case S.CLOSE_ARRAY:
                if (c === Char.comma) {
                  parser.stack.push(S.CLOSE_ARRAY);
                  closeValue(parser, "onvalue");
                  parser.state = S.VALUE;
                } else if (c === Char.closeBracket) {
                  emitNode(parser, "onclosearray");
                  this.depth--;
                  parser.state = parser.stack.pop() || S.VALUE;
                } else if (isWhitespace(c))
                  continue;
                else
                  error(parser, "Bad array");
                continue;
              case S.STRING:
                if (parser.textNode === void 0) {
                  parser.textNode = "";
                }
                var starti = i - 1, slashed = parser.slashed, unicodeI = parser.unicodeI;
                STRING_BIGLOOP:
                  while (true) {
                    if (clarinet2.DEBUG)
                      console.log(
                        i,
                        c,
                        clarinet2.STATE[parser.state],
                        slashed
                      );
                    while (unicodeI > 0) {
                      parser.unicodeS += String.fromCharCode(c);
                      c = chunk.charCodeAt(i++);
                      parser.position++;
                      if (unicodeI === 4) {
                        parser.textNode += String.fromCharCode(parseInt(parser.unicodeS, 16));
                        unicodeI = 0;
                        starti = i - 1;
                      } else {
                        unicodeI++;
                      }
                      if (!c)
                        break STRING_BIGLOOP;
                    }
                    if (c === Char.doubleQuote && !slashed) {
                      parser.state = parser.stack.pop() || S.VALUE;
                      parser.textNode += chunk.substring(starti, i - 1);
                      parser.position += i - 1 - starti;
                      break;
                    }
                    if (c === Char.backslash && !slashed) {
                      slashed = true;
                      parser.textNode += chunk.substring(starti, i - 1);
                      parser.position += i - 1 - starti;
                      c = chunk.charCodeAt(i++);
                      parser.position++;
                      if (!c)
                        break;
                    }
                    if (slashed) {
                      slashed = false;
                      if (c === Char.n) {
                        parser.textNode += "\n";
                      } else if (c === Char.r) {
                        parser.textNode += "\r";
                      } else if (c === Char.t) {
                        parser.textNode += "	";
                      } else if (c === Char.f) {
                        parser.textNode += "\f";
                      } else if (c === Char.b) {
                        parser.textNode += "\b";
                      } else if (c === Char.u) {
                        unicodeI = 1;
                        parser.unicodeS = "";
                      } else {
                        parser.textNode += String.fromCharCode(c);
                      }
                      c = chunk.charCodeAt(i++);
                      parser.position++;
                      starti = i - 1;
                      if (!c)
                        break;
                      else
                        continue;
                    }
                    stringTokenPattern.lastIndex = i;
                    var reResult = stringTokenPattern.exec(chunk);
                    if (reResult === null) {
                      i = chunk.length + 1;
                      parser.textNode += chunk.substring(starti, i - 1);
                      parser.position += i - 1 - starti;
                      break;
                    }
                    i = reResult.index + 1;
                    c = chunk.charCodeAt(reResult.index);
                    if (!c) {
                      parser.textNode += chunk.substring(starti, i - 1);
                      parser.position += i - 1 - starti;
                      break;
                    }
                  }
                parser.slashed = slashed;
                parser.unicodeI = unicodeI;
                continue;
              case S.TRUE:
                if (c === Char.r)
                  parser.state = S.TRUE2;
                else
                  error(parser, "Invalid true started with t" + c);
                continue;
              case S.TRUE2:
                if (c === Char.u)
                  parser.state = S.TRUE3;
                else
                  error(parser, "Invalid true started with tr" + c);
                continue;
              case S.TRUE3:
                if (c === Char.e) {
                  emit(parser, "onvalue", true);
                  parser.state = parser.stack.pop() || S.VALUE;
                } else
                  error(parser, "Invalid true started with tru" + c);
                continue;
              case S.FALSE:
                if (c === Char.a)
                  parser.state = S.FALSE2;
                else
                  error(parser, "Invalid false started with f" + c);
                continue;
              case S.FALSE2:
                if (c === Char.l)
                  parser.state = S.FALSE3;
                else
                  error(parser, "Invalid false started with fa" + c);
                continue;
              case S.FALSE3:
                if (c === Char.s)
                  parser.state = S.FALSE4;
                else
                  error(parser, "Invalid false started with fal" + c);
                continue;
              case S.FALSE4:
                if (c === Char.e) {
                  emit(parser, "onvalue", false);
                  parser.state = parser.stack.pop() || S.VALUE;
                } else
                  error(parser, "Invalid false started with fals" + c);
                continue;
              case S.NULL:
                if (c === Char.u)
                  parser.state = S.NULL2;
                else
                  error(parser, "Invalid null started with n" + c);
                continue;
              case S.NULL2:
                if (c === Char.l)
                  parser.state = S.NULL3;
                else
                  error(parser, "Invalid null started with nu" + c);
                continue;
              case S.NULL3:
                if (c === Char.l) {
                  emit(parser, "onvalue", null);
                  parser.state = parser.stack.pop() || S.VALUE;
                } else
                  error(parser, "Invalid null started with nul" + c);
                continue;
              case S.NUMBER_DECIMAL_POINT:
                if (c === Char.period) {
                  parser.numberNode += ".";
                  parser.state = S.NUMBER_DIGIT;
                } else
                  error(parser, "Leading zero not followed by .");
                continue;
              case S.NUMBER_DIGIT:
                if (Char._0 <= c && c <= Char._9)
                  parser.numberNode += String.fromCharCode(c);
                else if (c === Char.period) {
                  if (parser.numberNode.indexOf(".") !== -1)
                    error(parser, "Invalid number has two dots");
                  parser.numberNode += ".";
                } else if (c === Char.e || c === Char.E) {
                  if (parser.numberNode.indexOf("e") !== -1 || parser.numberNode.indexOf("E") !== -1)
                    error(parser, "Invalid number has two exponential");
                  parser.numberNode += "e";
                } else if (c === Char.plus || c === Char.minus) {
                  if (!(p === Char.e || p === Char.E))
                    error(parser, "Invalid symbol in number");
                  parser.numberNode += String.fromCharCode(c);
                } else {
                  closeNumber(parser);
                  i--;
                  lockIncrements = true;
                  parser.state = parser.stack.pop() || S.VALUE;
                }
                continue;
              default:
                error(parser, "Unknown state: " + parser.state);
            }
          }
          if (parser.position >= parser.bufferCheckPosition)
            checkBufferLength(parser);
          return parser;
        }
      })(typeof exports === "undefined" ? clarinet = {} : exports);
    }
  });

  // node_modules/json-in-order/dist/tsc/index.js
  var require_tsc = __commonJS({
    "node_modules/json-in-order/dist/tsc/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.stringify = exports.parse = void 0;
      var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
      var clarinet_1 = tslib_1.__importDefault(require_clarinet());
      function parse(input) {
        const gen = processNode();
        let out = void 0;
        let err = void 0;
        function dispatch(obj) {
          try {
            const res = gen.next(obj);
            if (res.done)
              out = res.value;
          } catch (e) {
            err = e;
          }
        }
        const p = clarinet_1.default.parser();
        p.onopenobject = (key) => dispatch({ type: "openobject", key });
        p.onopenarray = () => dispatch({ type: "openarray" });
        p.onkey = (key) => dispatch({ type: "key", key });
        p.onvalue = (value) => dispatch({ type: "value", value });
        p.oncloseobject = () => dispatch({ type: "closeobject" });
        p.onclosearray = () => dispatch({ type: "closearray" });
        p.onerror = (err2) => dispatch({ type: "error", err: err2 });
        gen.next();
        p.write(input).close();
        if (err)
          throw err;
        return out;
      }
      exports.parse = parse;
      function stringify(obj) {
        if (Array.isArray(obj))
          return `[${obj.map(stringify).join(",")}]`;
        if (obj instanceof Map)
          return `{${[...obj].map(([k, v]) => JSON.stringify(k) + ":" + stringify(v)).join(",")}}`;
        return JSON.stringify(obj);
      }
      exports.stringify = stringify;
      var CLOSE_ARRAY = Symbol();
      function* processNode() {
        const evt = yield;
        switch (evt.type) {
          case "value":
            return evt.value;
          case "openobject":
            const obj = /* @__PURE__ */ new Map();
            let key = evt.key;
            if (key === void 0)
              yield;
            while (key !== void 0) {
              obj.set(key, yield* processNode());
              key = (yield).key;
            }
            return obj;
          case "openarray":
            const arr = [];
            let el;
            while (true) {
              el = yield* processNode();
              if (el === CLOSE_ARRAY)
                return arr;
              arr.push(el);
            }
          case "closearray":
            return CLOSE_ARRAY;
          case "error":
            throw evt.err;
          default:
            throw Error(`Unexpected ParseEvent ${evt.type}`);
        }
      }
    }
  });

  // node_modules/dompurify/dist/purify.js
  var require_purify = __commonJS({
    "node_modules/dompurify/dist/purify.js"(exports, module) {
      (function(global, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, global.DOMPurify = factory());
      })(exports, function() {
        "use strict";
        const {
          entries,
          setPrototypeOf,
          isFrozen,
          getPrototypeOf,
          getOwnPropertyDescriptor
        } = Object;
        let {
          freeze,
          seal,
          create
        } = Object;
        let {
          apply,
          construct
        } = typeof Reflect !== "undefined" && Reflect;
        if (!freeze) {
          freeze = function freeze2(x) {
            return x;
          };
        }
        if (!seal) {
          seal = function seal2(x) {
            return x;
          };
        }
        if (!apply) {
          apply = function apply2(fun, thisValue, args) {
            return fun.apply(thisValue, args);
          };
        }
        if (!construct) {
          construct = function construct2(Func, args) {
            return new Func(...args);
          };
        }
        const arrayForEach = unapply(Array.prototype.forEach);
        const arrayPop = unapply(Array.prototype.pop);
        const arrayPush = unapply(Array.prototype.push);
        const stringToLowerCase = unapply(String.prototype.toLowerCase);
        const stringToString = unapply(String.prototype.toString);
        const stringMatch = unapply(String.prototype.match);
        const stringReplace = unapply(String.prototype.replace);
        const stringIndexOf = unapply(String.prototype.indexOf);
        const stringTrim = unapply(String.prototype.trim);
        const objectHasOwnProperty = unapply(Object.prototype.hasOwnProperty);
        const regExpTest = unapply(RegExp.prototype.test);
        const typeErrorCreate = unconstruct(TypeError);
        function unapply(func) {
          return function(thisArg) {
            for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              args[_key - 1] = arguments[_key];
            }
            return apply(func, thisArg, args);
          };
        }
        function unconstruct(func) {
          return function() {
            for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              args[_key2] = arguments[_key2];
            }
            return construct(func, args);
          };
        }
        function addToSet(set, array) {
          let transformCaseFunc = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : stringToLowerCase;
          if (setPrototypeOf) {
            setPrototypeOf(set, null);
          }
          let l = array.length;
          while (l--) {
            let element = array[l];
            if (typeof element === "string") {
              const lcElement = transformCaseFunc(element);
              if (lcElement !== element) {
                if (!isFrozen(array)) {
                  array[l] = lcElement;
                }
                element = lcElement;
              }
            }
            set[element] = true;
          }
          return set;
        }
        function cleanArray(array) {
          for (let index = 0; index < array.length; index++) {
            const isPropertyExist = objectHasOwnProperty(array, index);
            if (!isPropertyExist) {
              array[index] = null;
            }
          }
          return array;
        }
        function clone(object) {
          const newObject = create(null);
          for (const [property, value] of entries(object)) {
            const isPropertyExist = objectHasOwnProperty(object, property);
            if (isPropertyExist) {
              if (Array.isArray(value)) {
                newObject[property] = cleanArray(value);
              } else if (value && typeof value === "object" && value.constructor === Object) {
                newObject[property] = clone(value);
              } else {
                newObject[property] = value;
              }
            }
          }
          return newObject;
        }
        function lookupGetter(object, prop) {
          while (object !== null) {
            const desc = getOwnPropertyDescriptor(object, prop);
            if (desc) {
              if (desc.get) {
                return unapply(desc.get);
              }
              if (typeof desc.value === "function") {
                return unapply(desc.value);
              }
            }
            object = getPrototypeOf(object);
          }
          function fallbackValue() {
            return null;
          }
          return fallbackValue;
        }
        const html$1 = freeze(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]);
        const svg$1 = freeze(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]);
        const svgFilters = freeze(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]);
        const svgDisallowed = freeze(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]);
        const mathMl$1 = freeze(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]);
        const mathMlDisallowed = freeze(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]);
        const text = freeze(["#text"]);
        const html = freeze(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]);
        const svg = freeze(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]);
        const mathMl = freeze(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]);
        const xml = freeze(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]);
        const MUSTACHE_EXPR = seal(/\{\{[\w\W]*|[\w\W]*\}\}/gm);
        const ERB_EXPR = seal(/<%[\w\W]*|[\w\W]*%>/gm);
        const TMPLIT_EXPR = seal(/\${[\w\W]*}/gm);
        const DATA_ATTR = seal(/^data-[\-\w.\u00B7-\uFFFF]/);
        const ARIA_ATTR = seal(/^aria-[\-\w]+$/);
        const IS_ALLOWED_URI = seal(
          /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
          // eslint-disable-line no-useless-escape
        );
        const IS_SCRIPT_OR_DATA = seal(/^(?:\w+script|data):/i);
        const ATTR_WHITESPACE = seal(
          /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
          // eslint-disable-line no-control-regex
        );
        const DOCTYPE_NAME = seal(/^html$/i);
        const CUSTOM_ELEMENT = seal(/^[a-z][.\w]*(-[.\w]+)+$/i);
        var EXPRESSIONS = /* @__PURE__ */ Object.freeze({
          __proto__: null,
          MUSTACHE_EXPR,
          ERB_EXPR,
          TMPLIT_EXPR,
          DATA_ATTR,
          ARIA_ATTR,
          IS_ALLOWED_URI,
          IS_SCRIPT_OR_DATA,
          ATTR_WHITESPACE,
          DOCTYPE_NAME,
          CUSTOM_ELEMENT
        });
        const getGlobal = function getGlobal2() {
          return typeof window === "undefined" ? null : window;
        };
        const _createTrustedTypesPolicy = function _createTrustedTypesPolicy2(trustedTypes, purifyHostElement) {
          if (typeof trustedTypes !== "object" || typeof trustedTypes.createPolicy !== "function") {
            return null;
          }
          let suffix = null;
          const ATTR_NAME = "data-tt-policy-suffix";
          if (purifyHostElement && purifyHostElement.hasAttribute(ATTR_NAME)) {
            suffix = purifyHostElement.getAttribute(ATTR_NAME);
          }
          const policyName = "dompurify" + (suffix ? "#" + suffix : "");
          try {
            return trustedTypes.createPolicy(policyName, {
              createHTML(html2) {
                return html2;
              },
              createScriptURL(scriptUrl) {
                return scriptUrl;
              }
            });
          } catch (_) {
            console.warn("TrustedTypes policy " + policyName + " could not be created.");
            return null;
          }
        };
        function createDOMPurify() {
          let window2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : getGlobal();
          const DOMPurify = (root) => createDOMPurify(root);
          DOMPurify.version = "3.0.11";
          DOMPurify.removed = [];
          if (!window2 || !window2.document || window2.document.nodeType !== 9) {
            DOMPurify.isSupported = false;
            return DOMPurify;
          }
          let {
            document: document2
          } = window2;
          const originalDocument = document2;
          const currentScript = originalDocument.currentScript;
          const {
            DocumentFragment,
            HTMLTemplateElement,
            Node,
            Element,
            NodeFilter,
            NamedNodeMap = window2.NamedNodeMap || window2.MozNamedAttrMap,
            HTMLFormElement,
            DOMParser,
            trustedTypes
          } = window2;
          const ElementPrototype = Element.prototype;
          const cloneNode = lookupGetter(ElementPrototype, "cloneNode");
          const getNextSibling = lookupGetter(ElementPrototype, "nextSibling");
          const getChildNodes = lookupGetter(ElementPrototype, "childNodes");
          const getParentNode = lookupGetter(ElementPrototype, "parentNode");
          if (typeof HTMLTemplateElement === "function") {
            const template = document2.createElement("template");
            if (template.content && template.content.ownerDocument) {
              document2 = template.content.ownerDocument;
            }
          }
          let trustedTypesPolicy;
          let emptyHTML = "";
          const {
            implementation,
            createNodeIterator,
            createDocumentFragment,
            getElementsByTagName
          } = document2;
          const {
            importNode
          } = originalDocument;
          let hooks = {};
          DOMPurify.isSupported = typeof entries === "function" && typeof getParentNode === "function" && implementation && implementation.createHTMLDocument !== void 0;
          const {
            MUSTACHE_EXPR: MUSTACHE_EXPR2,
            ERB_EXPR: ERB_EXPR2,
            TMPLIT_EXPR: TMPLIT_EXPR2,
            DATA_ATTR: DATA_ATTR2,
            ARIA_ATTR: ARIA_ATTR2,
            IS_SCRIPT_OR_DATA: IS_SCRIPT_OR_DATA2,
            ATTR_WHITESPACE: ATTR_WHITESPACE2,
            CUSTOM_ELEMENT: CUSTOM_ELEMENT2
          } = EXPRESSIONS;
          let {
            IS_ALLOWED_URI: IS_ALLOWED_URI$1
          } = EXPRESSIONS;
          let ALLOWED_TAGS = null;
          const DEFAULT_ALLOWED_TAGS = addToSet({}, [...html$1, ...svg$1, ...svgFilters, ...mathMl$1, ...text]);
          let ALLOWED_ATTR = null;
          const DEFAULT_ALLOWED_ATTR = addToSet({}, [...html, ...svg, ...mathMl, ...xml]);
          let CUSTOM_ELEMENT_HANDLING = Object.seal(create(null, {
            tagNameCheck: {
              writable: true,
              configurable: false,
              enumerable: true,
              value: null
            },
            attributeNameCheck: {
              writable: true,
              configurable: false,
              enumerable: true,
              value: null
            },
            allowCustomizedBuiltInElements: {
              writable: true,
              configurable: false,
              enumerable: true,
              value: false
            }
          }));
          let FORBID_TAGS = null;
          let FORBID_ATTR = null;
          let ALLOW_ARIA_ATTR = true;
          let ALLOW_DATA_ATTR = true;
          let ALLOW_UNKNOWN_PROTOCOLS = false;
          let ALLOW_SELF_CLOSE_IN_ATTR = true;
          let SAFE_FOR_TEMPLATES = false;
          let WHOLE_DOCUMENT = false;
          let SET_CONFIG = false;
          let FORCE_BODY = false;
          let RETURN_DOM = false;
          let RETURN_DOM_FRAGMENT = false;
          let RETURN_TRUSTED_TYPE = false;
          let SANITIZE_DOM = true;
          let SANITIZE_NAMED_PROPS = false;
          const SANITIZE_NAMED_PROPS_PREFIX = "user-content-";
          let KEEP_CONTENT = true;
          let IN_PLACE = false;
          let USE_PROFILES = {};
          let FORBID_CONTENTS = null;
          const DEFAULT_FORBID_CONTENTS = addToSet({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
          let DATA_URI_TAGS = null;
          const DEFAULT_DATA_URI_TAGS = addToSet({}, ["audio", "video", "img", "source", "image", "track"]);
          let URI_SAFE_ATTRIBUTES = null;
          const DEFAULT_URI_SAFE_ATTRIBUTES = addToSet({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]);
          const MATHML_NAMESPACE = "http://www.w3.org/1998/Math/MathML";
          const SVG_NAMESPACE = "http://www.w3.org/2000/svg";
          const HTML_NAMESPACE = "http://www.w3.org/1999/xhtml";
          let NAMESPACE = HTML_NAMESPACE;
          let IS_EMPTY_INPUT = false;
          let ALLOWED_NAMESPACES = null;
          const DEFAULT_ALLOWED_NAMESPACES = addToSet({}, [MATHML_NAMESPACE, SVG_NAMESPACE, HTML_NAMESPACE], stringToString);
          let PARSER_MEDIA_TYPE = null;
          const SUPPORTED_PARSER_MEDIA_TYPES = ["application/xhtml+xml", "text/html"];
          const DEFAULT_PARSER_MEDIA_TYPE = "text/html";
          let transformCaseFunc = null;
          let CONFIG = null;
          const formElement = document2.createElement("form");
          const isRegexOrFunction = function isRegexOrFunction2(testValue) {
            return testValue instanceof RegExp || testValue instanceof Function;
          };
          const _parseConfig = function _parseConfig2() {
            let cfg = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            if (CONFIG && CONFIG === cfg) {
              return;
            }
            if (!cfg || typeof cfg !== "object") {
              cfg = {};
            }
            cfg = clone(cfg);
            PARSER_MEDIA_TYPE = // eslint-disable-next-line unicorn/prefer-includes
            SUPPORTED_PARSER_MEDIA_TYPES.indexOf(cfg.PARSER_MEDIA_TYPE) === -1 ? DEFAULT_PARSER_MEDIA_TYPE : cfg.PARSER_MEDIA_TYPE;
            transformCaseFunc = PARSER_MEDIA_TYPE === "application/xhtml+xml" ? stringToString : stringToLowerCase;
            ALLOWED_TAGS = objectHasOwnProperty(cfg, "ALLOWED_TAGS") ? addToSet({}, cfg.ALLOWED_TAGS, transformCaseFunc) : DEFAULT_ALLOWED_TAGS;
            ALLOWED_ATTR = objectHasOwnProperty(cfg, "ALLOWED_ATTR") ? addToSet({}, cfg.ALLOWED_ATTR, transformCaseFunc) : DEFAULT_ALLOWED_ATTR;
            ALLOWED_NAMESPACES = objectHasOwnProperty(cfg, "ALLOWED_NAMESPACES") ? addToSet({}, cfg.ALLOWED_NAMESPACES, stringToString) : DEFAULT_ALLOWED_NAMESPACES;
            URI_SAFE_ATTRIBUTES = objectHasOwnProperty(cfg, "ADD_URI_SAFE_ATTR") ? addToSet(
              clone(DEFAULT_URI_SAFE_ATTRIBUTES),
              // eslint-disable-line indent
              cfg.ADD_URI_SAFE_ATTR,
              // eslint-disable-line indent
              transformCaseFunc
              // eslint-disable-line indent
            ) : DEFAULT_URI_SAFE_ATTRIBUTES;
            DATA_URI_TAGS = objectHasOwnProperty(cfg, "ADD_DATA_URI_TAGS") ? addToSet(
              clone(DEFAULT_DATA_URI_TAGS),
              // eslint-disable-line indent
              cfg.ADD_DATA_URI_TAGS,
              // eslint-disable-line indent
              transformCaseFunc
              // eslint-disable-line indent
            ) : DEFAULT_DATA_URI_TAGS;
            FORBID_CONTENTS = objectHasOwnProperty(cfg, "FORBID_CONTENTS") ? addToSet({}, cfg.FORBID_CONTENTS, transformCaseFunc) : DEFAULT_FORBID_CONTENTS;
            FORBID_TAGS = objectHasOwnProperty(cfg, "FORBID_TAGS") ? addToSet({}, cfg.FORBID_TAGS, transformCaseFunc) : {};
            FORBID_ATTR = objectHasOwnProperty(cfg, "FORBID_ATTR") ? addToSet({}, cfg.FORBID_ATTR, transformCaseFunc) : {};
            USE_PROFILES = objectHasOwnProperty(cfg, "USE_PROFILES") ? cfg.USE_PROFILES : false;
            ALLOW_ARIA_ATTR = cfg.ALLOW_ARIA_ATTR !== false;
            ALLOW_DATA_ATTR = cfg.ALLOW_DATA_ATTR !== false;
            ALLOW_UNKNOWN_PROTOCOLS = cfg.ALLOW_UNKNOWN_PROTOCOLS || false;
            ALLOW_SELF_CLOSE_IN_ATTR = cfg.ALLOW_SELF_CLOSE_IN_ATTR !== false;
            SAFE_FOR_TEMPLATES = cfg.SAFE_FOR_TEMPLATES || false;
            WHOLE_DOCUMENT = cfg.WHOLE_DOCUMENT || false;
            RETURN_DOM = cfg.RETURN_DOM || false;
            RETURN_DOM_FRAGMENT = cfg.RETURN_DOM_FRAGMENT || false;
            RETURN_TRUSTED_TYPE = cfg.RETURN_TRUSTED_TYPE || false;
            FORCE_BODY = cfg.FORCE_BODY || false;
            SANITIZE_DOM = cfg.SANITIZE_DOM !== false;
            SANITIZE_NAMED_PROPS = cfg.SANITIZE_NAMED_PROPS || false;
            KEEP_CONTENT = cfg.KEEP_CONTENT !== false;
            IN_PLACE = cfg.IN_PLACE || false;
            IS_ALLOWED_URI$1 = cfg.ALLOWED_URI_REGEXP || IS_ALLOWED_URI;
            NAMESPACE = cfg.NAMESPACE || HTML_NAMESPACE;
            CUSTOM_ELEMENT_HANDLING = cfg.CUSTOM_ELEMENT_HANDLING || {};
            if (cfg.CUSTOM_ELEMENT_HANDLING && isRegexOrFunction(cfg.CUSTOM_ELEMENT_HANDLING.tagNameCheck)) {
              CUSTOM_ELEMENT_HANDLING.tagNameCheck = cfg.CUSTOM_ELEMENT_HANDLING.tagNameCheck;
            }
            if (cfg.CUSTOM_ELEMENT_HANDLING && isRegexOrFunction(cfg.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)) {
              CUSTOM_ELEMENT_HANDLING.attributeNameCheck = cfg.CUSTOM_ELEMENT_HANDLING.attributeNameCheck;
            }
            if (cfg.CUSTOM_ELEMENT_HANDLING && typeof cfg.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements === "boolean") {
              CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements = cfg.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements;
            }
            if (SAFE_FOR_TEMPLATES) {
              ALLOW_DATA_ATTR = false;
            }
            if (RETURN_DOM_FRAGMENT) {
              RETURN_DOM = true;
            }
            if (USE_PROFILES) {
              ALLOWED_TAGS = addToSet({}, text);
              ALLOWED_ATTR = [];
              if (USE_PROFILES.html === true) {
                addToSet(ALLOWED_TAGS, html$1);
                addToSet(ALLOWED_ATTR, html);
              }
              if (USE_PROFILES.svg === true) {
                addToSet(ALLOWED_TAGS, svg$1);
                addToSet(ALLOWED_ATTR, svg);
                addToSet(ALLOWED_ATTR, xml);
              }
              if (USE_PROFILES.svgFilters === true) {
                addToSet(ALLOWED_TAGS, svgFilters);
                addToSet(ALLOWED_ATTR, svg);
                addToSet(ALLOWED_ATTR, xml);
              }
              if (USE_PROFILES.mathMl === true) {
                addToSet(ALLOWED_TAGS, mathMl$1);
                addToSet(ALLOWED_ATTR, mathMl);
                addToSet(ALLOWED_ATTR, xml);
              }
            }
            if (cfg.ADD_TAGS) {
              if (ALLOWED_TAGS === DEFAULT_ALLOWED_TAGS) {
                ALLOWED_TAGS = clone(ALLOWED_TAGS);
              }
              addToSet(ALLOWED_TAGS, cfg.ADD_TAGS, transformCaseFunc);
            }
            if (cfg.ADD_ATTR) {
              if (ALLOWED_ATTR === DEFAULT_ALLOWED_ATTR) {
                ALLOWED_ATTR = clone(ALLOWED_ATTR);
              }
              addToSet(ALLOWED_ATTR, cfg.ADD_ATTR, transformCaseFunc);
            }
            if (cfg.ADD_URI_SAFE_ATTR) {
              addToSet(URI_SAFE_ATTRIBUTES, cfg.ADD_URI_SAFE_ATTR, transformCaseFunc);
            }
            if (cfg.FORBID_CONTENTS) {
              if (FORBID_CONTENTS === DEFAULT_FORBID_CONTENTS) {
                FORBID_CONTENTS = clone(FORBID_CONTENTS);
              }
              addToSet(FORBID_CONTENTS, cfg.FORBID_CONTENTS, transformCaseFunc);
            }
            if (KEEP_CONTENT) {
              ALLOWED_TAGS["#text"] = true;
            }
            if (WHOLE_DOCUMENT) {
              addToSet(ALLOWED_TAGS, ["html", "head", "body"]);
            }
            if (ALLOWED_TAGS.table) {
              addToSet(ALLOWED_TAGS, ["tbody"]);
              delete FORBID_TAGS.tbody;
            }
            if (cfg.TRUSTED_TYPES_POLICY) {
              if (typeof cfg.TRUSTED_TYPES_POLICY.createHTML !== "function") {
                throw typeErrorCreate('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
              }
              if (typeof cfg.TRUSTED_TYPES_POLICY.createScriptURL !== "function") {
                throw typeErrorCreate('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
              }
              trustedTypesPolicy = cfg.TRUSTED_TYPES_POLICY;
              emptyHTML = trustedTypesPolicy.createHTML("");
            } else {
              if (trustedTypesPolicy === void 0) {
                trustedTypesPolicy = _createTrustedTypesPolicy(trustedTypes, currentScript);
              }
              if (trustedTypesPolicy !== null && typeof emptyHTML === "string") {
                emptyHTML = trustedTypesPolicy.createHTML("");
              }
            }
            if (freeze) {
              freeze(cfg);
            }
            CONFIG = cfg;
          };
          const MATHML_TEXT_INTEGRATION_POINTS = addToSet({}, ["mi", "mo", "mn", "ms", "mtext"]);
          const HTML_INTEGRATION_POINTS = addToSet({}, ["foreignobject", "desc", "title", "annotation-xml"]);
          const COMMON_SVG_AND_HTML_ELEMENTS = addToSet({}, ["title", "style", "font", "a", "script"]);
          const ALL_SVG_TAGS = addToSet({}, [...svg$1, ...svgFilters, ...svgDisallowed]);
          const ALL_MATHML_TAGS = addToSet({}, [...mathMl$1, ...mathMlDisallowed]);
          const _checkValidNamespace = function _checkValidNamespace2(element) {
            let parent = getParentNode(element);
            if (!parent || !parent.tagName) {
              parent = {
                namespaceURI: NAMESPACE,
                tagName: "template"
              };
            }
            const tagName = stringToLowerCase(element.tagName);
            const parentTagName = stringToLowerCase(parent.tagName);
            if (!ALLOWED_NAMESPACES[element.namespaceURI]) {
              return false;
            }
            if (element.namespaceURI === SVG_NAMESPACE) {
              if (parent.namespaceURI === HTML_NAMESPACE) {
                return tagName === "svg";
              }
              if (parent.namespaceURI === MATHML_NAMESPACE) {
                return tagName === "svg" && (parentTagName === "annotation-xml" || MATHML_TEXT_INTEGRATION_POINTS[parentTagName]);
              }
              return Boolean(ALL_SVG_TAGS[tagName]);
            }
            if (element.namespaceURI === MATHML_NAMESPACE) {
              if (parent.namespaceURI === HTML_NAMESPACE) {
                return tagName === "math";
              }
              if (parent.namespaceURI === SVG_NAMESPACE) {
                return tagName === "math" && HTML_INTEGRATION_POINTS[parentTagName];
              }
              return Boolean(ALL_MATHML_TAGS[tagName]);
            }
            if (element.namespaceURI === HTML_NAMESPACE) {
              if (parent.namespaceURI === SVG_NAMESPACE && !HTML_INTEGRATION_POINTS[parentTagName]) {
                return false;
              }
              if (parent.namespaceURI === MATHML_NAMESPACE && !MATHML_TEXT_INTEGRATION_POINTS[parentTagName]) {
                return false;
              }
              return !ALL_MATHML_TAGS[tagName] && (COMMON_SVG_AND_HTML_ELEMENTS[tagName] || !ALL_SVG_TAGS[tagName]);
            }
            if (PARSER_MEDIA_TYPE === "application/xhtml+xml" && ALLOWED_NAMESPACES[element.namespaceURI]) {
              return true;
            }
            return false;
          };
          const _forceRemove = function _forceRemove2(node) {
            arrayPush(DOMPurify.removed, {
              element: node
            });
            try {
              node.parentNode.removeChild(node);
            } catch (_) {
              node.remove();
            }
          };
          const _removeAttribute = function _removeAttribute2(name, node) {
            try {
              arrayPush(DOMPurify.removed, {
                attribute: node.getAttributeNode(name),
                from: node
              });
            } catch (_) {
              arrayPush(DOMPurify.removed, {
                attribute: null,
                from: node
              });
            }
            node.removeAttribute(name);
            if (name === "is" && !ALLOWED_ATTR[name]) {
              if (RETURN_DOM || RETURN_DOM_FRAGMENT) {
                try {
                  _forceRemove(node);
                } catch (_) {
                }
              } else {
                try {
                  node.setAttribute(name, "");
                } catch (_) {
                }
              }
            }
          };
          const _initDocument = function _initDocument2(dirty) {
            let doc = null;
            let leadingWhitespace = null;
            if (FORCE_BODY) {
              dirty = "<remove></remove>" + dirty;
            } else {
              const matches = stringMatch(dirty, /^[\r\n\t ]+/);
              leadingWhitespace = matches && matches[0];
            }
            if (PARSER_MEDIA_TYPE === "application/xhtml+xml" && NAMESPACE === HTML_NAMESPACE) {
              dirty = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + dirty + "</body></html>";
            }
            const dirtyPayload = trustedTypesPolicy ? trustedTypesPolicy.createHTML(dirty) : dirty;
            if (NAMESPACE === HTML_NAMESPACE) {
              try {
                doc = new DOMParser().parseFromString(dirtyPayload, PARSER_MEDIA_TYPE);
              } catch (_) {
              }
            }
            if (!doc || !doc.documentElement) {
              doc = implementation.createDocument(NAMESPACE, "template", null);
              try {
                doc.documentElement.innerHTML = IS_EMPTY_INPUT ? emptyHTML : dirtyPayload;
              } catch (_) {
              }
            }
            const body = doc.body || doc.documentElement;
            if (dirty && leadingWhitespace) {
              body.insertBefore(document2.createTextNode(leadingWhitespace), body.childNodes[0] || null);
            }
            if (NAMESPACE === HTML_NAMESPACE) {
              return getElementsByTagName.call(doc, WHOLE_DOCUMENT ? "html" : "body")[0];
            }
            return WHOLE_DOCUMENT ? doc.documentElement : body;
          };
          const _createNodeIterator = function _createNodeIterator2(root) {
            return createNodeIterator.call(
              root.ownerDocument || root,
              root,
              // eslint-disable-next-line no-bitwise
              NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT | NodeFilter.SHOW_TEXT | NodeFilter.SHOW_PROCESSING_INSTRUCTION | NodeFilter.SHOW_CDATA_SECTION,
              null
            );
          };
          const _isClobbered = function _isClobbered2(elm) {
            return elm instanceof HTMLFormElement && (typeof elm.nodeName !== "string" || typeof elm.textContent !== "string" || typeof elm.removeChild !== "function" || !(elm.attributes instanceof NamedNodeMap) || typeof elm.removeAttribute !== "function" || typeof elm.setAttribute !== "function" || typeof elm.namespaceURI !== "string" || typeof elm.insertBefore !== "function" || typeof elm.hasChildNodes !== "function");
          };
          const _isNode = function _isNode2(object) {
            return typeof Node === "function" && object instanceof Node;
          };
          const _executeHook = function _executeHook2(entryPoint, currentNode, data) {
            if (!hooks[entryPoint]) {
              return;
            }
            arrayForEach(hooks[entryPoint], (hook) => {
              hook.call(DOMPurify, currentNode, data, CONFIG);
            });
          };
          const _sanitizeElements = function _sanitizeElements2(currentNode) {
            let content = null;
            _executeHook("beforeSanitizeElements", currentNode, null);
            if (_isClobbered(currentNode)) {
              _forceRemove(currentNode);
              return true;
            }
            const tagName = transformCaseFunc(currentNode.nodeName);
            _executeHook("uponSanitizeElement", currentNode, {
              tagName,
              allowedTags: ALLOWED_TAGS
            });
            if (currentNode.hasChildNodes() && !_isNode(currentNode.firstElementChild) && regExpTest(/<[/\w]/g, currentNode.innerHTML) && regExpTest(/<[/\w]/g, currentNode.textContent)) {
              _forceRemove(currentNode);
              return true;
            }
            if (currentNode.nodeType === 7) {
              _forceRemove(currentNode);
              return true;
            }
            if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) {
              if (!FORBID_TAGS[tagName] && _isBasicCustomElement(tagName)) {
                if (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, tagName)) {
                  return false;
                }
                if (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(tagName)) {
                  return false;
                }
              }
              if (KEEP_CONTENT && !FORBID_CONTENTS[tagName]) {
                const parentNode = getParentNode(currentNode) || currentNode.parentNode;
                const childNodes = getChildNodes(currentNode) || currentNode.childNodes;
                if (childNodes && parentNode) {
                  const childCount = childNodes.length;
                  for (let i = childCount - 1; i >= 0; --i) {
                    parentNode.insertBefore(cloneNode(childNodes[i], true), getNextSibling(currentNode));
                  }
                }
              }
              _forceRemove(currentNode);
              return true;
            }
            if (currentNode instanceof Element && !_checkValidNamespace(currentNode)) {
              _forceRemove(currentNode);
              return true;
            }
            if ((tagName === "noscript" || tagName === "noembed" || tagName === "noframes") && regExpTest(/<\/no(script|embed|frames)/i, currentNode.innerHTML)) {
              _forceRemove(currentNode);
              return true;
            }
            if (SAFE_FOR_TEMPLATES && currentNode.nodeType === 3) {
              content = currentNode.textContent;
              arrayForEach([MUSTACHE_EXPR2, ERB_EXPR2, TMPLIT_EXPR2], (expr) => {
                content = stringReplace(content, expr, " ");
              });
              if (currentNode.textContent !== content) {
                arrayPush(DOMPurify.removed, {
                  element: currentNode.cloneNode()
                });
                currentNode.textContent = content;
              }
            }
            _executeHook("afterSanitizeElements", currentNode, null);
            return false;
          };
          const _isValidAttribute = function _isValidAttribute2(lcTag, lcName, value) {
            if (SANITIZE_DOM && (lcName === "id" || lcName === "name") && (value in document2 || value in formElement)) {
              return false;
            }
            if (ALLOW_DATA_ATTR && !FORBID_ATTR[lcName] && regExpTest(DATA_ATTR2, lcName))
              ;
            else if (ALLOW_ARIA_ATTR && regExpTest(ARIA_ATTR2, lcName))
              ;
            else if (!ALLOWED_ATTR[lcName] || FORBID_ATTR[lcName]) {
              if (
                // First condition does a very basic check if a) it's basically a valid custom element tagname AND
                // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
                // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
                _isBasicCustomElement(lcTag) && (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, lcTag) || CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(lcTag)) && (CUSTOM_ELEMENT_HANDLING.attributeNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.attributeNameCheck, lcName) || CUSTOM_ELEMENT_HANDLING.attributeNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.attributeNameCheck(lcName)) || // Alternative, second condition checks if it's an `is`-attribute, AND
                // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
                lcName === "is" && CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements && (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, value) || CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(value))
              )
                ;
              else {
                return false;
              }
            } else if (URI_SAFE_ATTRIBUTES[lcName])
              ;
            else if (regExpTest(IS_ALLOWED_URI$1, stringReplace(value, ATTR_WHITESPACE2, "")))
              ;
            else if ((lcName === "src" || lcName === "xlink:href" || lcName === "href") && lcTag !== "script" && stringIndexOf(value, "data:") === 0 && DATA_URI_TAGS[lcTag])
              ;
            else if (ALLOW_UNKNOWN_PROTOCOLS && !regExpTest(IS_SCRIPT_OR_DATA2, stringReplace(value, ATTR_WHITESPACE2, "")))
              ;
            else if (value) {
              return false;
            } else
              ;
            return true;
          };
          const _isBasicCustomElement = function _isBasicCustomElement2(tagName) {
            return tagName !== "annotation-xml" && stringMatch(tagName, CUSTOM_ELEMENT2);
          };
          const _sanitizeAttributes = function _sanitizeAttributes2(currentNode) {
            _executeHook("beforeSanitizeAttributes", currentNode, null);
            const {
              attributes
            } = currentNode;
            if (!attributes) {
              return;
            }
            const hookEvent = {
              attrName: "",
              attrValue: "",
              keepAttr: true,
              allowedAttributes: ALLOWED_ATTR
            };
            let l = attributes.length;
            while (l--) {
              const attr = attributes[l];
              const {
                name,
                namespaceURI,
                value: attrValue
              } = attr;
              const lcName = transformCaseFunc(name);
              let value = name === "value" ? attrValue : stringTrim(attrValue);
              hookEvent.attrName = lcName;
              hookEvent.attrValue = value;
              hookEvent.keepAttr = true;
              hookEvent.forceKeepAttr = void 0;
              _executeHook("uponSanitizeAttribute", currentNode, hookEvent);
              value = hookEvent.attrValue;
              if (hookEvent.forceKeepAttr) {
                continue;
              }
              _removeAttribute(name, currentNode);
              if (!hookEvent.keepAttr) {
                continue;
              }
              if (!ALLOW_SELF_CLOSE_IN_ATTR && regExpTest(/\/>/i, value)) {
                _removeAttribute(name, currentNode);
                continue;
              }
              if (SAFE_FOR_TEMPLATES) {
                arrayForEach([MUSTACHE_EXPR2, ERB_EXPR2, TMPLIT_EXPR2], (expr) => {
                  value = stringReplace(value, expr, " ");
                });
              }
              const lcTag = transformCaseFunc(currentNode.nodeName);
              if (!_isValidAttribute(lcTag, lcName, value)) {
                continue;
              }
              if (SANITIZE_NAMED_PROPS && (lcName === "id" || lcName === "name")) {
                _removeAttribute(name, currentNode);
                value = SANITIZE_NAMED_PROPS_PREFIX + value;
              }
              if (trustedTypesPolicy && typeof trustedTypes === "object" && typeof trustedTypes.getAttributeType === "function") {
                if (namespaceURI)
                  ;
                else {
                  switch (trustedTypes.getAttributeType(lcTag, lcName)) {
                    case "TrustedHTML": {
                      value = trustedTypesPolicy.createHTML(value);
                      break;
                    }
                    case "TrustedScriptURL": {
                      value = trustedTypesPolicy.createScriptURL(value);
                      break;
                    }
                  }
                }
              }
              try {
                if (namespaceURI) {
                  currentNode.setAttributeNS(namespaceURI, name, value);
                } else {
                  currentNode.setAttribute(name, value);
                }
                arrayPop(DOMPurify.removed);
              } catch (_) {
              }
            }
            _executeHook("afterSanitizeAttributes", currentNode, null);
          };
          const _sanitizeShadowDOM = function _sanitizeShadowDOM2(fragment) {
            let shadowNode = null;
            const shadowIterator = _createNodeIterator(fragment);
            _executeHook("beforeSanitizeShadowDOM", fragment, null);
            while (shadowNode = shadowIterator.nextNode()) {
              _executeHook("uponSanitizeShadowNode", shadowNode, null);
              if (_sanitizeElements(shadowNode)) {
                continue;
              }
              if (shadowNode.content instanceof DocumentFragment) {
                _sanitizeShadowDOM2(shadowNode.content);
              }
              _sanitizeAttributes(shadowNode);
            }
            _executeHook("afterSanitizeShadowDOM", fragment, null);
          };
          DOMPurify.sanitize = function(dirty) {
            let cfg = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            let body = null;
            let importedNode = null;
            let currentNode = null;
            let returnNode = null;
            IS_EMPTY_INPUT = !dirty;
            if (IS_EMPTY_INPUT) {
              dirty = "<!-->";
            }
            if (typeof dirty !== "string" && !_isNode(dirty)) {
              if (typeof dirty.toString === "function") {
                dirty = dirty.toString();
                if (typeof dirty !== "string") {
                  throw typeErrorCreate("dirty is not a string, aborting");
                }
              } else {
                throw typeErrorCreate("toString is not a function");
              }
            }
            if (!DOMPurify.isSupported) {
              return dirty;
            }
            if (!SET_CONFIG) {
              _parseConfig(cfg);
            }
            DOMPurify.removed = [];
            if (typeof dirty === "string") {
              IN_PLACE = false;
            }
            if (IN_PLACE) {
              if (dirty.nodeName) {
                const tagName = transformCaseFunc(dirty.nodeName);
                if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) {
                  throw typeErrorCreate("root node is forbidden and cannot be sanitized in-place");
                }
              }
            } else if (dirty instanceof Node) {
              body = _initDocument("<!---->");
              importedNode = body.ownerDocument.importNode(dirty, true);
              if (importedNode.nodeType === 1 && importedNode.nodeName === "BODY") {
                body = importedNode;
              } else if (importedNode.nodeName === "HTML") {
                body = importedNode;
              } else {
                body.appendChild(importedNode);
              }
            } else {
              if (!RETURN_DOM && !SAFE_FOR_TEMPLATES && !WHOLE_DOCUMENT && // eslint-disable-next-line unicorn/prefer-includes
              dirty.indexOf("<") === -1) {
                return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(dirty) : dirty;
              }
              body = _initDocument(dirty);
              if (!body) {
                return RETURN_DOM ? null : RETURN_TRUSTED_TYPE ? emptyHTML : "";
              }
            }
            if (body && FORCE_BODY) {
              _forceRemove(body.firstChild);
            }
            const nodeIterator = _createNodeIterator(IN_PLACE ? dirty : body);
            while (currentNode = nodeIterator.nextNode()) {
              if (_sanitizeElements(currentNode)) {
                continue;
              }
              if (currentNode.content instanceof DocumentFragment) {
                _sanitizeShadowDOM(currentNode.content);
              }
              _sanitizeAttributes(currentNode);
            }
            if (IN_PLACE) {
              return dirty;
            }
            if (RETURN_DOM) {
              if (RETURN_DOM_FRAGMENT) {
                returnNode = createDocumentFragment.call(body.ownerDocument);
                while (body.firstChild) {
                  returnNode.appendChild(body.firstChild);
                }
              } else {
                returnNode = body;
              }
              if (ALLOWED_ATTR.shadowroot || ALLOWED_ATTR.shadowrootmode) {
                returnNode = importNode.call(originalDocument, returnNode, true);
              }
              return returnNode;
            }
            let serializedHTML = WHOLE_DOCUMENT ? body.outerHTML : body.innerHTML;
            if (WHOLE_DOCUMENT && ALLOWED_TAGS["!doctype"] && body.ownerDocument && body.ownerDocument.doctype && body.ownerDocument.doctype.name && regExpTest(DOCTYPE_NAME, body.ownerDocument.doctype.name)) {
              serializedHTML = "<!DOCTYPE " + body.ownerDocument.doctype.name + ">\n" + serializedHTML;
            }
            if (SAFE_FOR_TEMPLATES) {
              arrayForEach([MUSTACHE_EXPR2, ERB_EXPR2, TMPLIT_EXPR2], (expr) => {
                serializedHTML = stringReplace(serializedHTML, expr, " ");
              });
            }
            return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(serializedHTML) : serializedHTML;
          };
          DOMPurify.setConfig = function() {
            let cfg = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            _parseConfig(cfg);
            SET_CONFIG = true;
          };
          DOMPurify.clearConfig = function() {
            CONFIG = null;
            SET_CONFIG = false;
          };
          DOMPurify.isValidAttribute = function(tag, attr, value) {
            if (!CONFIG) {
              _parseConfig({});
            }
            const lcTag = transformCaseFunc(tag);
            const lcName = transformCaseFunc(attr);
            return _isValidAttribute(lcTag, lcName, value);
          };
          DOMPurify.addHook = function(entryPoint, hookFunction) {
            if (typeof hookFunction !== "function") {
              return;
            }
            hooks[entryPoint] = hooks[entryPoint] || [];
            arrayPush(hooks[entryPoint], hookFunction);
          };
          DOMPurify.removeHook = function(entryPoint) {
            if (hooks[entryPoint]) {
              return arrayPop(hooks[entryPoint]);
            }
          };
          DOMPurify.removeHooks = function(entryPoint) {
            if (hooks[entryPoint]) {
              hooks[entryPoint] = [];
            }
          };
          DOMPurify.removeAllHooks = function() {
            hooks = {};
          };
          return DOMPurify;
        }
        var purify = createDOMPurify();
        return purify;
      });
    }
  });

  // src/Utils.js
  var require_Utils = __commonJS({
    "src/Utils.js"(exports, module) {
      var DOMPurify = require_purify();
      module.exports = class Utils {
        //# MODEL
        constructor(parentContext) {
          let $ = this;
          $.parentContext = parentContext;
        }
        /**
         * @param {string} string
         * @returns {string}
         */
        escape(string) {
          return string.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
        }
        /**
         * @param {map|array} jsonMap
         * @param {boolean} safeHTML
         * @returns {object} DOM
         */
        mapToHtmlList(jsonMap2, safeHTML = false, jsonSchema = void 0) {
          let $ = this;
          try {
            $.parentContext.mapToJSON(jsonMap2);
          } catch (error) {
            console.log(error);
            throw new Error("Provided map value doesn't passes JSON.parse()");
          }
          var jsonItemIndex = 0, list = document.createElement("ul"), schema;
          if (jsonSchema !== void 0) {
            schema = JSON.parse(jsonSchema);
          }
          list.className = "DAMON-List";
          recurse(jsonMap2, list);
          return list;
          function recurse(jsonMap3, listItem) {
            if (typeof listItem !== "object" || listItem == null || Array.isArray(listItem)) {
              throw new Error("Error List Item number " + jsonItemIndex + ": @param { {} } list");
            }
            if (typeof jsonMap3 === "object" && jsonMap3 !== null && !Array.isArray(jsonMap3) && jsonMap3 instanceof Map && jsonMap3.constructor === Map) {
              if (listItem.tagName == "UL") {
                for (const [key, value] of jsonMap3) {
                  let newList = document.createElement("ul"), newDiv = document.createElement("code"), keySpan = document.createElement("span"), newListItem = document.createElement("li");
                  keySpan.className = "type-key";
                  if (/^https?:\/\//.test(key)) {
                    let keyLink = DOMPurify.sanitize(`<a href="${key}">${key}</a>`);
                    keySpan.innerHTML = keyLink;
                  } else {
                    if (jsonSchema !== void 0 && key in schema["@context"]) {
                      keySpan.innerHTML = DOMPurify.sanitize(
                        `<a href="${schema["@context"][key]["@id"]}">${key}</a>`
                      );
                    } else {
                      keySpan.textContent = key;
                    }
                  }
                  if (typeof value === "object" && value !== null) {
                    if (Array.isArray(value)) {
                      if (jsonMap3.damonInlineArrays !== void 0 && jsonMap3.damonInlineArrays.indexOf(key) > -1) {
                        newDiv.innerHTML = keySpan.outerHTML + ": [";
                        for (let j = 0, k = value.length; j < k; j++) {
                          let childValueSpan = document.createElement("span"), childValue = value[j];
                          if (childValue === true) {
                            childValueSpan.textContent = "true";
                            childValueSpan.className = "type-boolean";
                          } else if (childValue === false) {
                            childValueSpan.textContent = "false";
                            childValueSpan.className = "type-boolean";
                          } else if (childValue === null) {
                            childValueSpan.textContent = "null";
                            childValueSpan.className = "type-null";
                          } else if (Number.isFinite(childValue) && !Number.isNaN(childValue)) {
                            childValueSpan.textContent = childValue + "";
                            childValueSpan.className = "type-number";
                          } else {
                            if (safeHTML) {
                              if (/^https?:\/\//.test(childValue)) {
                                childValueSpan.innerHTML = DOMPurify.sanitize(`<a href="${childValue}">"${childValue}"</a>`);
                              } else {
                                childValueSpan.innerHTML = `"${childValue}"`;
                              }
                            } else {
                              if (/^https?:\/\//.test(childValue)) {
                                childValueSpan.innerHTML = DOMPurify.sanitize(`<a href="${childValue}">"${childValue}"</a>`);
                              } else {
                                childValueSpan.textContent = `"${childValue}"`;
                              }
                            }
                            childValueSpan.className = "type-string";
                          }
                          if (j !== 0) {
                            newDiv.innerHTML += ", ";
                          }
                          newDiv.appendChild(childValueSpan);
                        }
                        newDiv.innerHTML += "]";
                        newListItem.appendChild(newDiv);
                        newListItem.appendChild(newList);
                        listItem.appendChild(newListItem);
                      } else {
                        newDiv.innerHTML = keySpan.outerHTML + ": []";
                        newListItem.appendChild(newDiv);
                        newListItem.appendChild(newList);
                        listItem.appendChild(newListItem);
                        recurse(value, newList);
                      }
                    } else {
                      if (jsonMap3.implicitMaps !== void 0 && jsonMap3.implicitMaps.indexOf(key) > -1) {
                        newDiv.innerHTML = keySpan.outerHTML;
                      } else {
                        newDiv.innerHTML = keySpan.outerHTML + ": {}";
                      }
                      newListItem.appendChild(newDiv);
                      newListItem.appendChild(newList);
                      listItem.appendChild(newListItem);
                      recurse(value, newList);
                    }
                  } else {
                    jsonItemIndex++;
                    newDiv.innerHTML = keySpan.outerHTML + ": ";
                    let valueSpan = document.createElement("span");
                    let childText = value;
                    if (childText === true) {
                      valueSpan.textContent = "true";
                      valueSpan.className = "type-boolean";
                    } else if (childText === false) {
                      valueSpan.textContent = "false";
                      valueSpan.className = "type-boolean";
                    } else if (childText === null) {
                      valueSpan.textContent = "null";
                      valueSpan.className = "type-null";
                    } else if (Number.isFinite(childText) && !Number.isNaN(childText)) {
                      valueSpan.textContent = childText + "";
                      valueSpan.className = "type-number";
                    } else {
                      if (safeHTML) {
                        if (/^https?:\/\//.test(childText)) {
                          valueSpan.innerHTML = DOMPurify.sanitize(`<a href="${childText}">"${childText}"</a>`);
                        } else {
                          valueSpan.innerHTML = `"${childText}"`;
                        }
                      } else {
                        if (/^https?:\/\//.test(childText)) {
                          valueSpan.innerHTML = DOMPurify.sanitize(`<a href="${childText}">"${childText}"</a>`);
                        } else {
                          valueSpan.textContent = `"${childText}"`;
                        }
                      }
                      valueSpan.className = "type-string";
                    }
                    if (jsonMap3.implicitNulls === void 0 || jsonMap3.implicitNulls.indexOf(key) == -1) {
                      newDiv.appendChild(valueSpan);
                    } else {
                      newDiv.innerHTML = newDiv.innerHTML.slice(0, -2);
                    }
                    newListItem.appendChild(newDiv);
                    listItem.appendChild(newListItem);
                  }
                }
              }
            } else if (Array.isArray(jsonMap3)) {
              for (var i = 0, c = jsonMap3.length; i < c; i++) {
                let newList = document.createElement("ul"), newDiv = document.createElement("code"), newListItem = document.createElement("li");
                if (typeof jsonMap3[i] === "object" && jsonMap3[i] !== null) {
                  if (Array.isArray(jsonMap3[i])) {
                    if (jsonMap3.damonInlineArrays !== void 0 && jsonMap3.damonInlineArrays.indexOf(i) > -1) {
                      newDiv.innerHTML += "[";
                      for (let j = 0, k = jsonMap3[i].length; j < k; j++) {
                        let valueSpan = document.createElement("span"), value = jsonMap3[i][j];
                        if (value === true) {
                          valueSpan.textContent = "true";
                          valueSpan.className = "type-boolean";
                        } else if (value === false) {
                          valueSpan.textContent = "false";
                          valueSpan.className = "type-boolean";
                        } else if (value === null) {
                          valueSpan.textContent = "null";
                          valueSpan.className = "type-null";
                        } else if (Number.isFinite(value) && !Number.isNaN(value)) {
                          valueSpan.textContent = value + "";
                          valueSpan.className = "type-number";
                        } else {
                          if (safeHTML) {
                            if (/^https?:\/\//.test(value)) {
                              valueSpan.innerHTML = DOMPurify.sanitize(`<a href="${value}">"${value}"</a>`);
                            } else {
                              valueSpan.innerHTML = `"${value}"`;
                            }
                          } else {
                            if (/^https?:\/\//.test(value)) {
                              valueSpan.innerHTML = DOMPurify.sanitize(`<a href="${value}">"${value}"</a>`);
                            } else {
                              valueSpan.textContent = `"${value}"`;
                            }
                          }
                          valueSpan.className = "type-string";
                        }
                        if (j !== 0) {
                          newDiv.innerHTML += ", ";
                        }
                        newDiv.appendChild(valueSpan);
                      }
                      newDiv.innerHTML += "]";
                      newListItem.appendChild(newDiv);
                      newListItem.appendChild(newList);
                      listItem.appendChild(newListItem);
                    } else {
                      newDiv.textContent = "[]";
                      newListItem.appendChild(newDiv);
                      newListItem.appendChild(newList);
                      listItem.appendChild(newListItem);
                      recurse(jsonMap3[i], newList);
                    }
                  } else {
                    newDiv.textContent = "{}";
                    newListItem.appendChild(newDiv);
                    newListItem.appendChild(newList);
                    listItem.appendChild(newListItem);
                    recurse(jsonMap3[i], newList);
                  }
                } else {
                  jsonItemIndex++;
                  let childText = jsonMap3[i];
                  if (childText === true) {
                    newDiv.textContent = "true";
                    newDiv.className = "type-boolean";
                  } else if (childText === false) {
                    newDiv.textContent = "false";
                    newDiv.className = "type-boolean";
                  } else if (childText === null) {
                    newDiv.textContent = "null";
                    newDiv.className = "type-null";
                  } else if (Number.isFinite(childText) && !Number.isNaN(childText)) {
                    newDiv.textContent = childText + "";
                    newDiv.className = "type-number";
                  } else {
                    if (safeHTML) {
                      if (/^https?:\/\//.test(childText)) {
                        newDiv.innerHTML = DOMPurify.sanitize(`<a href="${childText}">"${childText}"</a>`);
                      } else {
                        newDiv.innerHTML = `"${childText}"`;
                      }
                    } else {
                      if (/^https?:\/\//.test(childText)) {
                        newDiv.innerHTML = DOMPurify.sanitize(`<a href="${childText}">"${childText}"</a>`);
                      } else {
                        newDiv.textContent = `"${childText}"`;
                      }
                    }
                    newDiv.className = "type-string";
                  }
                  newListItem.appendChild(newDiv);
                  newListItem.appendChild(newList);
                  listItem.appendChild(newListItem);
                }
              }
            }
          }
        }
        /**
         * @param {map|array} jsonMap
         * @param {boolean} [safeHTML=false]
         * @returns {object} DOM
         */
        mapToHtmlTable(jsonMap2, safeHTML = false) {
          let $ = this;
          try {
            $.parentContext.mapToJSON(jsonMap2);
          } catch (error) {
            throw new Error("Provided map value doesn't passes JSON.parse()");
          }
          var jsonItemIndex = 0, table = document.createElement("table"), tHead = document.createElement("thead"), tBody = document.createElement("tbody"), headingsEncountered = false, columnsLength = 0;
          table.className = "DAMON-Table";
          if (typeof jsonMap2 !== "object" || jsonMap2 == null || Array.isArray(jsonMap2) || !(jsonMap2 instanceof Map) || jsonMap2.constructor !== Map) {
            throw new Error("Error List Item number " + jsonItemIndex + ": @param { {} } list");
          }
          for (const [key, value] of jsonMap2) {
            if (typeof value === "object" && value !== null && !Array.isArray(value) && value instanceof Map && value.constructor === Map) {
              if (key == "0" && !headingsEncountered) {
                let row = document.createElement("tr");
                columnsLength = value.length;
                for (const [childKey, childValue] of value) {
                  if (childValue === null) {
                    let headerCell = document.createElement("th");
                    if (safeHTML) {
                      if (/^https?:\/\//.test(childKey)) {
                        headerCell.innerHTML = DOMPurify.sanitize(`<a href="${childKey}">${childKey}</a>`);
                      } else {
                        headerCell.innerHTML = `${childKey}`;
                      }
                    } else {
                      if (/^https?:\/\//.test(childKey)) {
                        headerCell.innerHTML = DOMPurify.sanitize(`<a href="${childKey}">${childKey}</a>`);
                      } else {
                        headerCell.textContent = `${childKey}`;
                      }
                    }
                    row.appendChild(headerCell);
                  } else {
                    throw new Error("Expected implicit null property, saw otherwise");
                  }
                }
                tHead.appendChild(row);
                headingsEncountered = true;
              } else {
                if (columnsLength == 0)
                  columnsLength = value.length;
                if (value.length != columnsLength) {
                  throw new Error("Error List Item number " + jsonItemIndex + ": @param { {} } list");
                }
                let row = document.createElement("tr");
                for (const [childKey, childValue] of value) {
                  if (childValue === null) {
                    let dataCell = document.createElement("td");
                    if (safeHTML) {
                      if (/^https?:\/\//.test(childKey)) {
                        dataCell.innerHTML = DOMPurify.sanitize(`<a href="${childKey}">${childKey}</a>`);
                      } else {
                        dataCell.innerHTML = `${childKey}`;
                      }
                    } else {
                      if (/^https?:\/\//.test(childKey)) {
                        dataCell.innerHTML = DOMPurify.sanitize(`<a href="${childKey}">${childKey}</a>`);
                      } else {
                        dataCell.textContent = `${childKey}`;
                      }
                    }
                    row.appendChild(dataCell);
                  } else {
                    throw new Error("Expected implicit null property, saw otherwise");
                  }
                }
                tBody.appendChild(row);
              }
            } else if (typeof value !== "object" && key == "00") {
              let caption = document.createElement("caption");
              if (safeHTML) {
                caption.innerHTML = value;
              } else {
                caption.textContent = value;
              }
              table.appendChild(caption);
            } else {
              throw new Error("Error List Item number " + jsonItemIndex + ": @param { {} } list");
            }
            jsonItemIndex++;
          }
          if (headingsEncountered) {
            table.appendChild(tHead);
          }
          table.appendChild(tBody);
          return table;
        }
        // Expects a complete tree (all terminal leaves at the same level)
        /**
         * @param {map|array} jsonMap
         * @param {boolean} [safeHTML=false]
         * @returns {object} DOM
         */
        mapTreeLeavesToHtmlTable(jsonMap2, safeHTML = false) {
          let $ = this;
          try {
            $.parentContext.mapToJSON(jsonMap2);
          } catch (error) {
            throw new Error("Provided map value doesn't passes JSON.parse()");
          }
          var jsonItemIndex = 0, expectedDepth = 0, table = document.createElement("table"), tHead = document.createElement("thead"), tBody = document.createElement("tbody"), headingsEncountered = false;
          table.className = "DAMON-LeavesToTable";
          if (typeof jsonMap2 !== "object" || jsonMap2 == null || Array.isArray(jsonMap2) || !(jsonMap2 instanceof Map) || jsonMap2.constructor !== Map) {
            throw new Error("Error List Item number " + jsonItemIndex + ": @param { {} } list");
          }
          for (const [key, value] of jsonMap2) {
            if (typeof value === "object" && !Array.isArray(value)) {
              if (key == "head" && !headingsEncountered) {
                try {
                  recurse(value, tHead);
                } catch (e) {
                  return;
                }
                headingsEncountered = true;
              } else if (key == "body") {
                try {
                  recurse(value, tBody);
                } catch (e) {
                  return;
                }
              }
            } else if (typeof value !== "object" && key == "caption") {
              let caption = document.createElement("caption");
              if (safeHTML) {
                caption.innerHTML = value;
              } else {
                caption.textContent = value;
              }
              table.appendChild(caption);
            } else {
              throw new Error("Error List Item number " + jsonItemIndex + ": @param { {} } list");
            }
            jsonItemIndex++;
          }
          if (headingsEncountered) {
            table.appendChild(tHead);
          }
          table.appendChild(tBody);
          return table;
          function recurse(jsonMap3, tableSubContainer, level = 0, line = []) {
            if (typeof tableSubContainer !== "object" || tableSubContainer == null) {
              throw new Error("Error List Item number " + jsonItemIndex + ": @param { {} } list");
            }
            if (typeof jsonMap3 === "object" && jsonMap3 !== null && !Array.isArray(jsonMap3) && jsonMap3 instanceof Map && jsonMap3.constructor === Map) {
              if (tableSubContainer.tagName == "THEAD") {
                if (Array.from(jsonMap3.keys()).length == 1) {
                  if (typeof jsonMap3.get(Array.from(jsonMap3.keys())[0]) === "object" && jsonMap3.get(Array.from(jsonMap3.keys())[0]) !== null) {
                    jsonItemIndex++;
                    recurse(
                      jsonMap3.get(Array.from(jsonMap3.keys())[0]),
                      tableSubContainer,
                      level + 1,
                      line.concat([Array.from(jsonMap3.keys())[0]])
                    );
                  } else {
                    throw new Error("Error List Item number " + jsonItemIndex + ": @param { {} } list");
                  }
                } else {
                  throw new Error("Error List Item number " + jsonItemIndex + ": @param { {} } list");
                }
              } else if (tableSubContainer.tagName == "TBODY") {
                if (Array.from(jsonMap3.keys()).length == 0) {
                  throw new Error("Error List Item number " + jsonItemIndex + ": @param { {} } list");
                }
                for (const [key, value] of jsonMap3) {
                  if (typeof value === "object" && value !== null) {
                    jsonItemIndex++;
                    recurse(value, tableSubContainer, level + 1, line.concat([key]));
                  } else {
                    throw new Error("Error List Item number " + jsonItemIndex + ": @param { {} } list");
                  }
                }
              }
            } else if (Array.isArray(jsonMap3)) {
              if (tableSubContainer.tagName == "THEAD") {
                if (jsonMap3.length == 1) {
                  jsonItemIndex++;
                  expectedDepth = level;
                  let tableRow = document.createElement("tr");
                  line.push(jsonMap3[0]);
                  for (let i = 0, c = line.length; i < c; i++) {
                    let headerCell = document.createElement("th");
                    if (safeHTML) {
                      headerCell.innerHTML = line[i];
                    } else {
                      headerCell.textContent = line[i];
                    }
                    tableRow.appendChild(headerCell);
                  }
                  tableSubContainer.appendChild(tableRow);
                } else {
                  throw new Error("Error List Item number " + jsonItemIndex + ": @param { {} } list");
                }
              } else if (tableSubContainer.tagName == "TBODY") {
                if (level == expectedDepth) {
                  if (jsonMap3.length == 0) {
                    throw new Error("Error List Item number " + jsonItemIndex + ": @param { {} } list");
                  }
                  for (let i = 0, c = jsonMap3.length; i < c; i++) {
                    jsonItemIndex++;
                    let tableRow = document.createElement("tr");
                    for (let z = 0, x = line.length; z < x; z++) {
                      let dataCell2 = document.createElement("td");
                      if (safeHTML) {
                        dataCell2.innerHTML = line[z];
                      } else {
                        dataCell2.textContent = line[z];
                      }
                      tableRow.appendChild(dataCell2);
                    }
                    let dataCell = document.createElement("td");
                    if (safeHTML) {
                      dataCell.innerHTML = jsonMap3[i];
                    } else {
                      dataCell.textContent = jsonMap3[i];
                    }
                    dataCell.textContent = jsonMap3[i];
                    tableRow.appendChild(dataCell);
                    tableSubContainer.appendChild(tableRow);
                  }
                } else {
                  throw new Error("Error List Item number " + jsonItemIndex + ": @param { {} } list");
                }
              }
            }
          }
        }
        /**
         * @param {object} list DOM
         * @return {map|array}
         */
        htmlToJSON(list) {
          let $ = this;
          var listItemIndex = 0;
          if (list.firstElementChild.textContent == "{}") {
            return $._mapToJSON(recurse(tree, /* @__PURE__ */ new Map()));
          } else if (list.firstElementChild.textContent == "[]") {
            return $._mapToJSON(recurse(tree, []));
          }
          function recurse(list2, jsonMap2) {
            if (typeof list2 !== "object" || list2 == null || Array.isArray(list2)) {
              throw new Error("Error List Item number " + listItemIndex + ": @param { {} } list");
            }
            if (typeof jsonMap2 === "object" && jsonMap2 !== null && !Array.isArray(jsonMap2) && jsonMap2 instanceof Map && jsonMap2.constructor === Map) {
              for (let i = 0, c = list2.children.length; i < c; i++) {
                listItemIndex++;
                if (list2.children[i].tagName == "LI") {
                  if (list2.children[i].firstElementChild.tagName == "CODE") {
                    if (list2.children[i].firstElementChild.innerHTML.length) {
                      let text = list2.children[i].firstElementChild.innerHTML.trim();
                      if (text[text.length - 1] == ":" && text.length > 1) {
                        let secondGrandChild = list2.children[i].children[1];
                        if (secondGrandChild.tagName == "UL" && secondGrandChild.firstElementChild.tagName == "LI" && secondGrandChild.children.length == 1 && secondGrandChild.firstElementChild.firstElementChild.tagName == "CODE") {
                          listItemIndex++;
                          let childText = secondGrandChild.firstElementChild.firstElementChild.textContent.trim();
                          if (childText == "true") {
                            jsonMap2.set(text.slice(0, -1), true);
                          } else if (childText == "false") {
                            jsonMap2.set(text.slice(0, -1), false);
                          } else if (childText == "null") {
                            jsonMap2.set(text.slice(0, -1), null);
                          } else if (isFinite(childText) && !isNaN(parseFloat(childText))) {
                            jsonMap2.set(text.slice(0, -1), childText * 1);
                          } else {
                            jsonMap2.set(text.slice(0, -1), childText);
                          }
                        } else {
                          throw new Error(
                            "Error List Item number " + listItemIndex + ": not DAMON-compliant."
                          );
                        }
                      } else if (text[text.length - 4] == ":" && text.length > 4) {
                        if (text.slice(-3) == " []") {
                          jsonMap2.set(text.slice(0, -4), []);
                          if (list2.children[i].children[1].tagName == "UL") {
                            recurse(list2.children[i].children[1], jsonMap2.get(text.slice(0, -4)));
                          } else {
                            throw new Error(
                              "Error List Item number " + listItemIndex + ": not DAMON-compliant."
                            );
                          }
                        } else if (text.slice(-3) == " {}") {
                          jsonMap2.set(text.slice(0, -4), /* @__PURE__ */ new Map());
                          if (list2.children[i].children[1].tagName == "UL") {
                            recurse(list2.children[i].children[1], jsonMap2.get(text.slice(0, -4)));
                          } else {
                            throw new Error(
                              "Error List Item number " + listItemIndex + ": not DAMON-compliant."
                            );
                          }
                        }
                      } else {
                        throw new Error(
                          "Error List Item number " + listItemIndex + ": map items need a key"
                        );
                      }
                    } else {
                      throw new Error("Error List Item number " + listItemIndex + ": empty node.");
                    }
                  } else {
                    throw new Error("Error List Item number " + listItemIndex + ": not DAMON-compliant.");
                  }
                }
              }
            } else if (Array.isArray(jsonMap2)) {
              for (let i = 0, c = list2.children.length; i < c; i++) {
                listItemIndex++;
                if (list2.children[i].tagName == "LI") {
                  if (list2.children[i].firstElementChild.tagName == "CODE") {
                    if (list2.children[i].firstElementChild.innerHTML.length) {
                      let text = list2.children[i].firstElementChild.innerHTML.trim();
                      if (text[text.length - 1] == ":" && text.length > 1) {
                        throw new Error(
                          "Error List Item number " + listItemIndex + ": lists can't have keys."
                        );
                      } else if (text[text.length - 4] == ":" && text.length > 4) {
                        throw new Error(
                          "Error List Item number " + listItemIndex + ": not DAMON-compliant."
                        );
                      } else {
                        if (text == "[]") {
                          jsonMap2.push([]);
                          if (list2.children[i].children[1] && list2.children[i].children[1].tagName == "UL") {
                            recurse(list2.children[i].children[1], jsonMap2[jsonMap2.length - 1]);
                          } else {
                            throw new Error(
                              "Error List Item number " + listItemIndex + ": not DAMON-compliant."
                            );
                          }
                        } else if (text == "{}") {
                          jsonMap2.push({});
                          if (list2.children[i].children[1] && list2.children[i].children[1].tagName == "UL") {
                            recurse(list2.children[i].children[1], jsonMap2[jsonMap2.length - 1]);
                          } else {
                            throw new Error(
                              "Error List Item number " + listItemIndex + ": not DAMON-compliant."
                            );
                          }
                        } else if (text == "true") {
                          jsonMap2.push(true);
                        } else if (text == "false") {
                          jsonMap2.push(false);
                        } else if (text == "null") {
                          jsonMap2.push(null);
                        } else if (isFinite(text) && !isNaN(parseFloat(text))) {
                          jsonMap2.push(text * 1);
                        } else {
                          jsonMap2.push(text);
                        }
                      }
                    } else {
                      throw new Error("Error List Item number " + listItemIndex + ": empty node.");
                    }
                  } else {
                    throw new Error("Error List Item number " + listItemIndex + ": not DAMON-compliant.");
                  }
                }
              }
            } else {
              throw new Error("Error List Item number " + listItemIndex + ": @param { {} | [] } jsonMap");
            }
            return jsonMap2;
          }
        }
        /**
         * @param {map|array} firstMap
         * @param {map|array} secondMap
        */
        mapsDiff(firstMap, secondMap) {
          let $ = this;
          try {
            $.parentContext.mapToJSON(firstMap);
            $.parentContext.mapToJSON(secondMap);
          } catch (error) {
            throw new Error("Provided map value doesn't passes JSON.parse()");
          }
          if (typeof firstMap !== typeof secondMap) {
          }
          var list = ``;
          if (Array.isArray(jsonMap)) {
            list += "- []\n";
          } else {
            list += "- {}\n";
          }
          _recurse(jsonMap);
          return list.slice(0, -1);
          function _recurse(jsonMap2, level = 1) {
            if (typeof jsonMap2 === "object" && jsonMap2 !== null && !Array.isArray(jsonMap2) && jsonMap2 instanceof Map && jsonMap2.constructor === Map) {
              for (const [key, value] of jsonMap2) {
                if (typeof value === "object" && value !== null) {
                  if (Array.isArray(value)) {
                    let nullsCounter2 = 0, arrayOfPrimitives = value.filter(function(item) {
                      if (item === true) {
                        return true;
                      } else if (item === false) {
                        return true;
                      } else if (item === null) {
                        nullsCounter2++;
                        return true;
                      } else if (typeof item == "string") {
                        return true;
                      } else if (isFinite(item) && !isNaN(parseFloat(item)) && Number.isFinite(item * 1) && !Number.isNaN(item * 1)) {
                        return true;
                      } else {
                        return false;
                      }
                    });
                    if (value.length == arrayOfPrimitives.length && level * 4 + 2 + value.join(", ").length + nullsCounter2 * 4 <= 80) {
                      let line = "[" + value.map((x) => JSON.stringify(x)).join(", ") + "]";
                      list += "    ".repeat(level) + "- " + JSON.stringify(key).slice(1, -1) + ": " + line + "\n";
                    } else {
                      list += "    ".repeat(level) + "- " + JSON.stringify(key).slice(1, -1) + ": []\n";
                      _recurse(value, level + 1);
                    }
                  } else {
                    list += "    ".repeat(level) + "- " + JSON.stringify(key).slice(1, -1) + ": {}\n";
                    _recurse(value, level + 1);
                  }
                } else {
                  list += "    ".repeat(level) + "- " + JSON.stringify(key).slice(1, -1) + ": ";
                  if (value === true) {
                    list += "true\n";
                  } else if (value === false) {
                    list += "false\n";
                  } else if (value === null) {
                    list += "null\n";
                  } else if (Number.isFinite(value) && !Number.isNaN(value)) {
                    list += value + "\n";
                  } else {
                    list += `${JSON.stringify(value)}
`;
                  }
                }
              }
            } else if (Array.isArray(jsonMap2)) {
              for (var i = 0, c = jsonMap2.length; i < c; i++) {
                if (typeof jsonMap2[i] === "object" && jsonMap2[i] !== null) {
                  if (Array.isArray(jsonMap2[i])) {
                    let nullsCounter2 = 0, arrayOfPrimitives = jsonMap2[i].filter(function(item) {
                      if (item === true) {
                        return true;
                      } else if (item === false) {
                        return true;
                      } else if (item === null) {
                        nullsCounter2++;
                        return true;
                      } else if (typeof item == "string") {
                        return true;
                      } else if (isFinite(item) && !isNaN(parseFloat(item)) && Number.isFinite(item * 1) && !Number.isNaN(item * 1)) {
                        return true;
                      } else {
                        return false;
                      }
                    });
                    if (jsonMap2[i].length == arrayOfPrimitives.length && level * 4 + 2 + jsonMap2[i].join(", ").length + nullsCounter2 * 4 <= 80) {
                      let line = "[" + jsonMap2[i].map((x) => JSON.stringify(x)).join(", ") + "]";
                      list += "    ".repeat(level) + "- " + line + "\n";
                    } else {
                      list += "    ".repeat(level) + "- []\n";
                      _recurse(jsonMap2[i], level + 1);
                    }
                  } else {
                    list += "    ".repeat(level) + "- {}\n";
                    _recurse(jsonMap2[i], level + 1);
                  }
                } else {
                  if (jsonMap2[i] === true) {
                    list += "    ".repeat(level) + "- true\n";
                  } else if (jsonMap2[i] === false) {
                    list += "    ".repeat(level) + "- false\n";
                  } else if (jsonMap2[i] === null) {
                    list += "    ".repeat(level) + "- null\n";
                  } else if (Number.isFinite(jsonMap2[i]) && !Number.isNaN(jsonMap2[i])) {
                    list += "    ".repeat(level) + "- " + jsonMap2[i] + "\n";
                  } else {
                    list += "    ".repeat(level) + `- ${JSON.stringify(jsonMap2[i])}
`;
                  }
                }
              }
            }
          }
        }
      };
    }
  });

  // Damon.js
  var require_Damon = __commonJS({
    "Damon.js"(exports, module) {
      var parse = require_tsc().parse;
      var DamonUtils = require_Utils();
      module.exports = class Damon {
        /**
         *Creates an instance of Damon.
         * @param {Boolean} pedantic
         */
        constructor(pedantic = false) {
          let $ = this;
          this.indentation = 4;
          if ([true, false, void 0].indexOf(pedantic) == -1) {
            throw new Error("@param {Boolean} pedantic");
          }
          this.pedantic = pedantic;
          this.utils = new DamonUtils(this);
        }
        /**
         * Object-like ordered dictionaries declarations in js
         * @param {TemplateStringsArray} strings
         * @returns {Map<string, any>|Array<any>|boolean|null|string|number}
         */
        template(strings) {
          let $ = this;
          var result = strings.raw[0];
          for (let i = 1; i < strings.raw.length; i++) {
            if (typeof arguments[i] == "string") {
              result += '"' + arguments[i] + '"';
            } else {
              result += arguments[i];
            }
            result += strings.raw[i];
          }
          let map = $._treeToMap($._damonToTree(result));
          return map;
        }
        /**
         * @param {string} damon
         * @returns {Map<string, any>|Array<any>|boolean|null|string|number}
         */
        damonToMap(damon) {
          let $ = this;
          let treeOrPrimitive = $._damonToTree(damon);
          if (treeOrPrimitive === true || treeOrPrimitive === false || treeOrPrimitive === null || typeof treeOrPrimitive === "string" || typeof treeOrPrimitive === "number") {
            return treeOrPrimitive;
          }
          return $._treeToMap($._damonToTree(damon));
        }
        /**
         * @param {string} damon
         * @returns {string}
         */
        damonToJSON(damon) {
          let $ = this;
          return $.mapToJSON($.damonToMap(damon));
        }
        /**
         * @param {string} damon
         * @returns {string}
         */
        damonToSExpression(damon) {
          let $ = this;
          return $.implicitMapToSExpression($.damonToMap(damon));
        }
        /**
         * @param {string} json
         * @returns {string}
         */
        jsonToDamon(json) {
          let $ = this;
          return $.mapToDamon($.jsonToMap(json), false);
        }
        /**
         * @param {string} json
         * @returns {Map<string, any>|Array<any>|boolean|null|string|number}
         */
        jsonToMap(json) {
          let $ = this;
          var jsonLines = $._getLines(json);
          jsonLines = jsonLines.filter((x) => !/^ *\/\//.test(x));
          jsonLines = jsonLines.filter((x) => x != "");
          jsonLines = jsonLines.filter((x) => !/^[ \t]+$/.test(x));
          if (jsonLines.length == 1) {
            if (["true", "false", "null"].indexOf(jsonLines[0].trim()) > -1) {
              return JSON.parse(jsonLines[0]);
            } else if (/^".*"$/.test(jsonLines[0].trim())) {
              try {
                return JSON.parse(jsonLines[0].trim());
              } catch (error) {
                console.error("Error line number 1: not JSON-compliant, detailed error follows");
                error.line = 1;
                error.language = "JSON";
                error.type = "string";
                throw error;
              }
            } else if (isFinite(jsonLines[0]) && !isNaN(parseFloat(jsonLines[0])) && Number.isFinite(jsonLines[0] * 1) && !Number.isNaN(jsonLines[0] * 1)) {
              if (jsonLines[0].indexOf(0) == 0 && jsonLines[0].length > 1 && jsonLines[0].indexOf(".") !== 1) {
                throw new Error(
                  "Error line number 1: leading 0",
                  {
                    line: 1,
                    language: "DAMON"
                  }
                );
              }
              try {
                return JSON.parse(jsonLines[0] * 1);
              } catch (error) {
                console.error("Error line number 1: not JSON-compliant, detailed error follows");
                error.line = 1;
                error.language = "JSON";
                error.type = "number";
                throw error;
              }
            } else if (jsonLines[0] * 1 === Infinity) {
              try {
                JSON.parse(jsonLines[0] * 1);
              } catch (error) {
                console.error("Error line number 1: not JSON-compliant, detailed error follows");
                error.line = 1;
                error.language = "JSON";
                error.type = "infinity";
                throw error;
              }
            } else {
              return parse(json);
            }
          } else {
            return parse(json);
          }
        }
        /**
         * @param {string} damon
         * @returns {Array<string>} damonLines
         */
        _getLines(damon) {
          if (damon === "") {
            throw new Error(
              "Error line 1: empty string",
              {
                line: 1,
                language: "DAMON"
              }
            );
          }
          if (/[\s]/.test(damon) && damon.match(new RegExp(/[\s]/))[0].length == damon.length) {
            throw new Error(
              "Error line 1: string only contains whitespace",
              {
                line: 1,
                language: "DAMON"
              }
            );
          }
          var delimiter = /\r\n/.test(damon) ? "\r\n" : "\n", damonLines = damon.split(delimiter);
          if (/\\*\n/.test(damon) && delimiter == "\n") {
            if (/[^\\]\\(\\\\)*\n/.test(damon)) {
              let errorLine = damon.split(/[^\\]\\(\\\\)*\n/)[0].split("\n").length;
              throw new Error(
                "Error line " + errorLine + ": oddly escaped newline",
                {
                  line: errorLine,
                  language: "DAMON"
                }
              );
            }
            let reversedDamon = damon.split("").reverse().join(""), reversedDamonLines = reversedDamon.split(/\n/);
            damonLines = reversedDamonLines.map((x) => x.split("").reverse().join("")).reverse();
          }
          return damonLines;
        }
        /**
         * Offside-rule parsing
         * @param {string} damon
         * @returns {object|boolean|null|string|number}
         */
        _damonToTree(damon) {
          let $ = this;
          let damonLines = $._getLines(damon), damonOriginalLines = damonLines.slice(0);
          damonLines = damonLines.filter((x) => !/^ *\/\//.test(x));
          damonLines = damonLines.filter((x) => x != "");
          damonLines = damonLines.filter((x) => !/^[ \t]+$/.test(x));
          if (damonLines.length == 1) {
            if (["true", "false", "null"].indexOf(damonLines[0].trim()) > -1) {
              return JSON.parse(damonLines[0]);
            } else if (/^".*"$/.test(damonLines[0].trim())) {
              try {
                return JSON.parse(damonLines[0].trim());
              } catch (error) {
                console.error("Error line number 1: not JSON-compliant, detailed error follows");
                error.line = 1;
                error.language = "JSON";
                error.type = "string";
                throw error;
              }
            } else if (isFinite(damonLines[0]) && !isNaN(parseFloat(damonLines[0])) && Number.isFinite(damonLines[0] * 1) && !Number.isNaN(damonLines[0] * 1)) {
              if (damonLines[0].indexOf(0) == 0 && damonLines[0].length > 1 && damonLines[0].indexOf(".") !== 1) {
                throw new Error(
                  "Error line number 1: leading 0",
                  {
                    line: 1,
                    language: "DAMON"
                  }
                );
              }
              try {
                return JSON.parse(damonLines[0] * 1);
              } catch (error) {
                console.error("Error line number 1: not JSON-compliant, detailed error follows");
                error.line = 1;
                error.language = "JSON";
                error.type = "number";
                throw error;
              }
            } else if (damonLines[0] * 1 === Infinity) {
              try {
                JSON.parse(damonLines[0] * 1);
              } catch (error) {
                console.error("Error line number 1: not JSON-compliant, detailed error follows");
                error.line = 1;
                error.language = "JSON";
                error.type = "infinity";
                throw error;
              }
            }
          }
          let damonLinesIndex = 0, damonOriginalLinesMapping = [];
          for (let i = 0, c = damonOriginalLines.length; i < c; i++) {
            if (damonLines.slice(damonLinesIndex).indexOf(damonOriginalLines[i]) > -1) {
              damonOriginalLinesMapping[i] = damonLines.slice(damonLinesIndex).indexOf(damonOriginalLines[i]);
            } else {
              damonOriginalLinesMapping[i] = null;
            }
          }
          let tabsMatchingRegex = new RegExp("^(	)+");
          for (let i = 0, c = damonLines.length; i < c; i++) {
            if (tabsMatchingRegex.test(damonLines[i])) {
              const tabsPaddingLength = damonLines[i].match(tabsMatchingRegex)[0].length;
              for (let z = 0, x = tabsPaddingLength; z < x; z++) {
                damonLines[i] = damonLines[i].replace("	", " ".repeat($.indentation));
              }
            }
            if (!/^ *- $/.test(damonLines[i]) && /[ \t]+$/.test(damonLines[i])) {
              throw new Error(
                "Error line " + (damonOriginalLinesMapping.indexOf(i) + 1) + ": trailing whitespace",
                {
                  line: damonOriginalLinesMapping.indexOf(i) + 1,
                  language: "DAMON"
                }
              );
            }
          }
          let indentationMatchingRegex = new RegExp("^(" + " ".repeat($.indentation) + ")+");
          if (indentationMatchingRegex.test(damonLines[0])) {
            let initialPadding = damonLines[0].match(indentationMatchingRegex)[0].length, trimmable = true;
            for (let i = 0, c = damonLines.length; i < c; i++) {
              if (indentationMatchingRegex.test(damonLines[i]) && damonLines[i].match(indentationMatchingRegex)[0].length >= initialPadding) {
                damonLines[i] = damonLines[i].slice(initialPadding);
              } else {
                trimmable = false;
              }
            }
            if (!trimmable) {
              throw new Error(
                "Error line 1: bad formatting",
                {
                  line: 1,
                  language: "DAMON"
                }
              );
            }
          } else if (indentationMatchingRegex.test(damonLines[1]) && damonLines[1].match(indentationMatchingRegex)[0].length > $.indentation) {
            let initialPadding = damonLines[1].match(indentationMatchingRegex)[0].length - $.indentation, trimmable = true;
            for (let i = 1, c = damonLines.length; i < c; i++) {
              if (indentationMatchingRegex.test(damonLines[i]) && damonLines[i].match(indentationMatchingRegex)[0].length >= initialPadding) {
                damonLines[i] = damonLines[i].slice(initialPadding);
              } else {
                trimmable = false;
              }
            }
            if (!trimmable) {
              throw new Error(
                "Error line 2: bad formatting",
                {
                  line: 2,
                  language: "DAMON"
                }
              );
            }
          }
          let headless = false;
          if (damonLines.length > 1) {
            for (let i = 0, c = damonLines.length; i < c; i++) {
              if (i !== 0 && /^- /.test(damonLines[i])) {
                headless = true;
              }
            }
          }
          if (!/^- \{\}$/.test(damonLines[0]) && !/^- \[\]$/.test(damonLines[0])) {
            headless = true;
          }
          if (headless) {
            for (let i = 0, c = damonLines.length; i < c; i++) {
              damonLines[i] = " ".repeat($.indentation) + damonLines[i];
            }
            damonLines.unshift("- {}");
          }
          var treeRoot = {
            content: damonLines[0],
            level: 0,
            id: 0,
            children: [],
            headless,
            damonOriginalLinesMapping
          };
          var previousListItem = treeRoot;
          if (!/^- /.test(damonLines[0].trimStart()) || /^ +/.test(damonLines[0]) && (damonLines[0].match(/^ +/)[0].length % $.indentation != 0 || damonLines[0].match(/^ +/)[0].length != $.indentation)) {
            throw new Error(
              "Error line " + (headless * 1 + 1) + ": bad formatting",
              {
                line: headless * 1 + 1,
                language: "DAMON"
              }
            );
          }
          damonLines.shift();
          for (let i = 0, c = damonLines.length; i < c; i++) {
            if (!/^- /.test(damonLines[i].trimStart()) || /^ +/.test(damonLines[i]) && (damonLines[i].match(/^ +/)[0].length % $.indentation != 0 || i == 0 && damonLines[i].match(/^ +/)[0].length != $.indentation || i != 0 && /^- /.test(damonLines[i - 1]) && damonLines[i].match(/^ +/)[0].length != $.indentation || i != 0 && !/^- /.test(damonLines[i - 1]) && damonLines[i].match(/^ +/)[0].length > damonLines[i - 1].match(/^ +/)[0].length + $.indentation)) {
              console.log(damonLines[i]);
              throw new Error(
                "Error line " + (damonOriginalLinesMapping.indexOf(i) + 1) + ": bad formatting",
                {
                  line: damonOriginalLinesMapping.indexOf(i) + 1,
                  language: "DAMON"
                }
              );
            }
            let listItem = {
              content: damonLines[i].trimStart().slice(2),
              level: 1 + damonLines[i].match(/^ +/)[0].length / $.indentation,
              id: "",
              children: []
            };
            if (previousListItem === treeRoot) {
              listItem.id = treeRoot.children.length + 1;
              treeRoot.children.push(listItem);
            } else if (previousListItem.level === listItem.level) {
              var parentListItem = $._findListItemCommonDirectParent(previousListItem, treeRoot);
              if (parentListItem.level == 0) {
                listItem.id = parentListItem.children.length + 1;
              } else {
                listItem.id = parentListItem.id + "-" + (parentListItem.children.length + 1);
              }
              parentListItem.children.push(listItem);
            } else if (previousListItem.level > listItem.level) {
              var commonAncestor = $._findListItemCommonAncestor(previousListItem, treeRoot, listItem.level);
              if (commonAncestor.level == 0) {
                listItem.id = commonAncestor.children.length + 1;
              } else {
                listItem.id = commonAncestor.id + "-" + (commonAncestor.children.length + 1);
              }
              commonAncestor.children.push(listItem);
            } else if (previousListItem.level < listItem.level) {
              var grandParentListItem = $._findListItemCommonDirectParent(previousListItem, treeRoot);
              let previousListItemIndex = grandParentListItem.children.indexOf(previousListItem);
              let previousListItemId = grandParentListItem.children[previousListItemIndex].id, nextTitleNumber = grandParentListItem.children[previousListItemIndex].children.length + 1;
              listItem.id = previousListItemId + "-" + nextTitleNumber;
              grandParentListItem.children[previousListItemIndex].children.push(listItem);
            }
            previousListItem = listItem;
          }
          return treeRoot;
        }
        /**
         * @param {any} listItem
         * @param {{ children: string | any[]; }} possibleParent
         * @return {object|string} DOM
         */
        _findListItemCommonDirectParent(listItem, possibleParent) {
          let $ = this;
          if (possibleParent.children.indexOf(listItem) > -1) {
            return possibleParent;
          } else {
            var parent;
            for (let i = possibleParent.children.length - 1, c = 0; i >= c; i--) {
              parent = $._findListItemCommonDirectParent(listItem, possibleParent.children[i]);
              if (parent) {
                return parent;
              }
            }
          }
        }
        /**
         * @param {any} listItem
         * @param {{ children: string | any[]; }} possibleParent
         * @param {number} level
         * @return {object|string} DOM
         */
        _findListItemCommonAncestor(listItem, possibleParent, level) {
          let $ = this;
          var parent = $._findListItemCommonDirectParent(listItem, possibleParent);
          if (parent.level < level) {
            return parent;
          } else {
            return $._findListItemCommonAncestor(parent, possibleParent, level);
          }
        }
        /**
         * JSON primitives wrapping
         * @param {Object} damonTree
         * @return {Map<string, any> | Array<any>}
         */
        _treeToMap(damonTree) {
          let $ = this;
          var treeItemIndex = 0;
          if (damonTree.content == "- {}") {
            let map = /* @__PURE__ */ new Map();
            map.damonOriginalLinesMapping = damonTree.damonOriginalLinesMapping;
            return _recurse(damonTree, map);
          } else if (damonTree.content == "- []") {
            let array = [];
            array.damonOriginalLinesMapping = damonTree.damonOriginalLinesMapping;
            return _recurse(damonTree, array);
          } else {
            let map = /* @__PURE__ */ new Map();
            map.damonOriginalLinesMapping = damonTree.damonOriginalLinesMapping;
            if (damonTree.headless) {
              map.headless = true;
            }
            return _recurse(damonTree, map);
          }
          function _recurse(tree2, jsonMap2) {
            if (typeof tree2 !== "object" || tree2 == null || Array.isArray(tree2)) {
              throw new Error(
                "Error line number " + (damonTree.headless * -1 + damonTree.damonOriginalLinesMapping.indexOf(treeItemIndex - 1) + 2) + ": @param { {} } tree",
                {
                  line: damonTree.headless * -1 + damonTree.damonOriginalLinesMapping.indexOf(treeItemIndex - 1) + 2,
                  language: "DAMON"
                }
              );
            }
            if (typeof jsonMap2 === "object" && jsonMap2 !== null && !Array.isArray(jsonMap2) && jsonMap2 instanceof Map && jsonMap2.constructor === Map) {
              _mapHandler(tree2, jsonMap2);
            } else if (Array.isArray(jsonMap2)) {
              _listHandler(tree2, jsonMap2);
            } else {
              throw new Error(
                "Error line number " + (damonTree.headless * -1 + damonTree.damonOriginalLinesMapping.indexOf(treeItemIndex - 1) + 2) + ": @param { {} | [] } jsonMap",
                {
                  line: damonTree.headless * -1 + damonTree.damonOriginalLinesMapping.indexOf(treeItemIndex - 1) + 2,
                  language: "DAMON"
                }
              );
            }
            return jsonMap2;
          }
          function _mapHandler(tree2, jsonMap2) {
            for (let i = 0, c = tree2.children.length; i < c; i++) {
              treeItemIndex++;
              if (tree2.children[i].content.length == 0) {
                let errorType;
                if (tree2.children[i].children.length > 0) {
                  errorType = "implicit map key";
                  jsonMap2.set("", /* @__PURE__ */ new Map());
                  if (jsonMap2.implicitMaps === void 0) {
                    jsonMap2.implicitMaps = [];
                  }
                  jsonMap2.implicitMaps.push("");
                  _recurse(tree2.children[i], jsonMap2.get(""));
                } else {
                  errorType = "implicit null key";
                  jsonMap2.set("", null);
                  if (jsonMap2.implicitNulls === void 0) {
                    jsonMap2.implicitNulls = [];
                  }
                  jsonMap2.implicitNulls.push("");
                }
              } else {
                let text = tree2.children[i].content, errorType = "key";
                try {
                  if (/^.*: +\[/.test(text) && text[text.length - 1] == "]") {
                    if (/: +\[ *\]$/.test(text)) {
                      let key = JSON.parse(
                        `["${text.slice(0, -1 * text.match(/: +\[ *\]$/)[0].length)}"]`
                      )[0];
                      jsonMap2.set(key, []);
                      if (tree2.children[i].children.length > 0) {
                        _recurse(tree2.children[i], jsonMap2.get(key));
                      }
                    } else {
                      let redundantWhitespaceMatchingRegex = new RegExp(/: +\[/g), splitString = text.slice(0, -1).split(redundantWhitespaceMatchingRegex), textMatchesPlusOne = text.match(redundantWhitespaceMatchingRegex).concat([""]), splitStringWithMatches = splitString.map((x, i2) => x + textMatchesPlusOne[i2]), shortestPossibleKey = "", longestPossibleArray = [];
                      for (let j = 0, k = splitString.length; j < k; j++) {
                        try {
                          let concatenation;
                          if (j == 0) {
                            concatenation = splitString[0];
                          } else {
                            concatenation = splitStringWithMatches.slice(0, j).join("") + splitString[j];
                          }
                          shortestPossibleKey = JSON.parse(`["${concatenation}"]`)[0];
                          errorType = "list";
                          longestPossibleArray = JSON.parse(`[${splitStringWithMatches.slice(j + 1).join("")}]`);
                          if (Array.isArray(longestPossibleArray)) {
                            break;
                          }
                        } catch (error) {
                          if (j == k - 2) {
                            throw new Error(
                              "Error line number " + (damonTree.headless * -1 + damonTree.damonOriginalLinesMapping.indexOf(treeItemIndex - 1) + 2) + ": invalid inline list",
                              {
                                line: damonTree.headless * -1 + damonTree.damonOriginalLinesMapping.indexOf(treeItemIndex - 1) + 2,
                                language: "DAMON"
                              }
                            );
                          }
                        }
                      }
                      let arrayOfPrimitives = longestPossibleArray.every(function(item) {
                        if (item === true) {
                          return true;
                        } else if (item === false) {
                          return true;
                        } else if (item === null) {
                          nullsCounter++;
                          return true;
                        } else if (typeof item == "string") {
                          return true;
                        } else if (isFinite(item) && !isNaN(parseFloat(item)) && Number.isFinite(item * 1) && !Number.isNaN(item * 1)) {
                          return true;
                        } else {
                          return false;
                        }
                      });
                      if (arrayOfPrimitives) {
                        jsonMap2.set(shortestPossibleKey, longestPossibleArray);
                        if (jsonMap2.damonInlineArrays === void 0) {
                          jsonMap2.damonInlineArrays = [];
                        }
                        jsonMap2.damonInlineArrays.push(shortestPossibleKey);
                      } else {
                        throw new Error(
                          "Error line number " + (damonTree.headless * -1 + damonTree.damonOriginalLinesMapping.indexOf(treeItemIndex - 1) + 2) + ": no nesting in inline lists",
                          {
                            line: damonTree.headless * -1 + damonTree.damonOriginalLinesMapping.indexOf(treeItemIndex - 1) + 2,
                            language: "DAMON"
                          }
                        );
                      }
                      if (tree2.children[i].children.length > 0) {
                        throw new Error(
                          "Error line number " + (damonTree.headless * -1 + damonTree.damonOriginalLinesMapping.indexOf(treeItemIndex - 1) + 3) + ": inline lists can't have children",
                          {
                            line: damonTree.headless * -1 + damonTree.damonOriginalLinesMapping.indexOf(treeItemIndex - 1) + 3,
                            language: "DAMON"
                          }
                        );
                      }
                    }
                  } else if (/: +\{ *\}$/.test(text)) {
                    let key = JSON.parse(
                      `["${text.slice(0, -1 * text.match(/: +\{ *\}$/)[0].length)}"]`
                    )[0];
                    jsonMap2.set(key, /* @__PURE__ */ new Map());
                    _recurse(tree2.children[i], jsonMap2.get(key));
                  } else {
                    let implicitProperty = false;
                    if (text.split(new RegExp(/: +/))[text.split(new RegExp(/: +/)).length - 1] === "true") {
                      let lastTextMatch = text.match(new RegExp(/: +/g))[text.match(new RegExp(/: +/g)).length - 1], key = JSON.parse(`["${text.slice(0, -1 * lastTextMatch.length - 4)}"]`)[0];
                      jsonMap2.set(key, true);
                    } else if (text.split(new RegExp(/: +/))[text.split(new RegExp(/: +/)).length - 1] === "false") {
                      let lastTextMatch = text.match(new RegExp(/: +/g))[text.match(new RegExp(/: +/g)).length - 1], key = JSON.parse(`["${text.slice(0, -1 * lastTextMatch.length - 5)}"]`)[0];
                      jsonMap2.set(key, false);
                    } else if (text.split(new RegExp(/: +/))[text.split(new RegExp(/: +/)).length - 1] == "null") {
                      let lastTextMatch = text.match(new RegExp(/: +/g))[text.match(new RegExp(/: +/g)).length - 1], key = JSON.parse(`["${text.slice(0, -1 * lastTextMatch.length - 4)}"]`)[0];
                      jsonMap2.set(key, null);
                    } else if (/^.*: +"/.test(text) && text[text.length - 1] == '"') {
                      let separatorMatches = text.match(new RegExp(/: +"/g));
                      if (separatorMatches.length == 1) {
                        let key = JSON.parse(
                          `["${text.split(separatorMatches[0])[0]}"]`
                        )[0];
                        errorType = "string";
                        let childText = JSON.parse(
                          `["${text.split(separatorMatches[0]).slice(1).join("").slice(0, -1)}"]`
                        )[0];
                        jsonMap2.set(key, childText);
                      } else if (separatorMatches.length == 2 && /: +"$/.test(text)) {
                        let key = JSON.parse(
                          `["${text.split(separatorMatches[0])[0]}"]`
                        )[0];
                        errorType = "string";
                        let childText = JSON.parse(
                          `["${text.split(separatorMatches[0]).slice(1).join("") + ": "}"]`
                        )[0];
                        jsonMap2.set(key, childText);
                      } else {
                        throw new Error(
                          "Error line number " + (damonTree.headless * -1 + damonTree.damonOriginalLinesMapping.indexOf(treeItemIndex - 1) + 2) + ": unescaped double quote",
                          {
                            line: damonTree.headless * -1 + damonTree.damonOriginalLinesMapping.indexOf(treeItemIndex - 1) + 2,
                            language: "DAMON"
                          }
                        );
                      }
                    } else if (/^.*: /.test(text) && isFinite(text.split(": ")[text.split(": ").length - 1]) && !isNaN(parseFloat(text.split(": ")[text.split(": ").length - 1])) && Number.isFinite(text.split(": ")[text.split(": ").length - 1] * 1) && !Number.isNaN(text.split(": ")[text.split(": ").length - 1] * 1)) {
                      let key = JSON.parse(`["${text.split(": ").slice(0, -1).join(": ")}"]`)[0];
                      errorType = "number";
                      let separatorMatches = text.match(new RegExp(/: +/g)), lastSeparatorMatch = separatorMatches[separatorMatches.length - 1], value = text.split(lastSeparatorMatch)[text.split(lastSeparatorMatch).length - 1];
                      if (value.indexOf(0) == 0 && value.length > 1 && value.indexOf(".") !== 1) {
                        throw new Error(
                          "Error line number " + (damonTree.headless * -1 + damonTree.damonOriginalLinesMapping.indexOf(treeItemIndex - 1) + 2) + ": leading 0",
                          {
                            line: damonTree.headless * -1 + damonTree.damonOriginalLinesMapping.indexOf(treeItemIndex - 1) + 2,
                            language: "DAMON"
                          }
                        );
                      }
                      let number = JSON.parse(`[${text.split(": ")[text.split(": ").length - 1] * 1}]`)[0];
                      jsonMap2.set(key, number);
                    } else if (/^.*: /.test(text) && text.split(new RegExp(/: +/))[text.split(new RegExp(/: +/)).length - 1] * 1 === Infinity) {
                      let key = JSON.parse(`["${text.split(": ").slice(0, -1).join(": ")}"]`)[0];
                      errorType = "infinity";
                      let number = JSON.parse(`[${text.split(": ")[text.split(": ").length - 1] * 1}]`);
                    } else {
                      let validValue = false, valueLength = 0;
                      if (/\[ *\]$/.test(text)) {
                        validValue = true;
                        valueLength = text.match(new RegExp(/\[ *\]$/g))[0].length;
                      }
                      if (/\{ *\}$/.test(text)) {
                        validValue = true;
                        valueLength = text.match(new RegExp(/\{ *\}$/g))[0].length;
                      }
                      if (/true$/.test(text)) {
                        validValue = true;
                        valueLength = 4;
                      }
                      if (/false$/.test(text)) {
                        validValue = true;
                        valueLength = 5;
                      }
                      if (/null$/.test(text)) {
                        validValue = true;
                        valueLength = 4;
                      }
                      if (/".*"$/.test(text)) {
                        validValue = true;
                        valueLength = text.match(new RegExp(/".*"$/g))[0].length;
                      }
                      if (!validValue) {
                        let accumulator = "";
                        for (let i2 = text.length - 1; i2 > -1; i2--) {
                          accumulator = text[i2].concat(accumulator);
                          if (isFinite(accumulator) && !isNaN(parseFloat(accumulator)) && Number.isFinite(accumulator * 1) && !Number.isNaN(accumulator * 1)) {
                            if (!/[ \t]/.test(text[i2])) {
                              break;
                            }
                            validValue = true;
                            valueLength = accumulator.length;
                          } else {
                            break;
                          }
                        }
                      }
                      if (validValue) {
                        let string = JSON.parse(`["${text.slice(0, -1 * valueLength)}"]`)[0];
                        if ($.pedantic) {
                          throw new Error(
                            "Error line number " + (damonTree.headless * -1 + damonTree.damonOriginalLinesMapping.indexOf(treeItemIndex)) + ": missing separator",
                            {
                              line: damonTree.headless * -1 + damonTree.damonOriginalLinesMapping.indexOf(treeItemIndex),
                              language: "DAMON",
                              errorType: "pedantic"
                            }
                          );
                        } else {
                          if (!/: +$/.test(string)) {
                            throw new Error(
                              "Error line number " + (damonTree.headless * -1 + damonTree.damonOriginalLinesMapping.indexOf(treeItemIndex)) + ": missing separator",
                              {
                                line: damonTree.headless * -1 + damonTree.damonOriginalLinesMapping.indexOf(treeItemIndex),
                                language: "DAMON",
                                errorType: "pedantic"
                              }
                            );
                          } else {
                            implicitProperty = true;
                            if (tree2.children[i].children.length > 0) {
                              errorType = "implicit map key";
                              let key = JSON.parse(`["${text}"]`)[0];
                              jsonMap2.set(key, /* @__PURE__ */ new Map());
                              if (jsonMap2.implicitMaps === void 0) {
                                jsonMap2.implicitMaps = [];
                              }
                              jsonMap2.implicitMaps.push(key);
                              _recurse(tree2.children[i], jsonMap2.get(key));
                            } else {
                              errorType = "implicit null key";
                              let key = JSON.parse(`["${text}"]`)[0];
                              jsonMap2.set(key, null);
                              if (jsonMap2.implicitNulls === void 0) {
                                jsonMap2.implicitNulls = [];
                              }
                              jsonMap2.implicitNulls.push(key);
                            }
                          }
                        }
                      } else {
                        let string = JSON.parse(`["${text.slice(0, -1 * valueLength)}"]`)[0];
                        if ($.pedantic) {
                          if (/: +$/.test(string)) {
                            throw new Error(
                              "Error line number " + (damonTree.headless * -1 + damonTree.damonOriginalLinesMapping.indexOf(treeItemIndex - 1) + 3) + ": bad value",
                              {
                                line: damonTree.headless * -1 + damonTree.damonOriginalLinesMapping.indexOf(treeItemIndex),
                                language: "DAMON",
                                errorType: "pedantic"
                              }
                            );
                          } else {
                            throw new Error(
                              "Error line number " + (damonTree.headless * -1 + damonTree.damonOriginalLinesMapping.indexOf(treeItemIndex)) + ": missing separator",
                              {
                                line: damonTree.headless * -1 + damonTree.damonOriginalLinesMapping.indexOf(treeItemIndex),
                                language: "DAMON",
                                errorType: "pedantic"
                              }
                            );
                          }
                        } else {
                          implicitProperty = true;
                          if (tree2.children[i].children.length > 0) {
                            errorType = "implicit map key";
                            let key = JSON.parse(`["${text}"]`)[0];
                            jsonMap2.set(key, /* @__PURE__ */ new Map());
                            if (jsonMap2.implicitMaps === void 0) {
                              jsonMap2.implicitMaps = [];
                            }
                            jsonMap2.implicitMaps.push(key);
                            _recurse(tree2.children[i], jsonMap2.get(key));
                          } else {
                            errorType = "implicit null key";
                            let key = JSON.parse(`["${text}"]`)[0];
                            jsonMap2.set(key, null);
                            if (jsonMap2.implicitNulls === void 0) {
                              jsonMap2.implicitNulls = [];
                            }
                            jsonMap2.implicitNulls.push(key);
                          }
                        }
                      }
                    }
                    if (!implicitProperty && tree2.children[i].children.length > 0) {
                      throw new Error(
                        "Error line number " + (damonTree.headless * -1 + damonTree.damonOriginalLinesMapping.indexOf(treeItemIndex - 1) + 3) + ": missing container or excess indentation",
                        {
                          line: damonTree.headless * -1 + damonTree.damonOriginalLinesMapping.indexOf(treeItemIndex - 1) + 3,
                          language: "DAMON"
                        }
                      );
                    }
                  }
                } catch (error) {
                  if (error.language === void 0) {
                    console.error(
                      "Error line number " + (damonTree.headless * -1 + damonTree.damonOriginalLinesMapping.indexOf(treeItemIndex - 1) + 2) + ": not JSON-compliant, detailed error follows"
                    );
                    error.line = damonTree.headless * -1 + damonTree.damonOriginalLinesMapping.indexOf(treeItemIndex - 1) + 2;
                    error.language = "JSON";
                    error.type = errorType;
                  }
                  throw error;
                }
              }
            }
          }
          function _listHandler(tree2, jsonMap2) {
            for (let i = 0, c = tree2.children.length; i < c; i++) {
              treeItemIndex++;
              if (tree2.children[i].content.length) {
                let text = tree2.children[i].content;
                if (/^[ \t]*\[/.test(text) && text[text.length - 1] == "]") {
                  if (/^[ \t]*\[ *\]$/.test(text)) {
                    jsonMap2.push([]);
                    _recurse(tree2.children[i], jsonMap2[jsonMap2.length - 1]);
                  } else {
                    let inlineArray;
                    try {
                      inlineArray = JSON.parse(text);
                    } catch (error) {
                      throw new Error(
                        "Error line number " + (damonTree.headless * -1 + damonTree.damonOriginalLinesMapping.indexOf(treeItemIndex - 1) + 2) + ": invalid inline lists",
                        {
                          line: damonTree.headless * -1 + damonTree.damonOriginalLinesMapping.indexOf(treeItemIndex - 1) + 2,
                          language: "JSON",
                          type: "list"
                        }
                      );
                    }
                    let arrayOfPrimitives = inlineArray.every(function(item) {
                      if (item === true) {
                        return true;
                      } else if (item === false) {
                        return true;
                      } else if (item === null) {
                        nullsCounter++;
                        return true;
                      } else if (typeof item == "string") {
                        return true;
                      } else if (isFinite(item) && !isNaN(parseFloat(item)) && Number.isFinite(item * 1) && !Number.isNaN(item * 1)) {
                        return true;
                      } else {
                        return false;
                      }
                    });
                    if (arrayOfPrimitives) {
                      jsonMap2.push(inlineArray);
                      if (jsonMap2.damonInlineArrays === void 0) {
                        jsonMap2.damonInlineArrays = [];
                      }
                      jsonMap2.damonInlineArrays.push(i);
                    } else {
                      throw new Error(
                        "Error line number " + (damonTree.headless * -1 + damonTree.damonOriginalLinesMapping.indexOf(treeItemIndex - 1) + 2) + ": no nesting in inline lists",
                        {
                          line: damonTree.headless * -1 + damonTree.damonOriginalLinesMapping.indexOf(treeItemIndex - 1) + 2,
                          language: "DAMON"
                        }
                      );
                    }
                    if (tree2.children[i].children.length > 0) {
                      throw new Error(
                        "Error line number " + (damonTree.headless * -1 + damonTree.damonOriginalLinesMapping.indexOf(treeItemIndex - 1) + 3) + ": inline lists can't have children",
                        {
                          line: damonTree.headless * -1 + damonTree.damonOriginalLinesMapping.indexOf(treeItemIndex - 1) + 3,
                          language: "DAMON"
                        }
                      );
                    }
                  }
                } else if (/^[ \t]*\{\}$/.test(text)) {
                  jsonMap2.push(/* @__PURE__ */ new Map());
                  _recurse(tree2.children[i], jsonMap2[jsonMap2.length - 1]);
                } else if (/^[ \t]*true$/.test(text)) {
                  jsonMap2.push(true);
                } else if (/^[ \t]*false$/.test(text)) {
                  jsonMap2.push(false);
                } else if (/^[ \t]*null$/.test(text)) {
                  jsonMap2.push(null);
                } else if (/^[ \t]*".*"$/.test(text)) {
                  try {
                    jsonMap2.push(JSON.parse(`[${text.trimStart()}]`)[0]);
                  } catch (error) {
                    console.error(
                      "Error line number " + (damonTree.headless * -1 + damonTree.damonOriginalLinesMapping.indexOf(treeItemIndex - 1) + 2) + ": not JSON-compliant, detailed error follows"
                    );
                    error.line = damonTree.headless * -1 + damonTree.damonOriginalLinesMapping.indexOf(treeItemIndex - 1) + 2;
                    error.language = "JSON";
                    error.type = "string";
                    throw error;
                  }
                } else if (isFinite(text) && !isNaN(parseFloat(text)) && Number.isFinite(text * 1) && !Number.isNaN(text * 1)) {
                  if (text.indexOf(0) == 0 && text.length > 1 && text.indexOf(".") !== 1) {
                    throw new Error(
                      "Error line number " + (damonTree.headless * -1 + damonTree.damonOriginalLinesMapping.indexOf(treeItemIndex - 1) + 2) + ": leading 0",
                      {
                        line: damonTree.headless * -1 + damonTree.damonOriginalLinesMapping.indexOf(treeItemIndex - 1) + 2,
                        language: "DAMON"
                      }
                    );
                  }
                  try {
                    jsonMap2.push(JSON.parse(`[${text * 1}]`)[0]);
                  } catch (error) {
                    console.error(
                      "Error line number " + (damonTree.headless * -1 + damonTree.damonOriginalLinesMapping.indexOf(treeItemIndex - 1) + 2) + ": not JSON-compliant, detailed error follows"
                    );
                    error.line = damonTree.headless * -1 + damonTree.damonOriginalLinesMapping.indexOf(treeItemIndex - 1) + 2;
                    error.language = "JSON";
                    error.type = "number";
                    throw error;
                  }
                } else if (text * 1 === Infinity) {
                  try {
                    JSON.parse(text * 1);
                  } catch (error) {
                    console.error(
                      "Error line number " + (damonTree.headless * -1 + damonTree.damonOriginalLinesMapping.indexOf(treeItemIndex - 1) + 2) + ": not JSON-compliant, detailed error follows"
                    );
                    error.line = damonTree.headless * -1 + damonTree.damonOriginalLinesMapping.indexOf(treeItemIndex - 1) + 2;
                    error.language = "JSON";
                    error.type = "infinity";
                    throw error;
                  }
                } else {
                  throw new Error(
                    "Error line number " + (damonTree.headless * -1 + damonTree.damonOriginalLinesMapping.indexOf(treeItemIndex - 1) + 2) + ": list items can't have a key",
                    {
                      line: damonTree.headless * -1 + damonTree.damonOriginalLinesMapping.indexOf(treeItemIndex - 1) + 2,
                      language: "DAMON"
                    }
                  );
                }
              } else {
                throw new Error(
                  "Error line number " + (damonTree.headless * -1 + damonTree.damonOriginalLinesMapping.indexOf(treeItemIndex - 1) + 2) + ": empty list node",
                  {
                    line: damonTree.headless * -1 + damonTree.damonOriginalLinesMapping.indexOf(treeItemIndex - 1) + 2,
                    language: "DAMON"
                  }
                );
              }
            }
          }
        }
        /**
         * @param {Map<string, any>|Array<any>|boolean|null|string|number} jsonMap
         * @param {boolean} pristine
         * @returns {string}
         */
        mapToDamon(jsonMap2, pristine) {
          let $ = this;
          var list = ``;
          if (Array.isArray(jsonMap2)) {
            list += "- []\n";
          } else if (typeof jsonMap2 === "object" && jsonMap2 !== null && jsonMap2 instanceof Map && jsonMap2.constructor === Map) {
            list += "- {}\n";
          } else {
            if (typeof jsonMap2 == "string") {
              jsonMap2 = '"' + jsonMap2 + '"';
            }
            JSON.parse(jsonMap2);
            return jsonMap2;
          }
          _recurse(jsonMap2);
          $.damonToMap(list.slice(0, -1));
          return list.slice(0, -1);
          function _recurse(jsonMap3, level = 1) {
            if (typeof jsonMap3 === "object" && jsonMap3 !== null && !Array.isArray(jsonMap3) && jsonMap3 instanceof Map && jsonMap3.constructor === Map) {
              for (const [key, value] of jsonMap3) {
                if (typeof value === "object" && value !== null) {
                  if (Array.isArray(value)) {
                    let nullsCounter2 = 0, arrayOfPrimitives = value.filter(function(item) {
                      if (item === true) {
                        return true;
                      } else if (item === false) {
                        return true;
                      } else if (item === null) {
                        nullsCounter2++;
                        return true;
                      } else if (typeof item == "string") {
                        return true;
                      } else if (isFinite(item) && !isNaN(parseFloat(item)) && Number.isFinite(item * 1) && !Number.isNaN(item * 1)) {
                        return true;
                      } else {
                        return false;
                      }
                    });
                    if (
                      // No nesting, fits on an archivable line
                      value.length == arrayOfPrimitives.length && level * 4 + 2 + value.join(", ").length + nullsCounter2 * 4 <= 80 || // Inlining specified from parsing
                      pristine && jsonMap3.damonInlineArrays !== void 0 && jsonMap3.damonInlineArrays.indexOf(key) > -1
                    ) {
                      let line = "[" + value.map(function(x) {
                        if (typeof x == "string") {
                          x = JSON.stringify(x);
                        }
                        return x;
                      }).join(", ") + "]";
                      list += "    ".repeat(level) + "- " + JSON.stringify(key).slice(1, -1) + ": " + line + "\n";
                    } else {
                      list += "    ".repeat(level) + "- " + JSON.stringify(key).slice(1, -1) + ": []\n";
                      _recurse(value, level + 1);
                    }
                  } else {
                    list += "    ".repeat(level) + "- " + JSON.stringify(key).slice(1, -1) + ": {}\n";
                    _recurse(value, level + 1);
                  }
                } else {
                  list += "    ".repeat(level) + "- " + JSON.stringify(key).slice(1, -1) + ": ";
                  if (value === true) {
                    list += "true\n";
                  } else if (value === false) {
                    list += "false\n";
                  } else if (value === null) {
                    list += "null\n";
                  } else if (Number.isFinite(value) && !Number.isNaN(value)) {
                    list += value + "\n";
                  } else {
                    list += JSON.stringify(value) + "\n";
                  }
                }
              }
            } else if (Array.isArray(jsonMap3)) {
              for (var i = 0, c = jsonMap3.length; i < c; i++) {
                if (typeof jsonMap3[i] === "object" && jsonMap3[i] !== null) {
                  if (Array.isArray(jsonMap3[i])) {
                    let nullsCounter2 = 0, arrayOfPrimitives = jsonMap3[i].filter(function(item) {
                      if (item === true) {
                        return true;
                      } else if (item === false) {
                        return true;
                      } else if (item === null) {
                        nullsCounter2++;
                        return true;
                      } else if (typeof item == "string") {
                        return true;
                      } else if (isFinite(item) && !isNaN(parseFloat(item)) && Number.isFinite(item * 1) && !Number.isNaN(item * 1)) {
                        return true;
                      } else {
                        return false;
                      }
                    });
                    if (jsonMap3[i].length == arrayOfPrimitives.length && level * 4 + 2 + jsonMap3[i].join(", ").length + nullsCounter2 * 4 <= 80 || pristine && jsonMap3.damonInlineArrays !== void 0 && jsonMap3.damonInlineArrays.indexOf(i) > -1) {
                      let line = "[" + jsonMap3[i].map(function(x) {
                        if (typeof x == "string") {
                          x = JSON.stringify(x);
                        }
                        return x;
                      }).join(", ") + "]";
                      list += "    ".repeat(level) + "- " + line + "\n";
                    } else {
                      list += "    ".repeat(level) + "- []\n";
                      _recurse(jsonMap3[i], level + 1);
                    }
                  } else {
                    list += "    ".repeat(level) + "- {}\n";
                    _recurse(jsonMap3[i], level + 1);
                  }
                } else {
                  if (jsonMap3[i] === true) {
                    list += "    ".repeat(level) + "- true\n";
                  } else if (jsonMap3[i] === false) {
                    list += "    ".repeat(level) + "- false\n";
                  } else if (jsonMap3[i] === null) {
                    list += "    ".repeat(level) + "- null\n";
                  } else if (Number.isFinite(jsonMap3[i]) && !Number.isNaN(jsonMap3[i])) {
                    list += "    ".repeat(level) + "- " + jsonMap3[i] + "\n";
                  } else {
                    list += "    ".repeat(level) + "- " + JSON.stringify(jsonMap3[i]) + "\n";
                  }
                }
              }
            }
          }
        }
        /**
         * @param {Map<string, any>|Array<any>|boolean|null|string|number} jsonMap
         * @returns {string}
         */
        mapToJSON(jsonMap2) {
          let $ = this;
          var list = ``;
          if (Array.isArray(jsonMap2)) {
            list += "[\r\n";
            _recurse(jsonMap2);
            list += "]";
            JSON.parse(list);
            return list;
          } else if (typeof jsonMap2 === "object" && jsonMap2 !== null && jsonMap2 instanceof Map && jsonMap2.constructor === Map) {
            list += "{\r\n";
            _recurse(jsonMap2);
            list += "}";
            JSON.parse(list);
            return list;
          } else {
            if (typeof jsonMap2 == "string") {
              jsonMap2 = JSON.stringify(jsonMap2);
            }
            JSON.parse(jsonMap2);
            return jsonMap2;
          }
          function _recurse(jsonMap3, level = 1) {
            if (typeof jsonMap3 === "object" && jsonMap3 !== null && !Array.isArray(jsonMap3) && jsonMap3 instanceof Map && jsonMap3.constructor === Map) {
              for (const [key, value] of jsonMap3) {
                if (typeof value === "object" && value !== null) {
                  if (Array.isArray(value)) {
                    if (value.length > 0) {
                      list += "    ".repeat(level) + `${JSON.stringify(key)}: [\r
`;
                      _recurse(value, level + 1);
                      list += "    ".repeat(level) + `]`;
                    } else {
                      list += "    ".repeat(level) + `${JSON.stringify(key)}: []`;
                    }
                  } else {
                    if (Array.from(value.keys()).length > 0) {
                      list += "    ".repeat(level) + `${JSON.stringify(key)}: {\r
`;
                      _recurse(value, level + 1);
                      list += "    ".repeat(level) + `}`;
                    } else {
                      list += "    ".repeat(level) + `${JSON.stringify(key)}: {}`;
                    }
                  }
                } else {
                  if (value === true) {
                    list += "    ".repeat(level) + `${JSON.stringify(key)}: true`;
                  } else if (value === false) {
                    list += "    ".repeat(level) + `${JSON.stringify(key)}: false`;
                  } else if (value === null) {
                    list += "    ".repeat(level) + `${JSON.stringify(key)}: null`;
                  } else if (Number.isFinite(value) && !Number.isNaN(value)) {
                    list += "    ".repeat(level) + `${JSON.stringify(key)}: ` + value;
                  } else {
                    list += "    ".repeat(level) + `${JSON.stringify(key)}: ` + JSON.stringify(value);
                  }
                }
                if (key != Array.from(jsonMap3.keys())[Array.from(jsonMap3.keys()).length - 1]) {
                  list += ",\r\n";
                } else {
                  list += "\r\n";
                }
              }
            } else if (Array.isArray(jsonMap3)) {
              for (var i = 0, c = jsonMap3.length; i < c; i++) {
                if (typeof jsonMap3[i] === "object" && jsonMap3[i] !== null) {
                  if (Array.isArray(jsonMap3[i])) {
                    if (jsonMap3[i].length > 0) {
                      list += "    ".repeat(level) + `[\r
`;
                      _recurse(jsonMap3[i], level + 1);
                      list += "    ".repeat(level) + `]`;
                    } else {
                      list += "    ".repeat(level) + `[]`;
                    }
                  } else {
                    if (Array.from(jsonMap3[i].keys()).length > 0) {
                      list += "    ".repeat(level) + `{\r
`;
                      _recurse(jsonMap3[i], level + 1);
                      list += "    ".repeat(level) + `}`;
                    } else {
                      list += "    ".repeat(level) + `{}`;
                    }
                  }
                } else {
                  if (jsonMap3[i] === true) {
                    list += "    ".repeat(level) + "true";
                  } else if (jsonMap3[i] === false) {
                    list += "    ".repeat(level) + "false";
                  } else if (jsonMap3[i] === null) {
                    list += "    ".repeat(level) + "null";
                  } else if (Number.isFinite(jsonMap3[i]) && !Number.isNaN(jsonMap3[i])) {
                    list += "    ".repeat(level) + jsonMap3[i];
                  } else {
                    list += "    ".repeat(level) + JSON.stringify(jsonMap3[i]);
                  }
                }
                if (i != c - 1) {
                  list += ",\r\n";
                } else {
                  list += "\r\n";
                }
              }
            }
          }
        }
        /**
         * @param {Map<string, any>|Array<any>|boolean|null|string|number} jsonMap
         * @returns {string}
         */
        implicitMapToSExpression(jsonMap2) {
          let $ = this;
          var list = ``;
          if (typeof jsonMap2 === "object" && jsonMap2 !== null && jsonMap2 instanceof Map && jsonMap2.constructor === Map) {
            list += "[\r\n";
            _recurse(jsonMap2);
            list += "]";
            JSON.parse(list);
            return list;
          } else {
            if (typeof jsonMap2 == "string") {
              jsonMap2 = '"' + jsonMap2 + '"';
            }
            JSON.parse(jsonMap2);
            return jsonMap2;
          }
          function _recurse(jsonMap3, level = 1) {
            if (typeof jsonMap3 === "object" && jsonMap3 !== null && !Array.isArray(jsonMap3) && jsonMap3 instanceof Map && jsonMap3.constructor === Map) {
              let i2 = -1;
              for (const [key, value] of jsonMap3) {
                i2++;
                if (typeof value === "object" && value !== null) {
                  if (Array.isArray(value)) {
                    if (value.length > 0) {
                      list += "    ".repeat(level) + `${JSON.stringify(key)}, [\r
`;
                      _recurse(value, level + 1);
                      list += "    ".repeat(level) + `]`;
                    } else {
                      list += "    ".repeat(level) + `${JSON.stringify(key)}, []`;
                    }
                  } else {
                    if (Array.from(value.keys()).length > 0) {
                      if (level == 1) {
                        if (i2 == 0) {
                          list = "";
                        } else {
                          throw new Error("Multiple S-Expression roots");
                        }
                      }
                      list += "    ".repeat(level) + `[${JSON.stringify(key)}, \r
`;
                      _recurse(value, level + 1);
                      if (level != 1) {
                        list += "    ".repeat(level) + `]`;
                      }
                    } else {
                      list += "    ".repeat(level) + `${JSON.stringify(key)}, []`;
                    }
                  }
                } else {
                  if (value === true) {
                    throw new Error("Booleans require quotes");
                  } else if (value === false) {
                    throw new Error("Booleans require quotes");
                  } else if (value === null) {
                    list += "    ".repeat(level) + `${JSON.stringify(key)}`;
                  } else if (Number.isFinite(value) && !Number.isNaN(value)) {
                    list += "    ".repeat(level) + `${JSON.stringify(key)}, ` + value;
                  } else {
                    list += "    ".repeat(level) + `${JSON.stringify(key)}, "${value}"`;
                  }
                }
                if (key != Array.from(jsonMap3.keys())[Array.from(jsonMap3.keys()).length - 1]) {
                  list += ",\r\n";
                } else {
                  list += "\r\n";
                }
              }
            } else if (Array.isArray(jsonMap3)) {
              for (var i = 0, c = jsonMap3.length; i < c; i++) {
                if (typeof jsonMap3[i] === "object" && jsonMap3[i] !== null) {
                  if (Array.isArray(jsonMap3[i])) {
                    if (jsonMap3[i].length > 0) {
                      list += "    ".repeat(level) + `[\r
`;
                      _recurse(jsonMap3[i], level + 1);
                      list += "    ".repeat(level) + `]`;
                    } else {
                      list += "    ".repeat(level) + `[]`;
                    }
                  } else {
                    if (Array.from(jsonMap3[i].keys()).length > 0) {
                      list += "    ".repeat(level) + `[\r
`;
                      _recurse(jsonMap3[i], level + 1);
                      list += "    ".repeat(level) + `]`;
                    } else {
                      list += "    ".repeat(level) + `[]`;
                    }
                  }
                } else {
                  if (jsonMap3[i] === true) {
                    throw new Error("Booleans require quotes");
                  } else if (jsonMap3[i] === false) {
                    throw new Error("Booleans require quotes");
                  } else if (jsonMap3[i] === null) {
                    throw new Error("Array-nulls require quotes");
                  } else if (Number.isFinite(jsonMap3[i]) && !Number.isNaN(jsonMap3[i])) {
                    list += "    ".repeat(level) + jsonMap3[i];
                  } else {
                    list += "    ".repeat(level) + JSON.stringify(jsonMap3[i]);
                  }
                }
                if (i != c - 1) {
                  list += ",\r\n";
                } else {
                  list += "\r\n";
                }
              }
            }
          }
        }
        /**
         * @param {string} damon
         * @param {Array<string|number>} path
         * @returns {Array<Array<number>>}
         */
        getRangeFromPath(damon, path) {
          let $ = this;
          let damonMap = $.damonToMap(damon), line = -1, found = false;
          _incrementLineUntilReaching(damonMap, path);
          if (damonMap.headless)
            line -= 1;
          let totalLines = 0, match = 0;
          for (let i = 0, c = damonMap.damonOriginalLinesMapping.length; i < c; i++) {
            if (damonMap.damonOriginalLinesMapping[i] !== null) {
              match++;
            }
            if (match == line) {
              totalLines = i + 1;
              break;
            }
          }
          let lineText = $._getLines(damon)[totalLines], start = 0, end = lineText.length;
          if (path.length == 1) {
            if (typeof path[path.length - 1] == "string") {
              start = lineText.length - lineText.trimStart().slice(2 + path[path.length - 1].length + 2).trimStart().length;
            } else {
              start = lineText.length - lineText.trimStart().slice(2).length;
            }
          } else {
            if (typeof path[path.length - 2] == "string") {
              if (typeof path[path.length - 1] == "string") {
                start = lineText.length - lineText.trimStart().slice(2 + path[path.length - 1].length + 2).trimStart().length;
              } else {
                if (lineText[lineText.length - 1] == "]" && !/\[ *\]$/.test(lineText)) {
                  let arrayText = lineText.trimStart().slice(2 + path[path.length - 2].length + 2), array = JSON.parse(arrayText), occurences = array.slice(0, path[path.length - 1].length).reduce((acc, value) => acc + (value === array[path[path.length - 1]]), 0), index = 0, match2 = array[path[path.length - 1]];
                  if (typeof match2 == "string")
                    match2 = '"' + match2 + '"';
                  for (let i = 0, c = occurences + 1; i < c; i++) {
                    index = arrayText.indexOf(match2, index);
                  }
                  start = lineText.length - arrayText.length + index;
                  end = start + match2.length;
                } else {
                  start = lineText.length - lineText.trimStart().slice(2).length;
                }
              }
            } else {
              if (typeof path[path.length - 1] == "string") {
                start = lineText.length - lineText.trimStart().slice(2 + path[path.length - 1].length + 2).trimStart().length;
              } else {
                if (lineText[lineText.length - 1] == "]" && !/\[ *\]$/.test(lineText)) {
                  let arrayText = lineText.trimStart().slice(2), array = JSON.parse(arrayText), occurences = array.slice(0, path[path.length - 1]).reduce((acc, value) => acc + (value === array[path[path.length - 1]]), 0), index = 0, match2 = array[path[path.length - 1]];
                  if (typeof match2 == "string")
                    match2 = '"' + match2 + '"';
                  for (let i = 0, c = occurences + 1; i < c; i++) {
                    index = arrayText.indexOf(match2, index);
                  }
                  start = lineText.length - arrayText.length + index;
                  end = start + match2.length;
                } else {
                  start = lineText.length - lineText.trimStart().slice(2).length;
                }
              }
            }
          }
          return [[totalLines, start], [totalLines, end]];
          function _incrementLineUntilReaching(map, targetPath, currentPath = []) {
            if (found == true) {
              return;
            }
            line += 1;
            if (typeof map === "object" && map !== null && !Array.isArray(map) && map instanceof Map && map.constructor === Map) {
              for (const [key, value] of map) {
                line += 1;
                if (typeof value === "object" && value !== null && !Array.isArray(value) && value instanceof Map && value.constructor === Map) {
                  if (JSON.stringify(targetPath) === JSON.stringify(currentPath.concat([key]))) {
                    found = true;
                    return;
                  } else if (Array.from(value.keys()).length) {
                    line -= 1;
                    _incrementLineUntilReaching(value, targetPath, currentPath.concat([key]));
                  }
                } else if (Array.isArray(value)) {
                  if (JSON.stringify(targetPath) === JSON.stringify(currentPath.concat([key]))) {
                    found = true;
                    return;
                  } else if ((map.damonInlineArrays == void 0 || map.damonInlineArrays.indexOf(key) === -1) && value.length) {
                    line -= 1;
                    _incrementLineUntilReaching(value, targetPath, currentPath.concat([key]));
                  }
                }
              }
            } else {
              for (let i = 0, c = map.length; i < c; i++) {
                line += 1;
                if (typeof map[i] === "object" && map[i] !== null && !Array.isArray(map[i]) && map[i] instanceof Map && map[i].constructor === Map) {
                  if (JSON.stringify(targetPath) === JSON.stringify(currentPath.concat([i]))) {
                    found = true;
                    return;
                  } else if (Array.from(map[i].keys()).length) {
                    line -= 1;
                    _incrementLineUntilReaching(map[i], targetPath, currentPath.concat([i]));
                  }
                } else if (Array.isArray(map[i])) {
                  if (JSON.stringify(targetPath) === JSON.stringify(currentPath.concat([i]))) {
                    found = true;
                    return;
                  } else if ((map.damonInlineArrays == void 0 || map.damonInlineArrays.indexOf(i) === -1) && map[i].length) {
                    line -= 1;
                    _incrementLineUntilReaching(map[i], targetPath, currentPath.concat([i]));
                  }
                }
              }
            }
          }
        }
      };
    }
  });

  // main.js
  (function() {
    window.Damon = require_Damon();
  })();
})();
/*! Bundled license information:

dompurify/dist/purify.js:
  (*! @license DOMPurify 3.0.11 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.0.11/LICENSE *)
*/
//# sourceMappingURL=out.js.map

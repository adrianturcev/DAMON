(() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined") return require.apply(this, arguments);
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
    __rewriteRelativeImportExtension: () => __rewriteRelativeImportExtension,
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
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
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
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  }
  function __param(paramIndex, decorator) {
    return function(target, key) {
      decorator(target, key, paramIndex);
    };
  }
  function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) {
      if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
      return f;
    }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
      var context = {};
      for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
      for (var p in contextIn.access) context.access[p] = contextIn.access[p];
      context.addInitializer = function(f) {
        if (done) throw new TypeError("Cannot add initializers after decoration has completed");
        extraInitializers.push(accept(f || null));
      };
      var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
      if (kind === "accessor") {
        if (result === void 0) continue;
        if (result === null || typeof result !== "object") throw new TypeError("Object expected");
        if (_ = accept(result.get)) descriptor.get = _;
        if (_ = accept(result.set)) descriptor.set = _;
        if (_ = accept(result.init)) initializers.unshift(_);
      } else if (_ = accept(result)) {
        if (kind === "field") initializers.unshift(_);
        else descriptor[key] = _;
      }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
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
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
  }
  function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
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
      if (t[0] & 1) throw t[1];
      return t[1];
    }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
      return this;
    }), g;
    function verb(n) {
      return function(v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (g && (g = 0, op[0] && (_ = 0)), _) try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];
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
            if (t[2]) _.ops.pop();
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
      if (op[0] & 5) throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  }
  function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
  }
  function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
      next: function() {
        if (o && i >= o.length) o = void 0;
        return { value: o && o[i++], done: !o };
      }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
  }
  function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    } catch (error) {
      e = { error };
    } finally {
      try {
        if (r && !r.done && (m = i["return"])) m.call(i);
      } finally {
        if (e) throw e.error;
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
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
        r[k] = a[j];
    return r;
  }
  function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
        if (!ar) ar = Array.prototype.slice.call(from, 0, i);
        ar[i] = from[i];
      }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
  }
  function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
  }
  function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function() {
      return this;
    }, i;
    function awaitReturn(f) {
      return function(v) {
        return Promise.resolve(v).then(f, reject);
      };
    }
    function verb(n, f) {
      if (g[n]) {
        i[n] = function(v) {
          return new Promise(function(a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
        if (f) i[n] = f(i[n]);
      }
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
      if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
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
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
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
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
      for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
    }
    __setModuleDefault(result, mod);
    return result;
  }
  function __importDefault(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  }
  function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
  }
  function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
  }
  function __classPrivateFieldIn(state, receiver) {
    if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
  }
  function __addDisposableResource(env, value, async) {
    if (value !== null && value !== void 0) {
      if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
      var dispose, inner;
      if (async) {
        if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
        dispose = value[Symbol.asyncDispose];
      }
      if (dispose === void 0) {
        if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
        dispose = value[Symbol.dispose];
        if (async) inner = dispose;
      }
      if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
      if (inner) dispose = function() {
        try {
          inner.call(this);
        } catch (e) {
          return Promise.reject(e);
        }
      };
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
    var r, s = 0;
    function next() {
      while (r = env.stack.pop()) {
        try {
          if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
          if (r.dispose) {
            var result = r.dispose.call(r.value);
            if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) {
              fail(e);
              return next();
            });
          } else s |= 1;
        } catch (e) {
          fail(e);
        }
      }
      if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
      if (env.hasError) throw env.error;
    }
    return next();
  }
  function __rewriteRelativeImportExtension(path, preserveJsx) {
    if (typeof path === "string" && /^\.\.?\//.test(path)) {
      return path.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(m, tsx, d, ext, cm) {
        return tsx ? preserveJsx ? ".jsx" : ".js" : d && (!ext || !cm) ? m : d + ext + "." + cm.toLowerCase() + "js";
      });
    }
    return path;
  }
  var extendStatics, __assign, __createBinding, __setModuleDefault, ownKeys, _SuppressedError, tslib_es6_default;
  var init_tslib_es6 = __esm({
    "node_modules/tslib/tslib.es6.mjs"() {
      extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      __assign = function() {
        __assign = Object.assign || function __assign2(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
          return t;
        };
        return __assign.apply(this, arguments);
      };
      __createBinding = Object.create ? function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        o[k2] = m[k];
      };
      __setModuleDefault = Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      };
      ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function(o2) {
          var ar = [];
          for (var k in o2) if (Object.prototype.hasOwnProperty.call(o2, k)) ar[ar.length] = k;
          return ar;
        };
        return ownKeys(o);
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
        __esDecorate,
        __runInitializers,
        __propKey,
        __setFunctionName,
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
        __disposeResources,
        __rewriteRelativeImportExtension
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
        for (var s_ in clarinet2.STATE) clarinet2.STATE[clarinet2.STATE[s_]] = s_;
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
            for (var i in o) if (o.hasOwnProperty(i)) a.push(i);
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
          if (!(this instanceof CParser)) return new CParser(opt);
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
          if (!(this instanceof CStream)) return new CStream(opt);
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
              if (n >= 194 && n <= 223) this.bytes_in_sequence = 2;
              if (n >= 224 && n <= 239) this.bytes_in_sequence = 3;
              if (n >= 240 && n <= 244) this.bytes_in_sequence = 4;
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
              if (data[p] >= 128) break;
            }
            this.string = data.slice(i, p).toString();
            this._parser.write(this.string);
            this.emit("data", this.string);
            i = p - 1;
            continue;
          }
        };
        CStream.prototype.end = function(chunk) {
          if (chunk && chunk.length) this._parser.write(chunk.toString());
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
          if (clarinet2.INFO) console.log("-- emit", event, data);
          if (parser[event]) parser[event](data);
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
          if (opt.trim) text = text.trim();
          if (opt.normalize) text = text.replace(/\s+/g, " ");
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
          if (this.error) throw this.error;
          if (parser.closed) return error(
            parser,
            "Cannot write after close. Assign an onready handler."
          );
          if (chunk === null) return end(parser);
          var i = 0, c = chunk.charCodeAt(0), p = parser.p;
          var lockIncrements = false;
          if (clarinet2.DEBUG) console.log("write -> [" + chunk + "]");
          while (c) {
            p = c;
            parser.c = c = chunk.charCodeAt(i++);
            if (p !== c) parser.p = p;
            else p = parser.p;
            if (!c) break;
            if (clarinet2.DEBUG) console.log(i, c, clarinet2.STATE[parser.state]);
            if (!lockIncrements) {
              parser.position++;
              if (c === Char.lineFeed) {
                parser.line++;
                parser.column = 0;
              } else parser.column++;
            } else {
              lockIncrements = false;
            }
            switch (parser.state) {
              case S.BEGIN:
                if (c === Char.openBrace) parser.state = S.OPEN_OBJECT;
                else if (c === Char.openBracket) parser.state = S.OPEN_ARRAY;
                else if (!isWhitespace(c))
                  error(parser, "Non-whitespace before {[.");
                continue;
              case S.OPEN_KEY:
              case S.OPEN_OBJECT:
                if (isWhitespace(c)) continue;
                if (parser.state === S.OPEN_KEY) parser.stack.push(S.CLOSE_KEY);
                else {
                  if (c === Char.closeBrace) {
                    emit(parser, "onopenobject");
                    this.depth++;
                    emit(parser, "oncloseobject");
                    this.depth--;
                    parser.state = parser.stack.pop() || S.VALUE;
                    continue;
                  } else parser.stack.push(S.CLOSE_OBJECT);
                }
                if (c === Char.doubleQuote) parser.state = S.STRING;
                else error(parser, 'Malformed object key should start with "');
                continue;
              case S.CLOSE_KEY:
              case S.CLOSE_OBJECT:
                if (isWhitespace(c)) continue;
                var event = parser.state === S.CLOSE_KEY ? "key" : "object";
                if (c === Char.colon) {
                  if (parser.state === S.CLOSE_OBJECT) {
                    parser.stack.push(S.CLOSE_OBJECT);
                    closeValue(parser, "onopenobject");
                    this.depth++;
                  } else closeValue(parser, "onkey");
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
                } else error(parser, "Bad object");
                continue;
              case S.OPEN_ARRAY:
              // after an array there always a value
              case S.VALUE:
                if (isWhitespace(c)) continue;
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
                if (c === Char.doubleQuote) parser.state = S.STRING;
                else if (c === Char.openBrace) parser.state = S.OPEN_OBJECT;
                else if (c === Char.openBracket) parser.state = S.OPEN_ARRAY;
                else if (c === Char.t) parser.state = S.TRUE;
                else if (c === Char.f) parser.state = S.FALSE;
                else if (c === Char.n) parser.state = S.NULL;
                else if (c === Char.minus) {
                  parser.numberNode += "-";
                } else if (Char._0 <= c && c <= Char._9) {
                  parser.numberNode += String.fromCharCode(c);
                  parser.state = S.NUMBER_DIGIT;
                } else error(parser, "Bad value");
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
                else error(parser, "Bad array");
                continue;
              case S.STRING:
                if (parser.textNode === void 0) {
                  parser.textNode = "";
                }
                var starti = i - 1, slashed = parser.slashed, unicodeI = parser.unicodeI;
                STRING_BIGLOOP: while (true) {
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
                    if (!c) break STRING_BIGLOOP;
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
                    if (!c) break;
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
                    if (!c) break;
                    else continue;
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
                if (c === Char.r) parser.state = S.TRUE2;
                else error(parser, "Invalid true started with t" + c);
                continue;
              case S.TRUE2:
                if (c === Char.u) parser.state = S.TRUE3;
                else error(parser, "Invalid true started with tr" + c);
                continue;
              case S.TRUE3:
                if (c === Char.e) {
                  emit(parser, "onvalue", true);
                  parser.state = parser.stack.pop() || S.VALUE;
                } else error(parser, "Invalid true started with tru" + c);
                continue;
              case S.FALSE:
                if (c === Char.a) parser.state = S.FALSE2;
                else error(parser, "Invalid false started with f" + c);
                continue;
              case S.FALSE2:
                if (c === Char.l) parser.state = S.FALSE3;
                else error(parser, "Invalid false started with fa" + c);
                continue;
              case S.FALSE3:
                if (c === Char.s) parser.state = S.FALSE4;
                else error(parser, "Invalid false started with fal" + c);
                continue;
              case S.FALSE4:
                if (c === Char.e) {
                  emit(parser, "onvalue", false);
                  parser.state = parser.stack.pop() || S.VALUE;
                } else error(parser, "Invalid false started with fals" + c);
                continue;
              case S.NULL:
                if (c === Char.u) parser.state = S.NULL2;
                else error(parser, "Invalid null started with n" + c);
                continue;
              case S.NULL2:
                if (c === Char.l) parser.state = S.NULL3;
                else error(parser, "Invalid null started with nu" + c);
                continue;
              case S.NULL3:
                if (c === Char.l) {
                  emit(parser, "onvalue", null);
                  parser.state = parser.stack.pop() || S.VALUE;
                } else error(parser, "Invalid null started with nul" + c);
                continue;
              case S.NUMBER_DECIMAL_POINT:
                if (c === Char.period) {
                  parser.numberNode += ".";
                  parser.state = S.NUMBER_DIGIT;
                } else error(parser, "Leading zero not followed by .");
                continue;
              case S.NUMBER_DIGIT:
                if (Char._0 <= c && c <= Char._9) parser.numberNode += String.fromCharCode(c);
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

  // Damon.js
  var require_Damon = __commonJS({
    "Damon.js"(exports, module) {
      var parse = require_tsc().parse;
      module.exports = class Damon {
        /**
         * Creates an instance of Damon.
         * @param {Boolean} pedantic
         */
        constructor(pedantic = false) {
          const $ = this;
          this.indentation = 4;
          if ([true, false, void 0].indexOf(pedantic) == -1) {
            throw new Error("@param {Boolean} pedantic");
          }
          this.pedantic = pedantic;
        }
        /**
         * Object-like ordered dictionaries declarations in js
         * @param {TemplateStringsArray} strings
         * @returns {damonValue}
         */
        template(strings) {
          const $ = this;
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
         * @typedef {Map<string, damonValue>} damonMap
         * @typedef {Array<damonValue>} damonArray
         * @typedef {damonMap|damonArray|string|number|boolean|null} damonValue
         * @returns damonValue
         */
        damonToMap(damon, startLine = 0, indexPrefixKeys = false) {
          const $ = this;
          let treeOrPrimitive = $._damonToTree(damon, startLine);
          if (treeOrPrimitive === true || treeOrPrimitive === false || treeOrPrimitive === null || typeof treeOrPrimitive === "string" || typeof treeOrPrimitive === "number") {
            return treeOrPrimitive;
          }
          return $._treeToMap($._damonToTree(damon, startLine), startLine, indexPrefixKeys);
        }
        /**
         * @param {string} damon
         * @returns {string}
         */
        damonToJSON(damon) {
          const $ = this;
          return $.mapToJSON($.damonToMap(damon));
        }
        /**
         * @param {string} json
         * @returns {string}
         */
        jsonToDamon(json) {
          const $ = this;
          return $.mapToDamon($.jsonToMap(json), false);
        }
        /**
         * @param {string} json
         * @returns {damonValue}
         */
        jsonToMap(json) {
          const $ = this;
          var jsonLines = $._getLines(json, "JSON");
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
                let error = new Error("Error line number 1: leading 0");
                error.line = 1;
                error.language = "DAMON";
                throw error;
              }
              if (jsonLines[0].indexOf("_") > -1) {
                let error = new Error("Error line number 1: numeric separator");
                error.line = 1;
                error.language = "DAMON";
                throw error;
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
         * @param {string} [language='DAMON']
         * @returns {Array<string>} damonLines
         */
        _getLines(damon, language = "DAMON", startLine = 0) {
          if (["DAMON", "JSON"].indexOf(language) == -1) {
            throw new Error("Bad language argument, expected 'DAMON' or 'JSON'");
          }
          if (damon === "") {
            let error = new Error("Error line " + (startLine + 1) + ": empty string");
            error.line = startLine + 1;
            error.language = language;
            throw error;
          }
          if (/[\s]/.test(damon) && damon.match(new RegExp(/[\s]/))[0].length == damon.length) {
            let error = new Error("Error line " + (startLine + 1) + ": string only contains whitespace");
            error.line = startLine + 1;
            error.language = language;
            throw error;
          }
          var delimiter = /\r\n/.test(damon) ? "\r\n" : "\n", damonLines = damon.split(delimiter);
          if (delimiter == "\n" && /\\*\n/.test(damon)) {
            if (/[^\\]\\(\\\\)*\n/.test(damon)) {
              let errorLine = damon.split(/[^\\]\\(\\\\)*\n/)[0].split("\n").length;
              let error = new Error("Error line " + (startLine + errorLine) + ": oddly escaped newline");
              error.line = startLine + errorLine;
              error.language = language;
              throw error;
            }
            let reversedDamon = damon.split("").reverse().join(""), reversedDamonLines = reversedDamon.split(/\n/);
            damonLines = reversedDamonLines.map((x) => x.split("").reverse().join("")).reverse();
          }
          return damonLines;
        }
        /**
         * Offside-rule parsing
         * @param {string} damon
         * @typedef {{
         *     content: string,
         *     level: number,
         *     id: string,
         *     children: Array<treeNode>
         * }} treeNode
         * @typedef {{
         *     headless: boolean,
         *     damonOriginalLinesMapping: Array<number|null>
         * } & treeNode} treeRoot
         * @returns {treeRoot}
         */
        _damonToTree(damon, startLine) {
          const $ = this;
          let damonLines = $._getLines(damon, "DAMON", startLine), damonOriginalLines = damonLines.slice(0);
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
                console.error(
                  "Error line number " + (startLine + 1) + ": not JSON-compliant, detailed error follows"
                );
                error.line = startLine + 1;
                error.language = "JSON";
                error.type = "string";
                throw error;
              }
            } else if (isFinite(damonLines[0]) && !isNaN(parseFloat(damonLines[0])) && Number.isFinite(damonLines[0] * 1) && !Number.isNaN(damonLines[0] * 1)) {
              if (damonLines[0].indexOf(0) == 0 && damonLines[0].length > 1 && damonLines[0].indexOf(".") !== 1) {
                let error = new Error("Error line number " + (startLine + 1) + ": leading 0");
                error.line = startLine + 1;
                error.language = "DAMON";
                throw error;
              }
              if (damonLines[0].indexOf("_") > -1) {
                let error = new Error("Error line number " + (startLine + 1) + ": numeric separator");
                error.line = startLine + 1;
                error.language = "DAMON";
                throw error;
              }
              try {
                return JSON.parse(damonLines[0] * 1);
              } catch (error) {
                console.error(
                  "Error line number " + (startLine + 1) + ": not JSON-compliant, detailed error follows"
                );
                error.line = startLine + 1;
                error.language = "JSON";
                error.type = "number";
                throw error;
              }
            } else if (damonLines[0] * 1 === Infinity) {
              try {
                JSON.parse(damonLines[0] * 1);
              } catch (error) {
                console.error(
                  "Error line number " + (startLine + 1) + ": not JSON-compliant, detailed error follows"
                );
                error.line = startLine + 1;
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
          let tabsMatchingRegex = new RegExp("^(\\t)+");
          for (let i = 0, c = damonLines.length; i < c; i++) {
            if (tabsMatchingRegex.test(damonLines[i])) {
              const tabsPaddingLength = damonLines[i].match(tabsMatchingRegex)[0].length;
              for (let z = 0, x = tabsPaddingLength; z < x; z++) {
                damonLines[i] = damonLines[i].replace("	", " ".repeat($.indentation));
              }
            }
            if (!/^ *- $/.test(damonLines[i]) && /[ \t]+$/.test(damonLines[i])) {
              const error = new Error(
                "Error line " + (startLine + damonOriginalLinesMapping.indexOf(i) + 1) + ": trailing whitespace"
              );
              error.line = startLine + damonOriginalLinesMapping.indexOf(i) + 1;
              error.language = "DAMON";
              throw error;
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
              let error = new Error("Error line " + (startLine + 1) + ": bad formatting");
              error.line = startLine + 1;
              error.language = "DAMON";
              throw error;
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
              let error = new Error("Error line " + (startLine + 2) + ": bad formatting");
              error.line = startLine + 2;
              error.language = "DAMON";
              throw error;
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
            let error = new Error("Error line " + (startLine + (headless * 1 + 1)) + ": bad formatting");
            error.line = startLine + headless * 1 + 1;
            error.language = "DAMON";
            throw error;
          }
          damonLines.shift();
          for (let i = 0, c = damonLines.length; i < c; i++) {
            if (!/^- /.test(damonLines[i].trimStart()) || /^ +/.test(damonLines[i]) && (damonLines[i].match(/^ +/)[0].length % $.indentation != 0 || i == 0 && damonLines[i].match(/^ +/)[0].length != $.indentation || i != 0 && /^- /.test(damonLines[i - 1]) && damonLines[i].match(/^ +/)[0].length != $.indentation || i != 0 && !/^- /.test(damonLines[i - 1]) && damonLines[i].match(/^ +/)[0].length > damonLines[i - 1].match(/^ +/)[0].length + $.indentation)) {
              let error = new Error(
                "Error line " + (startLine + damonOriginalLinesMapping.indexOf(i) + 1) + ": bad formatting"
              );
              error.line = startLine + damonOriginalLinesMapping.indexOf(i) + 1;
              error.language = "DAMON";
              throw error;
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
          const $ = this;
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
          const $ = this;
          var parent = $._findListItemCommonDirectParent(listItem, possibleParent);
          if (parent.level < level) {
            return parent;
          } else {
            return $._findListItemCommonAncestor(parent, possibleParent, level);
          }
        }
        /**
         * JSON primitives wrapping
         * @param {treeRoot} damonTree
         * @param {number} startLine
         * @param {boolean} indexPrefixKeys
         * @return {damonMap | damonArray}
         */
        _treeToMap(damonTree, startLine, indexPrefixKeys = false) {
          const $ = this;
          var treeItemIndex = 0;
          if (damonTree.content == "- {}") {
            let map = /* @__PURE__ */ new Map();
            map.damonOriginalLinesMapping = damonTree.damonOriginalLinesMapping;
            if (damonTree.headless) {
              map.headless = true;
            }
            return _recurse(damonTree, map);
          } else if (damonTree.content == "- []") {
            let array = [];
            array.damonOriginalLinesMapping = damonTree.damonOriginalLinesMapping;
            return _recurse(damonTree, array);
          }
          function _recurse(tree, jsonMap) {
            if (typeof tree !== "object" || tree == null || Array.isArray(tree)) {
              let errorLine = damonTree.headless * -1 + damonTree.damonOriginalLinesMapping.indexOf(treeItemIndex - 1) + 2;
              let error = new Error("Error line number " + (startLine + errorLine) + ": @param { {} } tree");
              error.line = startLine + errorLine;
              error.language = "DAMON";
              throw error;
            }
            if (typeof jsonMap === "object" && jsonMap !== null && !Array.isArray(jsonMap) && jsonMap instanceof Map && jsonMap.constructor === Map) {
              _mapHandler(tree, jsonMap);
            } else if (Array.isArray(jsonMap)) {
              _listHandler(tree, jsonMap);
            } else {
              let errorLine = damonTree.headless * -1 + damonTree.damonOriginalLinesMapping.indexOf(treeItemIndex - 1) + 2;
              let error = new Error("Error line number " + (startLine + errorLine) + ": @param { {} | [] } jsonMap");
              error.line = startLine + errorLine;
              error.language = "DAMON";
              throw error;
            }
            return jsonMap;
          }
          function _mapHandler(tree, jsonMap) {
            for (let i = 0, c = tree.children.length; i < c; i++) {
              treeItemIndex++;
              if (tree.children[i].content.length == 0) {
                let errorType = "";
                if (tree.children[i].children.length > 0) {
                  errorType = "implicit map key";
                  if (indexPrefixKeys) {
                    jsonMap.set(treeItemIndex + "-", /* @__PURE__ */ new Map());
                  } else {
                    jsonMap.set("", /* @__PURE__ */ new Map());
                  }
                  if (jsonMap.implicitMaps === void 0) {
                    jsonMap.implicitMaps = [];
                  }
                  jsonMap.implicitMaps.push("");
                  _recurse(tree.children[i], jsonMap.get(""));
                } else {
                  errorType = "implicit null key";
                  if (indexPrefixKeys) {
                    jsonMap.set(indexPrefixKeys + "-", null);
                  } else {
                    jsonMap.set("", null);
                  }
                  if (jsonMap.implicitNulls === void 0) {
                    jsonMap.implicitNulls = [];
                  }
                  jsonMap.implicitNulls.push("");
                }
              } else {
                let text = tree.children[i].content, errorType = "key";
                try {
                  if (/^.*: +\[/.test(text) && text[text.length - 1] == "]") {
                    if (/: +\[ *\]$/.test(text)) {
                      let key = JSON.parse(
                        `["${text.slice(0, -1 * text.match(/: +\[ *\]$/)[0].length)}"]`
                      )[0];
                      if (indexPrefixKeys) {
                        jsonMap.set(treeItemIndex + "-" + key, []);
                      } else {
                        jsonMap.set(key, []);
                      }
                      if (tree.children[i].children.length > 0) {
                        if (indexPrefixKeys) {
                          _recurse(tree.children[i], jsonMap.get(treeItemIndex + "-" + key));
                        } else {
                          _recurse(tree.children[i], jsonMap.get(key));
                        }
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
                            let errorLine = damonTree.headless * -1 + damonTree.damonOriginalLinesMapping.indexOf(treeItemIndex - 1) + 2;
                            let error2 = new Error(
                              "Error line number " + (startLine + errorLine) + ": invalid inline list"
                            );
                            error2.line = startLine + errorLine;
                            error2.language = "DAMON";
                            throw error2;
                          }
                        }
                      }
                      let arrayOfPrimitives = longestPossibleArray.every(function(item) {
                        if (item === true) {
                          return true;
                        } else if (item === false) {
                          return true;
                        } else if (item === null) {
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
                        if (indexPrefixKeys) {
                          jsonMap.set(treeItemIndex + "-" + shortestPossibleKey, longestPossibleArray);
                        } else {
                          jsonMap.set(shortestPossibleKey, longestPossibleArray);
                        }
                        if (jsonMap.damonInlineArrays === void 0) {
                          jsonMap.damonInlineArrays = [];
                        }
                        if (indexPrefixKeys) {
                          jsonMap.damonInlineArrays.push(treeItemIndex + "-" + shortestPossibleKey);
                        } else {
                          jsonMap.damonInlineArrays.push(shortestPossibleKey);
                        }
                      } else {
                        let errorLine = +(damonTree.headless * -1) + damonTree.damonOriginalLinesMapping.indexOf(treeItemIndex - 1) + 2;
                        let error = new Error(
                          "Error line number " + (startLine + errorLine) + ": no nesting in inline lists"
                        );
                        error.line = startLine + errorLine;
                        error.language = "DAMON";
                        throw error;
                      }
                      if (tree.children[i].children.length > 0) {
                        let errorLine = damonTree.headless * -1 + damonTree.damonOriginalLinesMapping.indexOf(treeItemIndex - 1) + 3;
                        let error = new Error(
                          "Error line number " + (startLine + errorLine) + ": inline lists can't have children"
                        );
                        error.line = startLine + errorLine;
                        error.language = "DAMON";
                        throw error;
                      }
                    }
                  } else if (/: +\{ *\}$/.test(text)) {
                    let key = JSON.parse(
                      `["${text.slice(0, -1 * text.match(/: +\{ *\}$/)[0].length)}"]`
                    )[0];
                    if (indexPrefixKeys) {
                      jsonMap.set(treeItemIndex + "-" + key, /* @__PURE__ */ new Map());
                      _recurse(tree.children[i], jsonMap.get(treeItemIndex + "-" + key));
                    } else {
                      jsonMap.set(key, /* @__PURE__ */ new Map());
                      _recurse(tree.children[i], jsonMap.get(key));
                    }
                  } else {
                    let implicitProperty = false;
                    if (/^.*: /.test(text) && text.split(new RegExp(/: +/))[text.split(new RegExp(/: +/)).length - 1] === "true") {
                      let lastTextMatch = text.match(new RegExp(/: +/g))[text.match(new RegExp(/: +/g)).length - 1], key = JSON.parse(`["${text.slice(0, -1 * lastTextMatch.length - 4)}"]`)[0];
                      if (indexPrefixKeys) {
                        jsonMap.set(treeItemIndex + "-" + key, true);
                      } else {
                        jsonMap.set(key, true);
                      }
                    } else if (/^.*: /.test(text) && text.split(new RegExp(/: +/))[text.split(new RegExp(/: +/)).length - 1] === "false") {
                      let lastTextMatch = text.match(new RegExp(/: +/g))[text.match(new RegExp(/: +/g)).length - 1], key = JSON.parse(`["${text.slice(0, -1 * lastTextMatch.length - 5)}"]`)[0];
                      if (indexPrefixKeys) {
                        jsonMap.set(treeItemIndex + "-" + key, false);
                      } else {
                        jsonMap.set(key, false);
                      }
                    } else if (/^.*: /.test(text) && text.split(new RegExp(/: +/))[text.split(new RegExp(/: +/)).length - 1] === "null") {
                      let lastTextMatch = text.match(new RegExp(/: +/g))[text.match(new RegExp(/: +/g)).length - 1], key = JSON.parse(`["${text.slice(0, -1 * lastTextMatch.length - 4)}"]`)[0];
                      if (indexPrefixKeys) {
                        jsonMap.set(treeItemIndex + "-" + key, null);
                      } else {
                        jsonMap.set(key, null);
                      }
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
                        if (indexPrefixKeys) {
                          jsonMap.set(treeItemIndex + "-" + key, childText);
                        } else {
                          jsonMap.set(key, childText);
                        }
                      } else if (separatorMatches.length == 2 && /: +"$/.test(text)) {
                        let key = JSON.parse(
                          `["${text.split(separatorMatches[0])[0]}"]`
                        )[0];
                        errorType = "string";
                        let childText = JSON.parse(
                          `["${text.split(separatorMatches[0]).slice(1).join("") + ": "}"]`
                        )[0];
                        if (indexPrefixKeys) {
                          jsonMap.set(treeItemIndex + "-" + key, childText);
                        } else {
                          jsonMap.set(key, childText);
                        }
                      } else {
                        let errorLine = +(damonTree.headless * -1) + damonTree.damonOriginalLinesMapping.indexOf(treeItemIndex - 1) + 2;
                        let error = new Error(
                          "Error line number " + (startLine + errorLine) + ": unescaped double quote"
                        );
                        error.line = startLine + errorLine;
                        error.language = "DAMON";
                        throw error;
                      }
                    } else if (/^.*: /.test(text) && isFinite(text.split(": ")[text.split(": ").length - 1]) && !isNaN(parseFloat(text.split(": ")[text.split(": ").length - 1])) && Number.isFinite(text.split(": ")[text.split(": ").length - 1] * 1) && !Number.isNaN(text.split(": ")[text.split(": ").length - 1] * 1)) {
                      let key = JSON.parse(`["${text.split(": ").slice(0, -1).join(": ")}"]`)[0];
                      errorType = "number";
                      let separatorMatches = text.match(new RegExp(/: +/g)), lastSeparatorMatch = separatorMatches[separatorMatches.length - 1], value = text.split(lastSeparatorMatch)[text.split(lastSeparatorMatch).length - 1];
                      if (value.indexOf(0) == 0 && value.length > 1 && value.indexOf(".") !== 1) {
                        let errorLine = damonTree.headless * -1 + damonTree.damonOriginalLinesMapping.indexOf(treeItemIndex - 1) + 2;
                        let error = new Error(
                          "Error line number " + (startLine + errorLine) + ": leading 0"
                        );
                        error.line = startLine + errorLine;
                        error.language = "DAMON";
                        throw error;
                      }
                      if (value.indexOf("_") > -1) {
                        let errorLine = damonTree.headless * -1 + damonTree.damonOriginalLinesMapping.indexOf(treeItemIndex - 1) + 2;
                        let error = new Error(
                          "Error line number " + (startLine + errorLine) + ": Numeric separator"
                        );
                        error.line = startLine + errorLine;
                        error.language = "DAMON";
                        throw error;
                      }
                      let number = JSON.parse(`[${text.split(": ")[text.split(": ").length - 1] * 1}]`)[0];
                      if (indexPrefixKeys) {
                        jsonMap.set(treeItemIndex + "-" + key, number);
                      } else {
                        jsonMap.set(key, number);
                      }
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
                            if (accumulator.indexOf(0) == 0 && accumulator.length > 1 && accumulator.indexOf(".") !== 1 || accumulator.indexOf("_") > -1) {
                              validValue = true;
                              valueLength = accumulator.length;
                            }
                          } else {
                            break;
                          }
                        }
                      }
                      if (validValue) {
                        JSON.parse(`["${text.slice(0, -1 * valueLength)}"]`)[0];
                        if ($.pedantic) {
                          let errorLine = damonTree.headless * -1 + damonTree.damonOriginalLinesMapping.indexOf(treeItemIndex);
                          let error = new Error(
                            "Error line number " + (startLine + errorLine) + ": missing separator"
                          );
                          error.line = startLine + errorLine;
                          error.language = "DAMON";
                          error.errorType = "pedantic";
                          throw error;
                        } else {
                          implicitProperty = true;
                          if (tree.children[i].children.length > 0) {
                            errorType = "implicit map key";
                            let key = JSON.parse(`["${text}"]`)[0];
                            if (indexPrefixKeys) {
                              jsonMap.set(treeItemIndex + "-" + key, /* @__PURE__ */ new Map());
                            } else {
                              jsonMap.set(key, /* @__PURE__ */ new Map());
                            }
                            if (jsonMap.implicitMaps === void 0) {
                              jsonMap.implicitMaps = [];
                            }
                            if (indexPrefixKeys) {
                              jsonMap.implicitMaps.push(treeItemIndex + "-" + key);
                              _recurse(tree.children[i], jsonMap.get(treeItemIndex + "-" + key));
                            } else {
                              jsonMap.implicitMaps.push(key);
                              _recurse(tree.children[i], jsonMap.get(key));
                            }
                          } else {
                            errorType = "implicit null key";
                            let key = JSON.parse(`["${text}"]`)[0];
                            if (indexPrefixKeys) {
                              jsonMap.set(treeItemIndex + "-" + key, null);
                            } else {
                              jsonMap.set(key, null);
                            }
                            if (jsonMap.implicitNulls === void 0) {
                              jsonMap.implicitNulls = [];
                            }
                            if (indexPrefixKeys) {
                              jsonMap.implicitNulls.push(treeItemIndex + "-" + key);
                            } else {
                              jsonMap.implicitNulls.push(key);
                            }
                          }
                        }
                      } else {
                        let string = JSON.parse(`["${text.slice(0, -1 * valueLength)}"]`)[0];
                        if ($.pedantic) {
                          if (/: +$/.test(string)) {
                            let errorLine = damonTree.headless * -1 + damonTree.damonOriginalLinesMapping.indexOf(treeItemIndex);
                            let error = new Error(
                              "Error line number " + (startLine + errorLine) + ": bad value"
                            );
                            error.line = startLine + errorLine;
                            error.language = "DAMON";
                            error.errorType = "pedantic";
                            throw error;
                          } else {
                            let errorLine = damonTree.headless * -1 + damonTree.damonOriginalLinesMapping.indexOf(treeItemIndex);
                            let error = new Error(
                              "Error line number " + (startLine + errorLine) + ": missing separator"
                            );
                            error.line = startLine + errorLine;
                            error.language = "DAMON";
                            error.errorType = "pedantic";
                            throw error;
                          }
                        } else {
                          implicitProperty = true;
                          if (tree.children[i].children.length > 0) {
                            errorType = "implicit map key";
                            let key = JSON.parse(`["${text}"]`)[0];
                            if (indexPrefixKeys) {
                              jsonMap.set(treeItemIndex + "-" + key, /* @__PURE__ */ new Map());
                            } else {
                              jsonMap.set(key, /* @__PURE__ */ new Map());
                            }
                            if (jsonMap.implicitMaps === void 0) {
                              jsonMap.implicitMaps = [];
                            }
                            if (indexPrefixKeys) {
                              jsonMap.implicitMaps.push(treeItemIndex + "-" + key);
                              _recurse(tree.children[i], jsonMap.get(treeItemIndex + "-" + key));
                            } else {
                              jsonMap.implicitMaps.push(key);
                              _recurse(tree.children[i], jsonMap.get(key));
                            }
                          } else {
                            errorType = "implicit null key";
                            let key = JSON.parse(`["${text}"]`)[0];
                            if (indexPrefixKeys) {
                              jsonMap.set(treeItemIndex + "-" + key, null);
                            } else {
                              jsonMap.set(key, null);
                            }
                            if (jsonMap.implicitNulls === void 0) {
                              jsonMap.implicitNulls = [];
                            }
                            if (indexPrefixKeys) {
                              jsonMap.implicitNulls.push(treeItemIndex + "-" + key);
                            } else {
                              jsonMap.implicitNulls.push(key);
                            }
                          }
                        }
                      }
                    }
                    if (!implicitProperty && tree.children[i].children.length > 0) {
                      let errorLine = damonTree.headless * -1 + damonTree.damonOriginalLinesMapping.indexOf(treeItemIndex - 1) + 3;
                      let error = new Error(
                        "Error line number " + (startLine + errorLine) + ": missing container or excess indentation"
                      );
                      error.line = startLine + errorLine;
                      error.language = "DAMON";
                      throw error;
                    }
                  }
                } catch (error) {
                  if (error.language === void 0) {
                    let errorLine = damonTree.headless * -1 + damonTree.damonOriginalLinesMapping.indexOf(treeItemIndex - 1) + 2;
                    console.error(
                      "Error line number " + (startLine + errorLine) + ": not JSON-compliant, detailed error follows"
                    );
                    error.line = startLine + errorLine;
                    error.language = "JSON";
                    error.type = errorType;
                  }
                  throw error;
                }
              }
            }
          }
          function _listHandler(tree, jsonMap) {
            for (let i = 0, c = tree.children.length; i < c; i++) {
              treeItemIndex++;
              if (tree.children[i].content.length) {
                let text = tree.children[i].content;
                if (/^[ \t]*\[/.test(text) && text[text.length - 1] == "]") {
                  if (/^[ \t]*\[ *\]$/.test(text)) {
                    jsonMap.push([]);
                    _recurse(tree.children[i], jsonMap[jsonMap.length - 1]);
                  } else {
                    let inlineArray;
                    try {
                      inlineArray = JSON.parse(text);
                    } catch (error) {
                      let errorLine = damonTree.headless * -1 + damonTree.damonOriginalLinesMapping.indexOf(treeItemIndex - 1) + 2;
                      let err = new Error(
                        "Error line number " + (startLine + errorLine) + ": invalid inline lists"
                      );
                      err.line = startLine + errorLine;
                      err.language = "JSON";
                      err.type = "list";
                      throw err;
                    }
                    let arrayOfPrimitives = inlineArray.every(function(item) {
                      if (item === true) {
                        return true;
                      } else if (item === false) {
                        return true;
                      } else if (item === null) {
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
                      jsonMap.push(inlineArray);
                      if (jsonMap.damonInlineArrays === void 0) {
                        jsonMap.damonInlineArrays = [];
                      }
                      jsonMap.damonInlineArrays.push(i);
                    } else {
                      let errorLine = damonTree.headless * -1 + damonTree.damonOriginalLinesMapping.indexOf(treeItemIndex - 1) + 2;
                      let error = new Error(
                        "Error line number " + (startLine + errorLine) + ": no nesting in inline lists"
                      );
                      error.line = startLine + errorLine;
                      error.language = "DAMON";
                      throw error;
                    }
                    if (tree.children[i].children.length > 0) {
                      let errorLine = damonTree.headless * -1 + damonTree.damonOriginalLinesMapping.indexOf(treeItemIndex - 1) + 3;
                      let error = new Error(
                        "Error line number " + (startLine + errorLine) + ": inline lists can't have children"
                      );
                      error.line = startLine + errorLine;
                      error.language = "DAMON";
                      throw error;
                    }
                  }
                } else if (/^[ \t]*\{\}$/.test(text)) {
                  jsonMap.push(/* @__PURE__ */ new Map());
                  _recurse(tree.children[i], jsonMap[jsonMap.length - 1]);
                } else if (/^[ \t]*true$/.test(text)) {
                  jsonMap.push(true);
                } else if (/^[ \t]*false$/.test(text)) {
                  jsonMap.push(false);
                } else if (/^[ \t]*null$/.test(text)) {
                  jsonMap.push(null);
                } else if (/^[ \t]*".*"$/.test(text)) {
                  try {
                    jsonMap.push(JSON.parse(`[${text.trimStart()}]`)[0]);
                  } catch (error) {
                    let errorLine = damonTree.headless * -1 + damonTree.damonOriginalLinesMapping.indexOf(treeItemIndex - 1) + 2;
                    console.error(
                      "Error line number " + (startLine + errorLine) + ": not JSON-compliant, detailed error follows"
                    );
                    error.line = startLine + errorLine;
                    error.language = "JSON";
                    error.type = "string";
                    throw error;
                  }
                } else if (isFinite(text) && !isNaN(parseFloat(text)) && Number.isFinite(text * 1) && !Number.isNaN(text * 1)) {
                  if (text.indexOf(0) == 0 && text.length > 1 && text.indexOf(".") !== 1) {
                    let errorLine = damonTree.headless * -1 + damonTree.damonOriginalLinesMapping.indexOf(treeItemIndex - 1) + 2;
                    let error = new Error("Error line number " + (startLine + errorLine) + ": leading 0");
                    error.line = startLine + errorLine;
                    error.language = "DAMON";
                    throw error;
                  }
                  if (text.indexOf("_") > -1) {
                    let errorLine = damonTree.headless * -1 + damonTree.damonOriginalLinesMapping.indexOf(treeItemIndex - 1) + 2;
                    let error = new Error("Error line number " + (startLine + errorLine) + ": leading 0");
                    error.line = startLine + errorLine;
                    error.language = "DAMON";
                    throw error;
                  }
                  try {
                    jsonMap.push(JSON.parse(`[${text * 1}]`)[0]);
                  } catch (error) {
                    let errorLine = damonTree.headless * -1 + damonTree.damonOriginalLinesMapping.indexOf(treeItemIndex - 1) + 2;
                    console.error(
                      "Error line number " + (startLine + errorLine) + ": not JSON-compliant, detailed error follows"
                    );
                    error.line = startLine + errorLine;
                    error.language = "JSON";
                    error.type = "number";
                    throw error;
                  }
                } else if (text * 1 === Infinity) {
                  try {
                    JSON.parse(text * 1);
                  } catch (error) {
                    let errorLine = damonTree.headless * -1 + damonTree.damonOriginalLinesMapping.indexOf(treeItemIndex - 1) + 2;
                    console.error(
                      "Error line number " + (startLine + errorLine) + ": not JSON-compliant, detailed error follows"
                    );
                    error.line = startLine + errorLine;
                    error.language = "JSON";
                    error.type = "infinity";
                    throw error;
                  }
                } else {
                  let errorLine = damonTree.headless * -1 + damonTree.damonOriginalLinesMapping.indexOf(treeItemIndex - 1) + 2;
                  let error = new Error(
                    "Error line number " + (startLine + errorLine) + ": list items can't have a key"
                  );
                  error.line = startLine + errorLine;
                  error.language = "DAMON";
                  throw error;
                }
              } else {
                let errorLine = damonTree.headless * -1 + damonTree.damonOriginalLinesMapping.indexOf(treeItemIndex - 1) + 2;
                let error = new Error("Error line number " + (startLine + errorLine) + ": empty list node");
                error.line = startLine + errorLine;
                error.language = "DAMON";
                throw error;
              }
            }
          }
        }
        /**
         * @param {damonValue} jsonMap
         * @param {boolean} pristine
         * @returns {string}
         */
        mapToDamon(jsonMap, pristine) {
          const $ = this;
          var list = ``;
          if (Array.isArray(jsonMap)) {
            list += "- []\n";
          } else if (typeof jsonMap === "object" && jsonMap !== null && jsonMap instanceof Map && jsonMap.constructor === Map) {
            list += "- {}\n";
          } else {
            if (typeof jsonMap == "string") {
              jsonMap = '"' + jsonMap + '"';
            }
            JSON.parse(jsonMap);
            return jsonMap;
          }
          _recurse(jsonMap);
          $.damonToMap(list.slice(0, -1));
          if (jsonMap.headless) {
            let damonLines = $._getLines(list);
            damonLines = damonLines.slice(1);
            for (let i = 0, c = damonLines.length; i < c; i++) {
              damonLines[i] = damonLines[i].slice(4);
            }
            return damonLines.join("\n").slice(0, -1);
          }
          return list.slice(0, -1);
          function _recurse(jsonMap2, level = 1) {
            if (typeof jsonMap2 === "object" && jsonMap2 !== null && !Array.isArray(jsonMap2) && jsonMap2 instanceof Map && jsonMap2.constructor === Map) {
              let mapKeys = Array.from(jsonMap2.keys()), implicitNullsMap = false;
              if (jsonMap2.implicitNulls !== void 0 && jsonMap2.implicitNulls.length === mapKeys.length) {
                implicitNullsMap = true;
              }
              for (const [key, value] of jsonMap2) {
                if (typeof value === "object" && value !== null) {
                  if (Array.isArray(value)) {
                    let nullsCounter = 0, arrayOfPrimitives = value.filter(function(item) {
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
                    if (
                      // No nesting, fits on an archivable line
                      value.length == arrayOfPrimitives.length && level * 4 + 2 + value.join(", ").length + nullsCounter * 4 <= 80 || // Inlining specified from parsing
                      pristine && jsonMap2.damonInlineArrays !== void 0 && jsonMap2.damonInlineArrays.indexOf(key) > -1
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
                  if (implicitNullsMap) {
                    list += "    ".repeat(level) + "- " + JSON.stringify(key).slice(1, -1) + "\n";
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
              }
            } else if (Array.isArray(jsonMap2)) {
              for (var i = 0, c = jsonMap2.length; i < c; i++) {
                if (typeof jsonMap2[i] === "object" && jsonMap2[i] !== null) {
                  if (Array.isArray(jsonMap2[i])) {
                    let nullsCounter = 0, arrayOfPrimitives = jsonMap2[i].filter(function(item) {
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
                    if (jsonMap2[i].length == arrayOfPrimitives.length && level * 4 + 2 + jsonMap2[i].join(", ").length + nullsCounter * 4 <= 80 || pristine && jsonMap2.damonInlineArrays !== void 0 && jsonMap2.damonInlineArrays.indexOf(i) > -1) {
                      let line = "[" + jsonMap2[i].map(function(x) {
                        if (typeof x == "string") {
                          x = JSON.stringify(x);
                        }
                        return x;
                      }).join(", ") + "]";
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
                    list += "    ".repeat(level) + "- " + JSON.stringify(jsonMap2[i]) + "\n";
                  }
                }
              }
            }
          }
        }
        /**
         * @param {damonValue} jsonMap
         * @returns {string}
         */
        mapToJSON(jsonMap) {
          const $ = this;
          var list = ``;
          if (Array.isArray(jsonMap)) {
            list += "[\r\n";
            _recurse(jsonMap);
            list += "]";
            JSON.parse(list);
            return list;
          } else if (typeof jsonMap === "object" && jsonMap !== null && jsonMap instanceof Map && jsonMap.constructor === Map) {
            list += "{\r\n";
            _recurse(jsonMap);
            list += "}";
            JSON.parse(list);
            return list;
          } else {
            if (typeof jsonMap == "string") {
              jsonMap = JSON.stringify(jsonMap);
            }
            JSON.parse(jsonMap);
            return jsonMap;
          }
          function _recurse(jsonMap2, level = 1) {
            if (typeof jsonMap2 === "object" && jsonMap2 !== null && !Array.isArray(jsonMap2) && jsonMap2 instanceof Map && jsonMap2.constructor === Map) {
              for (const [key, value] of jsonMap2) {
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
                if (key != Array.from(jsonMap2.keys())[Array.from(jsonMap2.keys()).length - 1]) {
                  list += ",\r\n";
                } else {
                  list += "\r\n";
                }
              }
            } else if (Array.isArray(jsonMap2)) {
              for (var i = 0, c = jsonMap2.length; i < c; i++) {
                if (typeof jsonMap2[i] === "object" && jsonMap2[i] !== null) {
                  if (Array.isArray(jsonMap2[i])) {
                    if (jsonMap2[i].length > 0) {
                      list += "    ".repeat(level) + `[\r
`;
                      _recurse(jsonMap2[i], level + 1);
                      list += "    ".repeat(level) + `]`;
                    } else {
                      list += "    ".repeat(level) + `[]`;
                    }
                  } else {
                    if (Array.from(jsonMap2[i].keys()).length > 0) {
                      list += "    ".repeat(level) + `{\r
`;
                      _recurse(jsonMap2[i], level + 1);
                      list += "    ".repeat(level) + `}`;
                    } else {
                      list += "    ".repeat(level) + `{}`;
                    }
                  }
                } else {
                  if (jsonMap2[i] === true) {
                    list += "    ".repeat(level) + "true";
                  } else if (jsonMap2[i] === false) {
                    list += "    ".repeat(level) + "false";
                  } else if (jsonMap2[i] === null) {
                    list += "    ".repeat(level) + "null";
                  } else if (Number.isFinite(jsonMap2[i]) && !Number.isNaN(jsonMap2[i])) {
                    list += "    ".repeat(level) + jsonMap2[i];
                  } else {
                    list += "    ".repeat(level) + JSON.stringify(jsonMap2[i]);
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
         * @param {string} damonString
         * @returns {Array<Array<string|number>>} pathsList
         */
        getPathsList(damonString) {
          const $ = this;
          let damonMap = $.damonToMap(damonString), pathsList = [];
          _walkAndPushPaths(damonMap);
          return pathsList;
          function _walkAndPushPaths(map, currentPath = []) {
            if (typeof map === "object" && map !== null && !Array.isArray(map) && map instanceof Map && map.constructor === Map) {
              for (const [key, value] of map) {
                if (typeof value === "object" && value !== null && !Array.isArray(value) && value instanceof Map && value.constructor === Map && Array.from(value.keys()).length) {
                  pathsList.push(currentPath.concat(key));
                  _walkAndPushPaths(value, currentPath.concat([key]));
                } else if (Array.isArray(value) && (map.damonInlineArrays == void 0 || map.damonInlineArrays.indexOf(key) === -1) && value.length) {
                  pathsList.push(currentPath.concat(key));
                  _walkAndPushPaths(value, currentPath.concat([key]));
                } else {
                  pathsList.push(currentPath.concat(key).concat(value));
                }
              }
            } else {
              for (let i = 0, c = map.length; i < c; i++) {
                if (typeof map[i] === "object" && map[i] !== null && !Array.isArray(map[i]) && map[i] instanceof Map && map[i].constructor === Map && Array.from(map[i].keys()).length) {
                  pathsList.push(currentPath.concat(i));
                  _walkAndPushPaths(map[i], currentPath.concat([i]));
                } else if (Array.isArray(map[i]) && (map.damonInlineArrays == void 0 || map.damonInlineArrays.indexOf(i) === -1) && map[i].length) {
                  pathsList.push(currentPath.concat(i));
                  _walkAndPushPaths(map[i], currentPath.concat([i]));
                } else {
                  pathsList.push(currentPath.concat(map[i]));
                }
              }
            }
          }
        }
        /**
         * @param {string} damon
         * @param {Array<string|number>} path
         * @param {number} lineOffset
         * @param {boolean} inlineArray
         * @returns {Array<Array<number>>}
         */
        getRangeFromPath(damon, path, lineOffset = 0, inlineArray = false, prefixedMap = false) {
          const $ = this;
          let damonMap = $.damonToMap(damon, 0, prefixedMap), mapIndex = -1, found = false;
          _incrementMapIndexUntilReaching(damonMap, path);
          let totalLines = $.mapIndexToLine(damonMap, mapIndex);
          let lineText = $._getLines(damon)[totalLines], start = 0, end = lineText.length;
          if (prefixedMap) {
            for (let i = 0, c = path.length; i < c; i++) {
              if (typeof path[i] === "string")
                path[i] = path[i].split("-").slice(1).join("-");
            }
          }
          if (path.length === 1) {
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
                if (inlineArray) {
                  let arrayText = lineText.trimStart().slice(2 + path[path.length - 2].length + 2), array = JSON.parse(arrayText), cumulativeRegex = "^( *\\[ *";
                  for (let i = 0, c = path[path.length - 1] + 1; i < c; i++) {
                    let arrayValue = "" + array[i];
                    if (typeof array[i] === "string")
                      arrayValue = '"' + arrayValue + '"';
                    cumulativeRegex += arrayValue;
                    if (i < c - 1)
                      cumulativeRegex += ", *";
                  }
                  cumulativeRegex += ")";
                  let cumulativeMatch = arrayText.match(new RegExp(cumulativeRegex))[1], value = array[path[path.length - 1]], valueLength = ("" + value).length;
                  if (typeof value === "string")
                    valueLength += 2;
                  start = lineText.length - arrayText.length + cumulativeMatch.length - valueLength;
                  end = start + valueLength;
                } else {
                  start = lineText.length - lineText.trimStart().slice(2).length;
                }
              }
            } else {
              if (typeof path[path.length - 1] == "string") {
                start = lineText.length - lineText.trimStart().slice(2 + path[path.length - 1].length + 2).trimStart().length;
              } else {
                if (inlineArray) {
                  let arrayText = lineText.trimStart().slice(2), array = JSON.parse(arrayText), cumulativeRegex = "^( *\\[ *";
                  for (let i = 0, c = path[path.length - 1] + 1; i < c; i++) {
                    let arrayValue = "" + array[i];
                    if (typeof array[i] === "string")
                      arrayValue = '"' + arrayValue + '"';
                    cumulativeRegex += arrayValue;
                    if (i < c - 1)
                      cumulativeRegex += ", *";
                  }
                  cumulativeRegex += ")";
                  let cumulativeMatch = arrayText.match(new RegExp(cumulativeRegex))[1], value = array[path[path.length - 1]], valueLength = ("" + value).length;
                  if (typeof value === "string")
                    valueLength += 2;
                  start = lineText.length - arrayText.length + cumulativeMatch.length - valueLength;
                  end = start + valueLength;
                } else {
                  start = lineText.length - lineText.trimStart().slice(2).length;
                }
              }
            }
          }
          return [[totalLines + lineOffset, start], [totalLines + lineOffset, end]];
          function _incrementMapIndexUntilReaching(map, targetPath, currentPath = []) {
            mapIndex += 1;
            if (typeof map === "object" && map !== null && !Array.isArray(map) && map instanceof Map && map.constructor === Map) {
              for (const [key, value] of map) {
                if (found === true) {
                  return;
                }
                mapIndex += 1;
                if (JSON.stringify(targetPath) === JSON.stringify(currentPath.concat([key]))) {
                  found = true;
                  return;
                }
                if (typeof value === "object" && value !== null && !Array.isArray(value) && value instanceof Map && value.constructor === Map && Array.from(value.keys()).length) {
                  mapIndex -= 1;
                  _incrementMapIndexUntilReaching(value, targetPath, currentPath.concat([key]));
                } else if (Array.isArray(value) && value.length) {
                  if (map.damonInlineArrays == void 0 || map.damonInlineArrays.indexOf(key) === -1) {
                    mapIndex -= 1;
                    _incrementMapIndexUntilReaching(value, targetPath, currentPath.concat([key]));
                  } else if (JSON.stringify(targetPath.slice(0, -1)) === JSON.stringify(currentPath.concat([key]))) {
                    found = true;
                    return;
                  }
                }
              }
            } else {
              for (let i = 0, c = map.length; i < c; i++) {
                if (found == true) {
                  return;
                }
                mapIndex += 1;
                if (JSON.stringify(targetPath) === JSON.stringify(currentPath.concat([i]))) {
                  found = true;
                  return;
                }
                if (typeof map[i] === "object" && map[i] !== null && !Array.isArray(map[i]) && map[i] instanceof Map && map[i].constructor === Map && Array.from(map[i].keys()).length) {
                  mapIndex -= 1;
                  _incrementMapIndexUntilReaching(map[i], targetPath, currentPath.concat([i]));
                } else if (Array.isArray(map[i]) && map[i].length) {
                  if (map.damonInlineArrays == void 0 || map.damonInlineArrays.indexOf(i) === -1) {
                    mapIndex -= 1;
                    _incrementMapIndexUntilReaching(map[i], targetPath, currentPath.concat([i]));
                  } else if (JSON.stringify(targetPath.slice(0, -1)) === JSON.stringify(currentPath.concat([i]))) {
                    found = true;
                    return;
                  }
                }
              }
            }
          }
        }
        /**
         *
         * @param {string} damon
         * @param {Array<number} coordinates
         * @returns {Array<Array<number>>}
         */
        getTokenFromCoordinates(damon, coordinates) {
          const $ = this;
          let token = {};
          let damonLines = $._getLines(damon).slice(0, coordinates[0]);
          if (damonLines[coordinates[0] - 1] == "") {
            token.type = "newline";
            token.path = null;
            token.range = [coordinates, coordinates];
            return token;
          }
          if (/^[ \t]+$/.test(damonLines[coordinates[0] - 1])) {
            token.type = "indentation";
            token.path = null;
            token.range = [[coordinates[0], 1], [coordinates[0], damonLines[damonLines.length - 1].length]];
            return token;
          }
          if (/^[ \t]+/.test(damonLines[coordinates[0] - 1].slice(0, coordinates[1] - 1))) {
            token.type = "indentation";
            token.range = [
              [coordinates[0], 1],
              [coordinates[0], damonLines[coordinates[0] - 1].match(/^[ \t]+/)[0].length]
            ];
          }
          if (/^ *\/\//.test(damonLines[coordinates[0] - 1])) {
            if (token.type == "indentation") {
              token.path = null;
              return token;
            }
            token.type = "comment";
            token.path = null;
            token.range = [
              [[coordinates[0], damonLines[coordinates[0] - 1].split("//")[0].length]],
              [[coordinates[0], damonLines[coordinates[0] - 1].length]]
            ];
            return token;
          }
          if (damonLines.length == 1) {
            try {
              let jsonValue = JSON.parse(damon);
              if (jsonValue === true || jsonValue === false || jsonValue === null || typeof jsonValue === "string" || typeof jsonValue === "number") {
                let leftPadding = damon.match(/^ */)[0].length, rightPadding = damon.match(/ *$/)[0].length;
                token.type = "null";
                if (typeof jsonValue !== "object")
                  token.type = typeof jsonValue;
                token.path = null;
                token.range = [[0, leftPadding], [0, damon.length - rightPadding]];
                return token;
              }
            } catch (error) {
            }
          }
          let damonMap = $.damonToMap(damonLines.join("\n")), currentLevelKeys = Array.from(damonMap.keys()), path = [], structures = [];
          while (currentLevelKeys.length) {
            let key = currentLevelKeys[currentLevelKeys.length - 1];
            path.push(key);
            if (typeof damonMap === "object" && damonMap !== null && !Array.isArray(damonMap) && damonMap instanceof Map && damonMap.constructor === Map) {
              structures.push(damonMap);
              damonMap = damonMap.get(key);
            } else if (Array.isArray(damonMap)) {
              structures.push(damonMap);
              damonMap = damonMap[key];
            }
            if (damonMap === true || damonMap === false || damonMap === null || typeof damonMap === "string" || typeof damonMap === "number") {
              break;
            }
            currentLevelKeys = Array.from(damonMap.keys());
          }
          token.path = path;
          let valueRange = [], nextToLastStructure = structures[structures.length - 2];
          if (nextToLastStructure && nextToLastStructure.damonInlineArrays.length && nextToLastStructure.damonInlineArrays.indexOf(path[path.length - 2]) !== -1) {
            valueRange = $.getRangeFromPath(damon, path, 0, true);
          } else {
            valueRange = $.getRangeFromPath(damon, path);
          }
          if (typeof path[path.length - 1] == "string") {
            if (coordinates[1] < valueRange[0][1]) {
              let propertyEndRange = damonLines[coordinates[0] - 1].slice(0, -1 * (valueRange[1][1] - valueRange[0][1]) - 1).length;
              if (coordinates[1] < propertyEndRange) {
                let propertyStartRange = damonLines[coordinates[0] - 1].match(/^[ \t]+/)[0].length + 3;
                if (coordinates[1] >= propertyStartRange) {
                  token.type = "property";
                  token.range = [[coordinates[0], propertyStartRange], [coordinates[0], propertyEndRange]];
                } else {
                  token.type = "hyphen";
                  token.range = [
                    [coordinates[0], propertyStartRange - 2],
                    [coordinates[0], propertyStartRange - 1]
                  ];
                }
              } else {
                token.type = "separator";
                token.range = [[coordinates[0], propertyEndRange + 1], [coordinates[0], valueRange[0][1] - 1]];
              }
            } else {
              token.type = "?";
              token.range = valueRange;
            }
          } else {
            if (coordinates[1] < valueRange[0][1]) {
              token.type = "hyphen";
              let hyphenStartRange = damonLines[coordinates[0] - 1].match(/^[ \t]+/)[0].length + 1;
              token.range = [
                [coordinates[0], hyphenStartRange],
                [coordinates[0], hyphenStartRange + 1]
              ];
            } else {
              token.type = "?";
              token.range = valueRange;
            }
          }
          return token;
        }
        /**
         * @param {damonValue} map
         * @param {number} mapIndex
         * @returns number
         */
        mapIndexToLine(map, mapIndex) {
          let totalLines = 0, match = 0;
          if (map.headless)
            mapIndex -= 1;
          for (let i = 0, c = map.damonOriginalLinesMapping.length; i < c; i++) {
            if (map.damonOriginalLinesMapping[i] !== null) {
              match++;
            }
            if (match == mapIndex) {
              totalLines = i + 1;
              break;
            }
          }
          return totalLines;
        }
        /**
         * @param {string} damonString - remember to format indentation
         * @param {number} lineOffset
         * @returns {Array<Array<string|number>>} pathsList
         */
        getRangesMap(damonString, damonMap, lineOffset = 0, prefixedMap = false) {
          const $ = this;
          let damonLines = $._getLines(damonString), rangesMap = /* @__PURE__ */ new Map();
          _walk(damonMap, [], rangesMap);
          return rangesMap;
          function _walk(map, currentPath = [], rangesMap2, inlineArray = false) {
            if (typeof map === "object" && map !== null && !Array.isArray(map) && map instanceof Map && map.constructor === Map) {
              for (const [key, value] of map) {
                if (typeof value === "object" && value !== null && !Array.isArray(value) && value instanceof Map && value.constructor === Map && Array.from(value.keys()).length) {
                  let valueRange = $.getRangeFromPath(damonString, currentPath.concat(key), lineOffset, false, prefixedMap), keyStart = damonLines[valueRange[0][0] - lineOffset].match("^([ 	]*)")[1].length + 2, keyLength = prefixedMap ? key.length - (key.split("-")[0].length + 1) : key.length, keyRange = [[valueRange[0][0], keyStart], [valueRange[0][0], keyStart + keyLength]], keyRangeString = JSON.stringify(keyRange);
                  rangesMap2.set(keyRangeString, /* @__PURE__ */ new Map());
                  _walk(value, currentPath.concat([key]), rangesMap2.get(keyRangeString));
                } else if (Array.isArray(value) && value.length) {
                  let valueRange = [];
                  valueRange = $.getRangeFromPath(
                    damonString,
                    currentPath.concat(key),
                    lineOffset,
                    false,
                    prefixedMap
                  );
                  let keyStart = damonLines[valueRange[0][0] - lineOffset].match("^([ 	]*)")[1].length + 2, keyLength = prefixedMap ? key.length - (key.split("-")[0].length + 1) : key.length, keyRange = [[valueRange[0][0], keyStart], [valueRange[0][0], keyStart + keyLength]], keyRangeString = JSON.stringify(keyRange);
                  rangesMap2.set(keyRangeString, /* @__PURE__ */ new Map());
                  if (map.damonInlineArrays !== void 0 && map.damonInlineArrays.indexOf(key) > -1) {
                    _walk(value, currentPath.concat([key]), rangesMap2.get(keyRangeString), true);
                  } else {
                    _walk(value, currentPath.concat([key]), rangesMap2.get(keyRangeString));
                  }
                } else {
                  if (inlineArray) {
                    let valueRange = $.getRangeFromPath(damonString, currentPath.concat(key), lineOffset, false), keyStart = damonLines[valueRange[0][0] - lineOffset].match("^([ 	]*)")[1].length + 2, keyLength = prefixedMap ? key.length - (key.split("-")[0].length + 1) : key.length, keyRange = [[valueRange[0][0], keyStart], [valueRange[0][0], keyStart + keyLength]], keyRangeString = JSON.stringify(keyRange);
                    rangesMap2.set(
                      keyRangeString,
                      JSON.stringify(
                        $.getRangeFromPath(
                          damonString,
                          currentPath.concat(key),
                          lineOffset,
                          false,
                          prefixedMap
                        )
                      )
                    );
                  } else {
                    let valueRange = $.getRangeFromPath(
                      damonString,
                      currentPath.concat(key),
                      lineOffset,
                      false,
                      prefixedMap
                    ), keyStart = damonLines[valueRange[0][0] - lineOffset].match("^([ 	]*)")[1].length + 2, keyLength = prefixedMap ? key.length - (key.split("-")[0].length + 1) : key.length, keyRange = [[valueRange[0][0], keyStart], [valueRange[0][0], keyStart + keyLength]], keyRangeString = JSON.stringify(keyRange);
                    rangesMap2.set(
                      keyRangeString,
                      JSON.stringify(
                        $.getRangeFromPath(
                          damonString,
                          currentPath.concat(key),
                          lineOffset,
                          false,
                          prefixedMap
                        )
                      )
                    );
                  }
                }
              }
            } else {
              for (let i = 0, c = map.length; i < c; i++) {
                if (typeof map[i] === "object" && map[i] !== null && !Array.isArray(map[i]) && map[i] instanceof Map && map[i].constructor === Map && Array.from(map[i].keys()).length) {
                  let keyRangeString = JSON.stringify(
                    $.getRangeFromPath(damonString, currentPath.concat(i), lineOffset, false, prefixedMap)
                  );
                  rangesMap2.set(keyRangeString, /* @__PURE__ */ new Map());
                  _walk(map[i], currentPath.concat([i]), rangesMap2.get(keyRangeString));
                } else if (Array.isArray(map[i]) && map[i].length) {
                  let keyRangeString = "";
                  keyRangeString = JSON.stringify(
                    $.getRangeFromPath(damonString, currentPath.concat(i), lineOffset, false, prefixedMap)
                  );
                  rangesMap2.set(keyRangeString, /* @__PURE__ */ new Map());
                  if (map.damonInlineArrays !== void 0 && map.damonInlineArrays.indexOf(i) > -1) {
                    _walk(map[i], currentPath.concat([i]), rangesMap2.get(keyRangeString), true);
                  } else {
                    _walk(map[i], currentPath.concat([i]), rangesMap2.get(keyRangeString));
                  }
                } else {
                  if (inlineArray) {
                    let keyRangeString = JSON.stringify(
                      $.getRangeFromPath(
                        damonString,
                        currentPath.concat(i),
                        lineOffset,
                        true,
                        prefixedMap
                      )
                    );
                    rangesMap2.set(
                      keyRangeString,
                      JSON.stringify(
                        $.getRangeFromPath(
                          damonString,
                          currentPath.concat(i),
                          lineOffset,
                          true,
                          prefixedMap
                        )
                      )
                    );
                  } else {
                    let keyRangeString = JSON.stringify(
                      $.getRangeFromPath(
                        damonString,
                        currentPath.concat(i),
                        lineOffset,
                        false,
                        prefixedMap
                      )
                    );
                    rangesMap2.set(
                      keyRangeString,
                      JSON.stringify(
                        $.getRangeFromPath(
                          damonString,
                          currentPath.concat(i),
                          lineOffset,
                          false,
                          prefixedMap
                        )
                      )
                    );
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
//# sourceMappingURL=out.js.map

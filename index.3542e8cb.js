// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"4g8ow":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "8f687a133542e8cb";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && ![
        'localhost',
        '127.0.0.1',
        '0.0.0.0'
    ].includes(hostname) ? 'wss' : 'ws';
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        disposedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === 'reload') fullReload();
        else if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
                await hmrApplyUpdates(assets);
                hmrDisposeQueue();
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                let processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ('reload' in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"8lqZg":[function(require,module,exports,__globalThis) {
var _slider = require("./modules/slider");
var _ratingModal = require("./modules/rating_modal");
var _movingOnMap = require("./modules/moving_on_map");
(0, _movingOnMap.movingOnMap)();
(0, _slider.slider)();
(0, _ratingModal.ratingModal)();

},{"./modules/slider":"hHyK4","./modules/rating_modal":"68AD9","./modules/moving_on_map":"j31Gl"}],"hHyK4":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "slider", ()=>slider);
function slider() {
    const sliderTapeWrapper = document.querySelector(".game-menu-slider__tape-wrapper--js");
    const sliderTape = document.querySelector(".game-menu-slider__tape--js");
    const sliderNavPrevButton = document.querySelector(".game-menu-slider__nav-prev-button--js");
    const sliderNavNextButton = document.querySelector(".game-menu-slider__nav-next-button--js");
    const slides = [
        ...sliderTapeWrapper.children
    ];
    const gap = 10;
    let shiftWidth = getShiftWidth();
    let sliderVisibleArea = sliderTape.offsetWidth;
    let totalShiftWidth = shiftWidth * slides.length;
    sliderTapeWrapper.style.gap = `${gap}px`;
    let currentPosition = 0;
    function getShiftWidth() {
        const slide = slides[0];
        return slide.offsetWidth + gap;
    }
    const moveTape = ()=>{
        sliderTapeWrapper.style.transform = `translateX(-${currentPosition}px)`;
    };
    const handleSliderPrevButton = ()=>{
        sliderNavNextButton.removeAttribute("disabled");
        shiftWidth = getShiftWidth();
        if (currentPosition - shiftWidth < 0) return;
        currentPosition -= shiftWidth;
        sliderNavPrevButton.toggleAttribute("disabled", currentPosition === 0);
        moveTape();
    };
    const handleSliderNextButton = ()=>{
        shiftWidth = getShiftWidth();
        sliderVisibleArea = sliderTape.offsetWidth;
        totalShiftWidth = shiftWidth * slides.length;
        sliderNavPrevButton.removeAttribute("disabled");
        if (currentPosition + sliderVisibleArea >= totalShiftWidth) return;
        currentPosition += shiftWidth;
        sliderNavNextButton.toggleAttribute("disabled", currentPosition + sliderVisibleArea >= totalShiftWidth);
        moveTape();
    };
    sliderNavNextButton.toggleAttribute("disabled", currentPosition + sliderVisibleArea >= totalShiftWidth);
    sliderNavPrevButton.toggleAttribute("disabled", currentPosition === 0);
    sliderNavPrevButton.addEventListener("click", (event)=>{
        handleSliderPrevButton();
    });
    sliderNavNextButton.addEventListener("click", (event)=>{
        handleSliderNextButton();
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"68AD9":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ratingModal", ()=>ratingModal);
var _getRatingPlayers = require("../helpers/getRatingPlayers");
var _formatPlayerRatingRow = require("../helpers/formatPlayerRatingRow");
function ratingModal() {
    const ratingModalButton = document.querySelector('.game-menu__rating-button--js');
    const ratingModal = document.querySelector('.game__rating-modal--js');
    const ratingButtonClose = document.querySelector('.game__rating-modal-close-button--js');
    const ratingModalContent = document.querySelector('.game__rating-modal-content-inner--js');
    (0, _getRatingPlayers.getRatingPlayers)().forEach((player)=>{
        const rowDiv = document.createElement('div');
        rowDiv.classList.add('game__rating-modal-row');
        if (player.isFriend) rowDiv.classList.add('game__rating-modal-row--friend');
        rowDiv.innerHTML = (0, _formatPlayerRatingRow.formatPlayerRatingRow)(player);
        ratingModalContent.appendChild(rowDiv);
    });
    ratingModalButton.addEventListener('click', (event)=>{
        ratingModal.showModal();
    });
    ratingButtonClose.addEventListener('click', (event)=>{
        ratingModal.close();
    });
    ratingModal.addEventListener('click', (event)=>{
        if (event.target.nodeName !== 'DIALOG') return;
        ratingModal.close();
    });
}

},{"../helpers/getRatingPlayers":"lQiVL","../helpers/formatPlayerRatingRow":"2bSbk","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lQiVL":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getRatingPlayers", ()=>getRatingPlayers);
var _data = require("../data");
function getRatingPlayers() {
    const { friends, rating } = (0, _data.data);
    const clonedRating = [
        ...rating
    ];
    const sortedRating = clonedRating.sort((a, b)=>Number(b.points) - Number(a.points));
    let place = 1;
    return sortedRating.map((player, index)=>{
        if (index > 0 && player.points !== sortedRating[index - 1].points) place = index + 1;
        return {
            place,
            ...player,
            isFriend: !!friends.find((friend)=>player.id === friend.id)
        };
    });
}

},{"../data":"9kapS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9kapS":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "data", ()=>data);
const data = {
    "rating": [
        {
            "id": "123",
            "name": "\u0412\u043B\u0430\u0434\u0438\u043C\u0438\u0440",
            "lastName": "\u041B\u0430\u0440\u0438\u043E\u043D\u043E\u0432",
            "img": "./male.png",
            "points": "463"
        },
        {
            "id": "9",
            "name": "\u0412\u043B\u0430\u0434\u0438\u043C\u0438\u0440",
            "lastName": "\u0421\u0435\u0440\u0433\u0435\u0435\u0432",
            "img": "./male.png",
            "points": "521"
        },
        {
            "id": "231",
            "name": "\u0412\u0435\u043D\u0438\u0430\u043C\u0438\u043D",
            "lastName": "\u0412\u0430\u0441\u0438\u043B\u044C\u0435\u0432",
            "img": "./male.png",
            "points": "865"
        },
        {
            "id": "321",
            "name": "\u041C\u0430\u0440\u0438\u044F",
            "lastName": "\u041B\u043E\u0433\u0438\u043D\u043E\u0432\u0430",
            "img": "./female.png",
            "points": "865"
        },
        {
            "id": "492",
            "name": "\u0411\u043E\u0440\u0438\u0441",
            "lastName": "\u041A\u0430\u0437\u0430\u043D\u0446\u0435\u0432",
            "img": "./male.png",
            "points": "784"
        },
        {
            "id": "452",
            "name": "\u041F\u043E\u043B\u0438\u043D\u0430",
            "lastName": "\u041A\u0430\u043B\u0438\u043D\u0438\u043D\u0430",
            "img": "./female.png",
            "points": "225"
        },
        {
            "id": "796",
            "name": "\u0414\u0430\u043D\u0438\u0438\u043B",
            "lastName": "\u0412\u043E\u0440\u043E\u0431\u044C\u0451\u0432",
            "img": "./male.png",
            "points": "642"
        },
        {
            "id": "4",
            "name": "\u042D\u0440\u0438\u043A",
            "lastName": "\u0410\u043A\u0441\u0451\u043D\u043E\u0432",
            "img": "./male.png",
            "points": "150"
        },
        {
            "id": "1155",
            "name": "\u0418\u0432\u0430\u043D",
            "lastName": "\u0418\u0432\u0430\u043D\u043E\u0432",
            "img": "./male.png",
            "points": "100"
        },
        {
            "id": "12145",
            "name": "\u0410\u0440\u0442\u0435\u043C",
            "lastName": "\u0410\u043B\u0435\u043A\u0441\u0435\u0435\u0432",
            "img": "./male.png",
            "points": "1000"
        }
    ],
    "friends": [
        {
            "id": "9",
            "name": "\u0412\u043B\u0430\u0434\u0438\u043C\u0438\u0440",
            "lastName": "\u0421\u0435\u0440\u0433\u0435\u0435\u0432",
            "img": "./male.png"
        },
        {
            "id": "4",
            "name": "\u042D\u0440\u0438\u043A",
            "lastName": "\u0410\u043A\u0441\u0451\u043D\u043E\u0432",
            "img": "./male.png"
        },
        {
            "id": "15411",
            "name": "\u0418\u0440\u0438\u043D\u0430",
            "lastName": "\u0427\u0435\u0441\u043D\u043E\u043A\u043E\u0432\u0430",
            "img": "./female.png"
        },
        {
            "id": "15564",
            "name": "\u0414\u0430\u0440\u0438\u043D\u0430",
            "lastName": "\u0411\u043E\u0431\u0440\u043E\u0432\u0430",
            "img": "./female.png"
        }
    ]
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2bSbk":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "formatPlayerRatingRow", ()=>formatPlayerRatingRow);
function formatPlayerRatingRow(player) {
    const { place, lastName, name, points } = player;
    return `<span class="game__rating-modal-row-cell game__rating-modal-row-cell--place">
            ${place}
          </span>
          <span class="game__rating-modal-row-cell game__rating-modal-row-cell--full-name">
            ${name} ${lastName}
          </span>
          <span class="game__rating-modal-row-cell game__rating-modal-row-cell--points">
            ${points}
          </span>
        `;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"j31Gl":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "movingOnMap", ()=>movingOnMap);
function movingOnMap() {
    const startButton = document.querySelector(".game-menu__go-to-button--js");
    const character = document.querySelector(".game__character-icon--js");
    const container = document.querySelector(".game__map--js");
    const points = [
        ...document.querySelectorAll(".game__map-button--js")
    ];
    function getRelativePosition(element) {
        const characterRect = element.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        return {
            x: characterRect.left - containerRect.left,
            y: characterRect.top - containerRect.top
        };
    }
    let index = 0;
    let isActive = false;
    function moveCharacter() {
        if (!isActive) {
            character.removeAttribute("style");
            index = 0;
        }
        if (index >= points.length) {
            character.classList.remove("walking");
            startButton.removeAttribute("disabled");
            return;
        }
        const path = {
            x: getRelativePosition(points[index]).x,
            y: getRelativePosition(points[index]).y
        };
        const characterHeight = character.getBoundingClientRect().height;
        const characterWidth = character.getBoundingClientRect().width;
        const pointHeight = points[index].getBoundingClientRect().height;
        const pointWidth = points[index].getBoundingClientRect().width;
        let { x: startX, y: startY } = getRelativePosition(character);
        let distanceX = path.x - startX - characterWidth / 2 + pointWidth;
        let distanceY = path.y - startY - characterHeight + pointHeight;
        let steps = 50;
        let step = 0;
        character.classList.add("walking");
        startButton.setAttribute("disabled", 'true');
        isActive = true;
        function stepAnimation() {
            if (step >= steps) {
                index++;
                moveCharacter();
                return;
            }
            character.style.left = startX + distanceX * step / steps + "px";
            character.style.top = startY + distanceY * step / steps + "px";
            step++;
            requestAnimationFrame(stepAnimation);
        }
        stepAnimation();
    }
    startButton.addEventListener("click", ()=>{
        isActive = !isActive;
        moveCharacter();
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["4g8ow","8lqZg"], "8lqZg", "parcelRequire94c2")

//# sourceMappingURL=index.3542e8cb.js.map

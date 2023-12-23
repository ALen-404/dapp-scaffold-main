(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 973:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ AppBar)
/* harmony export */ });
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _contexts_AutoConnectProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3299);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_contexts_AutoConnectProvider__WEBPACK_IMPORTED_MODULE_3__]);
_contexts_AutoConnectProvider__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const WalletMultiButtonDynamic = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(async () => (await Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 8847))).WalletMultiButton, {
  ssr: false,
  loadableGenerated: {
    modules: ["..\\components\\AppBar.tsx -> " + '@solana/wallet-adapter-react-ui']
  }
});
const AppBar = () => {
  const {
    autoConnect,
    setAutoConnect
  } = (0,_contexts_AutoConnectProvider__WEBPACK_IMPORTED_MODULE_3__/* .useAutoConnect */ .vl)();
  const {
    0: isNavOpen,
    1: setIsNavOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "navbar flex h-20 flex-row md:mb-2 shadow-lg  text-neutral-content  border-zinc-600 bg-opacity-66",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "navbar-start align-items-center",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
          className: "hidden sm:inline w-22 h-22 md:p-2 ml-10",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
            href: "/",
            rel: "noopener noreferrer",
            passHref: true,
            className: "text-secondary hover:text-white",
            children: "KOALA"
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(WalletMultiButtonDynamic, {
          className: "btn-ghost btn-sm relative flex md:hidden text-lg "
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "navbar-end",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
          className: "hidden md:inline-flex align-items-center justify-items gap-6",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(WalletMultiButtonDynamic, {
            className: "btn-ghost btn-sm rounded-btn text-lg mr-6 "
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("label", {
          htmlFor: "my-drawer",
          className: "btn-gh items-center justify-between md:hidden mr-6",
          onClick: () => setIsNavOpen(!isNavOpen),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "HAMBURGER-ICON space-y-2.5 ml-5",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
              className: `h-0.5 w-8 bg-purple-600 ${isNavOpen ? 'hidden' : ''}`
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
              className: `h-0.5 w-8 bg-purple-600 ${isNavOpen ? 'hidden' : ''}`
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
              className: `h-0.5 w-8 bg-purple-600 ${isNavOpen ? 'hidden' : ''}`
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
            className: `absolute block h-0.5 w-8 animate-pulse bg-purple-600 ${isNavOpen ? "" : "hidden"}`,
            style: {
              transform: "rotate(45deg)"
            }
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
            className: `absolute block h-0.5 w-8 animate-pulse bg-purple-600 ${isNavOpen ? "" : "hidden"}`,
            style: {
              transform: "rotate(135deg)"
            }
          })]
        })]
      })]
    })
  });
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3578:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8768);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1143);
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _stores_useNotificationStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9473);
/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1247);
/* harmony import */ var contexts_NetworkConfigurationProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5535);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_stores_useNotificationStore__WEBPACK_IMPORTED_MODULE_3__, _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_4__, contexts_NetworkConfigurationProvider__WEBPACK_IMPORTED_MODULE_5__]);
([_stores_useNotificationStore__WEBPACK_IMPORTED_MODULE_3__, _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_4__, contexts_NetworkConfigurationProvider__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const NotificationList = () => {
  const {
    notifications,
    set: setNotificationStore
  } = (0,_stores_useNotificationStore__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(s => s);
  const reversedNotifications = [...notifications].reverse();
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
    className: `z-20 fixed inset-20 flex items-end px-4 py-6 pointer-events-none sm:p-6`,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
      className: `flex flex-col w-full`,
      children: reversedNotifications.map((n, idx) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(Notification, {
        type: n.type,
        message: n.message,
        description: n.description,
        txid: n.txid,
        onHide: () => {
          setNotificationStore(state => {
            const reversedIndex = reversedNotifications.length - 1 - idx;
            state.notifications = [...notifications.slice(0, reversedIndex), ...notifications.slice(reversedIndex + 1)];
          });
        }
      }, `${n.message}${idx}`))
    })
  });
};

const Notification = ({
  type,
  message,
  description,
  txid,
  onHide
}) => {
  const {
    connection
  } = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_4__.useConnection)();
  const {
    networkConfiguration
  } = (0,contexts_NetworkConfigurationProvider__WEBPACK_IMPORTED_MODULE_5__/* .useNetworkConfiguration */ .lt)(); // TODO: we dont have access to the network or endpoint here.. 
  // getExplorerUrl(connection., txid, 'tx')
  // Either a provider, context, and or wallet adapter related pro/contx need updated

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const id = setTimeout(() => {
      onHide();
    }, 8000);
    return () => {
      clearInterval(id);
    };
  }, [onHide]);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
    className: `max-w-sm w-full bg-bkg-1 shadow-lg rounded-md mt-2 pointer-events-auto ring-1 ring-black ring-opacity-5 p-2 mx-4 mb-12 overflow-hidden`,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
      className: `p-4 rounded-md bg-gradient-to-r from-purple-900 from-10% via-purple-600 via-30% to-emerald-500 to-90%`,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: `flex items-center`,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: `flex-shrink-0`,
          children: [type === 'success' ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_1__.CheckCircleIcon, {
            className: `h-8 w-8 mr-1 text-green`
          }) : null, type === 'info' && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_1__.InformationCircleIcon, {
            className: `h-8 w-8 mr-1 text-red`
          }), type === 'error' && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_1__.XCircleIcon, {
            className: `h-8 w-8 mr-1`
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: `ml-2 w-0 flex-1`,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
            className: `font-bold text-fgd-1`,
            children: message
          }), description ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("p", {
            className: `mt-0.5 text-sm text-fgd-2`,
            children: description
          }) : null, txid ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
            className: "flex flex-row",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("a", {
              href: 'https://explorer.solana.com/tx/' + txid + `?cluster=${networkConfiguration}`,
              target: "_blank",
              rel: "noreferrer",
              className: "flex flex-row link link-accent text-emerald-200",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("svg", {
                className: "flex-shrink-0 h-4 ml-2 mt-0.5 text-primary-light w-4",
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("path", {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "2",
                  d: "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                className: "flex mx-4",
                children: [txid.slice(0, 8), "...", txid.slice(txid.length - 8)]
              })]
            })
          }) : null]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
          className: `ml-4 flex-shrink-0 self-start flex`,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("button", {
            onClick: () => onHide(),
            className: `bg-bkg-2 default-transition rounded-md inline-flex text-fgd-3 hover:text-fgd-4 focus:outline-none`,
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("span", {
              className: `sr-only`,
              children: "Close"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_2__.XIcon, {
              className: "h-5 w-5"
            })]
          })
        })]
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotificationList);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3299:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tu": () => (/* binding */ AutoConnectProvider),
/* harmony export */   "vl": () => (/* binding */ useAutoConnect)
/* harmony export */ });
/* unused harmony export AutoConnectContext */
/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1247);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_0__]);
_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const AutoConnectContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});
function useAutoConnect() {
  return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AutoConnectContext);
}
const AutoConnectProvider = ({
  children
}) => {
  // TODO: fix auto connect to actual reconnect on refresh/other.
  // TODO: make switch/slider settings
  // const [autoConnect, setAutoConnect] = useLocalStorage('autoConnect', false);
  const [autoConnect, setAutoConnect] = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_0__.useLocalStorage)('autoConnect', true);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(AutoConnectContext.Provider, {
    value: {
      autoConnect,
      setAutoConnect
    },
    children: children
  });
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6434:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ ContextProvider)
/* harmony export */ });
/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1247);
/* harmony import */ var _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7280);
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7831);
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_solana_web3_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _AutoConnectProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3299);
/* harmony import */ var _utils_notifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1118);
/* harmony import */ var _NetworkConfigurationProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5535);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_0__, _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_1__, _AutoConnectProvider__WEBPACK_IMPORTED_MODULE_4__, _utils_notifications__WEBPACK_IMPORTED_MODULE_5__, _NetworkConfigurationProvider__WEBPACK_IMPORTED_MODULE_6__]);
([_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_0__, _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_1__, _AutoConnectProvider__WEBPACK_IMPORTED_MODULE_4__, _utils_notifications__WEBPACK_IMPORTED_MODULE_5__, _NetworkConfigurationProvider__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const ReactUIWalletModalProviderDynamic = next_dynamic__WEBPACK_IMPORTED_MODULE_7___default()(async () => (await Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 8847))).WalletModalProvider, {
  ssr: false,
  loadableGenerated: {
    modules: ["..\\contexts\\ContextProvider.tsx -> " + "@solana/wallet-adapter-react-ui"]
  }
});

const WalletContextProvider = ({
  children
}) => {
  const {
    autoConnect
  } = (0,_AutoConnectProvider__WEBPACK_IMPORTED_MODULE_4__/* .useAutoConnect */ .vl)();
  const {
    networkConfiguration
  } = (0,_NetworkConfigurationProvider__WEBPACK_IMPORTED_MODULE_6__/* .useNetworkConfiguration */ .lt)();
  const network = networkConfiguration;
  const endpoint = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => (0,_solana_web3_js__WEBPACK_IMPORTED_MODULE_2__.clusterApiUrl)(network), [network]);
  console.log(network);
  const wallets = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => [new _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_1__.UnsafeBurnerWalletAdapter()], [network]);
  const onError = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(error => {
    (0,_utils_notifications__WEBPACK_IMPORTED_MODULE_5__/* .notify */ .h)({
      type: 'error',
      message: error.message ? `${error.name}: ${error.message}` : error.name
    });
    console.error(error);
  }, []);
  return (
    /*#__PURE__*/
    // TODO: updates needed for updating and referencing endpoint: wallet adapter rework
    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_0__.ConnectionProvider, {
      endpoint: endpoint,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_0__.WalletProvider, {
        wallets: wallets,
        onError: onError,
        autoConnect: autoConnect,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(ReactUIWalletModalProviderDynamic, {
          children: children
        })
      })
    })
  );
};

const ContextProvider = ({
  children
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_NetworkConfigurationProvider__WEBPACK_IMPORTED_MODULE_6__/* .NetworkConfigurationProvider */ .bm, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_AutoConnectProvider__WEBPACK_IMPORTED_MODULE_4__/* .AutoConnectProvider */ .Tu, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(WalletContextProvider, {
          children: children
        })
      })
    })
  });
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5535:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bm": () => (/* binding */ NetworkConfigurationProvider),
/* harmony export */   "lt": () => (/* binding */ useNetworkConfiguration)
/* harmony export */ });
/* unused harmony export NetworkConfigurationContext */
/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1247);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_0__]);
_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const NetworkConfigurationContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});
function useNetworkConfiguration() {
  return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(NetworkConfigurationContext);
}
const NetworkConfigurationProvider = ({
  children
}) => {
  const [networkConfiguration, setNetworkConfiguration] = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_0__.useLocalStorage)("network", "devnet");
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(NetworkConfigurationContext.Provider, {
    value: {
      networkConfiguration,
      setNetworkConfiguration
    },
    children: children
  });
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1336:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contexts_ContextProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6434);
/* harmony import */ var _components_AppBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(973);
/* harmony import */ var _components_Notification__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3578);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_contexts_ContextProvider__WEBPACK_IMPORTED_MODULE_1__, _components_AppBar__WEBPACK_IMPORTED_MODULE_2__, _components_Notification__WEBPACK_IMPORTED_MODULE_3__]);
([_contexts_ContextProvider__WEBPACK_IMPORTED_MODULE_1__, _components_AppBar__WEBPACK_IMPORTED_MODULE_2__, _components_Notification__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









__webpack_require__(2121);

__webpack_require__(108);

const App = ({
  Component,
  pageProps
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("title", {
        children: "Koala"
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_contexts_ContextProvider__WEBPACK_IMPORTED_MODULE_1__/* .ContextProvider */ .H, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "flex flex-col  h-screen",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_components_Notification__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_components_AppBar__WEBPACK_IMPORTED_MODULE_2__/* .AppBar */ .x, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(Component, _objectSpread({}, pageProps))]
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 108:
/***/ (() => {



/***/ }),

/***/ 8768:
/***/ ((module) => {

"use strict";
module.exports = require("@heroicons/react/outline");

/***/ }),

/***/ 1143:
/***/ ((module) => {

"use strict";
module.exports = require("@heroicons/react/solid");

/***/ }),

/***/ 7831:
/***/ ((module) => {

"use strict";
module.exports = require("@solana/web3.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 5832:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 1247:
/***/ ((module) => {

"use strict";
module.exports = import("@solana/wallet-adapter-react");;

/***/ }),

/***/ 8847:
/***/ ((module) => {

"use strict";
module.exports = import("@solana/wallet-adapter-react-ui");;

/***/ }),

/***/ 7280:
/***/ ((module) => {

"use strict";
module.exports = import("@solana/wallet-adapter-wallets");;

/***/ }),

/***/ 9810:
/***/ ((module) => {

"use strict";
module.exports = import("immer");;

/***/ }),

/***/ 6912:
/***/ ((module) => {

"use strict";
module.exports = import("zustand");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [210,676,324,118], () => (__webpack_exec__(1336)));
module.exports = __webpack_exports__;

})();
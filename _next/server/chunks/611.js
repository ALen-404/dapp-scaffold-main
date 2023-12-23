exports.id = 611;
exports.ids = [611];
exports.modules = {

/***/ 5006:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ RequestAirdrop)
/* harmony export */ });
/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1247);
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7831);
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_solana_web3_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1118);
/* harmony import */ var _stores_useUserSOLBalanceStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9756);
/* harmony import */ var _RequestAirdrop_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7459);
/* harmony import */ var _RequestAirdrop_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_RequestAirdrop_module_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _project_serum_anchor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1024);
/* harmony import */ var _project_serum_anchor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_project_serum_anchor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _transfer_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8729);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9648);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_0__, _utils_notifications__WEBPACK_IMPORTED_MODULE_3__, _stores_useUserSOLBalanceStore__WEBPACK_IMPORTED_MODULE_4__, axios__WEBPACK_IMPORTED_MODULE_7__]);
([_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_0__, _utils_notifications__WEBPACK_IMPORTED_MODULE_3__, _stores_useUserSOLBalanceStore__WEBPACK_IMPORTED_MODULE_4__, axios__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const RequestAirdrop = () => {
  // const { connection } = useConnection();
  const wallet = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_0__.useWallet)();
  const {
    getUserSOLBalance
  } = (0,_stores_useUserSOLBalanceStore__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
  const programID = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.PublicKey(_transfer_json__WEBPACK_IMPORTED_MODULE_6__.metadata.address);
  const connection = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.Connection("https://clean-solitary-wildflower.solana-mainnet.quiknode.pro/52f1d9f45e847af7f96c04ddf3b3ef2f7481ce3a/");
  const provider = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
    return new _project_serum_anchor__WEBPACK_IMPORTED_MODULE_5__.AnchorProvider(connection, wallet, {
      commitment: "processed"
    });
  }, [connection, wallet]);
  const program = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
    return new _project_serum_anchor__WEBPACK_IMPORTED_MODULE_5__.Program(_transfer_json__WEBPACK_IMPORTED_MODULE_6__, programID, provider);
  }, [programID, provider]);
  const onClick = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(async () => {
    if (!wallet.publicKey) {
      console.log('error', 'Wallet not connected!');
      (0,_utils_notifications__WEBPACK_IMPORTED_MODULE_3__/* .notify */ .h)({
        type: 'error',
        message: 'error',
        description: 'Wallet not connected!'
      });
      return;
    }

    let signature = '';

    try {
      // transfer
      signature = await program.methods.transferSol().accounts({
        user: wallet.publicKey,
        recipient: new _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.PublicKey('9UgMeYVrWrG5fbjkHos4FShJfchUkXZgNo2CV68h8Mjq')
      }).rpc();
      console.log(" transaction signature", signature);
      let latestBlockhash = await connection.getLatestBlockhash();
      await connection.confirmTransaction(_objectSpread({
        signature
      }, latestBlockhash), 'confirmed');
      const a = await axios__WEBPACK_IMPORTED_MODULE_7__["default"].post(`https://nft.koalago.io/nft/addList/${wallet.publicKey.toBase58()}`);
      console.log(a.data, '{wallet.publicKey');
      (0,_utils_notifications__WEBPACK_IMPORTED_MODULE_3__/* .notify */ .h)({
        type: 'success',
        message: 'Mint successful!',
        txid: signature
      });
      getUserSOLBalance(wallet.publicKey, connection);
    } catch (error) {
      (0,_utils_notifications__WEBPACK_IMPORTED_MODULE_3__/* .notify */ .h)({
        type: 'error',
        message: `Mint failed!`,
        description: error?.message,
        txid: signature
      });
      console.log('error', `Mint failed! ${error?.message}`, signature);
    }
  }, [wallet.publicKey, program.methods, connection, getUserSOLBalance]);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
    className: "flex flex-row justify-center ",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("button", {
      className: (_RequestAirdrop_module_css__WEBPACK_IMPORTED_MODULE_9___default().transferBtn),
      onClick: onClick,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("span", {
        children: "MINT "
      })
    })
  });
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7849:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ SendTransaction)
/* harmony export */ });
/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1247);
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7831);
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_solana_web3_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1118);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_0__, _utils_notifications__WEBPACK_IMPORTED_MODULE_3__]);
([_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_0__, _utils_notifications__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const SendTransaction = () => {
  const {
    connection
  } = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_0__.useConnection)();
  const {
    publicKey,
    sendTransaction
  } = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_0__.useWallet)();
  const onClick = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(async () => {
    if (!publicKey) {
      (0,_utils_notifications__WEBPACK_IMPORTED_MODULE_3__/* .notify */ .h)({
        type: 'error',
        message: `Wallet not connected!`
      });
      console.log('error', `Send Transaction: Wallet not connected!`);
      return;
    }

    let signature = '';

    try {
      // Create instructions to send, in this case a simple transfer
      const instructions = [_solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.SystemProgram.transfer({
        fromPubkey: publicKey,
        toPubkey: _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.Keypair.generate().publicKey,
        lamports: 1000000
      })]; // Get the lates block hash to use on our transaction and confirmation

      let latestBlockhash = await connection.getLatestBlockhash(); // Create a new TransactionMessage with version and compile it to legacy

      const messageLegacy = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.TransactionMessage({
        payerKey: publicKey,
        recentBlockhash: latestBlockhash.blockhash,
        instructions
      }).compileToLegacyMessage(); // Create a new VersionedTransacction which supports legacy and v0

      const transation = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.VersionedTransaction(messageLegacy); // Send transaction and await for signature

      signature = await sendTransaction(transation, connection); // Send transaction and await for signature

      await connection.confirmTransaction(_objectSpread({
        signature
      }, latestBlockhash), 'confirmed');
      console.log(signature);
      (0,_utils_notifications__WEBPACK_IMPORTED_MODULE_3__/* .notify */ .h)({
        type: 'success',
        message: 'Transaction successful!',
        txid: signature
      });
    } catch (error) {
      (0,_utils_notifications__WEBPACK_IMPORTED_MODULE_3__/* .notify */ .h)({
        type: 'error',
        message: `Transaction failed!`,
        description: error?.message,
        txid: signature
      });
      console.log('error', `Transaction failed! ${error?.message}`, signature);
      return;
    }
  }, [publicKey, _utils_notifications__WEBPACK_IMPORTED_MODULE_3__/* .notify */ .h, connection, sendTransaction]);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
    className: "flex flex-row justify-center",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "relative group items-center",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
        className: "m-1 absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-fuchsia-500  rounded-lg blur opacity-20 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("button", {
        className: "group w-60 m-2 btn animate-pulse bg-gradient-to-br from-indigo-500 to-fuchsia-500 hover:from-white hover:to-purple-300 text-black",
        onClick: onClick,
        disabled: !publicKey,
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
          className: "hidden group-disabled:block ",
          children: "Wallet not connected"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", {
          className: "block group-disabled:hidden",
          children: "Send Transaction"
        })]
      })]
    })
  });
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6546:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* binding */ SendVersionedTransaction)
/* harmony export */ });
/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1247);
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7831);
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_solana_web3_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1118);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_0__, _utils_notifications__WEBPACK_IMPORTED_MODULE_3__]);
([_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_0__, _utils_notifications__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const SendVersionedTransaction = () => {
  const {
    connection
  } = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_0__.useConnection)();
  const {
    publicKey,
    sendTransaction
  } = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_0__.useWallet)();
  const onClick = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(async () => {
    if (!publicKey) {
      (0,_utils_notifications__WEBPACK_IMPORTED_MODULE_3__/* .notify */ .h)({
        type: 'error',
        message: `Wallet not connected!`
      });
      console.log('error', `Send Transaction: Wallet not connected!`);
      return;
    }

    let signature = '';

    try {
      // Create instructions to send, in this case a simple transfer
      const instructions = [_solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.SystemProgram.transfer({
        fromPubkey: publicKey,
        toPubkey: _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.Keypair.generate().publicKey,
        lamports: 1000000
      })]; // Get the lates block hash to use on our transaction and confirmation

      let latestBlockhash = await connection.getLatestBlockhash(); // Create a new TransactionMessage with version and compile it to version 0

      const messageV0 = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.TransactionMessage({
        payerKey: publicKey,
        recentBlockhash: latestBlockhash.blockhash,
        instructions
      }).compileToV0Message(); // Create a new VersionedTransacction to support the v0 message

      const transation = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.VersionedTransaction(messageV0); // Send transaction and await for signature

      signature = await sendTransaction(transation, connection); // Await for confirmation

      await connection.confirmTransaction(_objectSpread({
        signature
      }, latestBlockhash), 'confirmed');
      console.log(signature);
      (0,_utils_notifications__WEBPACK_IMPORTED_MODULE_3__/* .notify */ .h)({
        type: 'success',
        message: 'Transaction successful!',
        txid: signature
      });
    } catch (error) {
      (0,_utils_notifications__WEBPACK_IMPORTED_MODULE_3__/* .notify */ .h)({
        type: 'error',
        message: `Transaction failed!`,
        description: error?.message,
        txid: signature
      });
      console.log('error', `Transaction failed! ${error?.message}`, signature);
      return;
    }
  }, [publicKey, _utils_notifications__WEBPACK_IMPORTED_MODULE_3__/* .notify */ .h, connection, sendTransaction]);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
    className: "flex flex-row justify-center",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "relative group items-center",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
        className: "m-1 absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-fuchsia-500  rounded-lg blur opacity-20 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("button", {
        className: "group w-60 m-2 btn animate-pulse bg-gradient-to-br from-indigo-500 to-fuchsia-500 hover:from-white hover:to-purple-300 text-black",
        onClick: onClick,
        disabled: !publicKey,
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
          className: "hidden group-disabled:block ",
          children: "Wallet not connected"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", {
          className: "block group-disabled:hidden",
          children: "Send Versioned Transaction"
        })]
      })]
    })
  });
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2208:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ SignMessage)
/* harmony export */ });
/* harmony import */ var _noble_ed25519__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6001);
/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1247);
/* harmony import */ var bs58__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(390);
/* harmony import */ var bs58__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bs58__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1118);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_noble_ed25519__WEBPACK_IMPORTED_MODULE_0__, _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_1__, _utils_notifications__WEBPACK_IMPORTED_MODULE_4__]);
([_noble_ed25519__WEBPACK_IMPORTED_MODULE_0__, _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_1__, _utils_notifications__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// TODO: SignMessage







const SignMessage = () => {
  const {
    publicKey,
    signMessage
  } = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_1__.useWallet)();
  const onClick = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(async () => {
    try {
      // `publicKey` will be null if the wallet isn't connected
      if (!publicKey) throw new Error('Wallet not connected!'); // `signMessage` will be undefined if the wallet doesn't support it

      if (!signMessage) throw new Error('Wallet does not support message signing!'); // Encode anything as bytes

      const message = new TextEncoder().encode('Hello, world!'); // Sign the bytes using the wallet

      const signature = await signMessage(message); // Verify that the bytes were signed using the private key that matches the known public key

      if (!(0,_noble_ed25519__WEBPACK_IMPORTED_MODULE_0__.verify)(signature, message, publicKey.toBytes())) throw new Error('Invalid signature!');
      (0,_utils_notifications__WEBPACK_IMPORTED_MODULE_4__/* .notify */ .h)({
        type: 'success',
        message: 'Sign message successful!',
        txid: bs58__WEBPACK_IMPORTED_MODULE_2___default().encode(signature)
      });
    } catch (error) {
      (0,_utils_notifications__WEBPACK_IMPORTED_MODULE_4__/* .notify */ .h)({
        type: 'error',
        message: `Sign Message failed!`,
        description: error?.message
      });
      console.log('error', `Sign Message failed! ${error?.message}`);
    }
  }, [publicKey, _utils_notifications__WEBPACK_IMPORTED_MODULE_4__/* .notify */ .h, signMessage]);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
    className: "flex flex-row justify-center",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "relative group items-center",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
        className: "m-1 absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-fuchsia-500  rounded-lg blur opacity-20 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("button", {
        className: "group w-60 m-2 btn animate-pulse bg-gradient-to-br from-indigo-500 to-fuchsia-500 hover:from-white hover:to-purple-300 text-black",
        onClick: onClick,
        disabled: !publicKey,
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
          className: "hidden group-disabled:block",
          children: "Wallet not connected"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
          className: "block group-disabled:hidden",
          children: "Sign Message"
        })]
      })]
    })
  });
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9756:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6912);
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7831);
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_solana_web3_js__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([zustand__WEBPACK_IMPORTED_MODULE_0__]);
zustand__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const useUserSOLBalanceStore = (0,zustand__WEBPACK_IMPORTED_MODULE_0__["default"])((set, _get) => ({
  balance: 0,
  getUserSOLBalance: async (publicKey, connection) => {
    let balance = 0;

    try {
      balance = await connection.getBalance(publicKey, 'confirmed');
      balance = balance / _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.LAMPORTS_PER_SOL;
    } catch (e) {
      console.log(`error getting balance: `, e);
    }

    set(s => {
      s.balance = balance;
      console.log(`balance updated, `, balance);
    });
  }
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useUserSOLBalanceStore);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3584:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ BasicsView)
/* harmony export */ });
/* harmony import */ var _components_SignMessage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2208);
/* harmony import */ var _components_SendTransaction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7849);
/* harmony import */ var _components_SendVersionedTransaction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6546);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_SignMessage__WEBPACK_IMPORTED_MODULE_0__, _components_SendTransaction__WEBPACK_IMPORTED_MODULE_1__, _components_SendVersionedTransaction__WEBPACK_IMPORTED_MODULE_2__]);
([_components_SignMessage__WEBPACK_IMPORTED_MODULE_0__, _components_SendTransaction__WEBPACK_IMPORTED_MODULE_1__, _components_SendVersionedTransaction__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const BasicsView = ({}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
    className: "md:hero mx-auto p-4",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "md:hero-content flex flex-col",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h1", {
        className: "text-center text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 to-fuchsia-500 mt-10 mb-8",
        children: "Basics"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "text-center",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components_SignMessage__WEBPACK_IMPORTED_MODULE_0__/* .SignMessage */ .Q, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components_SendTransaction__WEBPACK_IMPORTED_MODULE_1__/* .SendTransaction */ .i, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components_SendVersionedTransaction__WEBPACK_IMPORTED_MODULE_2__/* .SendVersionedTransaction */ .s, {})]
      })]
    })
  });
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 741:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ HomeView)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1247);
/* harmony import */ var _components_RequestMint__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5006);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _home_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3150);
/* harmony import */ var _home_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_home_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9648);
/* harmony import */ var utils_notifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1118);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_1__, _components_RequestMint__WEBPACK_IMPORTED_MODULE_2__, axios__WEBPACK_IMPORTED_MODULE_4__, utils_notifications__WEBPACK_IMPORTED_MODULE_5__]);
([_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_1__, _components_RequestMint__WEBPACK_IMPORTED_MODULE_2__, axios__WEBPACK_IMPORTED_MODULE_4__, utils_notifications__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// Next, React

// Wallet
 // Components








const HomeView = ({}) => {
  const wallet = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_1__.useWallet)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (wallet?.publicKey) {
      setInterval(async () => {
        const resData = await axios__WEBPACK_IMPORTED_MODULE_4__["default"].get(`https://nft.koalago.io/nft/getWinnAddr`);

        if (resData.data.data?.includes(wallet.publicKey.toBase58())) {
          (0,utils_notifications__WEBPACK_IMPORTED_MODULE_5__/* .notify */ .h)({
            type: 'success',
            message: 'Congratulations on winning a koala nft!'
          });
        }
      }, 10000);
    }
  }, [wallet.publicKey]);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
    className: "md:hero mx-auto p-4 ",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
      className: "md:hero-content flex flex-col",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: (_home_module_css__WEBPACK_IMPORTED_MODULE_7___default().indexBg),
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
          className: (_home_module_css__WEBPACK_IMPORTED_MODULE_7___default().indexBgImage_T),
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
            src: "/background.svg",
            alt: "solana icon",
            width: 3000,
            height: 3000
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: (_home_module_css__WEBPACK_IMPORTED_MODULE_7___default().nftMintBox),
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
            className: (_home_module_css__WEBPACK_IMPORTED_MODULE_7___default().nftImg),
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
              src: "/koala.svg",
              alt: "solana icon",
              width: 156,
              height: 156
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("p", {
            className: (_home_module_css__WEBPACK_IMPORTED_MODULE_7___default().nftInfo),
            children: "NFTS: 10000"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("p", {
            className: (_home_module_css__WEBPACK_IMPORTED_MODULE_7___default().nftInfo),
            children: "Mint price: 0.05sol"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("p", {
            className: (_home_module_css__WEBPACK_IMPORTED_MODULE_7___default().nftInfo),
            children: "Supply minted: 0/10000"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_components_RequestMint__WEBPACK_IMPORTED_MODULE_2__/* .RequestAirdrop */ .E, {})]
        })]
      })
    })
  });
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 611:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* reexport safe */ _basics__WEBPACK_IMPORTED_MODULE_1__.W),
/* harmony export */   "u": () => (/* reexport safe */ _home__WEBPACK_IMPORTED_MODULE_0__.u)
/* harmony export */ });
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(741);
/* harmony import */ var _basics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3584);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_home__WEBPACK_IMPORTED_MODULE_0__, _basics__WEBPACK_IMPORTED_MODULE_1__]);
([_home__WEBPACK_IMPORTED_MODULE_0__, _basics__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7459:
/***/ ((module) => {

// Exports
module.exports = {
	"mintBtn": "RequestAirdrop_mintBtn__ak4eV",
	"transferBtn": "RequestAirdrop_transferBtn__ZDESe"
};


/***/ }),

/***/ 3150:
/***/ ((module) => {

// Exports
module.exports = {
	"indexBg": "home_indexBg__KSFip",
	"indexBgImage": "home_indexBgImage__ga355",
	"indexBgImage_T": "home_indexBgImage_T__6DnnM",
	"nftMintBox": "home_nftMintBox__UzlHi",
	"nftImg": "home_nftImg__Ud_rf",
	"nftInfo": "home_nftInfo___XbSR"
};


/***/ }),

/***/ 8729:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"version":"0.1.0","name":"koala","constants":[{"name":"TRANSFER_AMOUNT","type":"u64","value":"50000000"},{"name":"RECIPIENT","type":"publicKey","value":"pubkey ! (\\"9UgMeYVrWrG5fbjkHos4FShJfchUkXZgNo2CV68h8Mjq\\")"}],"instructions":[{"name":"transferSol","accounts":[{"name":"user","isMut":true,"isSigner":true},{"name":"recipient","isMut":true,"isSigner":false},{"name":"systemProgram","isMut":false,"isSigner":false}],"args":[]}],"metadata":{"address":"72R1hcrPYWxWrhNFFLz4PT7RmUjkdh6BvwZDgUgzAbhZ"}}');

/***/ })

};
;
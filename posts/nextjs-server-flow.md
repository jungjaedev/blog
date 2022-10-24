---
title: how the next.js server works
date: 2022.10.05
author: Jung jaewon
slogan: 성장하는 개발자
tags: '#Next.js'
category: tech
content: yarn start 스크립트를 실행했을 때 실행되는 코드
thumbnail: https://user-images.githubusercontent.com/69428509/197548413-7f74b293-22c7-4d6f-947f-e7b5f8875c4f.jpg
---

## Next.js

### yarn start 스크립트를 실행했을 때 흐름

```shell
❯ yarn start
yarn run v1.22.17
$ next start
ready - started server on 0.0.0.0:3000, url: http://localhost:3000
```

`next start`가 실행이 된다. `package.json`에서 확인할 수 있다.

```json
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
```

---

`node_modules/next/dist/cli/next-start.js`

```js
/** nextStart */
const nextStart = (argv)=>{
    const validArgs = {
        // Types
        "--help": Boolean,

/** ...  */

    const dir = (0, _getProjectDir).getProjectDir(args._[0]);
    const host = args["--hostname"] || "0.0.0.0";
    const port = (0, _utils).getPort(args);
    const keepAliveTimeoutArg = args["--keepAliveTimeout"];

/** ...  */

/** 서버 실행  */
startServer({
        dir,
        hostname: host,
        port,
        keepAliveTimeout
    }).then(async (app)=>{
        const appUrl = `http://${app.hostname}:${app.port}`;
        Log.ready(`started server on ${host}:${app.port}, url: ${appUrl}`);
        await app.prepare();
    }).catch((err)=>{
        console.error(err);
        process.exit(1);
    });
};
exports.nextStart = nextStart;
```

여기서 서버가 실행이 된다.

---

`node_modules/next/dist/server/lib/start-server.js`

```js
var _next = _interopRequireDefault(require("../next"));

 /** ...  */

function startServer(opts) {

/** ...  */

    return new Promise((resolve, reject)=>{

/** ...  */

        /** _next를 이용한 핸들러  */
            const app = (0, _next).default({
                ...opts,
                hostname,
                customServer: false,
                httpServer: server,
                port: addr && typeof addr === "object" ? addr.port : port
            });
            requestHandler = app.getRequestHandler();
            upgradeHandler = app.getUpgradeHandler();
            resolve(app);
        });
        server.listen(port, opts.hostname);
    });
}
```

start-server에서는 `next`를 통한 핸들러를 볼 수 있다.

---

`node_modules/next/dist/server/next.js`

```js
class NextServer {
    constructor(options){
        this.options = options;₩
    }
    get hostname() {
        return this.options.hostname;
    }
    get port() {
        return this.options.port;
    }
    getRequestHandler() {
        return async (req, res, parsedUrl)=>{
            const requestHandler = await this.getServerRequestHandler();
            return requestHandler(req, res, parsedUrl);
        };
    }
    getUpgradeHandler() {
        return async (req, socket, head)=>{
            const server = await this.getServer();

    }
/** ...  */

    setAssetPrefix(assetPrefix) {
        if (this.server) {

/** ...  */

exports.NextServer = NextServer;

 /** 여기에서 서버를 만드는 것 같음  */

function createServer(options) {
    if (options == null) {
        throw new Error("The server has not been instantiated properly. https://nextjs.org/docs/messages/invalid-server-options");
    }
```

next.js은 서버를 만드는 곳으로 볼 수 있다.

---

`node_modules/next/dist/server/next-server.js`

```
class NextNodeServer extends _baseServer.default {

/** ...  */

	revalidate: (newReq, newRes)=>this.getRequestHandler()(new _node.NodeNextRequest(newReq), new _node.NodeNextResponse(newRes)),

/** ...  */

    	async renderToHTML(req, res, pathname, query) {
        return super.renderToHTML(this.normalizeReq(req), this.normalizeRes(res), pathname, query);
    }
```

여기에서 `class NextNodeServer` `renderToHTML`을 볼 수 있다.

---

`node_modules/next/dist/server/render.js`

```js
async function renderToHTML(req, res, pathname, query, renderOpts) {

  /** ...  */

          AppTree: (props)=>{
            return /*#__PURE__*/ _react.default.createElement(AppContainerWithIsomorphicFiberStructure, null, renderPageTree(App, OriginComponent, {
                ...props,
                router
            }));
        },

  /** ...  */
  /**  ReactDOMServer.renderToString */
	const html = ReactDOMServer.renderToString(/*#__PURE__*/ _react.default.createElement(Body, null, /*#__PURE__*/ _react.default.createElement(ErrorDebug, {
```

> 코드 전부는 이해가 되지 않지만 yarn start를 실행하면 어떤 흐름으로 서버가 동작하는지 알게되었음.

---

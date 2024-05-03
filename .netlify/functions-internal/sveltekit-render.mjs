import { init } from '../serverless.js';

export const handler = init((() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","img/chevron-down.svg","img/honeycomb-background.avif","img/mark.webp","style/footer.css","style/header.css","style/reset.css","style/root.css"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml",".avif":"image/avif",".webp":"image/webp",".css":"text/css"},
	_: {
		client: {"start":"_app/immutable/entry/start.B4kfk4EI.js","app":"_app/immutable/entry/app.DF0r_oVq.js","imports":["_app/immutable/entry/start.B4kfk4EI.js","_app/immutable/chunks/entry.CItIPzx3.js","_app/immutable/chunks/scheduler.CmJmhBGY.js","_app/immutable/entry/app.DF0r_oVq.js","_app/immutable/chunks/scheduler.CmJmhBGY.js","_app/immutable/chunks/index.BonGImQ0.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js')),
			__memo(() => import('../server/nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})());

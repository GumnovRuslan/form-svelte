import { init } from '../serverless.js';

export const handler = init((() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","img/honeycomb-background.avif","style/footer.css","style/header.css","style/reset.css","style/root.css"]),
	mimeTypes: {".png":"image/png",".avif":"image/avif",".css":"text/css"},
	_: {
		client: {"start":"_app/immutable/entry/start.Cuq3g9iI.js","app":"_app/immutable/entry/app.4K6EMU-W.js","imports":["_app/immutable/entry/start.Cuq3g9iI.js","_app/immutable/chunks/entry.R2rK_ksb.js","_app/immutable/chunks/scheduler.CNaGyWqf.js","_app/immutable/entry/app.4K6EMU-W.js","_app/immutable/chunks/scheduler.CNaGyWqf.js","_app/immutable/chunks/index.6BOw40wa.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
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

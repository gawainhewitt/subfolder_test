export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["audio/Harp-C4.mp3","audio/kick.mp3","audio/snare.mp3","audio/woodblock.mp3","images/DMLogo.png","images/LPO_logo.png","images/cymbal-grey.png","images/cymbal-orange.png","images/cymbal-pink.png","images/favicon.png","images/harp-grey.png","images/harp-orange.png","images/harp-pink.png","images/keyboard-sequencer.png","images/kick-grey.png","images/kick-orange.png","images/kick-pink.png","images/mouse-and-touch-sequencer.png","images/orchlablogo.png","images/snare-grey.png","images/snare-orange.png","images/snare-pink.png","images/woodblock-grey.png","images/woodblock-pink.png"]),
	mimeTypes: {".mp3":"audio/mpeg",".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.DOz8xWiS.js","app":"_app/immutable/entry/app.HPfEdA3Q.js","imports":["_app/immutable/entry/start.DOz8xWiS.js","_app/immutable/chunks/entry.y6iqecC1.js","_app/immutable/chunks/scheduler.CXxLnJTD.js","_app/immutable/entry/app.HPfEdA3Q.js","_app/immutable/chunks/scheduler.CXxLnJTD.js","_app/immutable/chunks/index.COensmz8.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
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
})();

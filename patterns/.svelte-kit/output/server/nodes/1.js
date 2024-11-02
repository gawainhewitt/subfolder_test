

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.SH8QBg5g.js","_app/immutable/chunks/scheduler.CXxLnJTD.js","_app/immutable/chunks/index.COensmz8.js","_app/immutable/chunks/entry.y6iqecC1.js"];
export const stylesheets = [];
export const fonts = [];



export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.DZILWma6.js","_app/immutable/chunks/scheduler.CXxLnJTD.js","_app/immutable/chunks/index.COensmz8.js"];
export const stylesheets = ["_app/immutable/assets/2.D2JLfu8t.css"];
export const fonts = [];



export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.DVLmq8i4.js","_app/immutable/chunks/scheduler.CNaGyWqf.js","_app/immutable/chunks/index.6BOw40wa.js"];
export const stylesheets = ["_app/immutable/assets/2.Ca1Kymec.css"];
export const fonts = [];

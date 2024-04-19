

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.CI4EoSni.js","_app/immutable/chunks/scheduler.CNaGyWqf.js","_app/immutable/chunks/index.6BOw40wa.js"];
export const stylesheets = [];
export const fonts = [];

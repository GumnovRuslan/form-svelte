

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.8jvErL1p.js","_app/immutable/chunks/scheduler.CNaGyWqf.js","_app/immutable/chunks/index.6BOw40wa.js","_app/immutable/chunks/entry.R2rK_ksb.js"];
export const stylesheets = [];
export const fonts = [];



export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.CvMhTl7q.js","_app/immutable/chunks/scheduler.CmJmhBGY.js","_app/immutable/chunks/index.BonGImQ0.js"];
export const stylesheets = [];
export const fonts = [];

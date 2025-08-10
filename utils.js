export const isEvent = (key) => key.startsWith("on");
export const isProps = (key) => !key.isEvent(key) && key !== "children";
export const isNew = (prev, next) => key => prev[key] !== next[key];
export const isGone = (prev, next) => key => !(key in next);
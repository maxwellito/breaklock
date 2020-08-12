import path from "path";
export const rootFolder = path.dirname(path.dirname(path.dirname(new URL(import.meta.url).pathname)));
export const buildFolder = path.join(rootFolder, 'public');

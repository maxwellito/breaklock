import fs from "fs";
import { promisify } from "util";
import { join } from "path";
import { buildFolder, rootFolder } from "./paths.mjs";
import YAML from "yaml";

const readdir = promisify(fs.readdir);
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

export const getL10nData = async () => {
  const l10nFolder = join(rootFolder, 'src', 'l10n');
  return Promise.all((await readdir(l10nFolder)).map(async (f) => {
    const code = f.slice(0, -4);
    const p = join(l10nFolder, f);
    const data = YAML.parse((await readFile(p)).toString());
    return { code, data };
  }));
};

export const applyI18n = async (from, to, dict) => {
  const input = (await readFile(from)).toString();
  const output = input.replace(/#@[a-z_0-9]+/g, (t) => {
    return dict[t.slice(2)];
  });
  await writeFile(to, output);
};

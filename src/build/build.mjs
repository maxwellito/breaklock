import { applyI18n } from "./i18n.mjs";
import fs from "fs";
import { promisify } from "util";
import { join } from "path";
import { buildFolder, rootFolder } from "./paths.mjs";
import { getL10nData } from "./i18n.mjs";
import { productionCompiler } from "./webpackCompiler.mjs";

const mkdir = promisify(fs.mkdir);
const rmdir = promisify(fs.rmdir);
const cp    = promisify(fs.copyFile);

const build = async () => {
  await rmdir(buildFolder, { recursive: true });
  await mkdir(buildFolder);
  await new Promise((res)=> {
    productionCompiler.run((err, stats) => {
      if (err || stats.hasErrors()) {
        console.log(stats.toString({ colors: true }));
        process.exit(0);
      }
      res();
    });
  });
  await Promise.all([
    cp(join(rootFolder, 'index.html'), join(buildFolder, 'index.html')),
    cp(join(rootFolder, 'app.js'), join(buildFolder, 'app.js')),
  ]);
  const l10n = await getL10nData();
  const baseDict = l10n.find((x)=>x.code==='en').data;
  await Promise.all(l10n.map(async (x)=>{
    await mkdir(join(buildFolder, x.code));
    const dict = { ...baseDict, ...x.data };
    await Promise.all([
      applyI18n(
        join(buildFolder, 'index.html'),
        join(buildFolder, `${x.code}/index.html`),
        dict,
      ),
      applyI18n(
        join(buildFolder, 'app.js'),
        join(buildFolder, `${x.code}/app.js`),
        dict,
      ),
      cp(
        join(buildFolder, 'app.css'),
        join(buildFolder, `${x.code}/app.css`),
      )
    ]);
  }));
};

build();

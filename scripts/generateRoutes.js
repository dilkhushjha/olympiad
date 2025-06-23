import fs from "fs";
import path from "path";

const appDir = path.join(process.cwd(), "src","app");

const ignoredFiles = ["layout.tsx", "layout.js", "loading.tsx", "loading.js", "error.tsx", "error.js", "head.tsx", "head.js"];

function getRoutes(dir, basePath = "") {
  const routes = {};

  fs.readdirSync(dir).forEach((file) => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      const isDynamic = file.startsWith("[") && file.endsWith("]");
      const routeName = isDynamic ? `:${file.slice(1, -1)}` : file;

      routes[routeName] = getRoutes(fullPath, `${basePath}/${routeName}`);
    } else if (file === "page.tsx" || file === "page.js") {
      const routeKey = basePath || "/";
      routes[routeKey] = basePath || "/";
    }
  });

  return routes;
}

const routes = getRoutes(appDir);

console.log(JSON.stringify(routes, null, 2));

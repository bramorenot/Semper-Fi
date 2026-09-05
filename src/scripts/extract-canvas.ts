/**
 * extract-canvas.ts
 * Extrae el HTML del archivo .canvas de Kombai y genera index.html listo para Vite.
 * Uso: bun run src/scripts/extract-canvas.ts
 */

import { readFileSync, writeFileSync } from "fs";
import { resolve } from "path";

const CANVAS_PATH = resolve(__dirname, "../../.kombai/canvas/aira_clone_20260804_044301.canvas");
const OUTPUT_PATH = resolve(__dirname, "../index.html");

// El archivo empieza con comentarios //, hay que saltarlos antes de parsear el JSON
const raw = readFileSync(CANVAS_PATH, "utf-8");
const jsonStart = raw.indexOf("{");
const json = JSON.parse(raw.slice(jsonStart));

// El HTML está en nodes > primer nodo > html
const nodes = json.nodes;
const firstNodeKey = Object.keys(nodes)[0];
if (!firstNodeKey) {
  throw new Error("No se encontraron nodos en el archivo canvas");
}
const node = nodes[firstNodeKey];
if (!node) {
  throw new Error(`No se encontró el nodo ${firstNodeKey}`);
}
const html: string = node.html;
const overrides = node.overrides ?? {};

const headExtra: string = overrides.head ?? "";
const htmlAttrs: string = overrides.htmlAttrs ?? "";

const fullPage = `<!DOCTYPE html>
<html lang="es"${htmlAttrs}>
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Semper Fi — Ecosistema Digital Inteligente para Popayán</title>
  ${headExtra}
</head>
<body>
${html}
</body>
</html>`;

writeFileSync(OUTPUT_PATH, fullPage, "utf-8");
console.log("✅  index.html generado desde el canvas de Kombai.");
console.log("   Ubicación:", OUTPUT_PATH);
console.log("   Nodo:", node.label ?? firstNodeKey);
console.log("   Tamaño HTML:", html.length, "caracteres");

import { existsSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { practices } from '../data/practices';

const raiz = join(process.cwd(), 'out', 'practica');

const faltantes: string[] = [];
for (const practica of practices) {
  for (const seccion of ['teoria', 'ejercicios']) {
    const archivo = join(raiz, practica.id, seccion, 'index.html');
    if (!existsSync(archivo)) {
      faltantes.push(`out/practica/${practica.id}/${seccion}/index.html`);
    }
  }
}

const idsValidos = new Set(practices.map((p) => p.id));
const obsoletos = existsSync(raiz) ? readdirSync(raiz).filter((dir) => !idsValidos.has(dir)) : [];

if (faltantes.length > 0 || obsoletos.length > 0) {
  if (faltantes.length > 0) {
    console.error(`ERROR: faltan ${faltantes.length} rutas en el export estático:`);
    for (const f of faltantes) console.error(`  - ${f}`);
  }
  if (obsoletos.length > 0) {
    console.error(
      `ERROR: hay ${obsoletos.length} carpetas en out/ que ya no corresponden a ninguna práctica:`
    );
    for (const o of obsoletos) console.error(`  - out/practica/${o}/`);
  }
  process.exit(1);
}

console.log(`OK: ${practices.length} prácticas × 2 secciones generadas y sincronizadas con out/`);

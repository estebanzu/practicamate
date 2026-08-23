import { test, expect } from '@playwright/test';

const rutas = [
  '/',
  '/simulacro/',
  '/repaso/',
  '/practica/factorizacion/teoria/',
  '/practica/factorizacion/ejercicios/',
];

test('las páginas clave cargan sin errores de consola', async ({ page }) => {
  const errores: string[] = [];
  page.on('console', (mensaje) => {
    if (mensaje.type() === 'error') errores.push(mensaje.text());
  });
  page.on('pageerror', (error) => errores.push(String(error)));

  for (const ruta of rutas) {
    errores.length = 0;
    const respuesta = await page.goto(ruta);
    expect(respuesta?.status(), `status de ${ruta}`).toBe(200);
    expect(errores, `errores de consola en ${ruta}`).toEqual([]);
  }
});

test('KaTeX renderiza las fórmulas en teoría', async ({ page }) => {
  await page.goto('/practica/factorizacion/teoria/');
  await expect(page.locator('.katex').first()).toBeVisible();
});

test('el runner de ejercicios muestra opciones interactivas', async ({ page }) => {
  await page.goto('/practica/factorizacion/ejercicios/');
  await expect(page.getByRole('button').first()).toBeVisible();
});

import { test, expect } from '@playwright/test';

const baseURL = 'http://localhost:4780';

test('página principal carga correctamente', async ({ page }) => {
  await page.goto(baseURL);
  await expect(page).toHaveTitle(/Practica de matematicas/);
});

test('página /repaso es accesible', async ({ page }) => {
  await page.goto(baseURL + '/repaso');
  await expect(page).toHaveURL(/.*\/repaso/);
});

test('página /simulacro es accesible', async ({ page }) => {
  await page.goto(baseURL + '/simulacro');
  await expect(page).toHaveURL(/.*\/simulacro/);
});

test('página teoría elevación-depresión carga SVG', async ({ page }) => {
  await page.goto(baseURL + '/practica/elevacion-depresion/teoria/');
  await expect(page).toHaveURL(/.*\/practica\/elevacion-depresion\/teoria/);
  const svgs = page.locator('svg');
  await expect(svgs).toBeVisible();
});

test('página ejercicios elevación-depresión carga SVG', async ({ page }) => {
  await page.goto(baseURL + '/practica/elevacion-depresion/ejercicios/');
  await expect(page).toHaveURL(/.*\/practica\/elevacion-depresion\/ejercicios/);
  const svgs = page.locator('svg');
  await expect(svgs).toBeVisible();
});

test('página teoría ley-senos carga SVG', async ({ page }) => {
  await page.goto(baseURL + '/practica/ley-senos/teoria/');
  await expect(page).toHaveURL(/.*\/practica\/ley-senos\/teoria/);
  const svgs = page.locator('svg');
  await expect(svgs).toBeVisible();
});

test('página ejercicios ley-senos carga SVG', async ({ page }) => {
  await page.goto(baseURL + '/practica/ley-senos/ejercicios/');
  await expect(page).toHaveURL(/.*\/practica\/ley-senos\/ejercicios/);
  const svgs = page.locator('svg');
  await expect(svgs).toBeVisible();
});

test('viewport móvil mantiene título', async ({ page }) => {
  await page.goto(baseURL);
  await page.setViewportSize({ width: 375, height: 667 });
  await expect(page).toHaveTitle(/Practica de matematicas/);
});

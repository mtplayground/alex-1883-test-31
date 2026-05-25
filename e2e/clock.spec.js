import { expect, test } from '@playwright/test';

test('clock readout is visible and updates', async ({ page }) => {
  await page.goto('/');

  const readout = page.locator('[data-clock-readout]');
  await expect(readout).toBeVisible();
  await expect(readout).toHaveText(/^\d{2}:\d{2}:\d{2}$/);

  const initialTime = await readout.textContent();
  await page.waitForTimeout(1_200);

  await expect(readout).not.toHaveText(initialTime);
});

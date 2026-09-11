/**
 * Anh tu lieu thuc dia.
 *
 * Nguyen tac cua du an: KHONG dung anh tao boi AI. Chi dung anh thuc dia da
 * xac minh nguon. Linh dia nao chua co anh thi de trong, khong chen anh thay the.
 * Mot phan ban ghi trong src/data/statues.js mang truong `realImage`, phan con
 * lai de `null` cho den khi co anh xac thuc.
 *
 * Anh nam trong src/assets de duong ong astro:assets xu ly duoc (nen lai,
 * xuat AVIF/WebP, sinh srcset). Neu de trong thu muc public/ thi anh se duoc
 * chep nguyen trang, khong toi uu.
 */

const photoModules = import.meta.glob('../assets/real_photos/*.{jpg,jpeg,png}', {
  eager: true,
});

/**
 * Doi gia tri `realImage` trong du lieu thanh doi tuong anh cua Astro.
 * Chi so sanh theo ten file, nen doi duong dan trong du lieu khong lam hong ham nay.
 *
 * @returns {ImageMetadata|null} null khi linh dia chua co anh xac thuc.
 */
export function getPhoto(realImage) {
  if (!realImage) return null;
  const filename = realImage.split('/').pop();
  const key = Object.keys(photoModules).find((path) => path.endsWith(`/${filename}`));
  return key ? photoModules[key].default : null;
}

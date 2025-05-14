// انتخاب تمام تصاویر صفحه
const images = document.querySelectorAll('img');

// برای هر تصویر، src آن را به آدرس جدید تغییر می‌دهیم
images.forEach((img) => {
  img.src = 'https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg';
});

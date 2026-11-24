document.querySelectorAll('#year').forEach(el => el.textContent = new Date().getFullYear());
const form = document.getElementById('deleteForm');
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const phone = document.getElementById('phone').value.trim();
    const notice = document.getElementById('deleteNotice');
    if (!phone) return;
    notice.hidden = false;
    notice.textContent = 'تم استلام طلب حذف الحساب الخاص بالرقم ' + phone + '. طلبك الآن تحت المراجعة، وسيتم التواصل معك عند الحاجة.';
    form.reset();
  });
}

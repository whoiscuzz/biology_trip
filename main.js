// minimal main.js to avoid missing-file warning
document.addEventListener('DOMContentLoaded', function () {
  var faqBtns = document.querySelectorAll('#open-faq, #open-faq-hero');
  var modal = document.getElementById('faq-modal');
  if (faqBtns && modal) {
    faqBtns.forEach(function (b) { b.addEventListener('click', function () { modal.setAttribute('aria-hidden', 'false'); }); });
    modal.querySelectorAll('[data-action="close"]').forEach(function (el) { el.addEventListener('click', function () { modal.setAttribute('aria-hidden', 'true'); }); });
  }
});


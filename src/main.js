(function(){
  function setupModal(openSelectors, modalId){
    var modal = document.getElementById(modalId);
    if(!modal) return;
    var openEls = [].slice.call(document.querySelectorAll(openSelectors));
    var closeEls = [].slice.call(modal.querySelectorAll('[data-action="close"]'));
    var previouslyFocused = null;

    function open(){
      previouslyFocused = document.activeElement;
      modal.setAttribute('aria-hidden','false');
      // set focus to the initial focusable element within the modal.
      var focusable = modal.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
      if(focusable) focusable.focus();
      document.addEventListener('keydown', onKeyDown);
    }
    function close(){
      modal.setAttribute('aria-hidden','true');
      document.removeEventListener('keydown', onKeyDown);
      if(previouslyFocused && previouslyFocused.focus) previouslyFocused.focus();
    }
    function onKeyDown(e){
      if(e.key === 'Escape') close();
    }

    openEls.forEach(function(btn){
      btn.addEventListener('click', function(e){ e.preventDefault(); open(); });
    });
    closeEls.forEach(function(btn){
      btn.addEventListener('click', function(e){ e.preventDefault(); close(); });
    });
    // backdrop click
    var backdrop = modal.querySelector('.modal-backdrop');
    if(backdrop) backdrop.addEventListener('click', function(){ close(); });
  }

  // setup modals on page load
  document.addEventListener('DOMContentLoaded', function(){
    setupModal('#open-faq, #open-faq-hero', 'faq-modal');
    setupModal('#open-faq-2', 'faq-modal-2');
  });
})();


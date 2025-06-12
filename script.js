document.addEventListener('DOMContentLoaded', function () {
  const minasIcon = document.getElementById('minasIcon');
  const minasSection = document.getElementById('minasSection');

  function hideAllSections() {
    minasSection.classList.add('hidden');
  }

  function showSection(sec) {
    hideAllSections();
    sec.classList.remove('hidden');
  }

  minasIcon?.addEventListener('click', function (e) {
    e.preventDefault();
    showSection(minasSection);
  });

  function initializeApp() {
    showSection(minasSection);
  }

  initializeApp();
});

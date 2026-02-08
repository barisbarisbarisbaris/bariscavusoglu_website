// for copyright (safe DOM write)
(function () {
  const today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1;
  const yyyy = today.getFullYear();

  if (dd < 10) dd = '0' + dd;
  if (mm < 10) mm = '0' + mm;

  const now = dd + '' + mm + '' + yyyy;
  const copyrightText = '⚔️  © bariscavusoglu ' + now;

  function setCopyright() {
    const el = document.getElementById('copyright');
    if (el) el.innerHTML = copyrightText;
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setCopyright);
  } else {
    setCopyright();
  }
})();
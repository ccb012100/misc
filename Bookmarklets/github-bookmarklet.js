// NOTE: lines must be joined into a single line to use as a bookmarklet
javascript: (() => {
  if (window.location.origin !== 'https://github.com') {
    alert('must be on github.com!');
  } else if (window.location.pathname.match(/^\/[0-9A-Za-z+]+\/[A-Za-z-]+\/pull\/[0-9]+\/files$/)) {
    document.getElementsByName('viewed').forEach((ch) => {
      if (!ch.checked) {
        ch.click();
      }
    });
  } else if (window.location.pathname.match(/^\/[0-9A-Za-z+]+\/[A-Za-z-]+\/pull\//)) {
    alert('Must be on the "files" page of the Pull Request');
  } else {
    alert('must be on a on Pull Request');
  }
})();

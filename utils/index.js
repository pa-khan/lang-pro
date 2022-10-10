export function scrollTop() {
  if (document.body.offsetWidth < 768) {
    window.scrollTo(0, 0);
  }
  document.body.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export function toLink(href, before, after) {
  if (before) {
    before();
  }

  scrollTop();
  this.$router.push(href);

  if (after) {
    after();
  }
}
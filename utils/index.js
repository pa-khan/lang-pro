export function scrollTop() {
  if (document.body.offsetWidth < 768) {
    window.scrollTo(0, 0);
  }
  document.body.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export function toLink(href, before, after) {
  if (before) {
    if (Array.isArray(before)) {
      console.log(before);
      before.forEach((item) => {
        console.log(item);

        item();
      });
    } else {
      before();
    }
  }

  scrollTop();
  this.$router.push(href);

  if (after) {
    after();
  }
}
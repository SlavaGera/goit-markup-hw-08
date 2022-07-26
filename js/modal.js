(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    html: document.documentElement,
  };

  const marginSize = window.innerWidth - refs.html.clientWidth;

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");

    if(refs.modal.classList.contains("is-hidden")) {
      refs.html.style.marginRight = "";
    } else {
      refs.html.style.marginRight = marginSize + "px";
    }
  }
})();
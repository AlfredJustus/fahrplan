const form = document.querySelector("form");
const note = document.querySelector("[data-form-note]");
const button = form.querySelector("button");
const fields = [...form.querySelectorAll("input")];

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!form.checkValidity()) {
    note.textContent = "Bitte fülle Name und E-Mail aus.";
    note.classList.add("form-error");
    fields.find((field) => !field.validity.valid).focus();
    return;
  }

  note.classList.remove("form-error");
  button.disabled = true;
  button.innerHTML = "Anfrage wird vorgemerkt <span aria-hidden=\"true\">…</span>";

  window.setTimeout(() => {
    fields.forEach((field) => { field.disabled = true; });
    button.innerHTML = "Zugang vorgemerkt <span aria-hidden=\"true\">✓</span>";
    note.textContent = "Danke. Wir melden uns, sobald dein Platz bereit ist.";
    note.classList.add("form-success");
  }, 600);
});

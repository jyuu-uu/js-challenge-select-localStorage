// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

// Korea : KR
// Greece : GR
// Turkey : TR
// Finland : FI

const UC_LS = "country";

function init() {
  const userCountry = JSON.parse(localStorage.getItem(UC_LS));
  const select = document.querySelector("body select");
  const optionAll = select.querySelectorAll("option");
  if (userCountry != null) {
    optionAll.forEach((v) => {
      if (v.value === userCountry) {
        v.selected = true;
      } else {
        v.selected = false;
      }
    });
  }

  select.addEventListener("change", function (e) {
    localStorage.setItem(UC_LS, JSON.stringify(e.target.value));
  });
}

init();

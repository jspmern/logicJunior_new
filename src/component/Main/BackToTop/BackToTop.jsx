import React from "react";

function BackToTop() {
  return (
    <>
      <a
        href="#top"
        class="back-top-btn"
        aria-label="back top top"
        data-back-top-btn
      >
        <ion-icon name="chevron-up" aria-hidden="true"></ion-icon>
      </a>
    </>
  );
}

export default BackToTop;

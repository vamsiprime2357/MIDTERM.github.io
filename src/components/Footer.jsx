import React from "react";

function Footer() {
  const year2023 = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {year2023}</p>
    </footer>
  );
}

export default Footer;

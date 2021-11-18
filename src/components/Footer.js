import React from "react";

function Footer() {
  return (
    <>
      <div class="mockup-code">
        <pre data-prefix="$">
          <code>© Imad, 2021.</code>
        </pre>
        <pre data-prefix=">" class="text-warning">
          <code>All rights reserved</code>
        </pre>
        <pre data-prefix=">" class="text-success">
          <input type="checkbox" id="secret" class="modal-toggle" />
          <code>Made with </code> <a class="">🖤</a>
        </pre>
      </div>
    </>
  );
}

export default Footer;

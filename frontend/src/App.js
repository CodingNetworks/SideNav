import React, { useState, useRef } from "react";

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./global";
import { theme } from "./theme";

import FocusLock from "react-focus-lock";
import { useOnClickOutside } from "./hooks";

import { Burger, Menu } from "./components";

function App() {
  const [open, setOpen] = useState(false);

  const node = useRef();
  const menuId = "main-menu";

  useOnClickOutside(node, () => setOpen(false));

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div ref={node}>
        <FocusLock disabled={!open}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
        </FocusLock>
      </div>
      <div class="main-text">
        <h1>Lorem Ipsum</h1>
        <p>
          Ullamco Lorem aliquip mollit laboris ea dolor nulla culpa quis non
          fugiat. Dolore laborum qui dolor aliqua quis magna anim cupidatat
          voluptate magna cupidatat. Laboris amet sunt proident cupidatat dolore
          proident consequat aute esse dolore elit anim. Ipsum duis quis est
          amet ad velit laborum occaecat eiusmod occaecat fugiat quis tempor.
        </p>
      </div>
    </ThemeProvider>
  );
}

export default App;

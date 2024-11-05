import React, { useContext } from "react";
import Header from "./Header";
import {
  Container,
  Alert,
  Snackbar,
  IconButton,
  CloseIcon,
} from "@/components/mui";

function Layout({ children }) {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Container maxWidth="md">{children}</Container>
      </main>
    </>
  );
}

export default Layout;

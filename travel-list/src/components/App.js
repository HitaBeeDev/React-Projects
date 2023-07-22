import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

export default function App() {
  return (
    <div className="container">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

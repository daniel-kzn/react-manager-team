import React from "react";
import Employees from "./components/Employees/Employees";
import Footer from "./components/shared/Footer";
import Header from "./components/shared/Header/Header";
function App() {
  return (
    <div>
      <Header />
      <Employees />
      <Footer />
    </div>
  );
}

export default App;

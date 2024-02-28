import * as React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";

interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = () => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default App;

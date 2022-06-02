import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";


import PortfolioContainer from "./components/PortfolioContainer";


// const App = () => <PortfolioContainer />;

  function App() {
    return (
      <main>
       <Header />
        <PortfolioContainer />
        <Footer />
     </main>
   );
   }

export default App;
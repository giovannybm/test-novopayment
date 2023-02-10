import { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { apiUI } from "../../httpApi/UI";
import { appContext } from "../../hooks/context";
import "./App.scss";

function App() {
  const [menuData, setMenuData] = useState(null);
  const [loading, setLoading] = useState(false);

  const getMenu = async () => {
    setLoading(true);
    const result = await apiUI
      .getMenu()
      .then((response) => response.json())
      .finally(() => setLoading(false));
    setMenuData(result);
  };

  useEffect(() => {
    getMenu();
  }, []);

  return (
    <appContext.Provider value={{ loading, list: menuData }}>
      <div className="App">
        <Header />
        <div className="content"></div>
        <Footer />
      </div>
    </appContext.Provider>
  );
}

export default App;

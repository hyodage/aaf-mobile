import { BrowserRouter } from "react-router-dom";
import Router from "@/config/router"
import TabBar from "@/component/TabBar";
import "amfe-flexible/index.js";
import "@/assets/css/index.css"
function App() {
  return (
      <BrowserRouter>
        <TabBar/>
        <Router/>
      </BrowserRouter>
  );
}
export default App

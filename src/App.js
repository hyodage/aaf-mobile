import { BrowserRouter } from "react-router-dom";
import Router from "@/config/router"
import TabBar from "@/component/TabBar";
function App() {
  return (
      <BrowserRouter>
        <TabBar/>
        <Router/>
      </BrowserRouter>
  );
}
export default App

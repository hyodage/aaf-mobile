import { useMemo } from "react";
import { Link } from "react-router-dom";
import getNav from "@/config/router/navList.config"
function TabBar() {
  const nav_list = useMemo(() => {
    return getNav()
  }, []);
  return <nav className="nav">
    {nav_list.map((item,index)=>{
      return <Link
        key={index}
        to={item.to}
      >{item.title}{' | '}</Link>
    })}
  </nav>
}
export default TabBar
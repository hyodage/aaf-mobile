import { Switch, Route } from "react-router-dom";
import routeList from '@/config/router/router.config'
const Router = ()=>{
  return (
    <Switch>
    {routeList.routes.map((item,index)=>{
      return <Route
        key={index}
        exact={item.exact}
        path={item.path}
        render={item.render}
      />
    })}
  </Switch>
  )
}
export default Router
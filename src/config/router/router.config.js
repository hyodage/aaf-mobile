import { Redirect } from "react-router-dom"
import Article from "@/pages/Article"
import Files from "@/pages/Files"
import Api from "@/pages/Api"
import Me from "@/pages/Me"
import Error from "@/pages/Error"

const routeList = {
  routes: [{
    path: "/",
    exact: true,
    render(){
      return <Redirect to="/article" />
    }
  },{
    path: "/article",
    exact: true,
    render(props){
      return <Article {...props} />
    }
  }, {
    path: "/files",
    exact: true,
    render(props){
      return <Files {...props} />
    }
  }, {
    path: "/api",
    exact: true,
    render(props){
      return <Api {...props} />
    }
  }, {
    path: "/me",
    exact: true,
    render(props){
      return <Me {...props} />
    }
  }, {
    path: "*",
    exact: false,
    render(props){
      return <Error {...props} />
    }
  }]
}
export default routeList
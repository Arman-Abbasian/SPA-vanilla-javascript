import Dashboard from "../../pages/Dashboard.js";
import Blogs from '../../pages/Blogs.js';
import Products from "../../pages/Products.js";
import NotFound from '../../pages/NotFound.js';


function router(){
    const routes=[
        {routes:"/client/src/html/index.html",view:Dashboard()},
        {routes:"/client/src/html/index.html/products",view:Blogs()},
        {routes:"/client/src/html/index.html/blogs",view:Products()}
    ];
    const newRoute=routes.map((route)=>{
        if(location.pathname===route.routes){
            return ({route,isMatch:true})
        }else{
           return({route,isMatch:false})
        }
    });
    let matchedRoute=newRoute.find(route=>route.isMatch)
    if(!matchedRoute){
       matchedRoute= {routes:"/client/src/html/index.html/not-found",view:NotFound,isMatch:true}
    }
    const main=document.querySelector("main");
    main.innerHTML=matchedRoute.route.view;
};
document.addEventListener("DOMContentLoaded",()=>{
    router();
    document.body.addEventListener("click",(e)=>{
        if(e.target.hasAttribute("data-link")){
            e.preventDefault();
            history.pushState(null,null,e.target.getAttribute("href"));
            router();
        }
    })
})

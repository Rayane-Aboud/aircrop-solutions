import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    //home route
    index("./pages/home/home.tsx"),

    //about route
    route("about","./pages/about/about.tsx"),

    //products route
    route("products","./pages/products/products.tsx"),


] satisfies RouteConfig;

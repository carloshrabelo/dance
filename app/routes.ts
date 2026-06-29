import { type RouteConfig, index, prefix, route } from "@react-router/dev/routes";

export default [index("routes/page-one.tsx"),
// route("one", "routes/page-one.tsx"),
route("two", "routes/page-two.tsx"),

...prefix("social", [
  index("routes/home.tsx"),
  route(":id", "routes/social-details.tsx"),
]),
] satisfies RouteConfig;

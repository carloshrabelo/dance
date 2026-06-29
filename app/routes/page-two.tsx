import type { Route } from "./+types/home";
import { Lorem } from "~/components/Lorem";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "PageTwo" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function PageTwo() {
  return (
    <div className="page green">
      <h1>Hello PageTwo</h1>
      <Lorem />
    </div>
  );
}

import type { Route } from "./+types/home";
import { Lorem } from "~/components/Lorem";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "a PageOne" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function PageOne() {
  return (
    <div className="page pink">
      <h1>Hello PageOne</h1>
      <Lorem />
    </div>
  );
}

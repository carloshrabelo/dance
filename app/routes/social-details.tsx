import type { Route } from "./+types/home";
import events from "../mock/events.json";
import { Link, useParams } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "SocialDetails" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export async function loader({ params }: Route.LoaderArgs) {
  // let team = await fetchTeam(params.teamId);
  const event = events.items.find((event) => event.id === params.id);

  return event ?? {};
}

export default function SocialDetails({ loaderData: event }) {
  const { id } = useParams();

  return (
    <main className="page">
      <article
        className="card-expanded"
        style={{
          viewTransitionName: `card-${id}`,
        }}
      >
        <h1>Título</h1>

        <p>Muito mais conteúdo...</p>

        <p>Muito mais conteúdo...</p>

        <p>Muito mais conteúdo...</p>
      </article>
    </main>
  );
  return (
    <div className="page green">
      <div>
        <Link to="/social" viewTransition>
          Back
        </Link>
      </div>
      <h1>social-details</h1>
      {event && (
        <div>
          <h2>{event.summary}</h2>
          <p>
            {event.start.date} to {event.end.date}
          </p>
        </div>
      )}
    </div>
  );
}

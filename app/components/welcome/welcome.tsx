import { Link } from "react-router";
import events from "../../mock/events.json";

export function Welcome() {
  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <div className="max-w-[300px] w-full space-y-6 px-4">
          {events.items.map((event) => (
            <nav
              key={event.id}
              className="rounded-3xl border border-gray-200 p-6 dark:border-gray-700 space-y-4"
            >
              <Link to={`/social/${event.id}`} viewTransition>
                <article
                  className="card"
                  style={{
                    viewTransitionName: `card-${event.id}`,
                  }}
                >
                  <h2 className="text-gray-700 dark:text-gray-200">
                    {event.summary}
                  </h2>
                  <div className="flex gap-2 text-gray-500 dark:text-gray-400 text-sm gap">
                    <span>{event.start.date}</span>
                    <span>{event.end.date}</span>
                    {/* <Badge>{event.end.date}</Badge> */}
                  </div>
                  {/* <div className="flex flex-wrap gap-2">
                    <Badge className="bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300">
                      Blue
                    </Badge>
                    <Badge className="bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300">
                      Green
                    </Badge>
                    <Badge className="bg-sky-50 text-sky-700 dark:bg-sky-950 dark:text-sky-300">
                      Sky
                    </Badge>
                    <Badge className="bg-purple-50 text-purple-700 dark:bg-purple-950 dark:text-purple-300">
                      Purple
                    </Badge>
                    <Badge className="bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300">
                      Red
                    </Badge>
                  </div> */}
                  <button className="btn btn-primary">Button</button>
                  <div>
                  <div className="badge badge-primary">Primary</div>
<div className="badge badge-secondary">Secondary</div>
<div className="badge badge-accent">Accent</div>
<div className="badge badge-neutral">Neutral</div>
<div className="badge badge-info">Info</div>
<div className="badge badge-success">Success</div>
<div className="badge badge-warning">Warning</div>
<div className="badge badge-error">Error</div>
</div>
                </article>
              </Link>
            </nav>
          ))}
        </div>
      </div>
    </main>
  );
}

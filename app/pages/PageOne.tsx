
/**
 * The ".page" class is key to animating a full page and not receive bumps while
 * animating pages in/out. It is position: fixed to allow the animation to play
 * without the DOM elements messing up.
 *
 * Try to remove .page to see the effect.
 */
export const PageOne = () => (
  <div className="page pink">
    <h1>Hello PageOne</h1>
    <Lorem />
  </div>
);
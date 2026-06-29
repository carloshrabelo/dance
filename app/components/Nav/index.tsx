export const Nav = ({ children }: { children: React.ReactNode }) => (
  <nav className="relative bg-gray-800">
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div className="relative flex h-16 items-center justify-between">
        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div className="flex shrink-0 items-center">
            <img
              src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
              alt="Your Company"
              className="h-8 w-auto"
            />
          </div>
          <div className=" sm:ml-6 sm:block">
            <div className="flex space-x-4">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
);

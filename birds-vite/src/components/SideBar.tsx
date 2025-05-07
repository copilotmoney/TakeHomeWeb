const SideBar = () => {
  return (
    <aside className="border-r-[1px] p-4 w-1/3">
      <div className="mb-4">
        <h2 className="text-base font-medium">The Birds App</h2>
        <p className="text-accent text-sm">By Copilot</p>
      </div>

      <a
        href="/"
        className="bg-secondary block py-2 px-3 rounded-lg font-semibold text-sm "
      >
        Home
      </a>
    </aside>
  );
};

export default SideBar;

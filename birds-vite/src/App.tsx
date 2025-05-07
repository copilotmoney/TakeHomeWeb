// import "@fontsource-variable/inter";
import SearchIcon from "./SearchIcon";
import SideBar from "./components/SideBar";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-background text-text p-4">
      <main className="flex flex-row max-w-screen-xl mx-auto border w-full rounded-md shadow-md">
        <SideBar />
        <section className="w-2/3">
          <div className="border-b-[1px] border-muted py-4 px-6">
            <h1 className="text-[32px] font-bold ">Birds</h1>
          </div>
          <div className="p-6 border-b-[1px] border-muted">
            <div className="relative">
              <SearchIcon className="absolute top-3 left-4" />
              <input
                type="text"
                name="search"
                id="search"
                placeholder="Search for birds"
                className="py-3 px-4 pl-14 rounded-lg bg-[#F1F4F8] text-accent w-full placeholder-accent"
              />
            </div>
          </div>
          <div className="p-6">
            <ul className="grid gap-3 grid-cols-[repeat(auto-fill,minmax(170px,1fr))]">
              <li className="flex flex-col gap-2">
                <div className="aspect-video rounded-lg overflow-hidden w-full">
                  <img
                    src="/images/sample.png"
                    alt="Bird 1"
                    className="object-fill w-full h-full"
                  />
                </div>
                <div>
                  <h3 className="font-medium">American Robin</h3>
                  <p className="text-accent text-sm">Turdus migratorius</p>
                </div>
              </li>
              <li>Bird 2</li>
              <li>Bird 3</li>
              <li>Bird 4</li>
              <li>Bird 5</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;

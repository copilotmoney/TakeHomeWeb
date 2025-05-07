// import "@fontsource-variable/inter";
import { useQuery } from '@apollo/client';
import SearchIcon from './SearchIcon';
import SideBar from './components/SideBar';
import BirdCard from './components/BirdCard';
import { GetBirdsQuery } from './__generated__/graphql';
import { gql } from '@apollo/client';
import Loader from './components/Loader';

const GET_BIRDS = gql`
  query GetBirds {
    birds {
      id
      english_name
      latin_name
      thumb_url
    }
  }
`;

const App = () => {
  const { loading, error, data } = useQuery<GetBirdsQuery>(GET_BIRDS);

  const birds = data?.birds || [];

  if (loading) return <Loader />;

  if (error) return `Error! ${error.message}`;

  return (
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
        <div className="p-6 overflow-scroll max-h-[calc(100vh-2rem-97px-81px)]">
          {birds.length > 0 && (
            <ul className="grid gap-6 grid-cols-[repeat(auto-fill,minmax(170px,1fr))]">
              {data &&
                birds.map((bird) => <BirdCard key={bird.id} bird={bird} />)}
            </ul>
          )}
        </div>
      </section>
    </main>
  );
};

export default App;

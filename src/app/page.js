import Banner from "@/components/HomePage/Banner";
import TopGeneration from "@/components/HomePage/TopGeneration";
import { getData } from "@/lib/dataFetching/getData";

export default async function Home() {

  const data = await getData()

  console.log(data)



  return (
    <div>
      <Banner />
      <div className="container mx-auto mt-10 ">

        <h3 className="font-bold text-2xl mb-5">Top Generation</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {
            data.slice(0, 8).map(d => <TopGeneration key={d.id} data={d} />)
          }
        </div>

      </div>
    </div>
  );
}

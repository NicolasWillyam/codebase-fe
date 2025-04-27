import { Button } from "@/presentation/components/ui/button";
import { ArrowRight, Map } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";

const HomePage = () => {
  return (
    <>
      <section className="relative min-h-screen p-20 w-full bg-cover bg-no-repeat bg-center bg-[url('https://img.freepik.com/free-photo/mesmerizing-scenery-green-mountains-with-cloudy-sky-surface_181624-27189.jpg?t=st=1745740709~exp=1745744309~hmac=9b1402f65ba9f8c24ff8c3a817d4007feec023cb01dc53461ac575e498db3ced&w=1800')]">
        <div className="w-full min-h-screen bg-black/30 absolute top-0 left-0 z-0" />
      </section>
      {/* <div className="absolute flex items-center rotate-90 gap-4 text-white right-10 mr-10 top-1/3 font-semibold">
        <p>SCROLL</p>
        <ArrowRight size={20} className="mr-2" />
      </div> */}
      <div className="w-full h-full absolute top-0 p-20">
        <div className="w-full h-full text-white z-10 px-6 flex flex-col justify-between">
          <div className="space-y-8">
            <div className="text-8xl uppercase font-bold text-right">
              <span>
                <Typewriter
                  words={["Hagiang loop", "Cuc bac coffe", "Khoi homstay"]}
                  loop={0}
                  cursor
                  // cursorStyle="_"
                  typeSpeed={100}
                  deleteSpeed={50}
                  delaySpeed={3000}
                />
              </span>
            </div>
            <div className="space-y-4">
              <p className="text-sm bg-white/20 w-fit p-2 px-4 rounded-full capitalize font-medium">
                A place where nature and adventure unite
              </p>
              <div className="text-6xl font-semibold">Experience the</div>

              <div className="text-7xl font-semibold">Magic of Vietnam</div>
              <Button className="dark w-fit rounded-full h-10 px-10 mt-4">
                <p className="font-medium ml-2">Explore Now</p>
                <ArrowRight size={20} className="mr-2" />
              </Button>
            </div>
          </div>
          <div className="w-full h-full flex items-end">
            <div className="w-3/5 grid grid-cols-2 gap-4">
              <div className="flex items-center gap-6">
                <div className="h-12 min-w-12 rounded-full bg-white/30 flex items-center justify-center">
                  <Map />
                </div>
                <p className="text-sm text-white/80">
                  Provides a visual representation of destinations, attractions,
                  and activities
                </p>
              </div>

              <div className="flex items-center gap-6">
                <div className="h-12 min-w-12 rounded-full bg-white/30 flex items-center justify-center">
                  <Map />
                </div>
                <p className="text-sm text-white/80">
                  Provides a visual representation of destinations, attractions,
                  and activities
                </p>
              </div>
            </div>

            <div className="ml-auto space-y-4">
              <div className="h-10 min-w-10 rounded-full bg-white/30 flex items-center justify-center">
                <Map size={20} />
              </div>
              <div className="h-10 min-w-10 rounded-full bg-white/30 flex items-center justify-center">
                <Map size={20} />
              </div>
              <div className="h-10 min-w-10 rounded-full bg-white/30 flex items-center justify-center">
                <Map size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;

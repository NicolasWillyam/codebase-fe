import { Button } from "@/presentation/components/ui/button";
import { ArrowRight, Map } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/presentation/components/ui/accordion";
import { useAuth } from "@/shared/hooks/useAuth";
import { SearchBar } from "@/presentation/components/searchs/SearchBar";
import { FilterTabs } from "@/presentation/filters/FilterTabs";
import { HotelCard } from "@/presentation/components/cards/HotelCard";

export const hotels = [
  {
    name: "Bromo Valley Villas",
    location: "East Java, Indonesia",
    price: 280,
    rating: 4.9,
    image: "https://example.com/bromo1.jpg",
  },
  {
    name: "Plataran Bromo",
    location: "East Java, Indonesia",
    price: 285,
    rating: 4.9,
    image: "https://example.com/bromo2.jpg",
  },
  {
    name: "Jiwa Jawa Resort",
    location: "East Java, Indonesia",
    price: 287,
    rating: 4.9,
    image: "https://example.com/bromo3.jpg",
  },
];

const HomePage = () => {
  const { user, logout } = useAuth();
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

      <section className="w-full min-h-screen p-20">
        <div className="p-4 space-y-16">
          <div className="w-full grid grid-cols-2 gap-10">
            <p className="text-6xl font-semibold">
              NEW GUINEA: ANCIENT MYSTERIES
            </p>
            <div className="w-3/4 ml-auto text-right">
              <p>
                A place where nature and adventure unite A place where nature
                and adventure unite A place where nature and adventure unite A
                place where nature and adventure unite A place where nature and
                adventure unite A place where nature and adventure unite
              </p>
              <div className="ml-auto grid grid-cols-2 w-fit mt-6 gap-2">
                <Button className="rounded-full h-10 font-normal">
                  Reminder me
                </Button>
                <Button
                  variant={"outline"}
                  className="rounded-full h-10 font-normal border-black"
                >
                  Learn more
                </Button>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="w-full flex items-center gap-6">
              <div className="w-2/3 h-96 bg-gray-100 rounded-xl"></div>
              <div className="h-96 w-1/3 bg-gray-100 rounded-xl"></div>
            </div>
            <div className="w-full grid grid-cols-3 gap-6">
              <div className="h-96 w-full bg-gray-100 rounded-xl"></div>
              <div className="h-96 w-full bg-gray-100 rounded-xl"></div>
              <div className="h-96 w-full bg-gray-100 rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full p-20 grid grid-cols-2 gap-16">
        <div className="w-full space-y-6">
          <p className="text-6xl font-semibold">
            NEW GUINEA: ANCIENT MYSTERIES
          </p>
          <div className="ml-auto">
            <p>
              A place where nature and adventure unite A place where nature and
              adventure unite A place where nature and adventure unite A place
              where nature and adventure unite A place where nature and
              adventure unite A place where nature and adventure unite
            </p>
          </div>
          <div className="grid grid-cols-2 w-fit gap-2">
            <Button className="rounded-full h-10 font-normal">
              Reminder me
            </Button>
            <Button
              variant={"outline"}
              className="rounded-full h-10 font-normal border-black"
            >
              Learn more
            </Button>
          </div>
        </div>
        <div className="w-full grid grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="h-96 w-full bg-gray-100 rounded-xl"></div>
            <div className="px-2 space-y-1">
              <p className="font-semibold">Bird of paradise watch</p>
              <p className="text-sm text-gray-500">
                Witness the spectacular courship displays of these mythical
                birds
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="h-96 w-full bg-gray-100 rounded-xl"></div>
            <div className="px-2 space-y-1">
              <p className="font-semibold">Bird of paradise watch</p>
              <p className="text-sm text-gray-500">
                Witness the spectacular courship displays of these mythical
                birds
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full min-h-screen p-20 space-y-12">
        <div className="w-3/5 mx-auto text-center space-y-6">
          <p className="text-6xl font-semibold">ANCIENT MYSTERIES</p>
          <p>
            A place where nature and adventure unite A place where nature and
            adventure unite A place where nature and adventure unite A place
            where nature and adventure unite A place where nature and adventure
            unite A place where nature and adventure unite
          </p>
        </div>

        <div className="w-full grid grid-cols-2 gap-16">
          <div className="w-full h-96 rounded-lg bg-gray-100"></div>
          <Accordion type="multiple" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is it styled?</AccordionTrigger>
              <AccordionContent>
                Yes. It comes with default styles that matches the other
                components&apos; aesthetic.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Is it animated?</AccordionTrigger>
              <AccordionContent>
                Yes. It's animated by default, but you can disable it if you
                prefer.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section className="min-h-screen w-full bg-center bg-no-repeat bg-cover bg-black text-white p-20 space-y-6 flex items-center justify-center">
        <div className="text-center space-y-6">
          <p className="text-6xl uppercase font-bold ">BEGIN YOUR ADVENTURE</p>
          <p className="w-2/3 mx-auto">
            "Fancì Club is a collective of Vietnamese youth who live to
            celebrate beauty and humanity, Carrying that message brings us
            gratitude for life, and abundance of joy to create."
          </p>
          <Button className="dark rounded-full h-10 px-10 mt-4">
            <p className="font-medium ml-2">Plan My Trip</p>
            <ArrowRight size={20} className="mr-2" />
          </Button>
        </div>
      </section>

      <section className="min-h-screen w-full bg-center bg-no-repeat bg-cover  p-20 space-y-6 flex items-center justify-center">
        <div className="text-center space-y-6">
          <p className="text-6xl font-medium w-4/5 text-center mx-auto ">
            A Selection Of Exceptional Villas And Hotels
          </p>

          <SearchBar />
          <FilterTabs />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
            {hotels.map((hotel, i) => (
              <HotelCard key={i} hotel={hotel} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;

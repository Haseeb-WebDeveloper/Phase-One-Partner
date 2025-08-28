import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="w-full h-full min-h-[100vh]  flex justify-center items-center">
      <div className="flex flex-col gap-3 justify-center">
        <h1 className="p-6 text-7xl font-bold">Partners for growth</h1>
        <div className="space-y-3 text-center text-2xl">
          <p>Helping entrepreneurs achieve their vision.</p>
          <p>Expertise, coupled with ambition.</p>
        </div>
        <Button
          size="xl"
          className="rounded-full w-fit mx-auto mt-6"
        >
          Book A Free Discovery Session Today
        </Button>
      </div>
    </section>
  );
}

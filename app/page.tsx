import { getWaitlistCount } from "@/app/actions";

export const dynamic = "force-dynamic";
import Nav from "@/components/main/nav";
import Hero from "@/components/main/hero";
import Problem from "@/components/main/problem";
import Solution from "@/components/main/solution";
import Features from "@/components/main/features";
import HowItWorks from "@/components/main/how-it-works";
import Cta from "@/components/main/cta";
import Footer from "@/components/main/footer";

export default async function Home() {
  const count = await getWaitlistCount();

  return (
    <>
      <Nav />
      <main>
        <Hero count={count} />
        <Problem />
        <Solution />
        <Features />
        <HowItWorks />
        <Cta count={count} />
      </main>
      <Footer />
    </>
  );
}

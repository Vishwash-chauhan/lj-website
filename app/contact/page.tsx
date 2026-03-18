import ContactUs from "../components/ContactUs";
import AboutStats from "../components/AboutStats";
import InstagramLink from "../components/InstagramLink";

export default function ContactPage() {
  return (
    <>
      <ContactUs />
      <section
        className="px-4 sm:px-6 pb-12 md:pb-16 bg-[#FFF9F2]"
        style={{ fontFamily: "'Comic Neue', cursive" }}
      >
        <div className="max-w-6xl mx-auto space-y-10 md:space-y-12">
          <AboutStats />
          <InstagramLink />
        </div>
      </section>
    </>
  );
}
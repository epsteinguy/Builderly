import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <main>
      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-white/40">Get a quote</p>
            <h1 className="text-4xl font-semibold text-white sm:text-5xl">Tell us about your next project</h1>
            <p className="text-base text-white/65">
              Share timelines, scope, and goals. Detaile tech ctacks if you have that in mind! We typically reply within 24 hours with next steps.
            </p>
            <div className="grid gap-4">
              <div className="glass rounded-2xl p-5">
                <p className="text-xs uppercase tracking-widest text-white/50">Email</p>
                <p className="text-sm text-white">hello@builderly.tech</p>
              </div>
              <div className="glass rounded-2xl p-5">
                <p className="text-xs uppercase tracking-widest text-white/50">Availability</p>
                <p className="text-sm text-white">Booking Year-2026</p>
              </div>
            </div>
          </div>

          <div className="glass gradient-border rounded-3xl p-8">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}

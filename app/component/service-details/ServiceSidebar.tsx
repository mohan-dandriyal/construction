import Image from "next/image";
import Link from "next/link";
import { ArrowRight, House } from "lucide-react";
import Reveal from "./Reveal";
import { services } from "@/app/utills/services";

export default function ServiceSidebar({ activeSlug }: { activeSlug: string }) {
  return (
    <aside className="order-2 min-w-0 space-y-8 lg:order-1 lg:sticky lg:top-24 lg:self-start">
      {/* ---------- Service list ---------- */}
      <Reveal x={-40} y={0}>
        <nav aria-label="Our services" className="overflow-hidden rounded-lg bg-[#0e1a25]">
          <h2 className="bg-[#d9a55b] px-7 py-5 text-lg font-semibold text-[#14110c]">
            Discover Our Services
          </h2>

          <ul className="pb-2">
            {services.map((service, i) => {
              const active = service.slug === activeSlug;
              const isLast = i === services.length - 1;

              return (
                <li key={service.slug} className={active ? "" : "px-7"}>
                  <Link
                    href={`/services/${service.slug}`}
                    aria-current={active ? "page" : undefined}
                    className={`group flex items-center justify-between py-5 text-[15px] font-medium text-white transition-colors duration-300 hover:text-[#d9a55b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#d9a55b] ${
                      active
                        ? "border-l-[3px] border-[#d9a55b] bg-[#4a3b29] px-7 hover:text-white"
                        : isLast
                        ? ""
                        : "border-b border-white/10"
                    }`}
                  >
                    {service.title}
                    <ArrowRight
                      size={18}
                      className="text-[#e3ab5a] transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </Reveal>

      {/* ---------- CTA card ---------- */}
      <Reveal x={-40} y={0} delay={0.15}>
        <div className="relative overflow-hidden rounded-lg border border-[#d9a55b]/60 bg-[#0b1520]">
          <div className="absolute inset-x-0 top-0 h-[78%]">
            <Image
              src="/service-1.png"
              alt=""
              fill
              sizes="340px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b1520] via-[#0b1520]/75 to-transparent" />
          </div>

          <div className="relative flex min-h-[520px] flex-col justify-end p-7">
            <span className="absolute left-7 top-24 grid h-16 w-16 place-items-center rounded-xl bg-black/50 text-[#e3ab5a] backdrop-blur-sm">
              <House size={34} strokeWidth={1.75} aria-hidden="true" />
            </span>

            <h3 className="text-xl font-semibold leading-snug text-white">
              Let’s Create Your
              <br />
              Dream Space Together
            </h3>
            <p className="mt-3 text-[15px] leading-relaxed text-[#cfd5db]">
              Get expert interior design solutions with our professional team.
            </p>

            <Link
              href="/contact"
              className="group mt-6 inline-flex w-fit items-center gap-3 rounded-md bg-[#e3ab5a] py-2 pl-5 pr-2 text-sm font-semibold text-[#14110c] transition-colors duration-300 hover:bg-[#f0b96a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e3ab5a]"
            >
              Contact Now
              <span className="grid h-8 w-8 place-items-center rounded-full bg-[#c98f3f]/70 transition-transform duration-300 group-hover:translate-x-1">
                <ArrowRight size={16} aria-hidden="true" />
              </span>
            </Link>
          </div>
        </div>
      </Reveal>
    </aside>
  );
}
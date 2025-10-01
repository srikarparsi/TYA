import { Button } from "@/components/ui/button";
import Link from "next/link";

interface HeroButton {
  text: string;
  href: string;
  variant?: "primary" | "secondary";
}

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description?: string;
  buttons?: HeroButton[];
}

export function HeroSection({
  title,
  subtitle,
  description,
  buttons,
}: HeroSectionProps) {
  return (
    <section className="relative bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 text-white py-24 md:py-32">
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
            {title}
          </h1>
          {subtitle && (
            <p className="text-2xl md:text-3xl mb-8 font-light">{subtitle}</p>
          )}
          {description && (
            <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto opacity-90">
              {description}
            </p>
          )}
          {buttons && buttons.length > 0 && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {buttons.map((button, index) => (
                <Link key={index} href={button.href}>
                  <Button
                    className={
                      button.variant === "secondary"
                        ? "bg-white hover:bg-white/80 text-pink-700 font-semibold px-8"
                        : "bg-white hover:bg-white/80 text-purple-700 font-semibold px-8"
                    }
                  >
                    {button.text}
                  </Button>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

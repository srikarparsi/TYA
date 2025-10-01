import { Button } from "@/components/ui/button";
import Link from "next/link";

interface CTAButton {
  text: string;
  href?: string;
  onClick?: () => void;
  variant?: "default" | "outline";
}

interface CTASectionProps {
  title: string;
  description: string;
  buttons: CTAButton[];
}

export function CTASection({ title, description, buttons }: CTASectionProps) {
  return (
    <section className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12 text-white text-center shadow-2xl">
      <h2 className="text-4xl font-bold mb-4">{title}</h2>
      <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">{description}</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        {buttons.map((button, index) => {
          const buttonElement = (
            <Button
              key={index}
              size="lg"
              onClick={button.onClick}
              className={
                button.variant === "outline"
                  ? "border-2 border-white text-white hover:bg-white hover:text-purple-700 font-semibold px-10"
                  : "bg-white text-purple-700 hover:bg-gray-100 font-semibold px-10"
              }
            >
              {button.text}
            </Button>
          );

          return button.href ? (
            <Link key={index} href={button.href}>
              {buttonElement}
            </Link>
          ) : (
            buttonElement
          );
        })}
      </div>
    </section>
  );
}

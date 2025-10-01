import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

interface FeatureButton {
  text: string;
  href?: string;
  onClick?: () => void;
  variant?: "default" | "outline";
}

interface FeatureCardProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  imageSrc?: string;
  imageAlt?: string;
  imagePosition?: "left" | "right" | "top" | "none";
  children?: React.ReactNode;
  buttons?: FeatureButton[];
  className?: string;
  cardClassName?: string;
}

export function FeatureCard({
  title,
  description,
  icon,
  imageSrc,
  imageAlt = "",
  imagePosition = "none",
  children,
  buttons,
  className = "",
  cardClassName = "",
}: FeatureCardProps) {
  // Standalone card (no image)
  if (imagePosition === "none") {
    return (
      <Card
        className={`shadow-xl border hover:shadow-2xl transition-all ${cardClassName}`}
      >
        <CardHeader>
          {icon && <div className="text-4xl mb-3">{icon}</div>}
          <CardTitle className={description ? "text-2xl" : "text-3xl"}>
            {title}
          </CardTitle>
          {description && <CardDescription>{description}</CardDescription>}
        </CardHeader>
        {(children || buttons) && (
          <CardContent>
            {children}
            {buttons && buttons.length > 0 && (
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                {buttons.map((button, index) => {
                  const buttonElement = (
                    <Button
                      key={index}
                      onClick={button.onClick}
                      variant={button.variant || "outline"}
                      className="w-full sm:w-auto"
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
            )}
          </CardContent>
        )}
      </Card>
    );
  }

  // Card with image layout
  const imageElement = imageSrc && (
    <div className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </div>
  );

  const cardElement = (
    <Card className={`shadow-xl border ${cardClassName}`}>
      <CardContent className="p-8">
        {icon && <div className="text-4xl mb-3">{icon}</div>}
        {description ? (
          <>
            <CardHeader className="p-0 mb-4">
              <CardTitle className="text-3xl">{title}</CardTitle>
              <CardDescription className="text-base">
                {description}
              </CardDescription>
            </CardHeader>
            {children}
          </>
        ) : (
          <>
            <h3 className="text-3xl font-semibold mb-4">{title}</h3>
            {children}
          </>
        )}
        {buttons && buttons.length > 0 && (
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            {buttons.map((button, index) => {
              const buttonElement = (
                <Button
                  key={index}
                  size="lg"
                  onClick={button.onClick}
                  variant={button.variant || "default"}
                  className="w-full md:w-auto px-8"
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
        )}
      </CardContent>
    </Card>
  );

  // Layout based on image position
  return (
    <div className={`grid md:grid-cols-2 gap-8 items-center ${className}`}>
      {imagePosition === "left" && (
        <>
          <div className="order-2 md:order-1">{imageElement}</div>
          <div className="order-1 md:order-2">{cardElement}</div>
        </>
      )}
      {imagePosition === "right" && (
        <>
          {imageElement}
          {cardElement}
        </>
      )}
      {imagePosition === "top" && (
        <div className="col-span-full">
          {imageElement}
          <div className="mt-8">{cardElement}</div>
        </div>
      )}
    </div>
  );
}

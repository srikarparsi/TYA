import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

interface ImageCardBadge {
  text: string;
  color?: string;
}

interface ImageCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description?: string;
  badge?: ImageCardBadge;
  children?: React.ReactNode;
  buttonText?: string;
  buttonHref?: string;
  buttonVariant?: "default" | "outline";
  aspectRatio?: "square" | "video" | "wide" | "tall";
  className?: string;
}

export function ImageCard({
  imageSrc,
  imageAlt,
  title,
  description,
  badge,
  children,
  buttonText,
  buttonHref,
  buttonVariant = "outline",
  aspectRatio = "video",
  className = "",
}: ImageCardProps) {
  const aspectClasses = {
    square: "aspect-square",
    video: "aspect-video",
    wide: "h-48",
    tall: "h-64",
  };

  const badgeColors = {
    blue: "bg-blue-600",
    green: "bg-green-600",
    purple: "bg-purple-600",
    pink: "bg-pink-600",
  };

  return (
    <Card
      className={`shadow-xl border hover:shadow-2xl transition-all hover:-translate-y-1 overflow-hidden pt-0 ${className}`}
    >
      <div className={`relative ${aspectClasses[aspectRatio]} overflow-hidden`}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {badge && (
          <div className="absolute top-4 right-4">
            <span
              className={`${
                badge.color || badgeColors.blue
              } text-white px-3 py-1 rounded-full text-sm font-medium`}
            >
              {badge.text}
            </span>
          </div>
        )}
      </div>
      <CardHeader>
        <CardTitle className="group-hover:text-primary transition-colors">
          {title}
        </CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      {children && <CardContent>{children}</CardContent>}
      {buttonText && buttonHref && (
        <CardFooter className="mt-auto">
          <Link href={buttonHref} className="w-full">
            <Button variant={buttonVariant} className="w-full">
              {buttonText}
            </Button>
          </Link>
        </CardFooter>
      )}
    </Card>
  );
}

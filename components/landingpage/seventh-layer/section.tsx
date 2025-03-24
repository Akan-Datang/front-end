"use client"
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface ContactSectionProps {
  title?: string;
  buttonText?: string;
  className?: string;
  imageSrc?: string;
}

export function Contact({
  title = "Have any questions or need more info?",
  buttonText = "Contact Us",
  className = "",
  imageSrc = "/landing/contact.png",
}: ContactSectionProps) {
  const { theme } = useTheme();
  const router = useRouter();

  const handleContactClick = () => {
    router.push("/services#contact-section");
  };

  return (
    <section className={`relative w-full overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-r from-sky-900 to-sky-800 dark:from-sky-900 dark:to-sky-800" />

      <div className="relative z-10 w-full flex flex-col lg:flex-row items-stretch min-h-[150px] lg:min-h-[300px]">
        <div className="relative w-full lg:w-2/5">
          <div className="relative z-10 p-4 py-8 md:p-8 lg:p-16 h-full flex flex-col justify-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
              {title}
            </h2>
            <Button
              size="default"
              variant={theme === "dark" ? "outline" : "secondary"}
              className="text-base px-4 w-fit"
              onClick={handleContactClick}
            >
              {buttonText}
            </Button>
          </div>
        </div>

        <div className="hidden lg:block w-full lg:w-3/5 h-auto relative">
          <div className="absolute inset-0 overflow-hidden">
            <div
              className="absolute inset-0 transform origin-top-left"
              style={{
                clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0% 100%)",
              }}
            >
              <Image
                src={imageSrc}
                alt="Contact section"
                fill
                className="object-cover object-left"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
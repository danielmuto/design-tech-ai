import { useEffect, useState } from "react";
import { whatsappUrl } from "@/lib/site";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.87 9.87 0 0 0 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2Zm0 18.03a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-3.12.82.83-3.04-.2-.31a8.08 8.08 0 0 1-1.24-4.28c0-4.47 3.64-8.11 8.12-8.11a8.1 8.1 0 0 1 8.11 8.11c0 4.48-3.64 8.12-8.11 8.12Zm4.45-6.07c-.24-.12-1.44-.71-1.66-.79-.22-.08-.39-.12-.55.12-.16.24-.63.79-.77.95-.14.16-.28.18-.53.06-.24-.12-1.03-.38-1.96-1.21-.72-.65-1.21-1.44-1.36-1.68-.14-.24-.01-.37.11-.5.11-.11.24-.28.37-.42.12-.14.16-.24.24-.4.08-.16.04-.31-.02-.43-.06-.12-.55-1.32-.75-1.81-.2-.48-.4-.41-.55-.42h-.47c-.16 0-.43.06-.65.31-.22.24-.86.84-.86 2.05 0 1.21.88 2.37 1 2.53.12.16 1.72 2.63 4.18 3.69.58.25 1.04.4 1.4.52.59.19 1.12.16 1.54.1.47-.07 1.44-.59 1.64-1.16.2-.57.2-1.05.14-1.16-.06-.1-.22-.16-.46-.28Z" />
    </svg>
  );
}

/** Botão flutuante do WhatsApp — aparece somente depois da Hero. */
export function WhatsAppFloat() {
  const [heroVisible, setHeroVisible] = useState(true);

  useEffect(() => {
    const hero = document.getElementById("top");

    if (!hero) {
      setHeroVisible(false);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setHeroVisible(entry.isIntersecting),
      { threshold: 0.05 },
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com Daniel no WhatsApp"
      className={`group fixed right-5 bottom-5 z-50 flex items-center gap-3 rounded-full bg-mint py-3 pr-5 pl-4 text-primary-foreground shadow-[0_16px_40px_-12px_var(--mint)] transition-all duration-500 hover:shadow-[0_16px_48px_-8px_var(--mint)] sm:right-8 sm:bottom-8 ${
        heroVisible
          ? "pointer-events-none translate-y-5 opacity-0"
          : "pointer-events-auto translate-y-0 opacity-100"
      }`}
    >
      <WhatsAppIcon className="size-6" />
      <span className="text-[13px] font-extrabold tracking-wide">
        Falar com Daniel
      </span>
    </a>
  );
}

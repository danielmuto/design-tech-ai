import { useRef, useState } from "react";
import { ArrowDown, ArrowUpRight, RotateCcw } from "lucide-react";
import { whatsappUrl } from "@/lib/site";
import { Reveal } from "./Reveal";
import heroImage from "@/assets/hero-daniel.png.asset.json";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);
  const [videoStarted, setVideoStarted] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false);

  const startVideo = async () => {
    const video = videoRef.current;
    if (!video || !videoReady) return;

    try {
      video.currentTime = 0;
      setVideoEnded(false);
      setVideoStarted(true);
      await video.play();
    } catch {
      setVideoStarted(false);
    }
  };

  const replayIntro = () => {
    const video = videoRef.current;
    if (!video) return;

    video.pause();
    video.currentTime = 0;
    setVideoEnded(false);
    setVideoStarted(false);
  };

  return (
    <div id="top" className="relative overflow-hidden bg-deep">
      {/* O poster mantém o Hero bonito enquanto o vídeo carrega. */}
      <video
        ref={videoRef}
        src="/hero-daniel-video.mp4"
        poster={heroImage.url}
        preload="auto"
        playsInline
        muted
        onCanPlay={() => setVideoReady(true)}
        onEnded={() => setVideoEnded(true)}
        onError={() => setVideoReady(false)}
        className="absolute inset-0 size-full object-cover object-[70%_center]"
        aria-label="Daniel Muto trabalhando em um ambiente de tecnologia e inteligência artificial"
      />

      {/* Camadas de leitura: ficam fortes antes do clique e recuam durante o vídeo. */}
      <div
        aria-hidden="true"
        className={`absolute inset-0 bg-[linear-gradient(90deg,var(--deep)_0%,oklch(0.212_0.042_247.8/92%)_38%,oklch(0.212_0.042_247.8/55%)_65%,oklch(0.212_0.042_247.8/25%)_100%)] transition-opacity duration-700 ${videoStarted ? "opacity-30" : "opacity-100"}`}
      />
      <div
        aria-hidden="true"
        className={`absolute inset-0 bg-[linear-gradient(to_bottom,oklch(0.212_0.042_247.8/70%)_0%,transparent_25%,transparent_60%,var(--deep)_100%)] transition-opacity duration-700 ${videoStarted ? "opacity-40" : "opacity-100"}`}
      />
      <div
        aria-hidden="true"
        className={`bg-grid-dark absolute inset-0 transition-opacity duration-700 ${videoStarted ? "opacity-10" : "opacity-40"}`}
      />

      <div className="relative mx-auto w-full max-w-6xl px-5 pt-36 pb-24 sm:px-8 sm:pt-44 lg:px-10 lg:pt-52 lg:pb-36">
        <div
          className={`max-w-3xl transition-all duration-500 ${videoStarted ? "pointer-events-none -translate-y-2 opacity-0" : "translate-y-0 opacity-100"}`}
        >
          <Reveal>
            <p className="flex items-center gap-3 text-[11px] font-bold tracking-[0.3em] text-mint uppercase">
              <span aria-hidden="true" className="h-px w-8 bg-mint/70" />
              Web Design • IA • Experiências Digitais
            </p>
          </Reveal>

          <Reveal delay={120}>
            <h1 className="mt-7 text-[13.5vw] leading-[0.98] font-extrabold tracking-tight text-balance text-foreground sm:text-6xl lg:text-7xl xl:text-[5.2rem]">
              Sua ideia merece sair da imaginação e ganhar vida no{" "}
              <span className="text-gradient-mint">digital.</span>
            </h1>
          </Reveal>

          <Reveal delay={240}>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-pretty text-foreground/75 sm:text-lg">
              Sites, landing pages e aplicações digitais criadas para transformar
              boas ideias em experiências profissionais, modernas e estratégicas.
            </p>
          </Reveal>

          <Reveal delay={360}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={startVideo}
                disabled={!videoReady}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-mint px-8 py-4 text-sm font-extrabold tracking-wide text-primary-foreground uppercase transition-all duration-300 hover:shadow-[0_0_44px_-8px_var(--mint)] disabled:cursor-wait disabled:opacity-70"
              >
                {videoReady ? "Quero começar agora" : "Preparando experiência..."}
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
              <a
                href="#projetos"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-line-dark bg-deep/40 px-8 py-4 text-sm font-bold tracking-wide text-foreground uppercase backdrop-blur-sm transition-colors duration-300 hover:border-mint/50 hover:text-mint"
              >
                Ver projetos
                <ArrowDown className="size-4 transition-transform duration-300 group-hover:translate-y-0.5" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>

      {/* CTA que aparece somente depois que o vídeo termina. */}
      <div
        className={`absolute inset-0 z-20 flex items-end px-5 pb-14 transition-all duration-700 sm:items-center sm:px-8 sm:pb-0 lg:px-10 ${videoEnded ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
      >
        <div className="mx-auto w-full max-w-6xl">
          <div className="max-w-xl rounded-3xl border border-line-dark bg-deep/75 p-6 shadow-2xl backdrop-blur-md sm:p-8">
            <p className="text-[11px] font-bold tracking-[0.3em] text-mint uppercase">
              Sua ideia pode ser a próxima
            </p>
            <h2 className="mt-4 text-3xl leading-tight font-extrabold text-foreground sm:text-4xl">
              Pronto para transformar sua ideia em algo real?
            </h2>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-mint px-7 py-3.5 text-sm font-extrabold tracking-wide text-primary-foreground uppercase transition-all duration-300 hover:shadow-[0_0_44px_-8px_var(--mint)]"
              >
                Vamos criar meu projeto
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <button
                type="button"
                onClick={replayIntro}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-line-dark bg-deep/50 px-7 py-3.5 text-sm font-bold tracking-wide text-foreground uppercase transition-colors hover:border-mint/50 hover:text-mint"
              >
                <RotateCcw className="size-4" />
                Rever
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

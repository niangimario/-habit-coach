import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ejaculação Precoce Nunca Mais — Neurocondicionamento Sexual" },
      {
        name: "description",
        content:
          "Descubra os 4 hábitos diários que mantêm você preso na ejaculação precoce — e como reverter o padrão.",
      },
      { property: "og:title", content: "Ejaculação Precoce Nunca Mais" },
      {
        property: "og:description",
        content:
          "O manual dos hábitos que podem transformar a forma como você encara a sua vida sexual.",
      },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,700&family=Inter:wght@400;500;600;700;800;900&display=swap",
      },
    ],
  }),
  component: BlogPost,
});

const habits = [
  {
    n: "01",
    title: "Pornografia de alta intensidade",
    body: "O cérebro humano foi desenhado para responder à novidade. Quanto mais estímulos recebe em pouco tempo, mais se acostuma a procurar recompensas rápidas. Muitos homens passam anos a reforçar exatamente esse padrão.",
  },
  {
    n: "02",
    title: "Masturbação focada apenas no resultado",
    body: "Quando o único objetivo é chegar rapidamente ao final, o cérebro começa a associar excitação com velocidade. O comportamento repete-se. O padrão fortalece-se. O resultado aparece.",
  },
  {
    n: "03",
    title: "Ansiedade constante",
    body: "Quanto mais preocupado você fica em durar mais tempo, mais pressão coloca sobre a sua mente. E quanto maior a pressão, mais difícil se torna controlar a excitação.\n\nO resultado? Você entra num ciclo perigoso: a ejaculação precoce gera ansiedade, e a ansiedade acelera ainda mais a ejaculação.",
  },
  {
    n: "04",
    title: "Repetir os mesmos hábitos esperando resultados diferentes",
    body: "O cérebro funciona através da repetição.\n\nAquilo que é repetido fortalece-se.\n\nAquilo que é ignorado enfraquece-se.\n\nSimples.\n\nMas poderoso.",
  },
];

const discoveries = [
  "Quais hábitos podem estar a reforçar a aceleração da resposta sexual.",
  "Como interromper padrões que se repetem há anos.",
  "Como desenvolver mais consciência sobre os próprios níveis de excitação.",
  "Como construir rotinas mais favoráveis ao autocontrolo.",
  "Como substituir hábitos que trabalham contra você por hábitos que trabalham a seu favor.",
  "Como a pornografia e a masturbação não precisam de ser obstáculo ao seu desempenho sexual. Quando compreendidas de forma correta se tornam ferramentas valiosas para o autocontrolo e retardar a ejaculação.",
];

function BlogPost() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border sticky top-0 z-30 bg-background/90 backdrop-blur">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="size-7 rounded-sm bg-foreground text-background grid place-items-center font-black text-sm">
              E
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground font-semibold">
                Saúde Masculina
              </span>
              <span className="text-sm font-bold">Neurocondicionamento</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="border-b border-border">
        <div className="max-w-3xl mx-auto px-6 pt-16 pb-14 md:pt-24 md:pb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-clinic-soft text-accent text-[11px] uppercase tracking-[0.18em] font-bold mb-8">
            <span className="size-1.5 rounded-full bg-accent" />
            Artigo Clínico · 7 min
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-black leading-[1.05] text-balance">
            Isto está a manter você{" "}
            <span className="text-accent">preso na ejaculação precoce</span>{" "}
            <span className="text-muted-foreground font-display italic font-normal">
              (e você faz isso todos os dias)
            </span>
          </h1>
          <div className="mt-10 flex items-center gap-4 text-xs text-muted-foreground uppercase tracking-[0.15em] font-semibold">
            <span>Publicado pela redação</span>
            <span className="h-px w-8 bg-border" />
            <span>Revisado clinicamente</span>
          </div>
        </div>
      </section>

      {/* Intro */}
      <article className="max-w-2xl mx-auto px-6 py-16 md:py-20 space-y-6 text-lg leading-relaxed text-foreground/85">
        <p className="text-xl md:text-2xl font-bold leading-snug text-foreground text-balance">
          A maioria dos homens acredita que a ejaculação precoce acontece durante a relação.
        </p>
        <p className="text-accent font-bold uppercase tracking-wider text-sm">
          Esse é o primeiro erro.
        </p>
        <p>Ela começa muito antes.</p>
        <p>
          Começa no momento em que você acorda. Começa nos hábitos que repete.
          Começa nas decisões aparentemente inocentes que o seu cérebro registra
          e transforma em padrões automáticos.
        </p>
        <p>O que poucos homens sabem é que o cérebro está sempre a aprender.</p>
        <p className="font-display text-2xl md:text-3xl italic text-foreground leading-snug border-l-4 border-accent pl-5 py-1">
          A questão é: o que ele está a aprender com os seus hábitos diários?
        </p>
      </article>

      {/* Discovery */}
      <section className="border-y border-border bg-card">
        <div className="max-w-3xl mx-auto px-6 py-20 md:py-24">
          <div className="text-[11px] uppercase tracking-[0.2em] text-accent font-bold mb-4">
            § 01 — A descoberta
          </div>
          <h2 className="text-3xl md:text-5xl font-black leading-tight text-balance mb-8">
            A descoberta que mudou a forma como enxergamos a performance masculina.
          </h2>
          <div className="space-y-5 text-lg text-foreground/85 leading-relaxed">
            <p>
              Durante anos, homens procuraram respostas em produtos, comprimidos,
              técnicas rápidas e promessas milagrosas.
            </p>
            <p>
              Mas quase ninguém olhou para o fator que está presente 24 horas por dia:
            </p>
            <p className="text-2xl md:text-3xl font-black text-foreground">
              O condicionamento diário do cérebro.
            </p>
            <p>
              Porque o cérebro não executa aquilo que você deseja.{" "}
              <strong>Ele executa aquilo que você pratica.</strong>
            </p>
            <p>
              E se durante anos você praticou hábitos que aceleram a excitação… o
              resultado não deveria surpreender.
            </p>
          </div>
        </div>
      </section>

      {/* Habits */}
      <section className="max-w-5xl mx-auto px-6 py-20 md:py-28">
        <div className="max-w-2xl mb-14">
          <div className="text-[11px] uppercase tracking-[0.2em] text-accent font-bold mb-4">
            § 02 — Os quatro hábitos
          </div>
          <h2 className="text-3xl md:text-5xl font-black leading-tight text-balance mb-6">
            Os <span className="text-accent">4 hábitos</span> que estão a
            treinar o seu cérebro para ejacular mais rápido{" "}
            <span className="text-muted-foreground font-display italic font-normal">
              (sem que se aperceba)
            </span>
          </h2>
          <p className="text-lg md:text-xl text-foreground/85 leading-relaxed">
            A maioria dos homens não sabe disto: existem hábitos diários que podem estar a condicionar o seu cérebro a atingir o orgasmo demasiado rápido. Se luta contra a ejaculação precoce, estes 4 comportamentos podem estar a contribuir para o problema. Descubra quais são e como revertê-los para melhorar o controlo e a confiança na intimidade.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-border border border-border">
          {habits.map((h) => (
            <article
              key={h.n}
              className="bg-background p-7 md:p-9 hover:bg-card transition-colors duration-300"
            >
              <div className="flex items-baseline gap-4 mb-4">
                <span className="font-black text-3xl text-accent tabular-nums">
                  {h.n}
                </span>
                <span className="h-px flex-1 bg-border" />
              </div>
              <h3 className="text-xl md:text-2xl font-black mb-3 text-balance">
                {h.title}
              </h3>
              <p className="text-foreground/75 leading-relaxed text-[15px]">
                {h.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Pull quote */}
      <section className="border-y border-border bg-foreground text-background">
        <div className="max-w-4xl mx-auto px-6 py-20 md:py-28 text-center">
          <div className="font-display text-6xl text-accent leading-none mb-4">
            “
          </div>
          <blockquote className="font-display text-2xl md:text-4xl leading-[1.2] text-balance italic">
            O homem não é o resultado de uma única noite. É o resultado dos
            hábitos que treinou durante anos.
          </blockquote>
        </div>
      </section>

      {/* The part nobody understands */}
      <article className="max-w-2xl mx-auto px-6 py-20 md:py-28 space-y-6 text-lg leading-relaxed text-foreground/85">
        <div className="text-[11px] uppercase tracking-[0.2em] text-accent font-bold mb-2">
          § 03 — A parte que quase ninguém entende
        </div>
        <h2 className="text-3xl md:text-5xl font-black leading-tight text-balance text-foreground mb-6">
          Se hábitos conseguem acelerar padrões…
        </h2>
        <p className="text-2xl md:text-3xl font-black text-accent">
          Hábitos também podem desacelerá-los.
        </p>
        <p>
          Se comportamentos conseguem criar respostas automáticas, novos
          comportamentos também podem criar novas respostas automáticas.
        </p>
        <p>
          E é exatamente aqui que a maioria dos homens nunca chega. Porque
          passam anos à procura de uma solução externa — quando a verdadeira
          mudança começa dentro do sistema que gerou o problema.
        </p>
        <div className="border-l-4 border-accent pl-5 py-2 my-8 bg-clinic-soft/40">
          <p className="font-display text-xl md:text-2xl italic text-foreground leading-snug">
            Todos os dias o seu cérebro continua a aprender. A única questão é:
            está a aprender algo que trabalha a seu favor — ou contra si?
          </p>
        </div>
      </article>

      {/* Imagine */}
      <section className="border-t border-border bg-card">
        <div className="max-w-3xl mx-auto px-6 py-20 md:py-24">
          <div className="text-[11px] uppercase tracking-[0.2em] text-accent font-bold mb-4">
            § 04 — Imagine descobrir
          </div>
          <h2 className="text-3xl md:text-5xl font-black leading-tight text-balance mb-10">
            Imagine descobrir.
          </h2>
          <ul className="space-y-4">
            {discoveries.map((d, i) => (
              <li
                key={i}
                className="flex gap-4 bg-background border border-border p-5 rounded-sm group"
              >
                <span className="shrink-0 size-7 rounded-sm bg-accent text-accent-foreground grid place-items-center font-black text-sm">
                  {i + 1}
                </span>
                <span className="text-base md:text-lg text-foreground/90 leading-relaxed font-medium">
                  {d}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* The Manual / CTA */}
      <section id="manual" className="border-t border-border bg-background">
        <div className="max-w-4xl mx-auto px-6 py-24 md:py-32 text-center">
          <div className="text-[11px] uppercase tracking-[0.25em] text-accent font-bold mb-6">
            É por isso que criamos
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1] text-balance mb-8">
            Ejaculação Precoce <span className="text-accent">Nunca Mais</span>
          </h2>
          <p className="max-w-xl mx-auto text-lg text-foreground/80 leading-relaxed mb-3">
            Não como mais uma promessa.
          </p>
          <p className="max-w-xl mx-auto text-lg text-foreground/80 leading-relaxed mb-12">
            Mas como um manual focado em algo que quase ninguém ensina:{" "}
            <strong className="text-foreground">
              os hábitos diários que influenciam a forma como o cérebro responde à excitação.
            </strong>
          </p>

          <div className="inline-flex flex-col items-center gap-5 border-2 border-foreground bg-card px-8 py-10 md:px-14 md:py-12 rounded-sm shadow-[8px_8px_0_0_var(--color-foreground)]">
            <div className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground font-bold">
              Investimento único
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-black text-foreground">R$</span>
              <span className="font-black text-6xl md:text-7xl leading-none text-foreground tabular-nums">
                47,99
              </span>
            </div>
            <p className="max-w-sm text-sm text-muted-foreground leading-relaxed text-balance">
              O manual dos hábitos que vão transformar a sua ejaculação acelerada em retardada e mudar a forma como você encara a sua vida sexual.
            </p>
            <a
              href="https://pay.hotmart.com/I106084666J?checkoutMode=10"
              className="mt-2 inline-flex items-center gap-3 bg-accent text-accent-foreground px-8 py-4 text-sm uppercase tracking-[0.18em] font-bold rounded-sm hover:bg-foreground transition-colors"
            >
              Quero o manual
              <span aria-hidden>→</span>
            </a>
          </div>

          <div className="mt-16 max-w-xl mx-auto space-y-3 text-foreground/80">
            <p className="font-display text-xl md:text-2xl italic">
              Se os seus hábitos atuais o trouxeram até aqui…
            </p>
            <p className="text-base md:text-lg font-semibold">
              O que aconteceria se começasse a aplicar hábitos diferentes?
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-card">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row gap-3 items-center justify-between text-[11px] uppercase tracking-[0.18em] text-muted-foreground font-semibold">
          <span>© Ejaculação Precoce Nunca Mais</span>
          <span>Saúde masculina · Neurocondicionamento</span>
        </div>
      </footer>
    </main>
  );
}

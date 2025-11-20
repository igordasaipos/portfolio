import { Button } from "@/components/ui/button";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-muted/40 to-background">
      <header className="border-b border-border/70 bg-background/70 backdrop-blur">
        <div className="container flex items-center justify-between py-4">
          <div className="space-y-1">
            <p className="text-sm font-medium text-muted-foreground">Portfolio</p>
            <h1 className="text-xl font-semibold tracking-tight text-foreground">
              React + Vite + shadcn/ui
            </h1>
          </div>
          <div className="flex gap-2">
            <Button variant="ghost">Light</Button>
            <Button variant="default">Dark</Button>
          </div>
        </div>
      </header>

      <main className="container flex flex-col gap-16 py-16">
        <section className="grid items-center gap-8 md:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <span className="rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-primary">
              Olá, eu sou
            </span>
            <div className="space-y-4">
              <h2 className="text-4xl font-bold leading-tight sm:text-5xl">
                Seu novo espaço para apresentar projetos e conquistas.
              </h2>
              <p className="text-lg text-muted-foreground">
                Esta base já vem com Vite, TypeScript, Tailwind CSS e shadcn/ui prontos para receber
                suas informações. Compartilhe experiências, mostre estudos de caso e facilite o contato.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button size="lg">Explorar estrutura</Button>
              <Button variant="outline" size="lg">
                Ver componentes
              </Button>
            </div>
          </div>

          <div className="rounded-2xl border bg-card p-8 shadow-sm">
            <div className="space-y-3">
              <p className="text-sm font-semibold text-muted-foreground">Stack pronta</p>
              <ul className="space-y-2 text-sm text-foreground/80">
                <li>⚡️ Vite + React + TypeScript</li>
                <li>🎨 Tailwind CSS configurado</li>
                <li>🧩 shadcn/ui e tokens de design</li>
                <li>🛠 Alias @/ para imports limpos</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-3">
          {["UI consistente", "Conteúdo rápido", "Pronto para escalar"].map((title) => (
            <article
              key={title}
              className="rounded-xl border bg-card/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-lg font-semibold text-foreground">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Adicione suas seções, projetos e links preferidos. Quando quiser, traga mais detalhes que
                personalizamos juntos.
              </p>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}

export default App;

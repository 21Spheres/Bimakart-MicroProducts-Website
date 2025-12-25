import './index.css'

const features = [
  {
    title: 'Faster quotes',
    body: 'Build cards, layouts, and flows with Tailwind utilities and ship in minutes.',
  },
  {
    title: 'Live reload',
    body: 'Save a file and see changes instantly with Vite HMR — no waiting, just shipping.',
  },
  {
    title: 'Typed React',
    body: 'React 19 + TypeScript give you intellisense and safer components by default.',
  },
  {
    title: 'Production ready',
    body: 'PostCSS + Autoprefixer are wired up so your styles work across modern browsers.',
  },
]

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <header className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-2">
            <p className="text-sm font-semibold text-sky-300">Tailwind is ready</p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Build your next experience.
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-slate-300">
              Start from a clean Tailwind setup and ship faster with composable utility classes.
              Edit this component and watch the page update instantly.
            </p>
          </div>
          <span className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-xs font-semibold text-sky-200 ring-1 ring-inset ring-sky-500/30">
            React + Vite + Tailwind
          </span>
        </header>

        <main className="mt-12 grid gap-8 lg:grid-cols-[1.6fr,1fr]">
          <section className="space-y-6">
            <div className="flex flex-wrap gap-3">
              <button className="rounded-lg bg-sky-500 px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/30 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-sky-500/40">
                Get started
              </button>
              <button className="rounded-lg border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:border-slate-500 hover:text-white">
                View docs
              </button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {features.map((feature) => (
                <article
                  key={feature.title}
                  className="rounded-xl border border-slate-800 bg-slate-900/60 p-5 shadow-lg shadow-slate-950/40 backdrop-blur"
                >
                  <h2 className="text-lg font-semibold text-white">{feature.title}</h2>
                  <p className="mt-2 text-sm text-slate-300">{feature.body}</p>
                </article>
              ))}
            </div>
          </section>

          <aside className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-xl shadow-slate-950/50 backdrop-blur">
            <h2 className="text-lg font-semibold text-white">Status</h2>
            <p className="mt-3 text-sm text-slate-300">
              Tailwind CSS is installed and ready. Run the dev server and start composing UI instantly.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                Vite dev server: npm run dev
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                Tailwind CLI: npx tailwindcss -i ./src/index.css -o ./dist/output.css
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                Files scanned: index.html, src/**/*.{js,ts,jsx,tsx}
              </li>
            </ul>
          </aside>
        </main>
      </div>
    </div>
  )
}

export default App

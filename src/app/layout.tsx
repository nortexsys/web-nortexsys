// Root layout — passthrough.
//
// The <html>/<body> shell lives in `app/[lang]/layout.tsx` so that the `lang`
// attribute matches the active locale (es/en). Every served route is under
// `[lang]` (the middleware redirects `/` → `/es`), so there is no route that
// reaches this level with content of its own.
//
// Next.js requires a root layout file to exist; this one simply forwards
// children to the locale segment below.
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";
import type { MetaFunction, LinksFunction } from "remix";
import styles from './tailwind.css';

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Distive - The Open Comment System",
  viewport: "width=device-width,initial-scale=1",
});

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: styles },
  {rel:'icon', type:'image/svg+xml', href:'/favicon.svg'},
  { rel: 'icon', type: 'image/png', href: '/favicon.png' },
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
  {rel:'stylesheet', href:'https://fonts.googleapis.com/css2?family=Sen:wght@400;700&display=swap'},
]

export default function App() {
  return (
    <html   lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

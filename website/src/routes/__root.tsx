import { createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { useRef } from "react";
import { getLocale } from "@/i18n/paraglide/runtime";
import styles from "@/styles.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "Église Méthodiste du Togo",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: styles,
      },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Lavishly+Yours&family=Outfit:wght@100..900&display=swap",
      },
    ],
  }),
  shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  const locale = useRef(getLocale());

  return (
    <html lang={locale.current}>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

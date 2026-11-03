import { createRoot } from "react-dom/client";

// Self-hosted webfonts (replaces next/font/google + the old CDN <link>)
import "@fontsource-variable/geist";
import "@fontsource-variable/geist-mono";
import "@fontsource-variable/space-grotesk";
import "@fontsource-variable/vazirmatn";
import "@fontsource/lalezar/400.css";
import { I18nProvider } from "@/i18n/i18n-provider";
import { Toaster } from "@/components/ui/toaster";
import App from "./App";
import "./index.css";

const container = document.getElementById("root");

if (!container) {
  throw new Error("Root element #root was not found in index.html");
}

createRoot(container).render(
  <I18nProvider>
    <App />
    <Toaster />
  </I18nProvider>,
);

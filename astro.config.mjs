// @ts-check
import { defineConfig } from 'astro/config';

import node from "@astrojs/node";
import clerk from "@clerk/astro";
import { dark } from '@clerk/themes';

import tailwindcss from '@tailwindcss/vite';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  devToolbar: {
      enabled: false, // Desactiva la barra de herramientas de desarrollo
    },

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [clerk({
    appearance: {
        baseTheme: dark,
    },
    afterSignInUrl: "/dashboard",
    afterSignUpUrl: "/dashboard",
  }), preact()],
  adapter: node({ mode: "standalone" }),
  output: "server",
});
// tina/config.ts
import { defineConfig } from "tinacms";
var branch = process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || "main";
var config_default = defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || "",
  token: process.env.TINA_TOKEN || "",
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public"
    }
  },
  schema: {
    collections: [
      {
        name: "home",
        label: "Home Page",
        path: "content/home",
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          {
            type: "object",
            name: "hero",
            label: "Hero Section",
            fields: [
              { type: "string", name: "headline", label: "Headline" },
              { type: "string", name: "subheadline", label: "Subheadline", ui: { component: "textarea" } }
            ]
          },
          {
            type: "object",
            name: "technical",
            label: "Technical Section (Collagen & Gelatin)",
            fields: [
              { type: "string", name: "heading", label: "Heading" },
              { type: "string", name: "body1", label: "Paragraph 1 (The Process)", ui: { component: "textarea" } },
              { type: "string", name: "body2", label: "Paragraph 2 (The Benefits)", ui: { component: "textarea" } }
            ]
          },
          {
            type: "object",
            name: "productos",
            label: "Productos Section",
            fields: [
              { type: "string", name: "heading", label: "Section Heading" },
              {
                type: "object",
                name: "items",
                label: "Products",
                list: true,
                fields: [
                  { type: "string", name: "name", label: "Product Name" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "details", label: "Technical Details (e.g. 16h, Pasture raised)" }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "porQue",
            label: "Por qu\xE9 BRODE Section",
            fields: [
              { type: "string", name: "heading", label: "Section Heading" },
              {
                type: "object",
                name: "features",
                label: "Features",
                list: true,
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "ritual",
            label: "Ritual Section",
            fields: [
              { type: "string", name: "heading", label: "Heading" },
              { type: "string", name: "body", label: "Body", ui: { component: "textarea" } }
            ]
          },
          {
            type: "object",
            name: "contacto",
            label: "Contacto Section",
            fields: [
              { type: "string", name: "heading", label: "Heading" }
            ]
          }
        ]
      },
      {
        name: "ingredientes",
        label: "Ingredientes Page",
        path: "content/ingredientes",
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          { type: "string", name: "heading", label: "Page Heading" },
          { type: "string", name: "intro", label: "Intro Text", ui: { component: "textarea" } },
          { type: "string", name: "ingredientsTitle", label: "Section Title" },
          {
            type: "object",
            name: "ingredientsList",
            label: "Ingredients List",
            list: true,
            fields: [
              { type: "image", name: "image", label: "Image" },
              { type: "string", name: "name", label: "Ingredient Name" },
              { type: "string", name: "description", label: "Description", ui: { component: "textarea" } }
            ]
          }
        ]
      },
      {
        name: "propiedades",
        label: "Propiedades Page",
        path: "content/propiedades",
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          { type: "string", name: "heading", label: "Page Heading" },
          { type: "string", name: "intro", label: "Intro Text", ui: { component: "textarea" } },
          {
            type: "object",
            name: "properties",
            label: "Properties",
            list: true,
            ui: {
              itemProps: (item) => {
                return { label: item?.title };
              }
            },
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "slug", label: "URL Slug (e.g., colageno)" },
              { type: "string", name: "description", label: "Short Description", ui: { component: "textarea" } },
              { type: "image", name: "image", label: "Main Image" },
              { type: "rich-text", name: "content", label: "Full Content" },
              {
                type: "object",
                name: "references",
                label: "Academic References",
                list: true,
                fields: [
                  { type: "string", name: "citation", label: "Citation Text", ui: { component: "textarea" } }
                ]
              }
            ]
          }
        ]
      },
      {
        name: "shop",
        label: "Shop Page",
        path: "content/shop",
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          { type: "string", name: "heading", label: "Page Heading" },
          { type: "string", name: "body", label: "Body Text", ui: { component: "textarea" } },
          { type: "string", name: "ctaText", label: "CTA Button Text" },
          { type: "string", name: "secondaryText", label: "Secondary Text" },
          { type: "string", name: "minimumOrder", label: "Minimum Order Quantity" },
          { type: "string", name: "note", label: "Order Note", ui: { component: "textarea" } }
        ]
      }
    ]
  }
});
export {
  config_default as default
};

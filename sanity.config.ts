import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk' ;
import schemas from './sanity/schemas';

const config = defineConfig({
  projectId: "7sw2e9ug",
  dataset: "production",
  title: "Teddy personal website",
  apiVersion: "2023-06-02",
  basePath: "/admin",
  plugins: [deskTool()], 
  schema: { types: schemas },
});

export default config;
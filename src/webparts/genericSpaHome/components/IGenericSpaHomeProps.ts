import { WebPartContext } from "@microsoft/sp-webpart-base";

export interface IGenericSpaHomeProps {
  description: string; // Description of the web part
  title?: string; // Optional title for the page (if you want to customize it)
  quickLinks?: {
    // Array of quick links to display
    iconName: string;
    title: string;
    url: string;
  }[];
  context: WebPartContext;
}

import * as React from "react";
import * as ReactDom from "react-dom";
import { Version } from "@microsoft/sp-core-library";
import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";
import GenericSpaHome from "./components/GenericSpaHome";
export interface IGenericSpaHomeWebPartProps {
  description: string;
}

export default class GenericSpaHomeWebPart extends BaseClientSideWebPart<IGenericSpaHomeWebPartProps> {
  public render(): void {
    const element: React.ReactElement<IGenericSpaHomeWebPartProps> =
      React.createElement(GenericSpaHome, {
        description: this.properties.description,
        context: this.context,
      });

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse("1.0");
  }
}

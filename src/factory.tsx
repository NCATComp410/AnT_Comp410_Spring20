import * as React from "react";
import { ReactWidget } from "@jupyterlab/apputils";
import {
  ABCWidgetFactory,
  DocumentRegistry,
  DocumentWidget,
  IDocumentWidget
} from "@jupyterlab/docregistry";
import { Widget } from "@phosphor/widgets";
import { parse } from "papaparse";

import { TableViewComponent } from "./TableView";

// import "../style/index.css";
/**
 * The CSS class name added to the extension.
 */
const CLASS_NAME = "jp-Tableview";
/**
 * A viewer for CSV tables.
 */
export class TableViewWidget extends ReactWidget {
  constructor(options: TableView.IOptions) {
    super(options);
    this._context = options.context;
    this.addClass(CLASS_NAME);
    void this._context.ready.then(() => {
      this.update();
    });
  }
  render() {
    const parsedCSV = parse(this._context.model.toString(), {
      delimiter: ",",
      header: false
    });
    return <TableViewComponent parsedCSV={parsedCSV} />;
  }

  private _context: DocumentRegistry.Context;
}
class TableViewDocumentWidget extends DocumentWidget<TableViewWidget> {
  constructor(options: any) {
    let { content, ...rest } = options;
    content = new TableViewWidget(options);
    super({ content, ...rest });
  }
}

/**
 * A widget factory for CSV widgets.
 */
export class TableViewFactory extends ABCWidgetFactory<
  IDocumentWidget<TableViewWidget>
> {
  /**
   * Create a new widget given a context.
   */
  protected createNewWidget(
    context: DocumentRegistry.Context
  ): IDocumentWidget<TableViewWidget> {
    return new TableViewDocumentWidget({ context });
  }
}

export namespace TableView {
  /**
   * Instantiation options for CSV widgets.
   */
  export interface IOptions extends Widget.IOptions {
    /**
     * The document context for the CSV being rendered by the widget.
     */
    context: DocumentRegistry.Context;
  }
}

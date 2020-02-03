import {
  ILayoutRestorer,
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from "@jupyterlab/application";
import { WidgetTracker } from "@jupyterlab/apputils";
import { IDocumentWidget } from "@jupyterlab/docregistry";
import * as TableViewFactory from "./factory";

/**
 * The name of the factories that creates widgets.
 */
const FACTORY_NAME = "TableView";
/**
 * Initialization data for the jupyterlab_tableview extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: "jupyterlab_tableview",
  autoStart: true,
  requires: [],
  optional: [ILayoutRestorer],
  activate: (app: JupyterFrontEnd, restorer: ILayoutRestorer | null) => {
    const factory = new TableViewFactory.TableViewFactory({
      name: FACTORY_NAME,
      fileTypes: ["csv"],
      defaultFor: ["csv"],
      readOnly: true
    });
    const tracker = new WidgetTracker<
      IDocumentWidget<TableViewFactory.TableViewWidget>
    >({
      namespace: "tableview"
    });

    // if (restorer) {
    //   // Handle state restoration.
    //   void restorer.restore(tracker, {
    //     command: "docmanager:open",
    //     args: widget => ({ path: widget.context.path, factory: FACTORY_NAME }),
    //     name: widget => widget.context.path
    //   });
    // }
    app.docRegistry.addWidgetFactory(factory);
    let fileType = app.docRegistry.getFileType("csv");
    console.log("Factory: ", factory);
    console.log("Tracker: ", tracker);
    console.log("Restorer: ", restorer);
    console.log("filetype: ", fileType);
    factory.widgetCreated.connect((sender, widget) => {
      // Track the widget.
      void tracker.add(widget);
      // Notify the widget tracker if restore data needs to update.
      widget.context.pathChanged.connect(() => {
        void tracker.save(widget);
      });

      if (fileType) {
        widget.title.iconClass = fileType.iconClass!;
        widget.title.iconLabel = fileType.iconLabel!;
      }
    });
  }
};

export default extension;

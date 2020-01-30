import {IRenderMime} from '@jupyterlab/rendermime-interfaces';
import {Widget} from '@phosphor/widgets';

/**
 * The MIME type for CSV.
 */
const MIME_TYPE = 'text/csv';

/**
 * The CSS class name added to the extension.
 */
const CLASS_NAME = 'mimerenderer-csv';

/**
 * A class for rendering a CSV file.
 */
export class CSVWidget extends Widget implements IRenderMime.IRenderer {
  /**
   * Construct a new output widget.
   */
  constructor(options: IRenderMime.IRendererOptions) {
    super();
    this._mimeType = options.mimeType;
    this.addClass(CLASS_NAME);
    this._table = document.createElement('div');
    this.node.appendChild(this._table);
  }

  /**
   * Render csv into this widget's node.
   */
  renderModel(model: IRenderMime.IMimeModel): Promise<void> {

    let data = model.data[this._mimeType] as string;
    this._table.textContent = data;

    return Promise.resolve();
  }
  private _table: HTMLDivElement;
  private _mimeType: string;
}

/**
 * A mime renderer factory for PDF data.
 */
export const rendererFactory: IRenderMime.IRendererFactory = {
  safe: true,
  mimeTypes: [MIME_TYPE],
  defaultRank: 0,
  createRenderer: options => new CSVWidget(options)
};

const extension: IRenderMime.IExtension = {
  id: 'jupyterlab_tableview:plugin',
  rendererFactory,
  dataType: 'string',
  fileTypes: [
    {
      name: 'csv',
      displayName: 'csv',
      fileFormat: 'text',
      mimeTypes: [MIME_TYPE],
      extensions: ['.csv', '.tsv']
    }
  ],
  documentWidgetFactoryOptions: {
    name: 'TableView',
    modelName: 'text',
    primaryFileType: 'csv',
    fileTypes: ['csv'],
    defaultFor: ['csv']
  }
};

export default extension;

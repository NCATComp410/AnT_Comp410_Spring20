import {
  JupyterFrontEnd, JupyterFrontEndPlugin
} from '@jupyterlab/application';


/**
 * Initialization data for the csv_tools extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'csv_tools',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension csv_tools is activated!');
  }
};

export default extension;

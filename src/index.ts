import {
  JupyterFrontEnd, JupyterFrontEndPlugin
} from '@jupyterlab/application';


/**
 * Initialization data for the jupyterlab_tableview extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab_tableview',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension jupyterlab_tableview is activated!');
  }
};

export default extension;

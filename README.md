# jupyterlab_tableview

![Github Actions Status](https://github.com/dmeyer3691/jupyterlab_tableview/workflows/Build/badge.svg)

This project aims to add basic GUI manipulation of csv files in a JupyterLab environment

## Requirements

* JupyterLab >= 1.0

## Install

```bash
jupyter labextension install jupyterlab_tableview
```

## Contributing

Please fork this repository into your own github user space and create a new branch with your user ID and the feature you're working on. When ready to contribute back to this main repository, create a pull request for the development branch. Current backlog of work can be found [here](https://github.com/dmeyer3691/jupyterlab_tableview/projects) 

### Environment Setup

Please reference the **Set up a development environment** section in this [tutorial](https://jupyterlab.readthedocs.io/en/stable/developer/extension_tutorial.html#set-up-a-development-environment)


### Install

The `jlpm` command is JupyterLab's pinned version of
[yarn](https://yarnpkg.com/) that is installed with JupyterLab. You may use
`yarn` or `npm` in lieu of `jlpm` below.

```bash
# Clone the repo to your local environment
# Move to jupyterlab_tableview directory
# Install dependencies
jlpm
# Build Typescript source
jlpm build
# Link your development version of the extension with JupyterLab
jupyter labextension link .
# Rebuild Typescript source after making changes
jlpm build
# Rebuild JupyterLab after making any changes
jupyter lab build
```
### For Development
If you are using `Anaconda`/`Miniconda`, we recommend you install and activate a separate Anaconda environment for development purposes:
```bash
# Create environment
conda create -n jupyterlab-ext --override-channels --strict-channel-priority -c conda-forge -c anaconda jupyterlab cookiecutter nodejs git

# Activate environment
conda activate jupyterlab-ext
```

Install all Javascript dependencies for the extension and install it in the Jupyterlab environment without building it initially
```bash
jlpm install
jupyter labextension install . --no-build
```

You can now build and watch the extension's source directory. 
```bash
# Watch the source directory in another terminal tab
jlpm watch
```
Then, in a separate terminal, run JupyterLab in watch mode to watch for changes in the extension's source and automatically rebuild Jupyterlab.
(Note: Make sure to activate the conda environment in this terminal window before running the following command)
```bash
# Run jupyterlab in watch mode in one terminal tab
jupyter lab --watch
```

### Uninstall

```bash
jupyter labextension uninstall jupyterlab_tableview
```


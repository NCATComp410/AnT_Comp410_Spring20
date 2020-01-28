# csv_tools

![Github Actions Status](https://github.com/dmeyer3691/csv_tools_jupyterlab_ext/workflows/Build/badge.svg)

This project aims to add basic GUI manipulation of csv files in a JupyterLab environment

## Requirements

* JupyterLab >= 1.0

## Install

```bash
jupyter labextension install csv_tools
```

## Contributing

Please fork this repository into your own github user space and create a new branch with your user ID and the feature you're working on. When ready to contribute back to this main repository, create a pull request for the development branch.

### Environment Setup

Please reference the *Set up a development environment* section in this [tutorial](https://jupyterlab.readthedocs.io/en/stable/developer/extension_tutorial.html#set-up-a-development-environment)


### Install

The `jlpm` command is JupyterLab's pinned version of
[yarn](https://yarnpkg.com/) that is installed with JupyterLab. You may use
`yarn` or `npm` in lieu of `jlpm` below.

```bash
# Clone the repo to your local environment
# Move to csv_tools_jupyter_ext directory
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

You can watch the source directory and run JupyterLab in watch mode to watch for changes in the extension's source and automatically rebuild the extension and application.

```bash
# Watch the source directory in another terminal tab
jlpm watch
# Run jupyterlab in watch mode in one terminal tab
jupyter lab --watch
```

### Uninstall

```bash
jupyter labextension uninstall csv_tools
```


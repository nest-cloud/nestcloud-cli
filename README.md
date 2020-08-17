
[travis-image]: https://api.travis-ci.org/nest-cloud/nestcloud.svg?branch=master
[travis-url]: https://travis-ci.org/nest-cloud/nestcloud
[linux-image]: https://img.shields.io/travis/nest-cloud/nestcloud/master.svg?label=linux
[linux-url]: https://travis-ci.org/nest-cloud/nestcloud

# NestCloud

<p align="center">
    NestCloud is a <a href="http://nodejs.org" target="blank">Node.js</a> micro-service solution, writing by <a href="https://www.typescriptlang.org" target="blank">Typescript</a> language and <a href="http://nestjs.com/" target="blank">Nest.js</a> framework.</p>
<p align="center">

<p align="center">
    <a href="https://www.npmjs.com/~nestcloud" target="_blank"><img src="https://img.shields.io/npm/v/@nestcloud/cli.svg" alt="NPM Version"/></a>
    <a href="https://www.npmjs.com/~nestcloud" target="_blank"><img src="https://img.shields.io/npm/l/@nestcloud/cli.svg" alt="Package License"/></a>
    <a href="https://www.npmjs.com/~nestcloud" target="_blank"><img src="https://img.shields.io/npm/dm/@nestcloud/cli.svg" alt="NPM Downloads"/></a>
    <a href="https://travis-ci.org/nest-cloud/nestcloud" target="_blank"><img src="https://travis-ci.org/nest-cloud/nestcloud.svg?branch=master" alt="Travis"/></a>
    <a href="https://travis-ci.org/nest-cloud/nestcloud" target="_blank"><img src="https://img.shields.io/travis/nest-cloud/nestcloud/master.svg?label=linux" alt="Linux"/></a>
    <a href="https://coveralls.io/github/nest-cloud/nestcloud?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nest-cloud/nestcloud/badge.svg?branch=master" alt="Coverage"/></a>
    <a href="https://opencollective.com/nest-cloud#backer"><img src="https://opencollective.com/nest-cloud/backers/badge.svg" alt="Backers on Open Collective" /></a>
    <a href="https://opencollective.com/nest-cloud#sponsor"><img src="https://opencollective.com/nest-cloud/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

The NestCloud CLI is a command-line interface tool that helps you to initialize NestCloud applications.

The CLI works with [schematics](https://github.com/angular/angular-cli/tree/master/packages/angular_devkit/schematics), and provides built in support from the schematics collection at [@nestcloud/schematics](https://github.com/nest-cloud/schematics).

## Installation

```
$ npm install -g @nestcloud/cli
```

## Usage

```shell script
$ nestcloud --help
Usage: nestcloud <command> [options]

Options:
  -v, --version           Output the current version.
  -h, --help              Output usage information.

Commands:
  new|n [options] [name]  Generate NestCloud application.
  info|i                  Display NestCloud project details.
```

```shell script
$ nestcloud new --help
Usage: nestcloud new|n [options] [name]

Generate NestCloud application.

Options:
  --directory [directory]                  Specify the destination directory
  -d, --dry-run                            Report actions that would be performed without writing out results.
  -g, --skip-git                           Skip git repository initialization.
  -s, --skip-install                       Skip package installation.
  -p, --package-manager [package-manager]  Specify package manager.
  -c, --collection [collectionName]        Schematics collection to use.
  -t, --template [template]                Schematics template to use.
  -h, --help                               Output usage information.
```

## Stay in touch

- Author - [Miaowing](https://zf.ink)
- Website - [https://nestcloud.org](https://nestcloud.org)

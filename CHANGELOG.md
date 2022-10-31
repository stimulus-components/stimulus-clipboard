# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [3.2.2]

### Chore

- Allow `sourceTarget` to be any HTML element to copy its `innerHTML`.

## [3.2.1]

### Chore

- Use innerHTML for originalContent, so icons can be used (https://github.com/stimulus-components/stimulus-clipboard/pull/8)
- Bump dependencies.

## [3.2.0]

### Chore

- Bump dependencies.
- Using Clipboard API over execCommand.

## [3.1.0] - 2022-04-15

### Chore

- Fixing stimulus as external library reducing bundle size from `1.59kb` to `0.25kb`.
- Updating Github Workflows.
- Upgrading Node to latest 16.
- Bump dependencies.

## [3.0.0] - 2021-09-28
### Chore

- **Breaking** Upgrading Stimulus to `3.x` and change namespace from `stimulus` to `@hotwired/stimulus`.
- Using default value option for `successDuration`.

## [2.0.0] - 2021-06-02

### Chore

- Moving from [Snowpack](https://www.snowpack.dev/) to [Vite](https://vitejs.dev/)
- Using stimulus as external library reducing bundle size from `40.64kb` to `0.59kb`.
- Moving to [TypeScript](https://www.typescriptlang.org/).
- Upgrading Node to 14.17.0

## [1.0.0] - 2020-12-14

### Added

- Adding controller

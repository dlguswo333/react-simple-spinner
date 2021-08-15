# @dlguswo333/react-simple-spinner
## Introduction
**@dlguswo333/react-simple-spinner** is a simple and lightweight spinner made as a react functional component.<br>
you can set the **size**, **colors to iterate**, and **a flag whether to fill or not** of a spinner.
<br> 

## Examples
```JSX
<Spinner fill={false} colors={['#aaa', '#333']} />
```
![spinner-two-colors](./public/spinner-two-colors.gif)
<br>

```JSX
<Spinner fill={false} colors={['#25f', '#ff0', '#f22']} />
```
![spinner-fill-false](./public/spinner-fill-false.gif)
<br>

```JSX
<Spinner fill={true} colors={['#25f', '#ff0', '#f22']} />
```
![spinner-fill-false](./public/spinner-fill-true.gif)
<br>

## Props
| Prop | Type | Description | Optional | Default |
| :---: | :---: | :--- | :---: | :---: |
| **size** | string | Size of spinner. | YES | `40px` |
| **width** | string | Width of spinner when `fill` is `false`. | YES | `4` |
| **fill** | boolean | Fill in spinner. | NO | - |
| **colors** | string[] | List of colors to iterate. | NO | - |
<br>

## Version History
### Attention
Before version 0.6.0, there were miswritten dependencies and missed build outputs which caused numerous problems.<br>
Please use the latest version to avoid unwanted problems.

### 0.6.0
- Improve stabilities.
- Improve dependency specifications.
- Shrink package size by deleting unnecessary files.
- Add new prop: `width`.
### 0.5.3
- Solve build outputs not exist.

### 0.5.2
- Fix hook error due to miss-written dependencies.

### 0.5.1
- Shrink package size by deleting test codes from build outputs.

### 0.5.0
- Refactor codes.
- Edit package dependencies.
- Add test code to improve stability.

### 0.4.0
- Fix a issue where color sticks out because shape does not overlap the other completely.

### 0.3.0
- Fix a color indexing bug in React strict mode.

### 0.2.0 
- Initial version.

### 0.1.0
- Garbage version and Deprecated.

## Links
- [npm link](https://www.npmjs.com/package/@dlguswo333/react-simple-spinner)
- [github link](https://github.com/dlguswo333/react-simple-spinner)
<br>

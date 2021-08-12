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
| **fill** | boolean | Fill in spinner. | NO | - |
| **colors** | string[] | List of colors to iterate. | NO | - |
<br>

## Version History
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

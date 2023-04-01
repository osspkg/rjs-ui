declare module '*.module.css' {
  const css: { [className: string]: string };
  export default css;
}

declare module '*.module.scss' {
  const scss: { [className: string]: string };
  export default scss;
}

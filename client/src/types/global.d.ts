/* eslint-disable @typescript-eslint/no-explicit-any */
export {};

declare global {
  type JSONValue = string | number | boolean | { [x: string]: JSONValue } | Array<JSONValue>;
}

declare module '*.jpg' {
  const value: any;
  export default value;
}

declare module '*.png' {
  const value: any;
  export default value;
}

declare module '*.svg' {
  const value: any;
  export default value;
}

declare module '*.scss' {
  const value: any;
  export default value;
}

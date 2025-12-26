// Using 'declare var' instead of 'const' to allow merging with other global declarations
declare var process: {
  env: {
    API_KEY: string;
    [key: string]: string | undefined;
  }
};

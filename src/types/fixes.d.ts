// Fixes TS2694
declare global {
  namespace React {
    /* Fixes React 18 compatibility issues with formik */
    type StatelessComponent<P> = React.FunctionComponent<P>;
  }
}

// Fixes TS2669
export {};

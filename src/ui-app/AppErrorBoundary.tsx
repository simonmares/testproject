import React from "react";

type AppErrorBoundaryProps = { children: React.ReactNode };
type AppErrorBoundaryState = { hasError: boolean };

/**
 * App-scoped (uses app components directly) error boundary (https://reactjs.org/docs/error-boundaries.html)
 */
export class AppErrorBoundary extends React.Component<
  AppErrorBoundaryProps,
  AppErrorBoundaryState
> {
  state = { hasError: false };

  static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  onRetry = () => {
    window.location.reload();
  };

  componentDidCatch(error: Error, info: Object) {
    const extras = { ...info };
    console.error(error, { extras });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>Something went wrong.</h1>
          <button onClick={this.onRetry}>Retry</button>
        </div>
      );
    }
    return this.props.children;
  }
}

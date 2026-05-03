import React from 'react';

export class SplineErrorBoundary extends React.Component<React.PropsWithChildren> {
  state = { hasError: false };

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Optionally log error
  }

  render() {
    if ((this.state as Record<string, boolean>).hasError) {
      return (
        <div style={{
          position: 'fixed', inset: 0, zIndex: -10, background: 'linear-gradient(135deg, #232526 0%, #414345 100%)'
        }} />
      );
    }
    return this.props.children;
  }
} 
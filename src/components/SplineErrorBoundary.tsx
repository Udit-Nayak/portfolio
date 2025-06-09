import React from 'react';

export class SplineErrorBoundary extends React.Component<React.PropsWithChildren> {
  state = { hasError: false };

  static getDerivedStateFromError(error: any) {
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    // Optionally log error
  }

  render() {
    if ((this.state as any).hasError) {
      return (
        <div style={{
          position: 'fixed', inset: 0, zIndex: -10, background: 'linear-gradient(135deg, #232526 0%, #414345 100%)'
        }} />
      );
    }
    return this.props.children;
  }
} 
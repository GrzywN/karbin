export interface LoadingSpinnerProps {
  children: React.ReactNode;
}

export function LoadingSpinner(props: LoadingSpinnerProps) {
  const { children } = props;

  return (
    <>
      <span className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
        <svg
          className="animate-spin h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      </span>
      <span className="sr-only" role="status">
        Loading
      </span>
      <span className="invisible" aria-hidden>
        {children}
      </span>
    </>
  );
}

export default LoadingSpinner;

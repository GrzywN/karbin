import { useEffect, useRef, useCallback } from 'react';
import { cva, VariantProps } from 'class-variance-authority';

import ButtonClose from '../../molecules/button-close/button-close';

const modalStyles = cva(
  `
  fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-h-screen overflow-auto
    min-h-[4.5rem] grid max-w-md w-full gap-8 rounded-2xl bg-white p-4 shadow-xl
  md:p-8
  lg:flex lg:max-w-5xl lg:flex-row lg:gap-16 lg:p-12`,
  {
    variants: {
      color: {
        primary: 'bg-primary-300',
        secondary: 'bg-secondary-300',
        light: 'bg-white',
        dark: 'bg-neutral-600',
        success: 'bg-success-300',
        danger: 'bg-danger-300',
        warning: 'bg-warning-300',
      },
      reverseOnDesktop: {
        true: 'lg:flex-row-reverse',
        false: 'lg:flex-row',
      },
    },
    defaultVariants: {
      color: 'light',
      reverseOnDesktop: false,
    },
  }
);

export interface ModalProps extends VariantProps<typeof modalStyles> {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  modalId: string;
  titleId: string;
  descriptionId: string;
}

export function Modal(props: ModalProps) {
  const {
    open,
    onClose,
    children,
    modalId,
    titleId,
    descriptionId,
    ...passThroughProps
  } = props;

  const refOuter = useRef<HTMLDivElement | null>(null);
  const refFirstFocusable = useRef<HTMLElement | null>(null);
  const refLastFocusable = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const focusableElements = Array.from<HTMLElement>(
      refOuter.current?.querySelectorAll('[tabindex]') ?? []
    );

    refFirstFocusable.current = focusableElements[0];
    refLastFocusable.current = focusableElements[focusableElements.length - 1];

    refFirstFocusable.current?.focus();
  }, []);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }

      if (e.key !== 'Tab') return;

      if (document.activeElement === refLastFocusable.current && !e.shiftKey) {
        e.preventDefault();
        refFirstFocusable.current?.focus();
      } else if (
        document.activeElement === refFirstFocusable.current &&
        e.shiftKey
      ) {
        e.preventDefault();
        refLastFocusable.current?.focus();
      }
    },
    [onClose]
  );

  const handleBackdropClick = useCallback(onClose, [onClose]);

  if (!open) return null;

  return (
    <>
      <div
        className={modalStyles(passThroughProps)}
        onKeyDown={handleKeyDown}
        ref={refOuter}
        role="dialog"
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        aria-modal="true"
        id={modalId}
      >
        {children}

        <i className="absolute top-4 right-4">
          <ButtonClose ariaLabel="Close modal" onClick={onClose} />
        </i>
      </div>
      <div
        className="-z-10 fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={handleBackdropClick}
        aria-hidden
      />
    </>
  );
}

export interface ModalBodyProps {
  children: React.ReactNode;
}

function ModalBody(props: ModalBodyProps) {
  const { children } = props;

  return (
    <div
      className="
      w-full flex flex-col grow gap-4 text-start
      md:gap-4
      lg:gap-8"
    >
      {children}
    </div>
  );
}

Modal.ModalBody = ModalBody;

export default Modal;

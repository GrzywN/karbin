import { useEffect, createRef } from 'react';
import { cva, VariantProps } from 'class-variance-authority';

import ButtonClose from '../../molecules/button-close/button-close';

const modalStyles = cva(
  `
  z-50 fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-h-screen overflow-auto
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

export interface ModalProps
  extends VariantProps<typeof modalStyles>,
    ModalWithAriaProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  modalId: string;
  descriptionId: string;
}

type ModalWithAriaProps = ModalWithAriaLabelProps &
  ModalWithAriaLabelledByProps;

interface ModalWithAriaLabelProps {
  ariaLabel: string;
  titleId: never;
}

interface ModalWithAriaLabelledByProps {
  ariaLabel: never;
  titleId: string;
}

export function Modal(props: ModalProps) {
  const {
    open,
    onClose,
    children,
    ariaLabel,
    modalId,
    titleId,
    descriptionId,
    ...passThroughProps
  } = props;

  const modalRef = createRef<HTMLDivElement>();

  const handleMount = () => {
    if (!open || modalRef.current == null) return;

    const firstFocusableModalElement = modalRef.current.querySelector(
      'a[href], button, input, textarea, select, details,[tabindex]:not([tabindex="-1"])'
    ) as HTMLElement;

    firstFocusableModalElement.focus();
  };

  const handleTabKey = (e: KeyboardEvent) => {
    if (!open || modalRef.current == null) return;

    const focusableModalElements = Array.from<HTMLElement>(
      modalRef.current.querySelectorAll(
        'a, button, input, textarea, select, details, iframe, embed, object, summary dialog, audio[controls], video[controls], [contenteditable], [tabindex]'
      )
    ).filter((el) => {
      return !el.hasAttribute('disabled') && !el.hasAttribute('hidden');
    });

    const firstElement = focusableModalElements[0] as HTMLElement;
    const lastElement = focusableModalElements[
      focusableModalElements.length - 1
    ] as HTMLElement;

    if (e.shiftKey && document.activeElement === firstElement) {
      lastElement.focus();
      e.preventDefault();
    }

    if (!e.shiftKey && document.activeElement === lastElement) {
      firstElement.focus();
      e.preventDefault();
    }
  };

  useEffect(() => {
    const lastFocusBeforeRendering = document.activeElement as HTMLElement;
    handleMount();

    function keyListener(e: KeyboardEvent) {
      const listener = keyListeners.get(e.key);
      return listener && listener(e);
    }
    document.addEventListener('keydown', keyListener);

    return () => {
      document.removeEventListener('keydown', keyListener);
      lastFocusBeforeRendering.focus();
    };
  });

  const keyListeners = new Map([
    ['Escape', onClose],
    ['Tab', handleTabKey],
  ]);

  if (!open) return null;

  return (
    <>
      <div
        className={modalStyles(passThroughProps)}
        ref={modalRef}
        role="dialog"
        id={modalId}
        aria-modal="true"
        aria-label={ariaLabel}
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
      >
        {children}

        <i className="absolute top-4 right-4">
          <ButtonClose ariaLabel="Close modal" onClick={onClose} />
        </i>
      </div>
      <div
        className="z-40 fixed inset-0 bg-black/75 backdrop-blur-sm"
        onClick={onClose}
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
      lg:gap-6"
    >
      {children}
    </div>
  );
}

Modal.ModalBody = ModalBody;

export default Modal;

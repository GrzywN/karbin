type OverrideProps<E extends React.ElementType> = {
  as?: E;
};

type PropsWithoutOverrideProps<BaseProps, E extends React.ElementType> = Omit<
  BaseProps,
  keyof OverrideProps<E>
>;

type ElementPropsWithoutBaseProps<
  BaseProps,
  E extends React.ElementType
> = Omit<React.ComponentPropsWithRef<E>, keyof BaseProps>;

export type OverridableComponentProps<
  BaseProps,
  E extends React.ElementType
> = PropsWithoutOverrideProps<BaseProps, E> &
  ElementPropsWithoutBaseProps<BaseProps, E> &
  OverrideProps<E>;

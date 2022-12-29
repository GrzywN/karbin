export const filterVariants = <T>(variantNames: string[], allProps: T) => {
  const variantProps = {} as T;
  const elementProps = {} as T;

  for (const propName in allProps) {
    variantNames.includes(propName)
      ? (variantProps[propName] = allProps[propName])
      : (elementProps[propName] = allProps[propName]);
  }

  return { variantProps, elementProps };
};

export default filterVariants;

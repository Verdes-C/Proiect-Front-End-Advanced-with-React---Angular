function Button({
  classes,
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  ...rest
}) {
  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
}

export default Button;

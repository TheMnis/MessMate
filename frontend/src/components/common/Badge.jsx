function Badge({
  children,
  variant = "default",
  className = "",
  ...props
}) {
  const variants = {
    default: "[background:var(--color-surface-hover)] [color:var(--color-text-secondary)] [border-color:var(--color-border)]",
    primary: "[background:var(--color-primary-subtle)] [color:var(--color-primary)] [border-color:color-mix(in_srgb,var(--color-primary)_22%,var(--color-border))]",
    success: "[background:var(--color-success-subtle)] [color:var(--color-success)] [border-color:color-mix(in_srgb,var(--color-success)_22%,var(--color-border))]",
    warning: "[background:var(--color-warning-subtle)] [color:var(--color-warning)] [border-color:color-mix(in_srgb,var(--color-warning)_22%,var(--color-border))]",
    danger: "[background:var(--color-danger-subtle)] [color:var(--color-danger)] [border-color:color-mix(in_srgb,var(--color-danger)_22%,var(--color-border))]",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 radius-full border px-2.5 py-1 text-xs font-bold tracking-tight ${variants[variant] || variants.default} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}

export default Badge;


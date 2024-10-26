interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: string;
  variant?:
    | "description"
    | "paragraph"
    | "intro"
    | "small"
    | "heading"
    | "subheading"
    | "headline"
    | "highlight";
}

export const Text = ({
  children,
  className,
  variant = "paragraph",
  ...props
}: TextProps) => {
  switch (variant) {
    case "headline":
      return (
        <h1
          {...props}
          className={`text-[2.5rem] sm:text-7xl leading-small font-extrabold ${className}`}
        >
          {children}
        </h1>
      );
    case "heading":
      return (
        <h2
          {...props}
          className={`text-[2rem] sm:text-heading leading-small font-extrabold ${className}`}
        >
          {children}
        </h2>
      );
    case "highlight":
      return (
        <h3
          {...props}
          className={`text-xl sm:text-2xl leading-small font-bold ${className}`}
        >
          {children}
        </h3>
      );
    case "subheading":
      return (
        <h4
          {...props}
          className={`text-small sm:text-xl leading-small text-secondary font-medium ${className}`}
        >
          {children}
        </h4>
      );
    case "description":
      return (
        <p
          {...props}
          className={`text-small sm:text-xl leading-large ${className}`}
        >
          {children}
        </p>
      );
    case "intro":
      return (
        <p
          {...props}
          className={`text-paragraph sm:text-2xl leading-medium ${className}`}
        >
          {children}
        </p>
      );
    case "paragraph":
      return (
        <p
          {...props}
          className={`text-small sm:text-paragraph leading-medium ${className}`}
        >
          {children}
        </p>
      );
    case "small":
      return (
        <p {...props} className={`leading-normal ${className}`}>
          {children}
        </p>
      );
    default:
      return <p {...props}>{children}</p>;
  }
};

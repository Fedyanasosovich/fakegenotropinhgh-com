import clsx from "clsx";

const Button = ({ id, title, containerClass, href, target, rel }) => {
  const className = clsx(
    "group relative z-10 inline-flex w-fit cursor-pointer items-center justify-center overflow-hidden rounded-full border-none bg-darkPurple px-12 py-2.5 text-base text-white",
    containerClass
  );
  const label = (
    <span className="relative inline-flex overflow-hidden">
      <span className="translate-y-0 skew-y-0 transition duration-500 group-hover:translate-y-[-240%] group-hover:skew-y-12">
        {title}
      </span>
      <span className="absolute translate-y-[234%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
        {title}
      </span>
    </span>
  );

  if (href) {
    return (
      <a id={id} href={href} target={target} rel={rel} className={className}>
        {label}
      </a>
    );
  }

  return (
    <button id={id} type="button" className={className}>
      {label}
    </button>
  );
};

export default Button;

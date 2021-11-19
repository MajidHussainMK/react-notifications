import { CSSProperties } from "react";

const Info: React.FC<JSX.IntrinsicElements["svg"]> = (props) => {
  return (
    <svg
      preserveAspectRatio="xMidYMid"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1"
      width="20.002"
      height="20"
      viewBox="0 0 20.002 20"
      {...props}
    >
      <path
        data-name="Subtraction 6"
        d="M10.002 20a10 10 0 1 1 7.07-2.928A10.013 10.013 0 0 1 10.002 20zm0-10.494a.5.5 0 0 0-.5.5v4a.5.5 0 1 0 1 0v-4a.5.5 0 0 0-.5-.506zm.051-4a.751.751 0 1 0 .75.754.754.754 0 0 0-.748-.76z"
      />
    </svg>
  );
};

const Error: React.FC<JSX.IntrinsicElements["svg"]> = (props) => {
  return (
    <svg
      preserveAspectRatio="xMidYMid"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="100"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      {...props}
    >
      <path
        data-name="Rectangle 69885"
        style={{ opacity: 0.005 }}
        d="M0 0h20v20H0z"
      />
      <path
        data-name="Ellipse 15836"
        d="M10 0A10 10 0 1 1 0 10 10.011 10.011 0 0 1 10 0zm0 19.048A9.048 9.048 0 1 0 .952 10 9.058 9.058 0 0 0 10 19.048z"
      />
      <path
        data-name="Line 4809"
        d="M16.733 17.21a.475.475 0 0 1-.337-.139L2.929 3.604a.476.476 0 0 1 0-.673.476.476 0 0 1 .673 0L17.07 16.397a.476.476 0 0 1-.337.813z"
      />
    </svg>
  );
};

const Success: React.FC<JSX.IntrinsicElements["svg"]> = (props) => (
  <svg
    preserveAspectRatio="xMidYMid"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="1"
    width="20.002"
    height="20.002"
    viewBox="0 0 20.002 20.002"
    {...props}
  >
    <path
      id="Subtraction_252"
      data-name="Subtraction 252"
      d="M20799 16044a10 10 0 1 1 7.072-2.928 9.939 9.939 0 0 1-7.072 2.928zm-5.191-10.135a.485.485 0 0 0-.35.145.5.5 0 0 0-.006.71l3.348 3.368a.5.5 0 0 0 .355.146.5.5 0 0 0 .355-.146l7.16-7.27a.488.488 0 0 0 .145-.354.493.493 0 0 0-.145-.352.506.506 0 0 0-.355-.145.493.493 0 0 0-.355.15l-6.811 6.9-2.986-3.008a.492.492 0 0 0-.355-.145z"
      transform="translate(-20788.998 -16023.998)"
    />
  </svg>
);

const Warning: React.FC<JSX.IntrinsicElements["svg"]> = (props) => (
  <svg
    preserveAspectRatio="xMidYMid"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="1"
    width="20.016"
    height="20"
    viewBox="0 0 20.016 20"
    {...props}
  >
    <path
      data-name="Subtraction 254"
      d="M18.123 19.05H1.9a1.906 1.906 0 0 1-1.645-1.067 2.281 2.281 0 0 1 0-2.09L8.366 1.008A1.877 1.877 0 0 1 10.007 0a1.9 1.9 0 0 1 1.639 1.008l8.115 14.885a2.281 2.281 0 0 1 0 2.09 1.9 1.9 0 0 1-1.638 1.067zm-8.012-4.979a.757.757 0 1 0 .752.76.753.753 0 0 0-.752-.76zm-.047-7.545a.5.5 0 0 0-.5.506v4.044a.5.5 0 1 0 1 0V7.032a.5.5 0 0 0-.5-.506z"
    />
  </svg>
);

const Cross: React.FC<JSX.IntrinsicElements["svg"]> = (props) => (
  <svg width="10px" height="10px" viewBox="0 0 1 1">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="0.15"
      fill="none"
      stroke="currentColor"
      {...props}
    >
      <line x1="0" y1="0" x2="1" y2="1" />
      <line x1="1" y1="0" x2="0" y2="1" />
    </g>
  </svg>
);

export const Icon: React.FC<{
  name: "warning" | "success" | "info" | "cross" | "error";
  isButton?: boolean;
  style?: CSSProperties | undefined;
  onClick?: () => void;
}> = ({ name, style, isButton, onClick }) => {
  const computedStyle = {
    ...style,
    cursor: isButton ? "pointer" : "",
  };
  switch (name) {
    case "warning":
      return <Warning style={computedStyle} onClick={onClick} />;
    case "error":
      return <Error style={computedStyle} onClick={onClick} />;
    case "info":
      return <Info style={computedStyle} onClick={onClick} />;
    case "success":
      return <Success style={computedStyle} onClick={onClick} />;
    case "cross":
      return <Cross style={computedStyle} onClick={onClick} />;
    default:
      return <Cross style={computedStyle} onClick={onClick} />;
  }
};

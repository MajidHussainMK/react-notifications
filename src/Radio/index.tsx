import React, { CSSProperties } from "react";

export const Radio: React.FC<{
  id?: string;
  name: string;
  label: string;
  value: string;
  defaultChecked?: boolean;
  type?: "checkbox" | "radio";
  onClick?: (value: string) => void;
  css?: CSSProperties;
}> = ({
  css,
  name,
  label,
  value,
  id = value,
  type = "radio",
  defaultChecked,
  onClick,
}) => {
  return (
    <div style={{ marginRight: 8, ...css }}>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        defaultChecked={defaultChecked}
        onChange={({ target }) => onClick?.(target.value)}
        style={{ marginRight: 8 }}
      />
      <label htmlFor={id} style={{ cursor: "pointer" }}>
        {label}
      </label>
    </div>
  );
};

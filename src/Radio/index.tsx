import React, { CSSProperties } from "react";

export const Radio: React.FC<{
  id?: string;
  name: string;
  label: string;
  value: string;
  defaultChecked?: boolean;
  onClick?: (value: string) => void;
  css?: CSSProperties;
}> = ({ label, name, value, id = value, css, defaultChecked, onClick }) => {
  return (
    <div style={{ marginRight: 8, ...css }}>
      <input
        id={id}
        name={name}
        type="radio"
        value={value}
        defaultChecked={defaultChecked}
        onChange={({ target }) => onClick?.(target.value)}
        style={{ marginRight: 8 }}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

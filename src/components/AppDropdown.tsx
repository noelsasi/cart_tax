import React from "react";
import { IDropdpwnProps } from "../types";

const AppDropdown = ({
  label,
  master,
  handleSelect,
  value,
  disabled = false,
}: IDropdpwnProps) => {
  const isRequired: boolean = label.includes("*") || false;
  return (
    <div className="grid">
      <select
        id="countries"
        className={`${
          disabled ? "bg-gray-200 cursor-not-allowed" : ""
        } bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 `}
        onChange={handleSelect}
        value={value || "default"}
        required={isRequired}
        disabled={disabled}
      >
        <option disabled value="default">
          select an option
        </option>
        {master.map((option, index) => (
          <option value={option.name} id={option.name} key={index}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default AppDropdown;

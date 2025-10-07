
import React, { useState, useRef, useEffect } from "react";

export default function Dropdown({ options, placeholder }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const dropdownRef = useRef(null);

  // 바깥 클릭 시 닫기
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <div className="dropdown" ref={dropdownRef} style={{ position: "relative", width: "200px" }}>
      <div
        className="dropdown-header"
        onClick={toggleDropdown}
        style={{
          padding: "10px",
          border: "1px solid #ccc",
          borderRadius: "4px",
          cursor: "pointer",
          background: "#fff"
        }}
      >
        {selected ? selected.label : placeholder}
      </div>

      {isOpen && (
        <ul
          className="dropdown-list"
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            width: "100%",
            margin: 0,
            padding: 0,
            listStyle: "none",
            border: "1px solid #ccc",
            borderRadius: "4px",
            background: "#fff",
            zIndex: 10
          }}
        >
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => handleSelect(option)}
              style={{
                padding: "10px",
                cursor: "pointer",
                borderBottom: "1px solid #eee"
              }}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
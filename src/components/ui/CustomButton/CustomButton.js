const CustomButton = ({ children, color, boxShadow, borderRadius }) => {
  return (
    <button
      style={{
        background: "transparent",
        padding: "5px 30px",
        border: "none",
        outline: "none",
        cursor: "pointer",
        color,
        boxShadow,
        borderRadius,
      }}
    >
      {children}
    </button>
  );
};

export default CustomButton;

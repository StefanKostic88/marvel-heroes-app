const MainContent = ({ children }) => {
  return (
    <main
      style={{
        minHeight: "calc(100vh - 16vh)",

        maxWidth: "1400px",
        margin: "0 auto",
      }}
    >
      {children}
    </main>
  );
};
export default MainContent;

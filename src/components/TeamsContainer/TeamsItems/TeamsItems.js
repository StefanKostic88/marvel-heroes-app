const TeamsItems = () => {
  // hovered ? icona: img

  return (
    <li
      style={{
        gap: "10px",
        borderRadius: "7px",
        overflow: "hidden",
        background: "red",
        cursor: "pointer",
      }}
    >
      <figure
        style={{
          display: "flex",
          gap: "10px",

          alignContent: "center",
        }}
      >
        <div style={{ height: "60px", width: "60px" }}>
          <img
            src="http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg"
            style={{
              display: "block",
              objectFit: "cover",
              width: "100%",
              height: "100%",
              objectPosition: "center",
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h3>Some Hero</h3>
        </div>
      </figure>
    </li>
  );
};

export default TeamsItems;

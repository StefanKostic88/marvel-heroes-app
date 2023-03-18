import TeamsItems from "./TeamsItems/TeamsItems";
const TeamsContainer = () => {
  return (
    <div
      className="teamcontainer"
      style={{
        flex: 2,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        // justifyContent: "flex-start",
      }}
    >
      <h2>My Team</h2>
      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          width: "100%",
        }}
      >
        <TeamsItems />
        <TeamsItems />
        <TeamsItems />
        <TeamsItems />
      </ul>
    </div>
  );
};

export default TeamsContainer;

import CustomButton from "../CustomButton/CustomButton";

const btnColor = {
  color: "#fff",
  boxShadow: "0 0 5px 1px #fff",
  borderRadius: "7px",
};

const HeroCard = () => {
  return (
    <figure
      style={{
        maxWidth: "300px",
        boxShadow: "0 0 25px 3px black",
        padding: "5px 0",
        borderRadius: "7px",
        backgroundColor: "black",
      }}
    >
      <h3 style={{ padding: "0 15px", textAlign: "center" }}>Hero name</h3>
      <div style={{ height: "350px", marginBottom: "10px" }}>
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
          padding: "10px 15px",
          display: "flex",
          gap: "10px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CustomButton {...btnColor}>Info</CustomButton>
        <CustomButton {...btnColor}>Add</CustomButton>
      </div>
    </figure>
  );
};

export default HeroCard;

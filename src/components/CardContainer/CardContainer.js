import HeroCard from "../ui/HeroCard/HeroCard";
const CardContainer = () => {
  return (
    <div
      style={{
        flex: 5,
        height: "100%",
      }}
    >
      <h2>My Heroes</h2>
      <div
        className="cardContainer"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, auto)",
          gap: "15px",
        }}
      >
        <HeroCard />
        <HeroCard />
        <HeroCard />
        <HeroCard />
        <HeroCard />
        <HeroCard />
        <HeroCard />
        <HeroCard />
        <HeroCard />
        <HeroCard />
      </div>
    </div>
  );
};

export default CardContainer;

export const Header = () => {
  return (
    <div className="border-2 border-zinc-500 p-2 flex justify-around">
      <p className="text-teal-800"> Resume </p>
      <a href="https://github.com/kanea-macdonald">
        <img src={`${process.env.PUBLIC_URL}/GitHub-Mark-32px.png`} alt="github" />
      </a>
    </div>
  );
};

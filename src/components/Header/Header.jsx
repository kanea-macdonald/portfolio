import githubLogo from "./GitHub-Mark-32px.png";

export const Header = () => {
  return (
    <div className="border-2 border-zinc-500 p-2 flex justify-around">
      <p className="text-teal-800"> Resume </p>
      <a href="https://github.com/kanea-macdonald">
        <img src={githubLogo} alt="github" />
      </a>
    </div>
  );
};

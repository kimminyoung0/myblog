import ReactGA from "react-ga4";

const GitHubLink = () => {
  const handleGitHubClick = () => {
    ReactGA.event({
      category: "GitHub",
      action: "Profile Clicked",
    });
    window.open("https://github.com/kimminyoung0", "_blank");
  };

  return (
    <button
      onClick={handleGitHubClick}
      className="bg-black text-white px-4 py-2 rounded shadow hover:bg-gray-800"
    >
      GitHub 프로필
    </button>
  );
};

export default GitHubLink;

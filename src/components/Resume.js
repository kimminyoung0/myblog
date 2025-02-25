import ReactGA from "react-ga4";

const Resume = () => {
  const handleDownload = () => {
    ReactGA.event({
      category: "Resume",
      action: "Download Clicked",
    });
    window.open("/assets/my_resume.pdf", "_blank");
  };

  return (
    <button
      onClick={handleDownload}
      className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700"
    >
      이력서 다운로드
    </button>
  );
};

export default Resume;

import "./OverlayHeader.styles.scss";

const OverlayHeader = () => {
  return (
    <>
      <div className="fixed top-0 right-0 w-96 h-96 bg-gradient-to-br from-indigo-500/10 to-purple-600/10 rounded-full blur-3xl -translate-y-48 translate-x-48 z-0"></div>

      <div className="fixed bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-indigo-500/10 to-purple-600/10 rounded-full blur-3xl translate-y-48 -translate-x-48 z-0"></div>
    </>
  );
};

export default OverlayHeader;

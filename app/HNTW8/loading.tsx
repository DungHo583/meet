function FullscreenLoading() {
  return (
    <div id="loader-wrapper" className="loading-logo ">
      <div className="w-full h-full full-screen-loading">
        <div id="loader">
          <div id="loading-bubble">
            <img src="/logo-loading.png" alt="" />
            <div className="spinner-container">
              <div className="spinner">
                <div className="bounce1"></div>
                <div className="bounce2"></div>
                <div className="bounce3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FullscreenLoading;

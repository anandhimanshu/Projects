const Shimmer = () => {
    return (
      <div className="shimmer-container">
        {[...Array(20)].map((_, index) => (
          <div key={index} className="shimmer-card">
            <div className="shimmer-image"></div>
            <div className="shimmer-details">
              <div className="shimmer-name"></div>
              <div className="shimmer-rating"></div>
              <div className="shimmer-address"></div>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default Shimmer;
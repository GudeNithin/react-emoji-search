import './App.css';

const Display = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="display-container">
      <h4 className="title">India VS South Africa</h4>
      <p className="subtitle">Champions Trophy Final Starts in</p>
      <div className="timer-grid">
        <div className="time-section">
          <p className="time-value">{days}</p>
          <p className="time-label">DAYS</p>
        </div>
        <div className="time-section">
          <p className="time-value">{hours}</p>
          <p className="time-label">HOURS</p>
        </div>
        <div className="time-section">
          <p className="time-value">{minutes}</p>
          <p className="time-label">MINUTES</p>
        </div>
        <div className="time-section">
          <p className="time-value">{seconds}</p>
          <p className="time-label">SECONDS</p>
        </div>
      </div>
    </div>
  );
};

export default Display;

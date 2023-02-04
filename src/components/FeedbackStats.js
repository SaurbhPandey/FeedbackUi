import { useContext } from "react";
import { FeedbackContext } from "../context/FeedbackProvider";
const FeedbackStats = () => {
  const{feedback} = useContext(FeedbackContext);
  let Average = feedback.reduce((acc, { rating }) => acc + rating, 0) / feedback.length;

  Average = Average.toFixed(1).replace(/[.,]0$/,'');
  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>AverageRating : {isNaN(Average) ? 0 : Average}</h4>
    </div>
  );
};

export default FeedbackStats;

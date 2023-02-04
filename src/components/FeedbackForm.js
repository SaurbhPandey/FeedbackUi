import React, { useState , useContext , useEffect } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import { FeedbackContext } from "../context/FeedbackProvider";
const FeedbackForm = () => {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(10);
  const [btndisabled, setbtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const{addNewFeedback , feedbackEdit , updateFeedback} = useContext(FeedbackContext)

  useEffect(()=>{
   if(feedbackEdit.edit === true){
    setbtnDisabled(false)
    setText(feedbackEdit.item.text)
    setRating(feedbackEdit.item.rating)
   }
  },[feedbackEdit]);


  const handleChange = (e) => {
    if (text === "") {
      setMessage(null);
      setbtnDisabled(true);
    } else if (text !== null && text.trim().length <= 10) {
      setMessage("Text must be of atleast 10 character");
      setbtnDisabled(true);
    } else {
      setMessage(null);
      setbtnDisabled(false);
    }
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text: text,
        rating: rating,
      };
      
      if(feedbackEdit.edit === true){
         updateFeedback(feedbackEdit.item.id , newFeedback)
      }
      else{
        addNewFeedback(newFeedback);
      }
      setText("");
    }
  };
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us</h2>
        <RatingSelect selected={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
            onChange={handleChange}
            type="text"
            placeholder="write your review"
            value={text}
          />
          <Button type="submit" isDisabled={btndisabled}>
            Submit Here
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
};

export default FeedbackForm;

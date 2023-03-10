import React, { createContext, useState , useEffect } from "react";
import { stringify } from "uuid";
export const FeedbackContext = createContext();
const FeedbackProvider = ({ children }) => {
  const[isLoading , setIsLoading] = useState(true);
  const [feedback, setFeedback] = useState([]);
  const[feedbackEdit , setFeedbackEdit] = useState({
    item:{},
    edit : false
  })

  useEffect(()=>{
   fetchFeedback();
  } , []);


// fetch feedback
  const fetchFeedback = async () =>{
    const response = await fetch(`/feedback?_sort=rating&_order=desc`);
    const data = await response.json();
    setFeedback(data);
    setIsLoading(false);
  }


  // add feedback
  const addNewFeedback = async (newFeedback) => {
    const response = await fetch('/feedback' , {
      method:'POST',
      headers :{
        'Content-Type' : 'application/json'
      },
      body : JSON.stringify(newFeedback),
    })

    const data = await response.json()

    setFeedback([data, ...feedback]);
  };

  // delete feedback
  const deleteFeedback = async (id) => {
    if (window.confirm("Are u sure that u wanna delete?")) {

      await fetch(`/feedback/${id}` , {method:'DELETE'})
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  //edit feedback
  const editFeedback = (item)=>{
     setFeedbackEdit({
      item,
      edit : true
     })
  }

  // update feedback
  const updateFeedback = async (id , updatedItem)=>{

    const response = await fetch(`/feedback/${id}` ,{
      method:'PUT',
      headers :{
        'Content-Type' : 'application/json'
      },
      body:JSON.stringify(updatedItem)
    })

    const data = await response.json()
   setFeedback(feedback.map((item) =>(item.id === id) ? {...item , ...data}: item));
  }
  return (
    <FeedbackContext.Provider value={{ feedback, isLoading , deleteFeedback , addNewFeedback , editFeedback , feedbackEdit , updateFeedback }}>
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackProvider;

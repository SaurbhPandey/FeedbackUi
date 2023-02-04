import React , {useContext} from 'react'
import Feedbackitem from './Feedbackitem';
import { FeedbackContext } from '../context/FeedbackProvider';
import Spinner from './shared/Spinner';
const FeedbackList = () => {
  const{feedback , isLoading} = useContext(FeedbackContext)
    if(!isLoading && (!feedback || feedback.length === 0)){
        return <p>Data is not present</p>
    }
    return isLoading ? (<Spinner/>) : (   <div className='feedback-list'>
    {feedback.map((item)=>(
        <Feedbackitem key={item.id} item = {item} />
    ))}
</div>)
}

export default FeedbackList;
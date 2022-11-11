import { useState, createContext } from "react";
import { v4 as uuidv4 } from "uuid";
import FeedbackData from "../data/FeedbackData";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState(FeedbackData);
  const [feedbackEdit, setFeedbackEdit] = useState({ item: {}, edit: false });

  // añadir nuevo feedback
  const addFeedback = (newFeedback) => {
    newFeedback.id = parseInt(uuidv4());
    setFeedback([newFeedback, ...feedback]);
  };

  // eliminar feedback
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  // editar feedback
  const editFeedback = (item ) => {
      setFeedbackEdit({ item, edit: true });
  }

  // actualizar feedback
  const updateFeedback = (id, updItem) => {
    setFeedback(feedback.map((item) => item.id === id ? {...item, ...updItem} : item))
  }

  const value = {
    feedback,
    feedbackEdit,
    addFeedback,
    deleteFeedback,
    editFeedback,
    updateFeedback,
  }

  return (
    <FeedbackContext.Provider value={value}>
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;

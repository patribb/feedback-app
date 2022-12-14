import { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FeedbackItem from "./FeedbackItem";
import FeedbackContext from "../context/FeedbackContext";

const FeedbackList = () => {
  const { feedback } = useContext(FeedbackContext)
  if (!feedback || feedback.length === 0) return <p>No Feedback Yet</p>;

  return (
    <div className="feedabck-list">
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            key={item.id}
          >
            <FeedbackItem item={item} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default FeedbackList;

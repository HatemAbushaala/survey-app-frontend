import { useEffect, useState } from 'react';
import { getRandomQuestion } from '../lib/api';

export function useFetchRandomQuestion() {
  const [question, setQuestion] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isThereQuestions, setIsThereQuestions] = useState(true);

  // fetch random question when the user opens the api
  useEffect(() => {
    fetchRandomQuestion();
  }, []);

  const fetchRandomQuestion = async () => {
    setIsLoading(true);
    try {
      const result = await getRandomQuestion();
      if (result.available) {
        setQuestion(result.data);
        setIsThereQuestions(true);
      } else {
        setIsThereQuestions(false);
      }
    } catch (err) {
      // TODO handle error
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    question,
    fetchRandomQuestion,
    isThereQuestions,
  };
}

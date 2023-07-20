import { useEffect, useState } from 'react';
import { getRandomQuestion } from '../lib/api';
import { toast } from 'react-toastify';

export function useFetchRandomQuestion() {
  const [question, setQuestion] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isThereQuestions, setIsThereQuestions] = useState(true);

  // fetch random question when the user opens the api
  useEffect(() => {
    fetchRandomQuestion();
  }, []);

  const fetchRandomQuestion = async () => {
    // ignore if currently trying to fetch question
    if (isLoading) return;

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
      toast.error('تعذر الاتصال بالسيرفر');
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

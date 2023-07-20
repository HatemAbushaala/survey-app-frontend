import { getOrCreateGuestId } from './storage';

const BASE_URL = 'http://localhost:1337';
export const getRandomQuestion = async () => {
  let guest_id = getOrCreateGuestId();
  const res = await fetch(`${BASE_URL}/random-question?guest_id=${guest_id}`);
  const json = await res.json();
  return json;
};

export const submitAnswer = async (questionId, answer, answerId) => {
  const res = await fetch(`${BASE_URL}/answers`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      question: questionId,
      answer,
      answerId,
      guest_id: getOrCreateGuestId(),
    }),
  });
  const json = await res.json();
  return json;
};

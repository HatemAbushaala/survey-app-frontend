import { Box, Button, List, ListItemButton, Typography } from '@mui/material';
import React, { useState } from 'react';
import { submitAnswer } from '../lib/api';
import { toast } from 'react-toastify';

export default function SurveyQuestion({ question, fetchRandomQuestion }) {
  const { id: questionId, question: q, choices } = question;
  const [selectedChoice, setSelectedChoice] = useState();
  const submitDisabled = selectedChoice == null;
  const handleSubmit = async () => {
    try {
      // send request to save user answer
      await submitAnswer(questionId, selectedChoice.text, selectedChoice.id);
      // reset selected answer
      setSelectedChoice();
      // automatically fetch another random question
      fetchRandomQuestion();
    } catch (error) {
      toast.error('تعذر الاتصال بالسيرفر');
    }
  };
  return (
    <Box minWidth={300}>
      <Typography variant='h5'>{q}</Typography>
      {/* list of choices*/}
      <List>
        {choices.map((choice) => {
          const isSelected = choice.id === selectedChoice?.id;
          return (
            <ListItemButton
              selected={isSelected}
              sx={{
                border: 'solid 1px gray',
                borderRadius: 2,
                p: 1.5,
                my: 1,
              }}
              onClick={() => setSelectedChoice(choice)}
              key={choice.id}
            >
              {choice.text}
            </ListItemButton>
          );
        })}
      </List>
      <Button
        fullWidth
        variant='contained'
        disabled={submitDisabled}
        onClick={handleSubmit}
      >
        submit
      </Button>
    </Box>
  );
}

import React, { useState } from "react";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { Button, Grid, List, Typography } from '@mui/material';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';




const questions = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Madrid"],
      answer: "Paris",
    },
    {
      question: "What is the largest continent in the world?",
      options: ["Asia", "Africa", "North America", "South America"],
      answer: "Asia",
    },
    {
      question: "Who painted the Mona Lisa?",
      options: ["Michelangelo", "Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso"],
      answer: "Leonardo da Vinci",
    },
  ];

const Quiz = () => {
   
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
  
    const handleAnswerOptionClick = (answer) => {
      if (answer === questions[currentQuestion].answer) {
        setScore(score + 1);
      }
  
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
      } else {
        setShowScore(true);
      }
    };
  
    const handleResetClick = () => {
      setCurrentQuestion(0);
      setShowScore(false);
      setScore(0);
    };
  
  return (
    <div>
       <Grid  sx = {{ margin : 2 , width : "60vw" , marginTop : 10}}>
          {
              showScore ? <Box>
                  <Typography variant="h6" component="div" gutterBottom>
                          You Scored : {score} 
                  </Typography>
                  <Button variant="contained" onClick={handleResetClick}>Reset</Button>
                </Box> :
                <Box >
                    <Typography variant="h6" component="div" gutterBottom>
                        {currentQuestion + 1}.  {questions[currentQuestion].question}
                    </Typography>
                    <List>
                        {questions[currentQuestion].options.map((option) => (
                            <ListItem sx = {{border : 2 , borderColor: '#e0e0e0' , backgroundColor : "#f9f9f9" , borderRadius : 3 , marginTop : 2}}>
                                    <ListItemButton>
                                        <ListItemText primary={option} onClick={() =>  {handleAnswerOptionClick(option)}}  />
                                    </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                    
                </Box>
            }
       </Grid>
    </div>
  )
}

export default Quiz
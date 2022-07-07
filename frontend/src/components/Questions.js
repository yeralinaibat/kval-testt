import React from 'react'
import { useParams } from 'react-router-dom';

function Questions() {
  const { subjectId, questionsCount } = useParams();

  return (
    <div style={{alignItems:"center"}}>Questions {subjectId} {questionsCount}</div>
  )
}

export default Questions 
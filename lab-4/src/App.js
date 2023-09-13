import React, { useState } from 'react';
import Question from "./Question";
import data from './data';
function App() {
  const [question, setQuestion] = useState(data)

  return (
    <main>
      <div className='container'>
        <h3>Questions and answers about login</h3>
        <section className='info'>
          {
            question.map((q, i) => (<Question key={i} {...q}/>))
          }
        </section>
      </div>
    </main>
  )
}

export default App;

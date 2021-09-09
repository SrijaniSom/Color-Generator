import React from 'react'
import Values from 'values.js'
import SingleColor from './SingleColor'
import './styles.css'


const App = () => {
  const [Color, setColor] = React.useState('')
  const [Error, setError] = React.useState(false);
  const [List, setList] =React.useState(new Values("#f15025").all(10));

  const handleSubmit=(event) => 
  {
    event.preventDefault();
    console.log(Color);
    try 
    {
        setList(new Values(Color).all(10));  
        console.log(List);
    } 
    catch (error) 
    {
      setError(true);
      console.log(error);  
    }
  }
  return (
    <>
      <section className="MainPart">
        <section className="top">
          <div className="heading">
            Color Generator
          </div>

          <div className="in">
            <input type="text" 
            className={`${Error ? 'error' : null}`}
             placeholder="#f15025"
             onChange={(event) => setColor(event.target.value)
                      }>
                         
                      </input>
          </div>

          <button className="subBtn" onClick={handleSubmit}>
            Submit
          </button>
        </section>

          <section className="Colorset">
            {List.map((currElem,currIndex) => {

                return(
                  <>

                      <SingleColor key={currIndex} 
                      {...currElem} 
                      index={currIndex} 
                      hexColor={currElem.hex}/>

                  </>
                )
            })}
          </section>
      </section>
    </>
  )
}

export default App;

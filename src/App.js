import React, {lazy , Suspense , useState , useEffect , useRef} from 'react';
import './App.css';
//const Form = lazy(() => import('./Form'));
const Comment = lazy(() => import('./Comment'));

function App() {
  const [comments, setComments] = useState([]);
  const nameRef = useRef();
  const commentRef = useRef();

  useEffect(() => {nameRef.current.focus();} , []);

  const submitComment = () => {
    if (nameRef.current.value && commentRef.current.value)
    {
      setComments((prev) => [...prev , {name: nameRef.current.value , date: (new Date()).toString().slice(4 , 25) , content: commentRef.current.value , id: Date.now().toString()}]);
    }
  };

  const firstNameChange = (e) => {
    e.keyCode === 40 && commentRef.current.focus();
    e.keyCode === 13 && commentRef.current.focus();
  };

  const EnterToSubmit = (e) => {
    e.keyCode === 13 && submitComment(); 
    e.keyCode === 38 && nameRef.current.focus();
  };

  return (
    <div className="App">
      <h1>The Blog</h1>
      <Suspense  fallback={<h1>loading....</h1>}>       
      <p>BoJack Horseman is an American adult animated television series created by Raphael Bob-Waksberg. 
        It stars the voices of Will Arnett, Amy Sedaris, Alison Brie, Paul F. Tompkins, and Aaron Paul. 
        Set primarily in Los Angeles, the series tells the story of an anthropomorphic horse named BoJack Horseman (Arnett), 
        the washed-up star of a 1990s sitcom who plans his return to celebrity relevance with an autobiography to be written by ghostwriter Diane Nguyen (Brie).
        He also has to contend with his agent Princess Carolyn (Sedaris), roommate Todd Chavez (Paul), and former rival Mr. Peanutbutter (Tompkins), 
        as well as his struggles with depression and addiction. The show is designed by cartoonist Lisa Hanawalt, 
        who has been friends with Bob-Waksberg since high school and had previously worked with him on the webcomic Tip Me Over, Pour Me Out.</p>
      </Suspense>
      <h3>leave a comment</h3>
      <div>
        <span>Name: </span><input onKeyUp={firstNameChange} ref={nameRef} type='text'/>
      </div><div>
        <span>Comment: </span><input onKeyUp={EnterToSubmit} ref={commentRef} type='text'/>
      </div>
      <button onClick={submitComment}>submit</button>
      <div id='comment-section'>
        <Suspense fallback={<h1>loading....</h1>}>
        {comments && comments.map((e) => <Comment key={e.id} info={e}/>)}
        </Suspense>
      </div>
    </div>
  );
}

export default App;

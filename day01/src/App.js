// import 참조변수 from './경로/파일명.js'
import Dog from './components/aaa'
import Test1 from './components/Test1';
import Test2 from './components/Test2';


const App = () => {
  return (
    <div>
        <Test2 />
        <hr/>
        <Test1 />
        <hr />
        <Dog />
        <Dog />
    </div>
  );
};

export default App;
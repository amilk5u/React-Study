import './Test3.css'
import myStyle from './Test3.module.css'

const Test3 = () => {
   return (
      <div>
         <div className="box">Test</div>
         <div className={myStyle.box}>Test</div>
      </div>
   );
};

export default Test3;

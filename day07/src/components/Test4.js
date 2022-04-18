import './Test4.css'
import myStyle from './Test4.module.css'
const Test4 = () => {
   return (
      <div>
         <div className="wrap">
            <div className="box"></div>
            <div className="box"></div>
            <div className={myStyle.box}></div>
            <div className={myStyle.box}></div>

            {/* 다중클래스 */}
            <h1>다중클래스1</h1>
            <div className="size bg"></div>
            <div className={`${myStyle.size} ${myStyle.bg}`}></div>
            <div className={`size ${myStyle.bg}`}></div>
            <div className={`${myStyle.size} bg`}></div>

            {/* 다중클래스 */}
            <h1>다중클래스2</h1>
            <div className={[myStyle.size, myStyle.bg].join(' ')}></div>
            <div className={['size', myStyle.bg].join(' ')}></div>
            <div className={[myStyle.size, 'bg'].join(' ')}></div>

            {/* module 에서 일반 클래스처럼 사용됨 */}
            <div className="myBox"></div>
         </div>
      </div>
   );
};

export default Test4;
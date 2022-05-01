import { useMemo } from "react";

const getColor = (color) => {
   console.log('getColor')
   switch (color) {
      case 'pink': return '분홍색 입니다.';
      case 'hotpink': return '진한분홍색 입니다.';
      case 'skyblue': return '하늘색 입니다.';
      case 'orange': return '오렌지색 입니다.';
      default: return '없음'
   }
}

const getFood = (food) => {
   console.log('getFood')
   switch (food) {
      case '갈비': return '갈비에 대한 설명입니다.'
      case '떡볶이': return '떡볶이에 대한 설명입니다.'
      case '수제비': return '수제비에 대한 설명입니다.'
      case '냉면': return '냉면에 대한 설명입니다.'
   }
}

const Test3Sub = ({ color, food }) => {
   const colorInfo = useMemo(() => {
      return getColor(color)
   }, [color])
   const foodInfo = useMemo(() => getFood(food), [food])
   return (
      <div>
         <h3>선택 색 : {color}</h3>
         <h4>선택 색 설명 : {colorInfo}</h4>
         <h3>선택 음식 : {food}</h3>
         <h4>선택 음식 설명 : {foodInfo}</h4>
      </div>
   );
};

export default Test3Sub;
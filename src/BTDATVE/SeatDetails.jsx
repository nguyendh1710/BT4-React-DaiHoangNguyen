import React from 'react'
import { useDispatch, useSelector  } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function SeatDetails() {




//--------------------dùng useSelector lấy dữ liệu từ store--------------------------------------------
//state này là cả state bự luôn nên muốn lấy reducer con nào thì chấm tới nó hoặc dùng destructoring để bóc tách từng mảng ra
  const seatDetails= useSelector((state)=>{return state.seat})
  
   //console.log (seatDetails)


////--------------------dùng useDispatch để cập nhật dữ liệu khi bỏ chọn hay bấm x lên store--------------------------------------------

const dispatch = useDispatch();
// viết hàm handleRemove cho nút x



const handleRemove=(evt)=>{


   // biên isSelected này là mình tự viết chữa false vô chứ không thể lấy trong item.isSelected đã return ở cục dưới được 
   dispatch({type:"removeSeat",payload:{seatId:evt.target.value}});



}









//----------------------------------------------------------------------------------

  return (

   
<div>

{


                seatDetails.selectedSeats.map((item)=>{
                
                           return(
                                     
                              <div>
                                     <tr>
                                            <th scope="col" className='soGhe'>{item.soGhe}</th>
                                            <th scope="col" className='gia'>{item.gia}</th>
                                            <th scope="col" className='huy'><button class=" text-danger" type='button' onClick={handleRemove}  value={item.soGhe} >X</button></th>
                                            
                                     </tr>
                                     
                             </div>
                             


                           )




                })
               

              
                      

               






}


<div className='fw-bold'>Tổng tiền: {seatDetails.totalPrice}</div>

</div>

  )
   
  
}
   

import {React, useEffect, useState} from 'react'
import { useDispatch, useSelector  } from 'react-redux';




// sau khi truyền props isSelected từ bên List qua thì bỏ luôn isSelected là biến state tạo ban đầu mà quản lý bằng prop isSelected mới nhận
export default function SeatItem({gheDangLay,daDat,nameSeat,hang,isSelected}) {
  



// //-----------------tạo state để đổi màu nút khi ấn button-->nhớ để biến state isS;e;ected ở đầu nó mới chạy----------------------------------------------------------------------

// const  [isSelected,setisSelected] = useState(false);






//CHÚ Ý: PHẢI ĐẶT CHỈ CÁI NÚT Ở COMPONENT ITEMS NÀY THÌ ĐẶT CLASS MỚI ĐƯỢC CHỨ CLASS KHÔNG ĐẶT TRONG VÒNG LẶP ĐC, CÒN THẰNG BAO NÓ PHẢI ĐẶT TRONG SEATLIST THÌ NÓ MỚI CHẠY
let classes="btn m-2 ";
//đặt trong hàm setisSelected để đổi state khi ấn button


 if(daDat){
           
            
  classes = "gheDangChon";
           
}
else if(isSelected){
            
      
classes ="gheDuocChon" ;

}
else{

classes = "ghe";

}
//làm hàng số
if(hang=="")
{
  daDat=true;
  classes = "Num";

}
         
  
        
//--------------------dùng useSelector lấy dữ liệu từ store-để lấy dữ liệu mảng ghế đang được chọn mới nhất của store rồi gán nó cho biến state nhằm gán lại màu sau khi bên details bấm nút x để xóa-------------------------------------------
   
// let day= useSelector((state)=>{return state.seat.gheXoa})
  
//     // day=isSelected;
//      console.log(day)


      
    


//--------------------dùng useDispatch cập nhật state mới có bao gồm tình trạng đã isSelected hay chưa lên Reducer-------------------------
// nhớ tạo biến nó mới cho gắn useDispath
let dispatch = useDispatch ();






//---------------------------------------------tạo hàm handle để gắn vào button báo đã gửi trạng thái (state) mới qua useDispatch

const duocChon=(isSelected)=>{



  if(!isSelected){

    return dispatch ({type:"isSelected",payload:{...gheDangLay,isSelected:!isSelected}});
  }else{


    return dispatch ({type:"removeSeat",payload:{seatId:nameSeat,isSelected:!isSelected}});
  }



}
const handleSelected = ()=>{

  // setisSelected(!isSelected);
  duocChon(isSelected);
 
}








//-------------------------------------------------------------------




  return (
    
// khi nhấn onclick sẽ gửi dữ liệu tráng thái useDispatch mới lên Reducer 





     
      


        <button  type="button" className={classes} onClick={handleSelected} disabled={daDat}> {nameSeat} </button>



       
  






    )


         
}















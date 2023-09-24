import {React,useEffect} from 'react'
import SeatItem from './SeatItem'
import { useSelector } from 'react-redux';
export default function SeatList({allseat}) {


//-------------------------dùng dữ liệu từ nhận prop để render ra giao diện đầu tiên-------------------------------------------
  
// dữ liệu bỏ phần tử đầu tiên

//let arr1=allseat.shift();






// mảng sau khi bỏ phần tử đầu tiên


let seats=[...allseat];





// let seats=allseat;

// làm ghế đã đặt

let choNgoi=[...seats];

let daDatValues = choNgoi.map((item)=>{return (
  
  
  item.danhSachGhe.map((gheDaDat)=>{ 
    
    
           
           return (gheDaDat.daDat)
        
  
  
  
  
  
  })
  
  
  
  )})
  
  //console.log(daDatValues);

//---------------------------------gọi useSelector sau để lấy mảng ghế đang được chọn khi dữ liệu đã đang có trên redux để truyền prop xuống cho SeatItem để thay biến state đã tạo ban đầu
//PHẢI MAP CẢ MẢNG khi render giao diện ban đầu MỚI KHÔNG GIỰT SỐ KHI GỌI USESELECTOR
const seatSelected= useSelector((state)=>{  return state.seat.selectedSeats}) ;


//console.log(seatSelected)

/////////////////////////////////////////khởi tạo biến isSlected để dùng kiemet tra và set lại màu cho bên Item




//--------------------------------------------------------------------------------------------------------


  return (
    

      

<div className="seatStructure txt-center" style={{overflowX: 'auto'}}>
       
       <table id="seatsBlock">
           <tbody>
            






           
      

  


      <tr >

      {/* {seats.map((item)=>{return (
        
        
        
        <div key={item.soGhe} >
               {item.soGhe}
              
        </div>
        
        )})} */}
       
               
       
          

    
      


{
  //LƯU Ý: PHẢI MAP CẢ MẢNG MỚI chứ không map riêng dòng, cột nêud KHÔNG GIỰT SỐ KHI GỌI USESELECTOR
    seats.flatMap((item) =>{
      
      
      return(
      

      
      <tr key= {item.hang}   >
  
          

        <td className='firstChar' key={item.hang}> 
               {item.hang}
               
               
        </td> 
       
       <td className='firstChar' >
           
                 
              

              {item.danhSachGhe.map((nestedItem) => {
          
                           const isSelected = seatSelected.find((value) => value.soGhe === nestedItem.soGhe)
                           console.log(isSelected)
                          return( 
                          // CHÚ Ý: dùng 2 dấu chấm than để ép kiểu isSelected thành boolean
                           
                         <td key={nestedItem.soGhe}>
                           
                           <SeatItem allseat={allseat}   nameSeat={nestedItem.soGhe} disable={nestedItem.daDat} daDat={nestedItem.daDat} gheDangLay={nestedItem} hang={item.hang} isSelected={!!isSelected}/> 
                        
                          
                          </td>
                         
                         
                          
                          )
                         

        
          
          
          
          })} 



       </td> 


      </tr>


    

      
)
                  
                    
                        
                    })

              


               

}


           </tr>




















            
          
         </tbody>
      </table>

</div>
            
  )
  
  
  
}

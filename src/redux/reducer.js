
// import { dispatch } from "./../BTDATVE/Seat";
import{SELECT_SEAT,REMOVE_SEAT} from './contanst'

// tạo một hàm của reducer con-->thường để hàm này nằm trước hàm tạo store vì do dùng Function expression nó không cho dùng trước khi khởi tạo
// nho khoi tao bien state = 0 giong khi dung useState vi no khonng hieu neu state ban dau la underfine (nghia la tao bien nhung khong khai bao)
const initState = { selectedSeats :[],totalPrice:0,isSelected:false }
export  const seatReducer= (state= initState, action) => {
       

        switch (action.type) {


          case "allSeat" : {

            state =action.payload;
            
            
            
           
             return state;


}


//MẤY ARRAY VÀ OBJECT TRONG NÀY MUỐN ĐEM RA NGOÀI DÙNG THÌ PHẢI 
          case SELECT_SEAT: {
            const { isSelected, ...seat } = action.payload;
               
      
            if (isSelected) {
              const selectedSeats = [...state.selectedSeats, seat];

             const totalPrice = state.totalPrice + seat.gia;


             
              return { ...state, selectedSeats, totalPrice,isSelected };
            }
      
            const selectedSeats = state.selectedSeats.filter(
              (item) => item.id !== seat.id
            );
            const totalPrice = state.totalPrice - seat.gia;
            
            return { ...state, selectedSeats, totalPrice,isSelected };
          }
          
          
          
          
          
          case REMOVE_SEAT: {
            const seatid = action.payload.seatId;
           
            const selectedSeats = state.selectedSeats.filter(

              (item) => 
                
            //  chú ý khi dùng hàm filter thì không được để ngoặc {} sau dấu => vì hàm này không nhận callback function như map,reduce nếu không se báo lỗi 
                 (item.soGhe !== seatid)
              
                
              
            );
           
            
            const totalPrice = selectedSeats.reduce(
              (result, item) => result + item.gia,
              0
            );
            
            return { ...state, selectedSeats, totalPrice};
          }
          default:
            return state;
        }









}
   

                
   
   

  
  

 
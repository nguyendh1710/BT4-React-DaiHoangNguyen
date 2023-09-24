import {configureStore} from "@reduxjs/toolkit"
import { seatReducer } from "./redux/reducer"




  


//tạo một store
export const store = configureStore ({


// reduce là một đối tượng chứa nhiều reducer con là hàm xử lý để thay đổi state
      
reducer:{seat:seatReducer}
})


// tao một action để có thể dispatch vào store ---> action là một object có tối thiểu 1 thuộc tính là type



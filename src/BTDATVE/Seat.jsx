import React, { useCallback, useEffect,useState } from 'react'
import { useSelector } from 'react-redux';
import data from './data.json'
import SeatList from './SeatList'
import SeatDetails from './SeatDetails'



export default function Seat() {

 










//--------------------dùng useSelector lấy dữ liệu từ store--------------------------------------------
//state này là cả state bự luôn nên muốn lấy reducer con nào thì chấm tới nó hoặc dùng destructoring để bóc tách từng mảng ra
const seatDetails= useSelector((state)=>{return state.seat.totalPrice})
console.log(seatDetails)



//---------đặt một biên điền tên---------------------------------------------------------------------------------------   
  const yourName="";


return (
    
<div className='nen' >






{/*header*/}
<section className="header">



          <h1 className="bookingMovie text-success" >Đặt vé xem phim Cyber DHN Movie</h1>


</section>

{/* //seat layout */}
<section className="   py-5">

    <div className="row">

             <div className="seatItem col-md-6">

                    {/* input fields */}
                    <div className="inputForm screen">

                          <p>Fill the required details below and select your seats</p>

                          <div className="mr_agilemain ">
                                  <div className="agileits-left mx-1 d-flex">
                                   <label > Name
                                      <span>*</span>
                                  </label>
                                  <div className="ms-1">
                                      <input type="text" id="Username" required defaultValue={yourName}/>
                                  </div>
                                  </div>

                                  <div className="agileits-right mx-3">
                                     <label > Number of Seats
                                         <span>*</span>
                                     </label>
                                     <input type="number" id="Numseats" required min={1} />
                                 </div>
                                 
                          </div>
                          <button  className="mt-3">Start Selecting</button>
                    </div>

                    {/* seats detail */}
                    <div className="seatsDetail m-2">

                     <table>
                      <tbody>
                       <tr>
                        
                          <td>
                            
                             <button type="checkbox" className="seats  gheDuocChon mx-1 " defaultValue="" />
                             <label className="text-white">Selected Seat</label>
                          </td>
                          <td>
                             <button type="checkbox" className="seats  gheDangChon mx-1 " defaultValue="" />
                             <label className="text-white">Reserved Seat</label>
                          </td>
                          <td>
                              <button type="checkbox" className="seats ghe mx-1" defaultValue="" />
                              <label className="text-white"> Empty Seat</label>
                          </td>
                       </tr>
                      </tbody>
                      
                      
                      
                      
                      
                      
                    </table> 
                   
                    



                    </div>
                    {/* SeatItem */}


                    <h3 className="now"> Please select your Seats NOW!</h3>
                    <div className="seatList">
                     

                   
                   
                   
                   
                   
                   
                    <SeatList allseat={data} />
                   
                         
                   
                   
                   
                   
                   
                    



                    </div>
                    
                   
                    {/* Screen this way */} 
                    <div className="screenthisway">
                            <h2 className="">Screen this way</h2>

                    </div>
                    
                    
                    {/* //details after booking displayed here */}  
                   
                           {/* Confirm Selection */}
                           <button >Confirm Selection</button>
                           {/* displayerBoxes */}
                           <div className="displayerBoxes txt-center" style={{overflowX: 'auto'}}>
 
                    <table className="displaytable w3ls-table" width="100%">
                      <tbody>
                        <tr>
                             <th>Name</th>
                             <th>Number of Seats</th>
                            <th>Total price Seats</th>
                       </tr>
                       <tr>
                             <td>
                                  
                                  <textarea id="nameDisplay" defaultValue={yourName} />
                             </td>
                             <td>
                                 <textarea id="NumberDisplay" defaultValue={""} />
                            </td>
                            <td>
                               <textarea id="seatsDisplay" defaultValue={seatDetails} />
                                     
                           </td>
                      </tr>
                    </tbody>
                    </table>
                           </div>     
                    
 
             </div>

             
            <div className="seatList col-md-6">



                                        
                  {/* seats detail */}
                  <div className="seatsDetail m-2">

                                 <table>
<tbody>
<tr>

<td>

<button type="checkbox" className="seats  gheDuocChon mx-1 " defaultValue="" />
<label className="text-white">Selected Seat</label>
</td>
<td>
<button type="checkbox" className="seats  gheDangChon mx-1 " defaultValue="" />
<label className="text-white">Reserved Seat</label>
</td>
<td>
<button type="checkbox" className="seats ghe mx-1" defaultValue="" />
<label className="text-white"> Empty Seat</label>
</td>
</tr>



</tbody>







                                 </table> 


                  </div>
                  {/* seat availabilty list */}




                  <div  className='mb-2 '>

                                            <div >
                                            <h1 className='mb-2 text-white fs-1 fw-bold'>DANH SÁCH GHẾ BẠN CHỌN</h1>
                                            <tr className='mb-2 text-white fs-5 fw-bold bg-primary'>
                                                       <th className='soGhe'>Số ghế</th>
                                                       <th className='gia'>Giá</th>
                                                       <th className='huy'>Hủy</th>
                                                       
                                            </tr>
                                              <table className="table table-primary ">
                                              
                                                 <tbody>
                                                  
                                                 <SeatDetails/>      

                                                 </tbody>
                                              </table>
                                            </div>
                                            

                                  </div>

















                       
                         

                 </div>



    </div>
      
</section>


{/*footer*/}
<section className="footer">
  <p>© 2018 Movie Seat Selection . All Rights Reserved | Design by
    <a href="#" target="_blank">Cyber DHN Movie</a>
  </p>
</section>

  

</div>

        

   
  )
}

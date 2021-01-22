import FileUpload from './fileupload';

export const createVideo =()=>(
     <div className='createvideo'>
    <center>
     <form>
       <table>
       <tr>
        <label>
       <input type='text'placeholder='title' required/>
       </label>
       </tr>
       </table>
      <table>
       <tr>
       <input type='text' placeholder='release date' required/>
      </tr>
     </table>
      <table>
       <tr>
       <input type='text' placeholder='description' required/>
      </tr>
     </table>
      <table>
       <tr>
         <label >
              <FileUpload/>
         </label>
       </tr>
        </table>
       <table>
       <tr>
       <label>
      <button type='submit'>Submit</button>
      </label>
      </tr>
      </table>
    </form>
    </center>
   </div>

);

export default createVideo;




<form action = "?/create" method="POST">

    <div><label>Name </label> <input type = "text" name = "name"></div>
  
     <div><label>Email</label>  <input type = "text" name = "email"></div>

     <div><label>Mobile </label> <input type = "text" name = "mobile"></div>

     <div><label>Enquires</label> <input type= "checkbox" name = "enquire">Selling ticket
        <input type= "checkbox" name = "enquire">Marketing
    </div>


    <!--    <div><label>Enquires</label> <select type = "">
        {#each organizers as organizer}
    <option value = {organizer.id}> 
        {organizer.name}
    
    </option>
    
    
        {/each}
       </select>
    
       </div> -->
    
     <div><label>Message</label><input type = "text" name = "message"></div>

     <div><button>Add Event</button></div>

</form>

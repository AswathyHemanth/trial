
<script>
    // 2024-09-11 11:01:12.915508+00
    export let data;
    console.log(data.countries);
    console.log(data.cities);

    function onCountryChange(event){
        console.log(event.target.value);
    }
    
   /* let formObject = {
        name : "",
        description : "",
        tag : "",
        start_destination : "",
        end_destination : "",
        image_url : "",
        image_upload_url : "",
        location : "",
        ticket_url : "",
        price : "",
        country_id : "",
        city_id : ""
    }
*/
 
let organizers = data.organizers;
</script>

<form class = "eventform" action = "?/create" method="POST">

  <div><label>Name of the Event </label> <input type = "text" name = "title"></div>

   <div><label>Description</label>  <input type = "text" name = "description"></div>
   
  <div class = "datetimepicker"><label>start_date_time</label>  <input type = "date" name = "start_date">
    <input type = "time" name = "start_time">
</div>



  <div class = "datetimepicker"><label>end_date_time</label>  <input type = "date" name = "end_date">
    <input type = "time" name = "end_time">
</div>

  

  <div><label>Location</label>  <input type = "text" name = "location"></div>

  <div><label>image_url</label> <input type= "text" name = "image_url"></div>
   
   <div><label>max_attendees</label> <input type= "text" name = "max_attendees"></div>

   <div><label>Price</label> <input type = "text" name ="price"></div>

   <div><label>Is published</label> <input type= "checkbox" name = "is_published"></div>

   <div><label>Organizers</label> <select name = "organizer_id">
    {#each organizers as organizer}
<option value = {organizer.id}> 
    {organizer.name}

</option>


    {/each}
   </select>

   </div>




  <div class= "buttoncontainer"><button>Add Event</button></div>
 
</form>

<style>
    .eventform{
        margin-top: 20px;
        display : flex;
        width : 800px;
        height: 500px;
        margin-left: auto;
        margin-right: auto;
        row-gap: 10px;
        border : 1px solid black;
        padding : 10px;
        flex-direction: column;
        
    }
    .eventform div{
        display:flex ;
        column-gap:10px;
        align-items: center;
        justify-content: left;
        width: 90%;
        
    }
    .eventform div label{
        width:200px;
        text-align: right;
    
    }

    .eventform div.buttoncontainer{
        justify-content: center;
        width:100%;
        display:flex;
    }
    .eventform div input{
        padding: 5px;
        width:300px;
    }

    .eventform div select{
        padding: 5px;
        width:300px;
    }

    .eventform div.datetimepicker input{
        width:140px;


    }
</style>
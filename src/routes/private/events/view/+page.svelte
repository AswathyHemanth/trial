<script>
	import { updated } from '$app/stores';

    export let data;
    console.log(data);

    let eventList = data.events;
    let selectEvent;

   async function deleteEvent(id){
    let payload = {id:id };
    let response = await fetch("?/delete",{method:"POST",body:JSON.stringify(payload)})
    }

    async function modifyEvent(eventObject){
        selectEvent = eventObject;
        console.log(eventObject);
        let response = await fetch("?/update",{method:"POST",body:JSON.stringify(selectEvent)})

    }
    
    async function updateCounter(){
    selectEvent.click_counter++;
       
    let response = await fetch("?/update",{method:"POST",body:JSON.stringify(selectEvent)})

    }


</script>

{#if selectEvent!== undefined}



<div class = "eventform" >

    <div><label>Name of the Event </label> <input bind:value={selectEvent.title} type = "text" name = "title"></div>
  
     <div><label>Description</label>  <input bind:value={selectEvent.description} type = "text" name = "description"></div>
     
    <div><label>start_date_time</label>  <input bind:value={selectEvent.start_date} type = "text" name = "start_date"></div>
  
    <div><label>end_date_time</label>  <input bind:value={selectEvent.end_date} type = "text" name = "end_date"></div>
  
    <div><label>Location</label>  <input bind:value={selectEvent.location} type = "text" name = "location"></div>
  
    <div><label>image_url</label> <input bind:value={selectEvent.image_url} type= "text" name = "image_url"></div>
     
     <div><label>Source Url</label> <input bind:value={selectEvent.source_url} type= "text" name = "max_attendees"></div>
  
     <div><label>Price</label> <input bind:value={selectEvent.price} type = "text" name ="price"></div>
     <div><label>Counter</label> <input bind:value={selectEvent.click_counter} type = "text" name ="click_counter">
    <button on:click={updateCounter}>UpdateCount</button>
    </div>

     
  <div></div>
    <div class= "buttoncontainer" ><button on:click={modifyEvent}>Update</button></div>
   
</div>
  {/if}

<table>
    {#each eventList as event}
        <tr>
            <td>
                {event.title};
            </td> <td>
                {event.location};
            </td> <td>
                {event.end_date};
            </td> <td>
                {event.price};
            </td> <td>
                {event.description};
            </td>
             <td>
                <button on:click = {()=> {modifyEvent(event)}}>EDIT</button>
            </td>

            <td>
                <button on:click = {()=> {deleteEvent(event.id)}}>DELETE</button>
            </td>

        </tr>
    {/each}
    
</table>
<h1>Hello view</h1>

<style>
    table {
      font-family: Arial, Helvetica, sans-serif;
      border-collapse: collapse;
      width: 80%;
    }
    
    table td, table th {
      border: 1px solid #ddd;
      padding: 8px;
    }
    
    table tr:nth-child(even){background-color: #f2f2f2;}
    
    table tr:hover {background-color: #ddd;}
    
    table th {
      padding-top: 12px;
      padding-bottom: 12px;
      text-align: left;
      background-color: #04AA6D;
      color: white;
    }
    </style>
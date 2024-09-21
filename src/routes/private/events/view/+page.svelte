<script>
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


    }


</script>

{#if selectEvent!== undefined}

<form class = "eventform" action = "?/create" method="POST">

    <div><label>Name of the Event </label> <input bind:value={selectEvent.title} type = "text" name = "title"></div>
  
     <div><label>Description</label>  <input bind:value={selectEvent.description} type = "text" name = "description"></div>
     
    <div><label>start_date_time</label>  <input bind:value={selectEvent.start_date} type = "text" name = "start_date"></div>
  
    <div><label>end_date_time</label>  <input bind:value={selectEvent.end_date} type = "text" name = "end_date"></div>
  
    <div><label>Location</label>  <input bind:value={selectEvent.location} type = "text" name = "location"></div>
  
    <div><label>image_url</label> <input bind:value={selectEvent.title} type= "text" name = "image_url"></div>
     
     <div><label>max_attendees</label> <input bind:value={selectEvent.title} type= "text" name = "max_attendees"></div>
  
     <div><label>Price</label> <input bind:value={selectEvent.title} type = "text" name ="price"></div>
  
     <div><label>Is published</label> <input bind:value={selectEvent.is_published} type= "checkbox" name = "is_published"></div>
  
     
  
  
  
  
    <div class= "buttoncontainer"><button>Add Event</button></div>
   
  </form>
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
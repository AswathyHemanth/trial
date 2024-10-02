fx<script>
	export let data;
	console.log(data.countries);
	console.log(data.cities);

	function onCountryChange(event) {
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


<body class="bg-amber-900 text-white font-sans">
    <div class="container mx-auto p-4 max-w-2xl">
        <div class="flex justify-between items-center mb-4">
            <div class="flex items-center space-x-2">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-lg">Personal Calendar</span>
            </div>
            <button class="bg-amber-800 px-3 py-1 rounded-full text-sm">Public</button>
        </div>

        <div class="flex space-x-4 mb-6">
            <div class="w-1/3">
                <div class="bg-purple-900 rounded-lg p-4 aspect-square">
                    <!-- Placeholder for the colorful abstract illustration -->
                </div>
            </div>
            <div class="w-2/3">
                <input type="text" placeholder="Event Name" class="w-full bg-transparent text-3xl font-bold mb-4 placeholder-amber-500">
                
                <div class="bg-amber-800 rounded-lg p-4 mb-4">
                    <div class="flex justify-between mb-2">
                        <span>Start</span>
                        <span>Wed, Oct 2</span>
                        <span>03:30 PM</span>
                    </div>
                    <div class="flex justify-between">
                        <span>End</span>
                        <span>Wed, Oct 2</span>
                        <span>04:30 PM</span>
                    </div>
                </div>
                
                <div class="bg-amber-800 rounded-lg p-4 mb-4">
                    <span class="text-amber-500">GMT+03:00</span>
                    <span>Qatar</span>
                </div>
            </div>
        </div>

        <div class="space-y-4">
            <div class="bg-amber-800 rounded-lg p-4">
                <label class="flex items-center space-x-2">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    <input type="text" placeholder="Add Event Location" class="bg-transparent w-full placeholder-amber-500">
                </label>
                <p class="text-sm text-amber-500 mt-1">Offline location or virtual link</p>
            </div>

            <div class="bg-amber-800 rounded-lg p-4">
                <label class="flex items-center space-x-2">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                    <input type="text" placeholder="Add Description" class="bg-transparent w-full placeholder-amber-500">
                </label>
            </div>

            <div>
                <h3 class="text-lg mb-2">Event Options</h3>
                <div class="space-y-2">
                    <div class="bg-amber-800 rounded-lg p-4 flex justify-between items-center">
                        <span>Tickets</span>
                        <span class="text-amber-500">Free</span>
                    </div>
                    <div class="bg-amber-800 rounded-lg p-4 flex justify-between items-center">
                        <span>Require Approval</span>
                        <label class="switch">
                            <input type="checkbox">
                            <span class="slider round"></span>
                        </label>
                    </div>
                    <div class="bg-amber-800 rounded-lg p-4 flex justify-between items-center">
                        <span>Capacity</span>
                        <span class="text-amber-500">Unlimited</span>
                    </div>
                </div>
            </div>

            <button class="w-full bg-white text-amber-900 py-3 rounded-lg font-bold">Create Event</button>
        </div>
    </div>
</body>

<!--<form class="eventform" action="?/create" method="POST">
	<div><label>Name of the Event </label> <input type="text" name="title" /></div>

	<div><label>Description</label> <input type="text" name="description" /></div>

	<div class="datetimepicker">
		<label>start_date_time</label> <input type="date" name="start_date" />
		<input type="time" name="start_time" />
	</div>

	<div class="datetimepicker">
		<label>end_date_time</label> <input type="date" name="end_date" />
		<input type="time" name="end_time" />
	</div>

	<div><label>Location</label> <input type="text" name="location" /></div>

	<div><label>Banner image_url</label> <input type="text" name="image_url" /></div>

	<div><label>Price</label> <input type="text" name="price" /></div>

	<div><label>Is published</label> <input type="checkbox" name="is_published" /></div>
	<div><label>Source_Url</label> <input type="text" name="source_url" /></div>
	<div>
		<label>Organizers</label>
		<select name="organizer_id">
			{#each organizers as organizer}
				<option value={organizer.id}>
					{organizer.name}
				</option>
			{/each}
		</select>
	</div>
	

	<div class="buttoncontainer"><button>Add Event</button></div>
</form> -->

<!--<style>
	.eventform {
		margin-top: 20px;
		display: flex;
		width: 800px;
		height: 500px;
		margin-left: auto;
		margin-right: auto;
		row-gap: 10px;
		border: 1px solid black;
		padding: 10px;
		flex-direction: column;
	}
	.eventform div {
		display: flex;
		column-gap: 10px;
		align-items: center;
		justify-content: left;
		width: 90%;
	}
	.eventform div label {
		width: 200px;
		text-align: right;
	}

	.eventform div.buttoncontainer {
		justify-content: center;
		width: 100%;
		display: flex;
	}
	.eventform div input {
		padding: 5px;
		width: 300px;
	}

	.eventform div select {
		padding: 5px;
		width: 300px;
	}

	.eventform div.datetimepicker input {
		width: 140px;
	}
</style>
-->
<h1>Count click</h1>
<script>
	let count = 0;
	
	function handleClick() {
		count += 1;
	}
</script>

<button on:click={handleClick}>
VIEW</button>

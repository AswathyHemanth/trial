<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

View Event Details
<pre>
	{JSON.stringify(data, null, 2)}
</pre>

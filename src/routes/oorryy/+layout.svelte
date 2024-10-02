<script>
	export let data;
	$: ({ supabase } = data);

	$: logout = async () => {
		const { error } = await supabase.auth.signOut();
		if (error) {
			console.error(error);
		}
		window.location.href = '/';
	};
</script>

<!-- <header>
	<nav>
		<a href="/">Home</a>
	</nav>
	<button on:click={logout}>Logout</button>
</header>
<main>
	<slot />
</main> -->

<!-- src/routes/admin/+layout.svelte -->

<div class="flex h-screen bg-gray-100">
	<!-- Sidebar Navigation -->
	<nav class="ml-3 w-64 bg-white shadow-md">
		<div class="p-4">
			<h1 class="text-2xl font-semibold text-gray-800">Admin Panel</h1>
		</div>
		<ul class=" mt-4">
			<li>
				<a href="/private/dashboard" class="block px-4 py-2 text-gray-600 hover:bg-gray-200"
					>Dashboard</a
				>
			</li>
			<li>
				<a href="/private/events" class="block px-4 py-2 text-gray-600 hover:bg-gray-200">Events</a>
			</li>
			<li>
				<a href="./private/organizers" class="block px-4 py-2 text-gray-600 hover:bg-gray-200"
					>Organizers</a
				>
			</li>
			<li>
				<a href="./private/settings" class="block px-4 py-2 text-gray-600 hover:bg-gray-200"
					>Settings</a
				>
			</li>
			<li>
				<button on:click={logout} class="block px-4 py-2 text-gray-600 hover:bg-gray-200"
					>Logout</button
				>
			</li>
		</ul>
	</nav>

	<!-- Main Content Area -->
	<main class="flex-1 p-8">
		<slot />
	</main>
</div>

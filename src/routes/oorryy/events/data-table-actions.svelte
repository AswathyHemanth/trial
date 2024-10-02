<script lang="ts">
	import Ellipsis from 'lucide-svelte/icons/ellipsis';
	import Trash2 from 'lucide-svelte/icons/trash-2';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import { Button } from '$lib/components/ui/button';
	import { goto } from '$app/navigation';
	import * as AlertDialog from '$lib/components/ui/alert-dialog';
	import { enhance } from '$app/forms';

	export let id: string;
	// $: console.log('ID passed from Data-Table to Table Actions: ', id);
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger asChild let:builder>
		<Button variant="ghost" builders={[builder]} size="icon" class="relative h-8 w-8 p-0">
			<span class="sr-only">Open menu</span>
			<Ellipsis class="h-4 w-4" />
		</Button>
	</DropdownMenu.Trigger>
	<DropdownMenu.Content>
		<DropdownMenu.Group>
			<DropdownMenu.Label>Actions</DropdownMenu.Label>
			<!-- <DropdownMenu.Item on:click={() => navigator.clipboard.writeText(id)}>
				Copy payment ID
			</DropdownMenu.Item> -->
			<DropdownMenu.Item on:click={() => goto(`/private/events/${id}`)}>
				View Event Details
			</DropdownMenu.Item>
		</DropdownMenu.Group>
		<DropdownMenu.Separator />
		<DropdownMenu.Item on:click={() => goto(`/private/events/${id}/edit`)}
			>Edit Event</DropdownMenu.Item
		>

		<!-- <DropdownMenu.Item class="text-destructive">
			<form method="POST" action="?/delete">
				<input type="hidden" name="eventId" value={id} />
				<button>Delete Event</button>
			</form> 
		</DropdownMenu.Item> -->
	</DropdownMenu.Content>
</DropdownMenu.Root>

<!-- <AlertDialog.Root>
	<AlertDialog.Trigger><Trash2 class="text-destructive" /></AlertDialog.Trigger>
	<AlertDialog.Content>
		<AlertDialog.Header>
			<AlertDialog.Title>Are you absolutely sure?</AlertDialog.Title>
			<AlertDialog.Description>
				This action cannot be undone. This will permanently delete the event.
			</AlertDialog.Description>
		</AlertDialog.Header>
		<AlertDialog.Footer>
			<AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
			<form
				method="POST"
				action="?/deleteEvent"
				use:enhance={() => {
					return async ({ result }) => {
						if (result.type === 'success') {
							closeDeleteModal();
							// You might want to add some feedback here, like a toast notification
							// Or redirect the user
							// goto('/events');
						}
					};
				}}
			>
				<input type="hidden" name="id" value={id} />
				<AlertDialog.Action>Continue</AlertDialog.Action>
			</form></AlertDialog.Footer
		>
	</AlertDialog.Content>
</AlertDialog.Root> -->

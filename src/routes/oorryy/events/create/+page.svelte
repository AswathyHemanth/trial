<script>
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';

	import { Label } from '$lib/components/ui/label';
	import { Textarea } from '$lib/components/ui/textarea';
</script>

<div class="mx-auto max-w-md py-8">
	<h2 class="mb-6 text-center text-2xl font-bold">Create New Event</h2>
	<form method="POST" class="space-y-6">
		<div class="space-y-2">
			<Label>Event Name / Title *</Label>
			<Input name="eventName" placeholder="Enter event name" required />
		</div>
		<div class="space-y-2">
			<Label>Description *</Label>
			<Textarea name="description" placeholder="Enter event description" required />
		</div>

		<div class="space-y-2">
			<Label>Event Date and Time (Start) *</Label>
			<Input name="eventDateTime" type="datetime-local" required />
		</div>

		<div class="space-y-2">
			<Label>Location *</Label>
			<Input name="location" placeholder="Enter event location" required />
		</div>

		<div class="space-y-2">
			<Label>Banner Image URL *</Label>
			<Input name="imageUrl" placeholder="https://example.com/image.jpg" required />
		</div>
		<div class="space-y-2">
			<Label>Source URL *</Label>
			<Input name="sourceUrl" placeholder="https://example.com" required />
		</div>

		<Button type="submit" class="w-full">Create Event</Button>
	</form>
</div>

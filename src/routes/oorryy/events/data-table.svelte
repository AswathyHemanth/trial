<script lang="ts">
	import { createTable, Render, Subscribe, createRender } from 'svelte-headless-table';
	import { readable } from 'svelte/store';
	import * as Table from '$lib/components/ui/table';
	import DataTableActions from './data-table-actions.svelte';
	import { addPagination, addTableFilter } from 'svelte-headless-table/plugins';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';

	export let data;

	// Allow to set the types for te listing
	type eventsListType = {
		id: string;
		title: string;
		// status: 'draft' | 'published';
	};

	const eventList: eventsListType[] = [];

	// $: console.log('Data passed from Parent to Data-Table: ', data);

	for (const d of data) {
		eventList.push({
			id: d.id,
			title: d.title
		});
	}

	// console.log('Array of event List:', eventList);

	const table = createTable(readable(eventList), {
		page: addPagination(),
		filter: addTableFilter({
			fn: ({ filterValue, value }) => value.toLowerCase().includes(filterValue.toLowerCase())
		})
	});

	const columns = table.createColumns([
		// table.column({
		// 	accessor: 'id',
		// 	header: 'ID',
		// 	plugins: {
		// 		filter: {
		// 			exclude: true
		// 		}
		// 	}
		// }),
		table.column({
			accessor: 'title',
			header: 'Name',
			plugins: {
				filter: {
					exclude: false
				}
			}
		}),

		// table.column({
		// 	accessor: 'status',
		// 	header: 'Status'
		// }),

		table.column({
			accessor: ({ id }) => id,
			header: '',
			plugins: {
				filter: {
					exclude: true
				}
			},
			cell: ({ value }) => {
				return createRender(DataTableActions, { id: value });
			}
		})
	]);

	const { headerRows, pageRows, tableAttrs, tableBodyAttrs, pluginStates } =
		table.createViewModel(columns);

	const { hasNextPage, hasPreviousPage, pageIndex, pageCount } = pluginStates.page;
	const { filterValue } = pluginStates.filter;
</script>

<div class="flex items-center py-4">
	<Input class="max-w-sm" placeholder="Filter emails..." type="text" bind:value={$filterValue} />
</div>
<div class="rounded-md border">
	<Table.Root {...$tableAttrs}>
		<Table.Header>
			{#each $headerRows as headerRow}
				<Subscribe rowAttrs={headerRow.attrs()}>
					<Table.Row>
						{#each headerRow.cells as cell (cell.id)}
							<Subscribe attrs={cell.attrs()} let:attrs props={cell.props()}>
								<Table.Head {...attrs}>
									{#if cell.id === 'amount'}
										<div class="text-right">
											<Render of={cell.render()} />
										</div>
									{:else}
										<Render of={cell.render()} />
									{/if}
								</Table.Head>
							</Subscribe>
						{/each}
					</Table.Row>
				</Subscribe>
			{/each}
		</Table.Header>
		<Table.Body {...$tableBodyAttrs}>
			{#each $pageRows as row (row.id)}
				<Subscribe rowAttrs={row.attrs()} let:rowAttrs>
					<Table.Row {...rowAttrs}>
						{#each row.cells as cell (cell.id)}
							<Subscribe attrs={cell.attrs()} let:attrs>
								<Table.Cell {...attrs}>
									{#if cell.id === 'amount'}
										<div class="text-right font-medium">
											<Render of={cell.render()} />
										</div>
									{:else if cell.id === 'status'}
										<div class="capitalize">
											<Render of={cell.render()} />
										</div>
									{:else}
										<Render of={cell.render()} />
									{/if}
								</Table.Cell>
							</Subscribe>
						{/each}
					</Table.Row>
				</Subscribe>
			{/each}
		</Table.Body>
	</Table.Root>
</div>

<div class="flex items-center justify-end space-x-4 py-4">
	<Button
		variant="outline"
		size="sm"
		on:click={() => ($pageIndex = $pageIndex - 1)}
		disabled={!$hasPreviousPage}>Previous</Button
	>
	{$pageIndex + 1} out of {$pageCount}
	<Button
		variant="outline"
		size="sm"
		disabled={!$hasNextPage}
		on:click={() => ($pageIndex = $pageIndex + 1)}>Next</Button
	>
</div>

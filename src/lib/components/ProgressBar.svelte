<script>
	export let active = 0
	export let stepLength = 4

	let steps = Array.from({ length: stepLength })
</script>

<div class='progress'>
	{#each steps as step, i}
		<div class='progress__bar' class:completed={active >= i}></div>
	{/each}
</div>

<style lang="scss">
    .progress {
		display: flex;
		gap: 8px;
		justify-content: center;
		margin-bottom: 10px;

		&__bar {
			width: 32px;
			height: 6px;
			border-radius: 50px;
			background: var(--color-bg-primary);


		}
	}

	.completed {
		background: var(--color-bg-fifth);
	}
</style>

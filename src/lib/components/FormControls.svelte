<script>
	export let buttonsControls;
	export let next = true;
</script>

<div class='controls'>
    <button class='controls__button button' id='buttonControlsNext' style="display: {next ? 'block' : 'none'};">{buttonsControls.next}</button>
</div>

<style lang="scss">
    .controls {
		display: flex;
		justify-content: end;

		&__button {
			padding: 8px 24px;
			font-size: 20px;
			line-height: 25px;
		}
	}
</style>

<script>

</script>

<div class='progress'>
    <div class='progress__bar progress__bar--completed'></div>
    <div class='progress__bar'></div>
    <div class='progress__bar'></div>
    <div class='progress__bar'></div>
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

			&--completed {
				background: var(--color-bg-fifth);
			}
		}
	}
</style>

<script>
    import WorkMoreItem from "./WorkMoreItem.svelte";

    export let timesData

    function changeTime(obj) {
		let {value, time} = obj
		const container = window.formWorkMode
		let items = container.querySelectorAll('.item')
		const change = (item) => {
			const checkbox = item.querySelector('input.item__checkbox')
			const inputsTime = item.querySelectorAll('input[type="time"]')
			checkbox.checked = true
			inputsTime[0].value = time[0]
			inputsTime[1].value = time[1]
		}

		if(value == 'all day') items.forEach(item => change(item))
		else if(value == 'weekdays') {
			items.forEach((item, i) => {
				if(i < 5) change(item)
			})
		}
	}
</script>

<div class="work-mode" id="formWorkMode">
    <div class='work-mode__header'>
        <p class='work-mode__header-name'>{timesData.title}</p>
    </div>
    <div class="work-mode__items">
        {#each timesData.days as day}
            <WorkMoreItem
            on:select={(e) => changeTime(e.detail)}
            day={day}
            text={timesData.timeText}/>
        {/each}
    </div>
</div>

<style lang="scss">
    .work-mode {
		display: flex;
		flex-direction: column;
		gap: 10px;
		&__header {

		}

		&__header-name {
			font-size: 18px;
		}

		&__items {
			display: flex;
			flex-direction: column;
			gap: 5px;
			transition: all 0.5s;
		}
	}

</style>

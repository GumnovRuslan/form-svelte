<script>
	import { onMount } from "svelte";
	import Checkbox from "./Checkbox.svelte";
	import { time } from "../icons";
    export let data

	let checked = [];
	// $:checkedDay = checked

	let dataHours = Array.from({length: 12}).map((_, i) => i < 10 ? `0${i}` : i)
	let dataMinutes = Array.from({length: 12}).map((_, i) => {
		let minute = `${i * 5}`
		return minute <= 9 ? 0 + minute : minute
	})

	let list1 = false
	onMount(() => {
		window.addEventListener('click', closeList)
	})

	function closeList(e) {
		const target = e.target
		const container = target.closest('.work-mode__time')
		const lists = document.querySelectorAll('.work-mode__time-list')
		let targetList = null
		if(container) {
			targetList = container.querySelector('.work-mode__time-list')
		}
		// console.log(lists)
		// console.log(container)
		lists.forEach(list => {
			if(container) {
				if(targetList != list) {
					list.dataset.listShow = '0'
					list.style.display = 'none'
				}
			}
			else {
				list.dataset.listShow = '0'
				list.style.display = 'none'
			}
			
		})
		
	}

	function inputTime(e) {
		let el = e.currentTarget
		el.value = el.value.replace(/\D/g, '')
		if(el.value.length > 2) el.value = el.value.slice(0,2)
	}

	function changeHour(e) {
		let el = e.currentTarget
		if(+el.value > 24) el.value = '24'
		if(el.value.length < 2) el.value = '0'+el.value
	}

	function changeMinute(e) {
		let el = e.currentTarget
		if(+el.value > 59) el.value = '59'
		if(el.value.length < 2) el.value = '0'+el.value
		window.editCansel.click
	}

	function showList(e) {
		let list = e.currentTarget.querySelector('.work-mode__time-list')
		if(!+list.dataset.listShow) {
			list.dataset.listShow = '1'
			list.style.display = 'flex'
		}
	}

	function selectTime(e) {
		let el = e.currentTarget
		const type = el.dataset.time
		let container = el.closest('.work-mode__time')
		let inputTime = type == 'hour' ? container.querySelector('.work-mode__time-hour') : container.querySelector('.work-mode__time-minute')
		inputTime.value = el.textContent
	}

	function closeItem(e) {
		const checkbox = e.target
		const item = checkbox.closest('.work-mode__item')
		const list = item.querySelector('.work-mode__time-list')
		if(!checkbox.checked) {
			list.dataset.listShow = '0'
			list.style.display = 'none'
		}
	}

	function selectDays(e) {
		const target = e.currentTarget
		const type = target.dataset.days
		const items = window.formWorkMode.querySelectorAll('.work-mode__item')
		let time = changeTime(target.closest('.work-mode__item'))

		let allCheckbox = []
		items.forEach((item, i) => {
			if(type == 'weekdays' && i < 5 || type == 'all') {
				allCheckbox.push(item.querySelector('.work-mode__item-checkbox').value)
				changeTime(item, 'set', time)
			} else {
				changeTime(item, 'set')
			}
		})
		checked = allCheckbox
	}

	function changeTime(item, type='get', time={start: ['', ''], end: ['', '']}) {
		let times = item.querySelectorAll('.work-mode__time')
		let startTime = times[0].querySelectorAll('input[type="number"]')
		let endTime = times[1].querySelectorAll('input[type="number"]')
		let text = item.querySelector('.work-mode__item-time-show-text')
		if(type == 'get') {
			return {
				start: [startTime[0].value, startTime[1].value],
				end: [endTime[0].value, endTime[1].value]
			}
		} else if(type == 'set') {
			startTime[0].value = time.start[0]
			startTime[1].value = time.start[1]
			endTime[0].value = time.end[0]
			endTime[1].value = time.end[1]
			text.textContent = `${time.start[0] || '00'}:${time.start[1] || '00'} - ${time.end[0] || '00'}:${time.end[1] || '00'}`
		}
	}

	function saveDate(e) {
		let item = e.target.closest('.work-mode__item')
		let text = item.querySelector('.work-mode__item-time-show-text')
		const time = changeTime(item, 'get')
		text.textContent = `${time.start[0] || '00'}:${time.start[1] || '00'} - ${time.end[0] || '00'}:${time.end[1] || '00'}`
	}
</script>

<div class="work-mode" id="formWorkMode">
    <div class='work-mode__header'>
        <p class='work-mode__header-text'>{data.title}</p>
    </div>
    <div class="work-mode__items">
        {#each data.days as day, i}
			<div class='work-mode__item'>
				<div class='work-mode__item-header'>
					<label class='work-mode__item-label'>
						<Checkbox checked={checked.find(el => el == day.value)}/>
						<input type='checkbox' class='work-mode__item-checkbox' bind:group={checked} value={day.value} on:input={closeItem}>
					</label>
					<p class='work-mode__day-text' class:work-mode__day-text--disabled={!checked.find(el => el == day.value)}>{day.name}</p>
				</div>
				<div class='work-mode__item-content' class:work-mode__disabled={!checked.find(el => el == day.value)}>
					<input type='checkbox' class="work-mode__item-checkbox-show" id={day.value}>
					<div class='work-mode__item-time-show'>
						<div class='work-mode__item-time-show-time'>
							<div class='work-mode__item-time-show-icon'>
								{@html time}
							</div>
							<p class='work-mode__item-time-show-text'>10:00 - 19:00</p>
						</div>
						<label for={day.value} type="button" class='work-mode__item-time-show-button button-second'>Edit</label>
					</div>
					<div class='work-mode__times'>
						<p class="work-mode__times-text">Time:</p>
						<div class='work-mode__times-inner'>
							<button type="button" class='work-mode__time' on:click={showList}>
								<input type='number' class="work-mode__time-input work-mode__time-hour" placeholder="00" on:input={inputTime} on:change={changeHour}>
								<span class="work-mode__time-delimiter">:</span>
								<input type='number' class="work-mode__time-input work-mode__time-minute" placeholder="00" on:input={inputTime} on:change={changeMinute}>
								<div class='work-mode__time-list' style:display={list1 ? 'flex': 'none'}>
									<div class='work-mode__time-list-hours work-mode__time-list-items'>
										{#each dataHours as hour}
											<button type="button" class='work-mode__time-list-hour work-mode__time-list-item' data-time=hour on:click={selectTime}>{hour}</button>
										{/each}
									</div>
									<div class='work-mode__time-list-minutes work-mode__time-list-items'>
										{#each dataMinutes as minute}
											<button type="button" class='work-mode__time-list-hour work-mode__time-list-item' data-time=minute on:click={selectTime}>{minute}</button>
										{/each}
									</div>
								</div>
							</button>
							<span class='work-mode__times-delimiter'>-</span>
							<button type="button" class='work-mode__time' on:click={showList}>
								<input type='number' class="work-mode__time-input work-mode__time-hour" placeholder="00" on:input={inputTime} on:change={changeHour}>
								<span class="work-mode__time-delimiter">:</span>
								<input type='number' class="work-mode__time-input work-mode__time-minute" placeholder="00" on:input={inputTime} on:change={changeMinute}>
								<div class='work-mode__time-list' style:display={list1 ? 'flex': 'none'}>
									<div class='work-mode__time-list-hours work-mode__time-list-items'>
										{#each dataHours as hour}
											<button type="button" class='work-mode__time-list-hour work-mode__time-list-item' data-time=hour on:click={selectTime}>{hour}</button>
										{/each}
									</div>
									<div class='work-mode__time-list-minutes work-mode__time-list-items'>
										{#each dataMinutes as minute}
											<button type="button" class='work-mode__time-list-hour work-mode__time-list-item' data-time=minute on:click={selectTime}>{minute}</button>
										{/each}
									</div>
								</div>
							</button>
						</div>
					</div>
					<div class='work-mode__range-buttons'>
						<p class="work-mode__range-text">Apply to:</p>
						<div class='work-mode__range-buttons-inner'>
							<button type="button" class='work-mode__range-button' data-days="all" on:click={selectDays}>All days</button>
							<button type="button" class='work-mode__range-button' data-days="weekdays" on:click={selectDays}>Weekdays</button>
						</div>
					</div>
					<div class='work-mode__controls-buttons'>
						<label for={day.value} type="button" class='work-mode__controls-button' id="editCansel" on:click={saveDate}>Cancel</label>
						<!-- <label for={day.value} type="button" class='work-mode__controls-button' on:click={saveDate}>Save</label> -->
					</div>
				</div>
			</div>
        {/each}
    </div>
</div>

<style lang="scss">
    .work-mode {
		display: flex;
		flex-direction: column;
		&__header {
			margin-bottom: 24px;
		}
		&__item-label {
			cursor: pointer;
		}
		&__header-text {
			font-size: 20px;
			line-height: 25px;
			font-weight: 500;
			color: var(--color-text-primary);
		}
		&__items {
			display: flex;
			flex-direction: column;
			gap: 16px;
			transition: all 0.5s;
		}

		&__item {
			display: flex;
			padding: 12px 24px;
			border-radius: 20px;
			box-shadow: 0 4px 8px #9AB3D54D;
			background: var(--color-bg-secondary);
			@media (min-width: 600px) {
				gap: 20px;
			}
			@media (max-width: 600px) {
				flex-direction: column;
			}
		}
		&__item-header {
			display: flex;
			align-items: center;
			gap: 8px;

			@media (max-width: 600px) {
				padding-bottom: 12px;
				border-bottom: 1px solid var(--color-bg-fourth);
				margin-bottom: 12px;
			}
		}
		&__item-checkbox {
			display: none;
		}
		&__day-text {
			font-weight: 400;
			font-size: 16px;
			line-height: 20px;
			color: var(--color-text-primary);

			&--disabled {
				opacity: 0.5;
			}
		}
		&__item-content {
			flex: content;
			display: flex;
			@media (min-width: 1000px) {
				align-items: center;
				justify-content: end;
				gap: 38px;
			}
			@media (min-width: 600px) and (max-width: 1000px) {
				flex-direction: column;
				align-items: end;
				gap: 12px;
			}
			@media (max-width: 600px) {
				flex-direction: column;
			}
		}
		&__disabled {
			filter: grayscale(100%);
			opacity: 0.5;
			pointer-events: none;
		}
		&__item-checkbox-show {
			display: none;
			&:checked ~ .work-mode__item-time-show {
				display: none;
			}
			&:checked ~ .work-mode__times,
			&:checked ~ .work-mode__range-buttons,
			&:checked ~ .work-mode__controls-buttons {
				display: flex;
			}
		}
		&__item-time-show {
			color: var(--color-text-primary);

			@media (min-width: 600px) {
				display: none;
			}
			@media (max-width: 600px) {
				display: flex;
				align-items: center;
				justify-content: space-between;
				gap: 10px;
			}
		}
		&__item-time-show-time {
			display: flex;
			align-items: center;
			gap: 8px;
		}
		&__item-time-show-icon {
			max-width: 20px;
			max-height: 20px;
			color: inherit;
		}
		&__item-time-show-text {
			font-size: 16px;
			font-weight: 400;
			line-height: 20px;
			color: inherit;
		}
		&__item-time-show-button {
			padding: 8px 20px;
			border-radius: 100px;
			font-size: 16px;
			font-weight: 400;
			line-height: 20px;
			border: 2px solid var(--color-btn-third);
		}
		&__times {
			display: flex;
			align-items: center;
			gap: 16px;
			@media (max-width: 600px) {
				display: none;
				justify-content: space-between;
				margin-bottom: 12px;
			}
		}
		&__times-delimiter {
			color: var(--color-bg-primary);
		}
		&__times-text {
			font-weight: 400;
			font-size: 16px;
			line-height: 20px;
			color: var(--color-text-primary);
		}
		&__times-inner {
			display: flex;
			align-items: center;
			gap: 12px;
		}

		&__time {
			position: relative;
			display: flex;
			align-items: center;
			// gap: 4px;
			border-radius: 30px;
			// padding: 4px 16px;
			border: none;
			background: var(--color-bg-fourth);
		}
		&__time-list {
			position: absolute;
			top: calc(100% + 5px);
			z-index: 1;
			left: 0;
			width: 100%;
			max-height: calc(130px + 20px);
			overflow: hidden;
			display: flex;
			// align-items: center;
			justify-content: center;
			// gap: 6px;
			padding: 10px 6px;
			border-radius: 20px;
			background: var(--color-bg-primary);
		}
		&__time-list-items {
			flex: 100%;
			display: flex;
			gap: 2px;
			flex-direction: column;
			align-items: center;
			overflow-y: scroll;
			overflow-x: hidden;
			&::-webkit-scrollbar { 
				width: 0; 
			}
		}
		&__time-list-item {
			padding: 3px 5px;
			border-radius: 10px;
			cursor: pointer;
			border: none;
			background: transparent;
			font-size: 16px;
			font-weight: 400;
			line-height: 20px;
			&:hover {
				background: var(--color-bg-secondary);
			}
		}
		&__time-delimiter {
			font-weight: 400;
			font-size: 16px;
			line-height: 20px;
			color: var(--color-bg-primary);
		}
		&__time-input {
			width: 38px;
			height: 30px;
			padding: 6px 0;
			padding: 0;
			text-align: center;
			background: transparent;
			border: none;
			font-weight: 400;
			font-size: 16px;
			line-height: 20px;
			cursor: pointer;
			color: var(--color-text-primary);
		}
		&__range-buttons {
			display: flex;
			align-items: center;
			gap: 16px;

			@media (max-width: 600px) {
				display: none;
				justify-content: space-between;
				margin-bottom: 20px;
			}
		}

		&__range-text {
			font-weight: 400;
			font-size: 16px;
			line-height: 20px;
			color: var(--color-text-primary);
		}
		&__range-buttons-inner {
			display: flex;
			align-items: center;
			gap: 8px;
		}
		&__range-button {
			padding: 6px 16px;
			border-radius: 100px;
			border: 2px solid var(--color-btn-third);
			cursor: pointer;
			transition: 0.2s;
			background: transparent;
			color: var(--color-text-third);

			&:hover {
				background: var(--color-bg-primary);
				color: var(--color-text-secondary);
			}
		}
		&__controls-buttons {
			display: flex;
			justify-content: space-between;
			gap: 10px;
			display: none;
		}
		&__controls-button {
			padding: 8px 20px;
			font-size: 16px;
			font-weight: 400;
			line-height: 20px;
			border-radius: 100px;
			border: 1.5px solid var(--color-btn-primary);
			transition: 0.2s;
			cursor: pointer;
			&:nth-child(1) {
				background: transparent;
				color: var(--color-btn-primary);
				&:hover {
					background: var(--color-btn-primary);
					color: var(--color-btn-secondary);
				}
			}
			&:nth-child(2) {
				background: var(--color-btn-primary);
				color: var(--color-btn-secondary);
				box-shadow: 0 4px 8px #EF743E4D;
				&:hover {
					background: transparent;
					color: var(--color-btn-primary);
				}
			}
		}
	}

</style>

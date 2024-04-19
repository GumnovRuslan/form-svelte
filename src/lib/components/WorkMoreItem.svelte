<script>
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();
    export let day = ''
    export let text = ['', '']

    let time = ['', '']
</script>

<div class="item">
    <input type="checkbox" class="item__checkbox" />
    <div class="item__info">
        <span class="item__text">{day}</span>
        <div class='item__buttons'>
            <button class='item__button' type="button" on:click={() => dispatch('select', {value: 'all day', time: time})}>Применить ко всем</button>
            <button class='item__button' type="button" on:click={() => dispatch('select', {value: 'weekdays', time: time})}>Применить к будням</button>
        </div>
    </div>
    <div class="item__content">
        <div class="item__content-line">
            <span class="item__content-line-text"> {text[0]} </span>
            <input class="item__content-line-input" type="time" bind:value={time[0]}/>
        </div>
        <div class="item__content-line">
            <span class="item__content-line-text"> {text[1]} </span>
            <input class="item__content-line-input" type="time" bind:value={time[1]}/>
        </div>
    </div>
</div>

<style lang="scss">
    .item {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 10px;
		border-radius: 20px;
		background: var(--color-bg-secondary);

        @media (max-width: 500px) {
			flex-wrap: wrap;
			row-gap: 10px;
	    }

        &__checkbox:checked ~ &__content,
        &__checkbox:checked ~ &__info {
            opacity: 1;
            pointer-events: auto;
        }

        &__checkbox {
            // align-self: flex-start;
            width: 20px;
            height: 20px;
            margin: 0 10px 0 0;
            cursor: pointer;
	    }

        &__info {
            flex: content;
            display: inline-flex;
            flex-direction: column;
            // align-items: center;
            margin-right: 15px;
            opacity: 0.3;
            pointer-events: none;
            color: var(--color-text-primary);

            @media (min-width: 500px) {
                margin-right: 15px;
            }
        }

        &__text {
            margin-bottom: 5px;
        }

        &__buttons {
            display: flex;
            gap: 10px;
        }

        &__button {
            font-size: 10px;
            padding: 0;
            margin: 0;
        }

        &__content {
            display: flex;
            column-gap: 15px;
            row-gap: 10px;
            flex-wrap: wrap;
            opacity: 0.3;
            pointer-events: none;

            @media (min-width: 500px) {
                justify-content: end;
            }

            @media (max-width: 500px) {
			    justify-content: center;
        	}
        }

        &__content-line {
            display: flex;
            gap: 10px;
            align-items: center;
        }

        &__content-line-text {
            text-align: end;
            color: var(--color-text-primary);
        }

        &__content-line-input {
            text-align: center;
            width: min-content;
            font-size: 18px;
            border: none;
            padding: 5px 10px;
            cursor: pointer;
        }
	}
</style>

<script>
    import Checkbox from "./Checkbox.svelte";

    export let data

    let checked = [];
</script>

<div class="preferences" id="formSurvey">
    <div class="preferences__header">
        <p class="preferences__header-title">{data.title}</p>
    </div>

    <div class="preferences__items">
        {#each data.categories as category}
            <label class="preferences__item">
                <Checkbox checked={checked.find(el => el == category)}/>
                <input class="preferences__item-checkbox" type="checkbox" bind:group={checked} value={category}/>
                <span class="preferences__item-text">{category}</span>
            </label>
        {/each}
    </div>
</div>

<style lang='scss'>
    .preferences {
        &__header {
            margin-bottom: 24px;
        }
        &__header-title {
            font-weight: 500;
            font-size: 20px;
            line-height: 20px;
            color: var(--color-text-primary);
        }
        &__items {
            display: grid;
            column-gap: 20px;
            row-gap: 16px;
            align-items: start;

            @media (min-width: 500px) {
                grid-template-columns: repeat(2, 1fr);
            }

            @media (max-width: 500px) {
                grid-template-columns: repeat(1, 1fr);
            }
        }
        &__item {
            display: flex;
            align-items: center;
            gap: 12px;
            cursor: pointer;
        }
        &__item-checkbox {
            display: none;
        }
        &__item-text {
            font-weight: 400;
            font-size: 16px;
            line-height: 20px;
            color: var(--color-text-primary);
        }
	}
</style>
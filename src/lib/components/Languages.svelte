<script>
    import Checkbox from "./Checkbox.svelte";
    import Input from "./Input.svelte";
    export let data

    let checked = [];
</script>

<div class="languages" id="communicationLanguages">
    <div class="languages__header" id="communicationLanguages">
        <p class="languages__header-title">{data.title}</p>
    </div>
    <div class="languages__items">
        {#each data.languages as lang, i}
            <label class="languages__item">
                <Checkbox checked={checked.find(el => el == ++i)}/>
                <input type="checkbox" class="languages__item-checkbox" bind:group={checked} value={++i}/>
                <span class="languages__item-text">{lang}</span>
            </label>
        {/each}

        <div class="languages__item-another">
            <label class="languages__item">
                <Checkbox checked={checked.find(el => el == 'another')}/>
                <input type="checkbox" class="languages__item-checkbox" bind:group={checked} value='another'/>
                <span class="languages__item-text">Another</span>
            </label>
            <Input 
                placeholder={"Enter other languages"} 
                disabled={!checked.find(el => el == 'another')} 
                required={checked.find(el => el == 'another')}
                invalid={e => e.currentTarget.classList.add('invalid')}
                />
        </div>
    </div>

</div>

<style lang='scss'>
    .languages {
        &__header {
            margin-bottom: 24px;
        }
        &__header-title {
            font-weight: 500;
            font-size: 20px;
            line-height: 25px;
            color: var(--color-text-primary);
        }
        &__items {
            display: grid;
            align-items: start;
            row-gap: 16px;
            column-gap: 20px;

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
        &__item-another {
            display: flex;
            flex-direction: column;
            
            @media (min-width: 500px) {
                gap: 22px;
            }
            @media (max-width: 500px) {
                gap: 16px;
            }
        }
        &__item-checkbox {
            display: none;
        }
        &__item-text {
            font-size: 16px;
            line-height: 20px;
            color: var(--color-text-primary)
        }
    }
</style>
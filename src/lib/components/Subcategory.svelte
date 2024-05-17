<script>
    import { onMount } from "svelte";
    import { arrowSelect } from "../icons";
    import Checkbox from "./Checkbox.svelte";

    export let data
    export let categoryId
    export let valid

    let subcategoryShow = false
    let defaultText = 'select'
    let subcategories = []

    $: isDisabled = Number.isInteger(categoryId);
    $: {
        if(categoryId) {
            subcategories = []
        }
    };

    onMount(() => {
        window.addEventListener('click', (e) => {
            if(!e.target.closest('.subcategory__inner')) subcategoryShow = false
        })
    });
</script>

<div class='subcategory' data-subcategories-select={subcategories} class:disabled={!isDisabled} id=subcategorySelect>
    <input type='checkbox' id="subcategory" bind:checked={subcategoryShow}>
    <div class='subcategory__inner' class:subcategory__inner-validate={!valid}>
        <label for="subcategory" class='subcategory__header' class:subcategory__header--disabled={!isDisabled}>
            <p class='subcategory__header-text'>{defaultText}</p>
            <div class='subcategory__header-icon'>
                {@html arrowSelect}
            </div>
        </label>
        <div class='subcategory__content'>
            <div class='subcategory__list'>
                {#if isDisabled}
                    {#each data.categories[categoryId].subcategories as subcategory}
                        <label class='subcategory__item'>
                            <Checkbox checked={subcategories.find(el => el==subcategory.value)}/>
                            <input type='checkbox' class="subcategory__item-checkbox" bind:group={subcategories} value={subcategory.value}>
                            <p class='subcategory__item-text'>{subcategory.name}</p>
                        </label>
                    {/each}
                {/if}
            </div>
        </div>
    </div>
</div>

<style lang="scss">
    .disabled {
        opacity: 0.7;
        pointer-events: none;
    }

    #subcategory {
        display: none;
        &:checked {
            & ~ .subcategory__inner {
                outline: 2px solid var(--color-bg-primary);
                & > .subcategory__content{
                    max-height: 100%;
                }
            }
        }
    }

    .subcategory {
        position: relative;
        height: 33px;
        width: 100%;

        &__inner {
            width: 100%;
            position: absolute;
            z-index: 2;
            top: 0;
            left: 0;
            display: inline-block;
            padding: 0 16px;
            border-radius: 20px;
            box-shadow: 0 4px 8px #9AB3D54D;
            background: var(--color-bg-secondary);
            color: var(--color-text-third);

            &:hover {
                outline: 2px solid var(--color-bg-primary);
            }

            &-validate {
                outline: 2px solid var(--color-invalid);
            }
        }
        &__header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 10px;
            padding: 8px 0;
            cursor: pointer;

            &--disabled {
                color: var(--color-text-primary);
                opacity: 0.3;
            }
        }
        &__header-text {
            color: inherit
        }
        &__header-icon {
            color: inherit;
            max-width: 16px;
            max-height: 17px;
        }
        &__content {
            max-height: 0;
            overflow: hidden;
        }
        &__list {
            display: inline-flex;
            flex-direction: column;
            gap: 8px;
            padding: 8px 0 20px;
            width: 100%;
        }
        &__item {
            display: inline-flex;
            gap: 12px;
            align-items: center;
            padding: 6px 12px;
            border-radius: 100px;
            cursor: pointer;

            &:hover {
                background: #EFF5FB;
            }
        }
        &__item-checkbox {
            display: none;
        }
        &__item-icon {
            max-width: 24px;
            max-height: 24px;
        }

    }
</style>

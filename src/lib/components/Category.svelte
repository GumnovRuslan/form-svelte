<script>
    import { arrowSelect, categoriesIcon } from "../icons";
    import { onMount } from "svelte";
    import { createEventDispatcher } from "svelte";
    export let data
    export let valid

    let dispatch = createEventDispatcher();
    $: headerText = selectCategoryIndex ? data.categories[selectCategoryIndex].name : data.subcategory_default;
    let categoryShow = false;
    let selectCategoryValue = '';
    let selectCategoryIndex;

    onMount(() => {
        window.addEventListener('click', (e) => {
            if(!e.target.closest('.category__inner')) categoryShow = false
        })
    });

    function selectCategory(e) {
        categoryShow = false
        const value = e.currentTarget.dataset.value
        const index = e.currentTarget.dataset.index
        headerText = data.categories[index].name
        selectCategoryValue = value
        selectCategoryIndex = index
        dispatch('selectCategory', {index: index})
    };
</script>

<div class='category' id="categorySelect" data-select-value={selectCategoryValue} data-select-index={selectCategoryIndex}>
    <input type='checkbox' id="category" bind:checked={categoryShow}>
    <div class='category__inner' class:category__inner-validate={!valid}>
        <label for="category" class='category__header'>
            <p class='category__header-text'>{headerText}</p>
            <div class='category__header-icon'>
                {@html arrowSelect}
            </div>
        </label>
        <div class='category__content'>
            <div class='category__list'>
                {#each data.categories as category, i}
                    <div class='category__item'
                    data-value={category.value}
                    data-index={i}
                    on:click={selectCategory}
                    class:select={i == selectCategoryIndex}>
                        <div class='category__item-icon'>
                            {@html categoriesIcon[category.value]}
                        </div>
                        <p class='category__item-text'>{category.name}</p>
                    </div>
                {/each}
            </div>
        </div>
    </div>
</div>

<style lang="scss">
    .select {
        background: var(--color-bg-primary) !important;
        color: var(--color-text-secondary) !important;
    }

    #category {
        display: none;
        &:checked {
            & ~ .category__inner {
                outline: 2px solid var(--color-bg-primary);
                & > .category__content{
                    max-height: 100%;
                }
            }
        }
    }

    .category {
        position: relative;
        height: 33px;
        width: 100%;

        &__inner {
            width: 100%;
            position: absolute;
            z-index: 3;
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
            display: flex;
            flex-direction: column;
            gap: 8px;
            padding: 8px 0 20px;
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
        &__item-icon {
            max-width: 24px;
            max-height: 24px;
        }

    }
</style>

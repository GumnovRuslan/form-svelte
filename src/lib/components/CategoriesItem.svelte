<script>
    import { arrowSelect } from "../icons"
    export let category = {}
    export let subcategoryDefault = ''

    let group = []

    function changeCategory(e) {
        const categories = window.formCategories.querySelectorAll('input[type="radio"][name="category"]')
        categories.forEach(category => {
            const item = category.closest('.item')
            const subcategoryContainer = item.querySelector('.item__subcategories')
            const subcategory = item.querySelector('input[type="checkbox"]')
            subcategory.required = category.checked && !category.dataset.select

            if(category.checked) {
                subcategoryContainer.classList.remove('disabled')
            } else {
                subcategoryContainer.classList.add('disabled')
                moveList(subcategoryContainer, false)
            }
        });
    }

    function subcategoriesChecked(e) {
        const target = e.target
        const subcategoriesContainer = target.closest('.item__subcategories-list-inner')
        const subcategoriesCheckbox = subcategoriesContainer.querySelectorAll('input[type="checkbox"]')
        setTimeout(() => subcategoriesCheckbox.forEach(input => input.required = !group.length), 50);
    }

    function subcategoriesList(e) {
        const container = e.target.closest('.item__subcategories')
        const list = container.querySelector('.item__subcategories-list')
        moveList(container, !+list.dataset.isopen)
    }

    function moveList(itemContainer, open) {
        const item = itemContainer.closest('.item')
        const icon = item.querySelector('.item__subcategories-header-icon')
        const list = itemContainer.querySelector('.item__subcategories-list')

        if(open) {
            list.dataset.isopen = '1'
            list.style.height = 'max-content'
            list.style.top = 'calc(100% + 5px)'
            icon.style.transform = 'rotate(180deg)'
        } else {
            list.dataset.isopen = '0'
            list.style.height = '0px'
            list.style.top = '0'
            icon.style.transform = 'rotate(0)'
        }
    }
</script>

<div class='item'>
    <label class="item__category-inner">
        <input type='radio' name='category' class="item__category custom-checkbox" data-name={category.value} data-select="{group}" required on:change={changeCategory}>
        <p class="item__category-text">{category.name}</p>
    </label>
    <div class='item__subcategories disabled'>
        <div class='item__subcategories-inner'>
            <button type="button" class="item__subcategories-header" name='{category.name}' on:click={subcategoriesList}>
                <span class='item__subcategories-header-text'>{subcategoryDefault}</span>
                <span class='item__subcategories-header-icon'>
                    {@html arrowSelect}
                </span>
            </button>
            <div class='item__subcategories-list'>
                <div class='item__subcategories-list-inner'>
                {#each category.subcategories as subcategory}
                    <label class="item__subcategories-item">
                        <input class="item__subcategories-item-checkbox" type="checkbox" bind:group={group} value={subcategory.value} name="{subcategory.name}" on:input={subcategoriesChecked}/>
                        <span class="item__subcategories-item-text">{subcategory.name}</span>
                    </label>
                {/each}
                </div>
            </div>
        </div>
    </div>
</div>

<style lang="scss">
    .item {
        display: grid;
        grid-template-columns: 1fr 250px;
        column-gap: 20px;

        @media (min-width: 600px) {
            align-items: center;
        }
        @media (max-width: 600px) {
            flex-direction: column;
            align-items: start;
        }
        .disabled {
            opacity: 0.5;
            pointer-events: none;
        }
        &__category-inner {
            display: inline-flex;
            align-items: center;
            gap: 16px;
            cursor: pointer;
        }
        &__category-text {
            font-size: 16px;
            line-height: 20px;
            color: var(--color-text-primary);
        }
        &__subcategories {
            position: relative;
            display:  inline-block;
            position: relative;
            height: 30px;
            width: 100%;
        }
        &__subcategories-inner {
            position: absolute;
            top: 0;
            left: 0;
            z-index: 1;
            color: var(--color-text-third);
            background: var(--color-bg-secondary);
            border-radius: 20px;
            width: 100%;
            padding: 6px 12px;
            &:hover {
                outline: 2px solid var(--color-text-third);
            }
        }
        &__subcategories-header {
            display: flex;
            gap: 15px;
            align-items: center;
            justify-content: space-between;
            border: none;
            background: transparent;
            cursor: pointer;
            color: inherit;
            width: 100%;
            padding: 0;
        }
        &__subcategories-header-text {
            text-wrap: nowrap;
            font-size: 16px;
            color: inherit;
        }
        &__subcategories-header-icon {
            flex: 1 0 auto;
            max-width: 16px;
            max-height: 17px;
            transition: 0.1s;
            color: inherit;
        }
        &__subcategories-list {
            height: 0;
            overflow: hidden;
        }
        &__subcategories-list-inner {
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 16px 0 10px 0;
            gap: 12px;
        }
        &__subcategories-item {
            display: flex;
            align-items: center;
            gap: 10px;
            cursor: pointer;
        }
        &__subcategories-item-checkbox {
            flex: 1 0 auto;
            width: 100%;
            max-width: 16px;
            height: 16px;
            margin: 0;
            cursor: pointer;
        }
        &__subcategories-item-text {
            font-size: 16px;
            line-height: 20px;
        }
    }

</style>

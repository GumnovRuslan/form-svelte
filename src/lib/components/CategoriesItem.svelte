<script>
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
        <p class="form__text">{category.name}</p>
    </label>
    <div class='item__subcategories disabled'>
        <button type="button" class="item__subcategories-header" name='{category.name}' on:click={subcategoriesList}>
            <span class='item__subcategories-header-text'>{subcategoryDefault}</span>
            <span class='item__subcategories-header-icon'>
                <svg fill="currentColor" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
                  </svg>
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

<style lang="scss">
    .item {
        display: flex;
        column-gap: 20px;
        row-gap: 10px;

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
            max-width: 250px;
            width: 100%;
            display: inline-flex;
            align-items: center;
            gap: 15px;
            cursor: pointer;
        }
        &__subcategories {
            display:  inline-block;
            position: relative;
        }
        &__subcategories-header {
            display: flex;
            gap: 15px;
            align-items: center;
            justify-content: space-between;
            padding: 5px 10px;
            border-radius: 10px;
            border: 1px solid black;
            background: #ffffff77;
            backdrop-filter: blur(5px);
            cursor: pointer;
            &:hover {
                outline: 1px solid black;
            }
        }
        &__subcategories-header-text {
            font-size: 16px;
        }
        &__subcategories-header-icon {
            max-width: 15px;
            max-height: 15px;
            transition: 0.1s;
        }
        &__subcategories-list {
            position: absolute;
            z-index: 1;
            top: 0;
            left: 0;
            width: 100%;
            overflow: hidden;
            height: 0;
        }
        &__subcategories-list-inner {
            display: flex;
            flex-direction: column;
            justify-content: center;
            border-radius: 10px;
            border: 1px solid black;
            background: #fffad1ce;
            backdrop-filter: blur(3px);
        }
        &__subcategories-item {
            display: flex;
            align-items: center;
            gap: 10px;
            cursor: pointer;
            padding: 5px;
            &:not(:last-child) {
                border-bottom: 1px solid #000;
            }
            &:hover {
                background: #ffbb001f;
            }
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
            font-size: 14px;
        }
    }

</style>

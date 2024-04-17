<script>
    export let category = {}
    export let index = 1
    function showSubcategories(e) {
        let target = e.target
            let subcategories = target.closest('.item__subcategories')
            let subcategoriesItemsContainer = subcategories.querySelector('.item__subcategories-container')

            if(+subcategories.dataset.subcategories) {
                subcategoriesItemsContainer.style.height = '0'
                subcategoriesItemsContainer.style.padding = '0'
                subcategories.dataset.subcategories = '0'
            } else {
                subcategoriesItemsContainer.style.height = 'max-content'
                subcategoriesItemsContainer.style.padding = '10px'
                subcategories.dataset.subcategories = '1'
            }
    }
</script>

<div class='item'>
    <label class="item__container">
        <input type='checkbox' class="item__checkbox custom-checkbox" on:input={(e) => {
            console.log(e.target.checked)
        }}>
        <p class="form__text">{category.name}</p>
    </label>
    <div class='item__subcategories' data-subcategories='0'>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="item__subcategories-button" type="button" on:click={showSubcategories}>
            <p class='item__subcategories-header'>Выбирите подкатегории</p>
        </div>
        <div class='item__subcategories-container'>
            {#each category.subcategories as subcategories}
            <div class='item__subcategories-item'>
                <input class="custom-checkbox" type='checkbox'>
                <p>{subcategories}</p>
            </div>
            {/each}
        </div>
    </div>
</div>

<style lang="scss">
    .item {
        display: flex;
        align-items: center;
        gap: 20px;


        &__container {
            display: inline-flex;
            align-items: center;
            gap: 15px;
        }

        &__subcategories {
            display:  inline-block;
            position: relative;
        }

        &__subcategories-item {
            display: flex;
            gap: 15px;
        }

        &__subcategories-button {
            position: relative;
            cursor: pointer;
            background: #fff;
            border: 1px solid #000;
            padding: 5px;
            border-radius: 5px;
        }

        &__subcategories-container {
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            // height: max-content;
            background: #fff;
            overflow: hidden;
            height: 0;
            display: flex;
            flex-direction: column;
            gap: 10px;
            padding: 0 10px;
            border-bottom-left-radius: 20px;
            border-bottom-right-radius: 20px;
            z-index: 1;
        }
    }

</style>

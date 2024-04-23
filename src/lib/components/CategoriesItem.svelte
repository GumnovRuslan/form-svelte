<script>
    export let category = {}
    export let subcategoryDefault = ''


    function changeRadio() {
        const categories = window.formCategories.querySelectorAll('input[type="radio"][name="category"]')
        categories.forEach(category => {
            const select = category.closest('.item').querySelector('select')
            if(category.checked) {
                select.disabled = false
                select.required = true
            } else {
                select.disabled = true
                select.required = false
            }
        });
    }
</script>

<div class='item'>
    <label class="item__category-container">
        <input type='radio' name="category" class="item__category custom-checkbox" required on:change={changeRadio}>
        <p class="form__text">{category.name}</p>
    </label>
    <div class='item__subcategories' >
        <select class="item__subcategories-select" name='{category.name}' disabled>
            <option class="item__subcategories-option" value="" selected disabled hidden>{subcategoryDefault}</option>
            {#each category.subcategories as subcategory}
                <option class="item__subcategories-option" value='{subcategory.value}'>{subcategory.name}</option>
            {/each}
        </select>
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

        &__category-container {
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

        &__subcategories-item {
            display: flex;
            align-items: center;
            gap: 15px;
            cursor: pointer;
        }

        &__subcategories-select {
            padding: 5px 10px;
            font-size: 16px;
            border-radius: 50px;
        }
    }

</style>

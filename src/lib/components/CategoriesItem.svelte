<script>
    export let category = {}

    let isDisabled = true
</script>

<div class='item'>
    <label class="item__container">
        <input type='checkbox' class="item__checkbox custom-checkbox" required on:input={(e) => isDisabled = !e.target.checked}>
        <p class="form__text">{category.name}</p>
    </label>
    <div class='item__subcategories' >
        <select class="item__subcategories-select" name='{category.name}' disabled={isDisabled} required>
            <option class="item__subcategories-option" value="" selected disabled hidden>{category.subcategories.default}</option>
            {#each category.subcategories.value as subcategory}
                <option class="item__subcategories-option" value='{subcategory.value}'>{subcategory.name}</option>
            {/each}
        </select>
    </div>
</div>

<style lang="scss">
    .item {
        display: flex;
        align-items: center;
        gap: 20px;

        .disabled {
            opacity: 0.5;
            pointer-events: none;
        }

        &__container {
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

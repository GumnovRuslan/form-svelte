<script>
    import CategoriesItem from "./CategoriesItem.svelte";

    export let category

    // let categories = [
    //     {
    //         name: 'Beauty',
    //         subcategories: ['Hair', 'Barber', 'Nail', 'Brows', 'Massage', 'Makeup', 'Spa']
    //     },
    // ]
</script>

<div class='categories' id="formCategories">
    <div class='categories__inner'>
        <div class='categories__header'>
            <p class='categories__title section-name'>{category.title}</p>
            <span class='categories__required'>*</span>
        </div>
        <div class='categories__content'>
            <div class='categories__items'>
                {#each category.categories as categoryItem}
                <CategoriesItem category={categoryItem}/>
                {/each}
            </div>
        </div>
    </div>
</div>

<style lang="scss">
    .categories {
        &__header {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 15px;
        }

        &__required {
            font-size: 20px;
            color: red;
        }

        &__items {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

    }
</style>

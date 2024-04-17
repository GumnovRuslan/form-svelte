<script>
    import CategoriesItem from "./CategoriesItem.svelte";

    let categories = [
        {
            name: 'Hair',
            subcategories: ['subcategory1', 'subcategory2', 'subcategory3', 'subcategory4']
        },
        {
            name: 'Barber',
            subcategories: ['subcategory1', 'subcategory2', 'subcategory3',]
        },
        {
            name: 'Nail',
            subcategories: ['subcategory1', 'subcategory2',]
        }
    ]
</script>

<div class='categories'>
    <div class='categories__inner'>
        <div class='categories__header'>
            <p class='categories__title section-name'>Categories</p>
        </div>
        <div class='categories__content'>
            <div class='categories__items'>
                {#each categories as category, i}
                <CategoriesItem {category} index={i}/>
                {/each}
                <!-- <CategoriesItem />
                <CategoriesItem />
                <CategoriesItem /> -->
            </div>
        </div>
    </div>
</div>

<style lang="scss">
    .categories {
        &__header {
            margin-bottom: 15px;
        }

        &__items {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

    }
</style>

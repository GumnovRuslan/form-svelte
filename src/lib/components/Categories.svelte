<script>
    import Category from "./Category.svelte";
	import Subcategory from "./Subcategory.svelte";

    export let data
    export let categoryValidate
    export let subcategoryValidate

    let categorySelect = '';
    $:categorySelected = categorySelect;
</script>

<div class='categories' id="formCategories">
    <div class='categories__header'>
        <h3 class='categories__title'>{data.title} <span>*</span></h3>
    </div>
    <div class='categories__content'>
        <div class='categories__item'>
            <p class='categories__item-text'>{data['title-category']}</p>
            <Category {data} on:selectCategory={(e) => categorySelect = +e.detail.index} valid={categoryValidate}/>
        </div>
        <div class='categories__item'>
            <p class='categories__item-text' class:categories__item-text--disabled={!Number.isInteger(categorySelected)}>{data['title-subcategory']}</p>
            <Subcategory {data} categoryId={categorySelected} valid={subcategoryValidate}/>
        </div>
    </div>
</div>

<style lang="scss">

    .categories {
        display: flex;
        flex-direction: column;
        gap: 20px;

        &__title {
            font-size: 20px;
            font-weight: 500;
            line-height: 25px;
            color: var(--color-text-primary);
        }
        &__content {
            display: flex;
            gap: 20px;
            @media (max-width: 990px) {
                flex-direction: column;
            }
        }

        &__item {
            flex: 100%;
        }

        &__item-text {
            font-size: 16px;
            line-height: 20px;
            margin-bottom: 12px;
            color: var(--color-text-primary);

            &--disabled {
                opacity: 0.5;
            }
        }
    }
</style>

<script>
    import { createEventDispatcher } from 'svelte'
    import { planet } from '../icons'

    export let active = 1
    export let langs = ["ru", "en", "pl", "by", "ua"]

    let visible = false
    const dispatch = createEventDispatcher();

    function selectLang(e) {
        e.preventDefault()
        visible = false
        active = e.target.closest('label').dataset.id
        dispatch('selectLang', {value: langs[active]})
    }
</script>

<header class='header'>
    <div class='header__inner'>
        <a href="/" class='header__logo'>
            <img src='/img/logo.webp' alt='' class='header__logo-img'>
        </a>
        <div class='header__lang' >
            <div class='header__lang-inner'>
                <input type='checkbox' id="lang-select" bind:checked={visible}>
                <label for="lang-select" class='header__lang-header'>
                    <span class='header__lang-icon'>
                        {@html planet}
                    </span>
                    <p class='header__lang-text' id="langSelect">{langs[active]}</p>
                </label>
                <div class='header__lang-options' id="langOptions">
                    <div class='header__lang-options-inner'>
                        {#each langs as lang, i}
                            <label class='header__lang-option-item' data-name={lang} data-id={i} on:click={selectLang}>
                                <input type='checkbox' class='header__lang-option-item-checkbox'>
                                <span class='header__lang-option-item-text' class:active={active == i}>{lang}</span>
                            </label>
                        {/each}
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>

<style lang="scss">
    .header {
        width: 100%;
        display: flex;
        justify-content: center;

        @media (min-width:768px) {
            margin-bottom: 24px;
        }
        @media (max-width:768px) {
            margin-bottom: 16px;
        }

        &__inner {
            flex: content;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 20px;
            border-radius: 100px;
            background: var(--color-bg-primary);

            @media (min-width:768px) {
                padding: 12px 48px;
            }
            @media (max-width:768px) {
                padding: 12px 20px;
            }
        }

        &__logo {
            @media (min-width:768px) {
                max-width: 91px;
                max-height: 40px;
            }
            @media (max-width:768px) {
                max-width: 73px;
                max-height: 32px;
            }
        }

        &__lang {
            position: relative;
            @media (min-width:768px) {
                width: 91px;
                height: 42px;
            }
            @media (max-width:768px) {
                width: 76px;
                height: 37px;
            }
        }

        &__lang-inner {
            position: absolute;
            z-index: 3;
            right: 0;
            top: 0;
            width: 100%;
            flex-direction: column;
            display: flex;
            border-radius: 20px;
            background: var(--color-bg-secondary);
            outline: 2px solid var(--color-bg-primary);
        }

        &__lang-header {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 16px;
            padding: 6px 12px;
            cursor: pointer;
        }

        &__lang-icon {
            color: var(--color-bg-primary);
            @media (min-width:768px) {
                max-width: 22px;
                max-height: 22px;
            }
            @media (max-width:768px) {
                max-width: 20px;
                max-height: 20px;
            }
        }

        &__lang-option-item, &__lang-text {
            text-align: center;
            color: var(--color-text-third);
            @media (min-width:768px) {
                font-size: 24px;
                line-height: 30px;
            }
            @media (max-width:768px) {
                font-size: 16px;
                line-height: 25px;
            }
        }

        #lang-select {
            display: none;

            &:checked ~ .header__lang-options {
               max-height: 200px;
            }
        }

        &__lang-options {
            overflow: hidden;
            max-height: 0;
            display: flex;
            width: 100%;
            flex-direction: column;
            transition: 0.2s;
        }

        &__lang-options-inner {
            padding: 2px 3px 6px;
        }

        &__lang-option-item {
            display: flex;
            justify-content: end;
            width: 100%;
            cursor: pointer;
        }

        &__lang-option-item:hover > &__lang-option-item-text {
            background: var(--color-hover-primary);
        }

        .active {
            background: var(--color-bg-primary) !important;
            color: var(--color-text-secondary);
        }

        &__lang-option-item-checkbox {
            display: none;
        }

        &__lang-option-item-text {
            padding: 3px 12px;
            width: 53px;
            border-radius: 100px;
        }
    }
</style>

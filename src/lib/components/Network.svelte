<script>
    import { cross } from '../icons'
    import Checkbox from './Checkbox.svelte';
    export let data = {}

    let networks = [];

    function clear(e) {
        const target = e.currentTarget
        const container = target.closest('.input')
        const input = container.querySelector('[data-target]')
        input.value = ''
    }

    function changeInput(e) {
        const target = e.currentTarget
        const item = target.closest('.network__item')
        const input = item.querySelector('input[data-target]')
        if(!target.checked) input.classList.remove('invalid')
    }
</script>

<div class="network" id="formNetwork">
    <div class='network__title'>
        <p class="network__title-text section-name">{data.title}</p>
    </div>
    <div class="network__items" id="networkContainer">
        {#each data.networks as network}
            <div class="network__item">
                <label class="network__item-container">
                    <Checkbox checked={networks.find(el => el == network.name)}/>
                    <input class="network__item-checkbox" type="checkbox" bind:group={networks} value='{network.name}' on:change={changeInput}/>
                    <span class="network__item-text">{network.name}</span>
                </label>
                <div class='input'>
                    <input
                        data-target
                        type="text"
                        class="network__item-input input__input"
                        placeholder={network.placeholder}
                        class:input__disabled={!networks.find(el => el == network.name)}
                        required={networks.find(el => el == network.name)}
                        on:invalid={e => e.currentTarget.classList.add('invalid')}
                        on:input={e => e.currentTarget.classList.remove('invalid')}
                    />
                    <div class='input__icon' on:mousedown={clear}>
                        {@html cross}
                    </div>
                </div>

            </div>
        {/each}
    </div>
</div>

<style lang="scss">
    .network {
        &__title-text {
            font-weight: 500;
            font-size: 20px;
            line-height: 25px;
            color: var(--color-text-primary);
            margin-bottom: 20px;
        }
        &__items {
            display: grid;

            @media (min-width: 990px) {
                grid-template-columns: repeat(2, 1fr);
                column-gap: 48px;
                row-gap: 12px;
            }

            @media (max-width: 990px) {
                grid-template-columns: repeat(1, 1fr);
                gap: 20px;
            }
        }
        &__item {
            display: grid;
            align-items: center;

            @media (min-width: 550px) {
                grid-template-columns: 120px 1fr;
                gap: 20px;
            }
            @media (max-width: 550px) {
                gap: 15px;
                grid-template-columns: 1fr;
            }
        }
        &__item-checkbox {
            display: none;
        }
        &__item-text {
            color: var(--color-text-primary);
        }
        &__item-container {
            display: flex;
            gap: 12px;
            align-items: center;
            cursor: pointer;
        }
    }

    .input {
            position: relative;

            &__disabled {
                opacity: 0.6;
                pointer-events: none;
            }

            &__input{
                font-family: 'Geologica', sans-serif;
                display: block;
                width: 100%;
                padding: 8px 44px 8px 20px;
                border: none;
                border-radius: 20px;
                font-weight: 400;
                font-size: 16px;
                box-shadow: 0 4px 8px #9AB3D54D;

                &::placeholder {
                    color: #0000004D;
                }

                &:focus, &:hover {
                    outline: 2.5px solid var(--color-input-border);
                }

                &:focus ~ .input__icon {
                    display: block;
                }
            }

            &__icon {
                display: none;
                position: absolute;
                right: 20px;
                top: 50%;
                transform: translate(0, -50%);
                max-width: 24px;
                max-height: 24px;
                cursor: pointer;
                color: #0000004D;
            }
        }
</style>

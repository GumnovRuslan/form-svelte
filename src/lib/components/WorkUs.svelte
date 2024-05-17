<script>
    import { cross } from '../icons'
    import Checkbox from './Checkbox.svelte';

    export let radioValidate
    export let data

    let workUs = ''

    const changeValue = (e, num) => {
        e.currentTarget.classList.remove('invalid')
        e.currentTarget.value = e.currentTarget.value.replace(/\D/g, '')
        if(e.currentTarget.value.length == num) {e.currentTarget.setCustomValidity('')}
        else {e.currentTarget.setCustomValidity(`поле должно содержать ${num} цифр`)}
    }

    function invalid(e, num) {
        e.currentTarget.classList.add('invalid')
        e.currentTarget.setCustomValidity(`поле должно содержать ${num} цифр`)
    }

    function clear(e) {
        const target = e.currentTarget
        const container = target.closest('.input')
        const input = container.querySelector('[data-target]')
        input.value = ''
    }
</script>

<div class="workUs" id="workUs">
    <div class="workUs__header">
        <p class="workUs__header-text">{data.title}<span>*</span></p>
    </div>
    <div class="workUs__content">
        <div class="workUs__item">
            <label class="workUs__item-label">
                <Checkbox type='radio' checked={workUs == 'physical'} valid={radioValidate}/>
                <input
                    class="workUs__item-radio"
                    type="radio"
                    name="work-us"
                    bind:group={workUs}
                    value="physical"
                    on:change={() => radioValidate = true}
                />
                <span class="workUs__item-text">{data.text[0]}</span>
            </label>
            <div class="workUs__item-input-container" id="data">
                <p class="workUs__item-input-text">PESEL</p>
                <div class='input' class:input__disabled={workUs != 'physical'} >
                    <input type='text' data-target class="input__input workUs__item-input" minlength="11" maxlength="11" 
                    disabled={workUs != 'physical'}
                    required={workUs == 'physical'}
                    on:input={(e) => changeValue(e, 11)}
                    on:invalid={(e) => invalid(e, 11)}>
                    <div class='input__icon' on:mousedown={clear}>
                        {@html cross}
                    </div>
                </div>
            </div>
        </div>
        <div class="workUs__item">
            <label class="workUs__item-label">
                <Checkbox type='radio' checked={workUs == 'company'} valid={radioValidate}/>
                <input
                    class="workUs__item-radio"
                    bind:group={workUs}
                    value="company"
                    type="radio"
                    name="work-us"
                    on:change={() => radioValidate = true}
                />
                <span class="workUs__item-text">{data.text[1]}</span>
            </label>
            <div class="workUs__item-input-container" id="data">
                <p class="workUs__item-input-text">NIP</p>
                <div class='input' class:input__disabled={workUs != 'company'} >
                    <input type='text' data-target class="input__input workUs__item-input" minlength="10" maxlength="10" disabled={workUs != 'company'}
                    required={workUs == 'company'}
                    on:input={(e) => changeValue(e, 10)}
                    on:invalid={(e) => invalid(e, 10)}>
                    <div class='input__icon' on:mousedown={clear}>
                        {@html cross}
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


<style lang="scss">
    
    .workUs {
        width: 100%;
        &__header {
            margin-bottom: 20px;
        }
        &__header-text {
            font-size: 20px;
            font-weight: 500;
            line-height: 25px;
            color: var(--color-text-primary);
        }
        &__content {
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 12px;

            @media (min-width: 810px) {
                gap: 12px;
            }
            @media (max-width: 810px) {
                gap: 20px;
            }
        }
        &__item {
            display: inline-grid;
            align-items: center;

            @media (min-width: 810px) {
                grid-template-columns: 200px 1fr;
                gap: 20px;
            }
            @media (max-width: 810px) {
                grid-template-columns: repeat(1, 1fr);
                gap: 16px;
            }
        }
        &__item-radio {
            display: none;
        }
        &__item-text {
            font-size: 16px;
            line-height: 20px;
            color: var(--color-text-primary);
        }
        &__item-label {
            display: inline-flex;
            align-items: center;
            gap: 12px;
            cursor: pointer;
        }
        &__item-input-container {
            display: flex;

            @media (min-width: 810px) {
                justify-content: end;
                align-items: center;
                gap: 32px;
            }
            @media (max-width: 810px) {
                flex-direction: column;
                gap: 8px;
            }
        }
        &__item-input-text {
            font-weight: 500;
            font-size: 16px;
            line-height: 20px;
            color: var(--color-text-primary);

            @media (max-width: 810px) {
                margin-left: 32px;
            }
        }
        &__item-input {
            min-width: 200px;
        }

        .input {
            position: relative;

            &:disabled {
                background: #000;
            }

            &__disabled {
                opacity: 0.7;
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
    }
</style>

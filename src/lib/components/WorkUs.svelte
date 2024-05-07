<script>
    import { cross } from '../icons'
    import Checkbox from './Checkbox.svelte';

    let workUs = ''

    function changeValue(e) {
        console.log(e.target.value)
        e.target.value = e.target.value.replace(/\D/g, '')
    }
</script>

<div class="workUs" id="workLike">
    <div class="workUs__header">
        <p class="workUs__header-text">You work us<span>*</span></p>
    </div>
    <div class="workUs__content">
        <div class="workUs__item">
            <label class="workUs__item-label">
                <Checkbox type='radio' checked={workUs == 'physical'}/>
                <input
                    class="workUs__item-radio"
                    type="radio"
                    name="workUs"
                    bind:group={workUs}
                    value="physical"
                    required
                />
                <span class="workUs__item-text">Physical person</span>
            </label>
            <div class="workUs__item-input-container" id="data">
                <p class="workUs__item-input-text">PESEL</p>
                <div class='input' class:input__disabled={workUs != 'physical'} >
                    <input type='number' class="input__input workUs__item-input" minlength="11" maxlength="11" required={workUs == 'physical'} on:input={changeValue}>
                    <div class='input__icon'>
                        {@html cross}
                    </div>
                </div>
             </div>
        </div>
        <div class="workUs__item">
            <label class="workUs__item-label">
                <Checkbox type='radio' checked={workUs == 'company'}/>
                <input
                    class="workUs__item-radio"
                    bind:group={workUs}
                    value="company"
                    type="radio"
                    name="workUs"
                />
                <span class="workUs__item-text">Company</span>
            </label>
            <div class="workUs__item-input-container" id="data">
                <p class="workUs__item-input-text">NIP</p>
                <div class='input' class:input__disabled={workUs != 'company'} >
                    <input type='number' class="input__input workUs__item-input" minlength="10" maxlength="10" required={workUs == 'company'} on:input={changeValue}>
                    <div class='input__icon'>
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

            &__disabled {
                opacity: 0.7;
                pointer-events: none;
            }

            &__input{
                font-family: 'Geologica', sans-serif;
                display: block;
                width: 100%;
                padding: 2px 44px 2px 20px;
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

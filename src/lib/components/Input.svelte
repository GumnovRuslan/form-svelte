<script>
    import { cross } from "../icons";

    export let type = 'text'
    export let style = 'input'
    export let placeholder = ''
    export let required = false
    export let input = (e) => {}
    export let change = (e) => {};
    export let invalid = (e) => {}
    export let disabled = false;
    export let maxLength = 1000
    export let minLength = 0

    function clear(e) {
        const target = e.currentTarget
        const container = target.closest('.input')
        const input = container.querySelector('[data-target]')
        input.value = ''
    }

    function length(e, min, max) {
        const target = e.currentTarget
        if(target.value.length < min) target.setCustomValidity(`number less than ${min} characters`)
        else target.setCustomValidity('')
        if(target.value.length > max) target.value = target.value.slice(0, max+1)
    }
</script>

<div class='input'>
    {#if style == 'input'}
        <input
            data-target
            type={type}
            class="input__input"
            class:input__input-disabled={disabled}
            placeholder={placeholder}
            required={required}
            on:input={(e) => {
                    e.currentTarget.classList.remove('invalid')
                    length(e, minLength, maxLength)
                    input(e)
                }
            }
            on:change={change} 
            on:invalid={invalid}
        />
    {/if}
    {#if style == 'textarea'}
        <textarea class="input__textarea"
            data-target
            maxlength="221"
            placeholder={placeholder}
            required={required}
            on:invalid={invalid}
        ></textarea>
    {/if}
    <button type="button" class='input__icon' on:mousedown={clear}>
        {@html cross}
    </button>
</div>


<style lang="scss">
    .input {
        position: relative;

        &__input, &__textarea {
            font-family: 'Geologica', sans-serif;
            display: block;
            width: 100%;
            padding: 8px 44px 8px 20px;
            border: none;
            border-radius: 20px;
            font-weight: 400;
            font-size: 16px;
            line-height: 20px;
            box-shadow: 0 4px 8px #9AB3D54D;

            &::placeholder {
                color: #0000004D;
            }

            &:focus, &:hover {
                outline: 2.5px solid var(--color-input-border);
            }

            &:focus ~ .input__icon {
                // display: block;
                visibility: visible;
            }

            &-disabled {
                pointer-events: none;
                opacity: 0.7;
            }
        }

        &__textarea {
            resize: none;
        }

        &__icon {
            // display: none;
            visibility: hidden;
            position: absolute;
            right: 20px;
            top: 50%;
            padding: 0;
            border: none;
            background: transparent;
            transform: translate(0, -50%);
            max-width: 24px;
            max-height: 24px;
            cursor: pointer;
            color: #0000004D;
        }
    }
</style>

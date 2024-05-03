<script>
    import { cross } from "../icons";
    export let type = 'text'
    export let style = 'input'
    export let placeholder = ''
    export let required = false
</script>

<div class='input'>
    {#if style == 'input'}
        <input
        type={type}
        class="input__input"
        placeholder={placeholder}
        required={required}/>
    {/if}
    {#if style == 'textarea'}
        <textarea class="input__textarea"
            maxlength="221"
            placeholder={placeholder}
            required={required}
        ></textarea>
    {/if}
    <div class='input__icon'>
        {@html cross}
    </div>
</div>


<style lang="scss">
    .input {
        position: relative;

        &__input, &__textarea {
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

        &__textarea {
            resize: none;
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

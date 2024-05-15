<script>
    import { arrowCompleted } from "../icons";
    export let checked = false
    export let type = 'checkbox';
</script>

{#if type == 'checkbox'}
    <div class='checkbox'>
        <div class='checkbox__inner' class:checkbox__checked={checked}>
            {#if checked}
                <div class='checkbox__icon'>
                    {@html arrowCompleted}
                </div>
            {/if}
        </div>
    </div>
{/if}

{#if type == 'radio'}
    <div class='radio'>
        <div class='radio__inner' class:radio__checked={checked}>
        </div>
    </div>
{/if}

<style lang="scss">
    .checkbox {
        &__inner {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 20px;
            height: 20px;
            border: 2px solid var(--color-bg-primary);
            border-radius: 5px;
        }
        &__checked {
            background: var(--color-bg-primary);
        }
        &__icon {
            transform: translateY(-3px);
            max-width: 12px;
            max-height: 12px;
        }
    }

    .radio {
        &__inner {
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: var(--color-bg-secondary);
        }

        &__checked {
            position: relative;
            border: 1px solid var(--color-bg-primary);

            &:before {
                content: '';
                position: absolute;
                background: var(--color-bg-primary);
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 12px;
                height: 12px;
                border-radius: 50%;
            }
        }
    }
</style>

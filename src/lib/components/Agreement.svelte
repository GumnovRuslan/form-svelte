<script>
    import Checkbox from "./Checkbox.svelte";

    export let data
    export let valid = true

    let isChecked = false;
</script>

<div class="agreement" id="agreement">
    <label class="agreement__inner">
        <Checkbox checked={isChecked} {valid}/>
        <input
            class="agreement__checkbox"
            id="formConfirmation"
            type="checkbox"
            on:input={() => {
                valid = true
                isChecked = !isChecked
                }}
        />
        <div class="agreement__content">
            <span class="agreement__text">{data.title}</span>
            <span class="required">*</span>
            <p class="agreement__text">{data.subtitle}</p>
        </div>
    </label>
</div>

<style lang="scss">
    .required {
        color: #EF3E3E;
    }
    .agreement {
        &__inner {
            display: flex;
            gap: 12px;
            align-items: start;
            cursor: pointer;
        }
        &__checkbox {
            display: none;
        }
        &__text {
            font-size: 16px;
            line-height: 20px;
            color: var(--color-text-primary)
        }
    }
</style>
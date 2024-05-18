<script>
    import Input from "./Input.svelte";

    export let data
</script>

<div class="calendar" id="formLinkCalendar">
    <div class="calendar__header">
        <p class="calendar__header-title">{data.title}</p>
    </div>
    <div class="calendar__content">
        <Input type='url' 
        placeholder={data.placeholder} 
        input={(e) => e.target.required = !!e.target.value} 
        invalid={e => e.currentTarget.classList.add('invalid')}/>
    </div>
</div>

<style lang='scss'>
    .calendar {

        &__header {
            margin-bottom: 24px;
        }
        &__header-title {
            font-weight: 500;
            font-size: 20px;
            line-height: 25px;
            color: var(--color-text-primary);
        }
        &__content {
            // max-width: 400px
        }
	}
</style>
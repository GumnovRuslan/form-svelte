<script>
    import Input from "./Input.svelte";
</script>

<div class="calendar" id="formLinkCalendar">
    <div class="calendar__header">
        <p class="calendar__header-title">Link to Google calendar</p>
    </div>
    <div class="calendar__content">
        <Input type='url' placeholder='link to Google calendar' input={(e) => e.target.required = !!e.target.value}/>
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
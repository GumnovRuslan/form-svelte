<script>
    export let next = true
    export let prev = true
	export let buttonsControls

    function checkForm(e) {
        let form = e.target.closest('form')
		let inputs = form.querySelectorAll('input[required]');
		inputs.forEach((el) => {
			if (el.type == 'checkbox') {
				if (!el.checked) {
					el.classList.add('invalid-checkbox');
				} else {
					el.classList.remove('invalid-checkbox');
				}
			} else {
				if (el.value == '') {
					el.classList.add('invalid-input');
				} else {
					el.classList.remove('invalid-input');
				}
			}
		})
	}

    function prevStep(e) {
        let formTarget = e.target.closest('form')
        let forms = document.querySelectorAll('form.form-stage')
		let progress = document.querySelectorAll('.progress__bar')
        let index = 0
        forms.forEach((form, i)=> {if(form == formTarget) index = i})
        formTarget.style.display = 'none'
        forms[index - 1].style.display = 'flex'
        progress[index].classList.remove('progress__bar--completed')
    }
</script>

<div class='controls'>
    <button class='controls__button' type="button" class:hidden={!prev} id='buttonControlsPrev' on:click={prevStep}>
        <span class='controls__button-icon'>
            <svg fill="currentColor" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
            </svg>
        </span>
        <span class='controls__button-text'>{buttonsControls.prev}</span>
    </button>
    <button class='controls__button' class:hidden={!next} id='buttonControlsNext' >
        <span class='controls__button-text'>{buttonsControls.next}</span>
        <span class='controls__button-icon'>
            <svg fill="currentColor" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
            </svg>
        </span>
    </button>
</div>

<style lang="scss">
    .hidden {
        visibility: hidden;
    }
    .controls {
		display: flex;
		justify-content: space-between;

		&__button {
			display: flex;
			align-items: center;
			justify-content: center;
			gap: 10px;
			padding: 10px 20px;
			border-radius: 20px;
			border: none;
			background: var(--color-bg-button);
			color: var(--color-text-secondary);
			cursor: pointer;
		}

		&__button-icon {
			max-width: 20px;
			max-height: 20px;
		}

		&__button-text {
			font-size: 18px;
			color: inherit;
		}
	}
</style>

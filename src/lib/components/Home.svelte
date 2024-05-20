<script>
    export let data
</script>

<div class="home" id='home'>
    <div class="home__inner">
        <h2 class="home__title">{data.title}</h2>
        <div class="home__description">
            <span class='home__description-text'>{data.subtitle[0]}</span>
            <span class='home__description-text'>{data.subtitle[1]}</span>
            <span class='home__description-text'>{data.subtitle[2]}</span>
        </div>
        <div class='home__icon'>
            <svg  viewBox="0 0 1296 295" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1304.5 122C1229 36.4999 1050.5 -30.5001 941 26.9999C908.322 46.7574 883.252 70.2568 865.928 94.9999C840.146 131.823 831.52 171.401 840.5 205.5C845.02 222.661 851.989 237.145 860.599 249C917.708 327.642 1046.95 290.605 1011.5 152C959.446 -51.5361 660.127 84.1699 401.5 189C214 265 73.8333 174.167 -50.5 43.9999" stroke="#C5D5E5" stroke-width="10" stroke-linejoin="round" stroke-dasharray="18 18"/>
                <g clip-path="url(#clip0_2001_205)">
                <path d="M228.008 238.898C224.358 238.304 213.404 236.527 213.404 236.527C198.672 234.134 188.666 220.25 191.058 205.518C193.451 190.786 207.335 180.779 222.067 183.171L236.671 185.543C253.737 188.314 267.916 200.002 273.972 216.015C274.714 217.979 274.345 220.189 272.99 221.79C267.715 228.022 252.331 242.847 228.006 238.896L228.008 238.898Z" fill="#FDD949"/>
                <path d="M254.721 192.394L247.296 238.106C253.404 236.59 259.076 233.992 264.101 230.372C267.932 227.611 271.167 224.03 273.102 221.665C274.36 220.128 274.707 218.041 274.018 216.178C272.996 213.412 271.256 209.274 269.075 206.248C265.165 200.821 260.484 196.049 254.716 192.395L254.721 192.394Z" fill="#3F3F3F"/>
                <path d="M213.405 236.527L226.352 238.63L235.017 185.272L222.069 183.169C218.859 182.647 215.69 182.715 212.673 183.291L204.532 233.436C207.213 234.938 210.199 236.004 213.407 236.524L213.405 236.527Z" fill="#3F3F3F"/>
                <path d="M247.781 223.543C240.046 214.196 225.427 211.729 218.706 211.084C216.693 210.891 214.915 212.373 214.734 214.386C214.15 220.882 213.855 234.909 220.698 244.232C226.713 252.423 238.495 253.873 246.052 247.077C252.813 241 253.627 230.613 247.781 223.543Z" fill="white"/>
                <path d="M250.817 204.835C240.526 211.254 225.877 208.968 219.294 207.455C217.324 207.003 216.104 205.031 216.571 203.063C218.071 196.715 222.232 183.316 231.673 176.641C239.969 170.774 251.606 173.127 256.625 181.964C261.114 189.869 258.603 199.979 250.82 204.837L250.817 204.835Z" fill="white"/>
                </g>
                <defs>
                <clipPath id="clip0_2001_205">
                <rect width="79.3987" height="73.9231" fill="white" transform="translate(223.206 156) rotate(35.766)"/>
                </clipPath>
                </defs>
                </svg>
        </div>
        <div class='home__bottom'>
            <p class='home__bottom-text'>{data.description}</p>
            <label for="showForm" class="home__bottom-button button" id="message-button">{data.button}</label>
        </div>
    </div>
</div>

<style lang="scss">
    .home {
		&__inner {
			position: relative;
			display: flex;
			flex-direction: column;
            overflow: hidden;
			background: var(--color-bg-primary);
            @media (min-width: 1280px) {
                min-height: 686px;
                padding: 48px 48px 48px 72px;
                border-radius: 60px;
            }
            @media (min-width: 768px) and (max-width: 1280px) {
                min-height: 586px;
                padding: 38px;
                border-radius: 60px;
            }
            @media (max-width: 768px) {
                min-height: 550px;
                padding: 24px 24px 16px 16px;
                border-radius: 30px;
            }
		}
		&__title {
            font-weight: 400;
			color: var(--color-text-secondary);
            @media (min-width: 1280px) {
                font-size: 64px;
                line-height: 80px;
            }
            @media (min-width: 768px) and (max-width: 1280px) {
                max-width: 90%;
                font-size: 44px;
                line-height: 56px;
            }
            @media (max-width: 768px) {
                max-width: 90%;
                font-size: 28px;
                line-height: 35px;
            }
		}
		&__description {
            flex: 1 0 auto;
			position: relative;
            @media (min-width: 768px) {
                height: 200px;
            }
            @media (max-width: 768px) {
                height: 105px;
            }
		}
		&__description-text {
			position: absolute;
			z-index: 2;
			background: var(--color-bg-secondary);
			border-radius: 100px;
			font-size: 32px;
			line-height: 40px;

            @media (min-width: 1280px) {
                padding: 20px 40px;
                font-size: 32px;
			    line-height: 40px;
            }
            @media (min-width: 768px) and (max-width: 1280px) {
                padding: 16px 30px;
                font-size: 26px;
			    line-height: 40px;
            }
            @media (max-width: 768px) {
                padding: 8px 20px;
                font-size: 16px;
                line-height: 20px;
            }

			&:last-child {
				background: var(--color-bg-third);
			}
			&:nth-child(1) {
				top: 0;
                @media (min-width: 1280px) {
                    right: 527px;
                }
                @media (min-width: 768px) and (max-width: 1280px) {
                    right: 310px;
                }
                @media (max-width: 768px) {
                    right: 24px;
                }
			}
			&:nth-child(2) {
                @media (min-width: 1280px) {
                    right: 127px;
				    top: 60px;
                }
                @media (min-width: 768px) and (max-width: 1280px) {
                    right: 0px;
				    top: 54px;
                }
                @media (max-width: 768px) {
                    text-align: right;
                    right: 0px;
				    top: 31px;
                }
			}
			&:nth-child(3) {
                @media (min-width: 1280px) {
                    right: 71px;
				    top: 125px;
                    transform: rotate(-5.91deg);
                }
                @media (min-width: 768px) and (max-width: 1280px) {
                    right: 0;
				    top: 115px;
                    transform: rotate(-5.91deg);
                }
                @media (max-width: 768px) {
                    top: 62px;
                    right: 160px;
                    transform: rotate(5.91deg);
                }
			}
		}
		&__icon {
			position: absolute;
			left: 0;
			top: 50%;

            @media (min-width: 768px) {
                width: 100%;
                transform: translate(0, -47%);
            }
            @media (max-width: 768px) {
                width: 800px;
                transform: translate(2%, -25%);
            }
		}
		&__bottom {
			flex: content;
			display: flex;
			gap: 20px;

            @media (min-width: 768px) {
                align-items: end;
                justify-content: space-between;
            }
            @media (max-width: 768px) {
                justify-content: end;
                flex-direction: column;
            }
		}
		&__bottom-text {
			color: var(--color-text-secondary);

            @media (min-width: 1280px) {
                max-width: 613px;
                font-size: 32px;
                line-height: 40px;
            }
            @media (min-width: 768px) and (max-width: 1280px) {
                max-width: 513px;
                font-size: 24px;
                line-height: 30px;
            }
            @media (max-width: 768px) {
                max-width: 240px;
                font-size: 16px;
                line-height: 20px;
            }
		}
		&__bottom-button {
			height: max-content;

            @media (min-width: 768px) {
                padding: 20px 40px;
                font-size: 36px;
                line-height: 45px;
            }
            @media (min-width: 768px) and (max-width: 1280px) {
                padding: 16px 30px;
                font-size: 26px;
                line-height: 35px;
            }
            @media (max-width: 768px) {
                align-self: flex-end;
                padding: 12px 24px;
                font-size: 20px;
                line-height: 25px;
            }
		}
	}
</style>

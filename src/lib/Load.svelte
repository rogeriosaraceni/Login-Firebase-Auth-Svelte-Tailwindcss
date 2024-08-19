<div data-content="processing" style="display: none;">
    <section class="wrapper-loader-processing">
        <div class="content-loader-processing">
            <span class="svg-loader-processing">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; display: block;" width="80px" height="80px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                    <circle cx="50" cy="50" r="0" fill="none" stroke="#93dbe9" stroke-width="2">
                        <animate attributeName="r" repeatCount="indefinite" dur="1s" values="0;40" keyTimes="0;1" keySplines="0 0.2 0.8 1" calcMode="spline" begin="0s"></animate>
                        <animate attributeName="opacity" repeatCount="indefinite" dur="1s" values="1;0" keyTimes="0;1" keySplines="0.2 0 0.8 1" calcMode="spline" begin="0s"></animate>
                    </circle>
                    <circle cx="50" cy="50" r="0" fill="none" stroke="#689cc5" stroke-width="2">
                        <animate attributeName="r" repeatCount="indefinite" dur="1s" values="0;40" keyTimes="0;1" keySplines="0 0.2 0.8 1" calcMode="spline" begin="-0.5s"></animate>
                        <animate attributeName="opacity" repeatCount="indefinite" dur="1s" values="1;0" keyTimes="0;1" keySplines="0.2 0 0.8 1" calcMode="spline" begin="-0.5s"></animate>
                    </circle>
                </svg>
            </span>
            <span class="svg-text-processing">Loading...</span>
        </div>
    </section>
</div>

<style>
    /* --------------------------------------------------------------------
    * - loader-processing
    ---------------------------------------------------------------------- */
    .wrapper-loader-processing {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 9999;
        background-color: rgba(255,255,255, 0.9);
    }
    .content-loader-processing {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        height: 100%;
    }
    .content-loader-processing .svg-loader-processing {
        margin-bottom: 0.5rem;
    }
    .content-loader-processing .svg-text-processing {
        color: #777;
        font-size: 0.9rem;
    }
</style>

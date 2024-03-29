<!--
  @component
  Generates an SVG x-axis. This component is also configured to detect if your x-scale is an ordinal scale. If so, it will place the markers in the middle of the bandwidth.
 -->
 <script>
  import { getContext } from 'svelte';
  import moment from 'moment';
  import { timeMonth } from 'd3-time';
  import { translate } from '$lib/translations';
  import { DATA_UPDATE_DATE } from '../utils'


  const { width, height, xScale, yRange, xRange } = getContext('LayerCake');

  /** @type {Boolean} [gridlines=true] - Extend lines from the ticks into the chart space */
  export let gridlines = true;

  /** @type {Boolean} [tickMarks=false] - Show a vertical mark for each tick. */
  export let tickMarks = false;

  /** @type {Boolean} [baseline=false] – Show a solid line at the bottom. */
  export let baseline = false;

  /** @type {Boolean} [snapTicks=false] - Instead of centering the text on the first and the last items, align them to the edges of the chart. */
  export let snapTicks = false;

  /** @type {Number|Array|Function} [ticks] - If this is a number, it passes that along to the [d3Scale.ticks](https://github.com/d3/d3-scale) function. If this is an array, hardcodes the ticks to those values. If it's a function, passes along the default tick values and expects an array of tick values in return. If nothing, it uses the default ticks supplied by the D3 function. */
  export let ticks = undefined;

  /** @type {Number} [xTick=0] - How far over to position the text marker. */
  export let xTick = 0;

  /** @type {Number} [yTick=16] - The distance from the baseline to place each tick value. */
  // export let yTick = 30;

  $: isBandwidth = typeof $xScale.bandwidth === 'function';

  $: showPresentFinalTick = $xScale.domain()[1].getTime() === DATA_UPDATE_DATE.getTime()
  $: tickVals = showPresentFinalTick ? [...$xScale.ticks(5), 'present'] : $xScale.ticks(5)
  $: hideLastTick = showPresentFinalTick && ($xScale(DATA_UPDATE_DATE) - $xScale(tickVals[tickVals.length - 2]) < 80)

  $: yearsExtent = moment($xScale.domain()[1]).diff($xScale.domain()[0], "years")
  $: format = yearsExtent < 4 ? 'M.YYYY' : 'YYYY'
  $: formatTick = d => d === 'present' ? $translate('Feb 2024') : moment(d).format(format)

  function textAnchor(i) {
    // if (i === 0) {
    //   return 'start';
    // }
    if (i === tickVals.length - 1) {
      return 'end';
    }
    return 'middle';
  }
</script>

<g class="axis x-axis" class:snapTicks>
  {#each tickVals as tick, i (tick)}
      <g class="tick tick-{i}" transform="translate({tick === 'present' ? $xRange[1] : $xScale(tick)},{Math.max(...$yRange)})">
        {#if gridlines !== false}
          <line class="gridline" y1={$height * -1} y2="0" x1="0" x2="0" />
        {/if}
        {#if tickMarks === true}
          <line
            class="tick-mark"
            y1={0}
            y2={6}
            x1={isBandwidth ? $xScale.bandwidth() / 2 : 0}
            x2={isBandwidth ? $xScale.bandwidth() / 2 : 0}
          />
        {/if}
        <text
          x={isBandwidth ? ($xScale.bandwidth() / 2 + xTick) : xTick}
          y={-$height}
          dx=""
          dy={-25}
          text-anchor={textAnchor(i)}
          class:hidden={i === tickVals.length - 1 && hideLastTick}
        >
          {formatTick(tick)}
        </text
        >
      </g>
  {/each}
  {#if baseline === true}
    <line class="baseline" y1={$height + 0.5} y2={$height + 0.5} x1="0" x2={$width} />
  {/if}
</g>

<style lang="scss">
  .tick {
    font-size: 0.725em;
    font-weight: 200;
  }

  line,
  .tick line {
    stroke: #EEE;
    /* stroke-dasharray: 2; */
  }

  .tick text {
    fill: #6E7382;
    text-align: center;
    font-family: Noe Display;
    font-size: $timeline-font-size;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    &.hidden {
      visibility: hidden;
    }
  }

  .tick .tick-mark,
  .baseline {
    stroke-dasharray: 0;
  }
  /* This looks slightly better */
  .axis.snapTicks .tick:last-child text {
    transform: translateX(3px);
  }
  .axis.snapTicks .tick.tick-0 text {
    transform: translateX(-3px);
  }
</style>
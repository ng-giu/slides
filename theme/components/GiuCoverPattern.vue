<script setup lang="ts">
import { withBase } from '../base'
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    pattern?: string
    src?: string
  }>(),
  {
    pattern: 'group1',
  }
)

const isCustomImage = computed(() => {
  if (props.src) return true
  if (props.pattern && (props.pattern.includes('/') || props.pattern.includes('.'))) return true
  return false
})

const imageSrc = computed(() => {
  return withBase(props.src || props.pattern)
})
</script>

<template>
  <img
    v-if="isCustomImage"
    class="giu-cover__pattern"
    :src="imageSrc"
    alt=""
    aria-hidden="true"
  />

  <!-- Group 3 pattern (e.g. for ICA) -->
  <svg
    v-else-if="pattern === 'group3'"
    class="giu-cover__pattern giu-cover__pattern--group3"
    viewBox="0 0 1343 1343"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    aria-hidden="true"
  >
    <g id="Repeat_group_1_inner" data-figma-trr="r6u2.6-0f_l6u1.1-0f">
    <rect x="596.26" y="115.2" width="45.94" height="45.94" transform="rotate(45 596.26 115.2)" class="giu-pattern__accent2" fill="var(--giu-cover-accent2, #2252D9)"/>
    </g>
    <use href="#Repeat_group_1_inner" xlink:href="#Repeat_group_1_inner" transform="translate(441.486 -384.847) rotate(60)"/>
    <use href="#Repeat_group_1_inner" xlink:href="#Repeat_group_1_inner" transform="translate(995.516 -194.933) rotate(120)"/>
    <use href="#Repeat_group_1_inner" xlink:href="#Repeat_group_1_inner" transform="translate(1108.06 379.828) rotate(-180)"/>
    <use href="#Repeat_group_1_inner" xlink:href="#Repeat_group_1_inner" transform="translate(666.575 764.676) rotate(-120)"/>
    <use href="#Repeat_group_1_inner" xlink:href="#Repeat_group_1_inner" transform="translate(112.545 574.761) rotate(-60)"/>
    <use href="#Repeat_group_1_inner" xlink:href="#Repeat_group_1_inner" transform="translate(133.509 133.509)"/>
    <use href="#Repeat_group_1_inner" xlink:href="#Repeat_group_1_inner" transform="translate(574.995 -251.338) rotate(60)"/>
    <use href="#Repeat_group_1_inner" xlink:href="#Repeat_group_1_inner" transform="translate(1129.03 -61.4239) rotate(120)"/>
    <use href="#Repeat_group_1_inner" xlink:href="#Repeat_group_1_inner" transform="translate(1241.57 513.337) rotate(-180)"/>
    <use href="#Repeat_group_1_inner" xlink:href="#Repeat_group_1_inner" transform="translate(800.084 898.185) rotate(-120)"/>
    <use href="#Repeat_group_1_inner" xlink:href="#Repeat_group_1_inner" transform="translate(246.054 708.271) rotate(-60)"/>
    <use href="#Repeat_group_1_inner" xlink:href="#Repeat_group_1_inner" transform="translate(267.018 267.018)"/>
    <use href="#Repeat_group_1_inner" xlink:href="#Repeat_group_1_inner" transform="translate(708.504 -117.829) rotate(60)"/>
    <use href="#Repeat_group_1_inner" xlink:href="#Repeat_group_1_inner" transform="translate(1262.53 72.0852) rotate(120)"/>
    <use href="#Repeat_group_1_inner" xlink:href="#Repeat_group_1_inner" transform="translate(1375.08 646.847) rotate(-180)"/>
    <use href="#Repeat_group_1_inner" xlink:href="#Repeat_group_1_inner" transform="translate(933.593 1031.69) rotate(-120)"/>
    <use href="#Repeat_group_1_inner" xlink:href="#Repeat_group_1_inner" transform="translate(379.563 841.78) rotate(-60)"/>
    <use href="#Repeat_group_1_inner" xlink:href="#Repeat_group_1_inner" transform="translate(400.527 400.527)"/>
    <use href="#Repeat_group_1_inner" xlink:href="#Repeat_group_1_inner" transform="translate(842.013 15.6802) rotate(60)"/>
    <use href="#Repeat_group_1_inner" xlink:href="#Repeat_group_1_inner" transform="translate(1396.04 205.594) rotate(120)"/>
    <use href="#Repeat_group_1_inner" xlink:href="#Repeat_group_1_inner" transform="translate(1508.59 780.356) rotate(-180)"/>
    <use href="#Repeat_group_1_inner" xlink:href="#Repeat_group_1_inner" transform="translate(1067.1 1165.2) rotate(-120)"/>
    <use href="#Repeat_group_1_inner" xlink:href="#Repeat_group_1_inner" transform="translate(513.072 975.289) rotate(-60)"/>
    <use href="#Repeat_group_1_inner" xlink:href="#Repeat_group_1_inner" transform="translate(534.037 534.037)"/>
    <use href="#Repeat_group_1_inner" xlink:href="#Repeat_group_1_inner" transform="translate(975.522 149.189) rotate(60)"/>
    <use href="#Repeat_group_1_inner" xlink:href="#Repeat_group_1_inner" transform="translate(1529.55 339.103) rotate(120)"/>
    <use href="#Repeat_group_1_inner" xlink:href="#Repeat_group_1_inner" transform="translate(1642.1 913.865) rotate(-180)"/>
    <use href="#Repeat_group_1_inner" xlink:href="#Repeat_group_1_inner" transform="translate(1200.61 1298.71) rotate(-120)"/>
    <use href="#Repeat_group_1_inner" xlink:href="#Repeat_group_1_inner" transform="translate(646.581 1108.8) rotate(-60)"/>
    <use href="#Repeat_group_1_inner" xlink:href="#Repeat_group_1_inner" transform="translate(667.546 667.546)"/>
    <use href="#Repeat_group_1_inner" xlink:href="#Repeat_group_1_inner" transform="translate(1109.03 282.698) rotate(60)"/>
    <use href="#Repeat_group_1_inner" xlink:href="#Repeat_group_1_inner" transform="translate(1663.06 472.613) rotate(120)"/>
    <use href="#Repeat_group_1_inner" xlink:href="#Repeat_group_1_inner" transform="translate(1775.61 1047.37) rotate(-180)"/>
    <use href="#Repeat_group_1_inner" xlink:href="#Repeat_group_1_inner" transform="translate(1334.12 1432.22) rotate(-120)"/>
    <use href="#Repeat_group_1_inner" xlink:href="#Repeat_group_1_inner" transform="translate(780.09 1242.31) rotate(-60)"/>
    <g id="Repeat_group_3_inner" data-figma-trr="r6u2.6-0f_l6u1.1-0f">
    <rect x="353.516" y="357.944" width="45.94" height="45.94" transform="rotate(45 353.516 357.944)" class="giu-pattern__accent2" fill="var(--giu-cover-accent2, #2252D9)"/>
    </g>
    <use href="#Repeat_group_3_inner" xlink:href="#Repeat_group_3_inner" transform="translate(530.336 -53.253) rotate(60)"/>
    <use href="#Repeat_group_3_inner" xlink:href="#Repeat_group_3_inner" transform="translate(841.622 379.405) rotate(120)"/>
    <use href="#Repeat_group_3_inner" xlink:href="#Repeat_group_3_inner" transform="translate(622.573 865.316) rotate(-180)"/>
    <use href="#Repeat_group_3_inner" xlink:href="#Repeat_group_3_inner" transform="translate(92.2368 918.569) rotate(-120)"/>
    <use href="#Repeat_group_3_inner" xlink:href="#Repeat_group_3_inner" transform="translate(-219.05 485.911) rotate(-60)"/>
    <use href="#Repeat_group_3_inner" xlink:href="#Repeat_group_3_inner" transform="translate(133.509 133.509)"/>
    <use href="#Repeat_group_3_inner" xlink:href="#Repeat_group_3_inner" transform="translate(663.845 80.2562) rotate(60)"/>
    <use href="#Repeat_group_3_inner" xlink:href="#Repeat_group_3_inner" transform="translate(975.132 512.914) rotate(120)"/>
    <use href="#Repeat_group_3_inner" xlink:href="#Repeat_group_3_inner" transform="translate(756.082 998.825) rotate(-180)"/>
    <use href="#Repeat_group_3_inner" xlink:href="#Repeat_group_3_inner" transform="translate(225.746 1052.08) rotate(-120)"/>
    <use href="#Repeat_group_3_inner" xlink:href="#Repeat_group_3_inner" transform="translate(-85.5404 619.42) rotate(-60)"/>
    <use href="#Repeat_group_3_inner" xlink:href="#Repeat_group_3_inner" transform="translate(267.018 267.018)"/>
    <use href="#Repeat_group_3_inner" xlink:href="#Repeat_group_3_inner" transform="translate(797.354 213.765) rotate(60)"/>
    <use href="#Repeat_group_3_inner" xlink:href="#Repeat_group_3_inner" transform="translate(1108.64 646.423) rotate(120)"/>
    <use href="#Repeat_group_3_inner" xlink:href="#Repeat_group_3_inner" transform="translate(889.591 1132.33) rotate(-180)"/>
    <use href="#Repeat_group_3_inner" xlink:href="#Repeat_group_3_inner" transform="translate(359.255 1185.59) rotate(-120)"/>
    <use href="#Repeat_group_3_inner" xlink:href="#Repeat_group_3_inner" transform="translate(47.9687 752.929) rotate(-60)"/>
    <use href="#Repeat_group_3_inner" xlink:href="#Repeat_group_3_inner" transform="translate(400.527 400.527)"/>
    <use href="#Repeat_group_3_inner" xlink:href="#Repeat_group_3_inner" transform="translate(930.863 347.274) rotate(60)"/>
    <use href="#Repeat_group_3_inner" xlink:href="#Repeat_group_3_inner" transform="translate(1242.15 779.932) rotate(120)"/>
    <use href="#Repeat_group_3_inner" xlink:href="#Repeat_group_3_inner" transform="translate(1023.1 1265.84) rotate(-180)"/>
    <use href="#Repeat_group_3_inner" xlink:href="#Repeat_group_3_inner" transform="translate(492.764 1319.1) rotate(-120)"/>
    <use href="#Repeat_group_3_inner" xlink:href="#Repeat_group_3_inner" transform="translate(181.478 886.438) rotate(-60)"/>
    <use href="#Repeat_group_3_inner" xlink:href="#Repeat_group_3_inner" transform="translate(534.037 534.037)"/>
    <use href="#Repeat_group_3_inner" xlink:href="#Repeat_group_3_inner" transform="translate(1064.37 480.784) rotate(60)"/>
    <use href="#Repeat_group_3_inner" xlink:href="#Repeat_group_3_inner" transform="translate(1375.66 913.442) rotate(120)"/>
    <use href="#Repeat_group_3_inner" xlink:href="#Repeat_group_3_inner" transform="translate(1156.61 1399.35) rotate(-180)"/>
    <use href="#Repeat_group_3_inner" xlink:href="#Repeat_group_3_inner" transform="translate(626.273 1452.61) rotate(-120)"/>
    <use href="#Repeat_group_3_inner" xlink:href="#Repeat_group_3_inner" transform="translate(314.987 1019.95) rotate(-60)"/>
    <use href="#Repeat_group_3_inner" xlink:href="#Repeat_group_3_inner" transform="translate(667.546 667.546)"/>
    <use href="#Repeat_group_3_inner" xlink:href="#Repeat_group_3_inner" transform="translate(1197.88 614.293) rotate(60)"/>
    <use href="#Repeat_group_3_inner" xlink:href="#Repeat_group_3_inner" transform="translate(1509.17 1046.95) rotate(120)"/>
    <use href="#Repeat_group_3_inner" xlink:href="#Repeat_group_3_inner" transform="translate(1290.12 1532.86) rotate(-180)"/>
    <use href="#Repeat_group_3_inner" xlink:href="#Repeat_group_3_inner" transform="translate(759.783 1586.11) rotate(-120)"/>
    <use href="#Repeat_group_3_inner" xlink:href="#Repeat_group_3_inner" transform="translate(448.496 1153.46) rotate(-60)"/>
    <g id="Repeat_group_2_inner" data-figma-trr="r6u2.6-0f_l6u1.1-0f">
    <rect x="406.346" y="168.03" width="45.94" height="45.94" transform="rotate(45 406.346 168.03)" class="giu-pattern__accent2" fill="var(--giu-cover-accent2, #2252D9)"/>
    </g>
    <use href="#Repeat_group_2_inner" xlink:href="#Repeat_group_2_inner" transform="translate(392.28 -193.962) rotate(60)"/>
    <use href="#Repeat_group_2_inner" xlink:href="#Repeat_group_2_inner" transform="translate(756.397 48.7818) rotate(120)"/>
    <use href="#Repeat_group_2_inner" xlink:href="#Repeat_group_2_inner" transform="translate(728.232 485.488) rotate(-180)"/>
    <use href="#Repeat_group_2_inner" xlink:href="#Repeat_group_2_inner" transform="translate(335.952 679.45) rotate(-120)"/>
    <use href="#Repeat_group_2_inner" xlink:href="#Repeat_group_2_inner" transform="translate(-28.1642 436.706) rotate(-60)"/>
    <use href="#Repeat_group_2_inner" xlink:href="#Repeat_group_2_inner" transform="translate(133.509 133.509)"/>
    <use href="#Repeat_group_2_inner" xlink:href="#Repeat_group_2_inner" transform="translate(525.79 -60.4529) rotate(60)"/>
    <use href="#Repeat_group_2_inner" xlink:href="#Repeat_group_2_inner" transform="translate(889.906 182.291) rotate(120)"/>
    <use href="#Repeat_group_2_inner" xlink:href="#Repeat_group_2_inner" transform="translate(861.742 618.997) rotate(-180)"/>
    <use href="#Repeat_group_2_inner" xlink:href="#Repeat_group_2_inner" transform="translate(469.461 812.959) rotate(-120)"/>
    <use href="#Repeat_group_2_inner" xlink:href="#Repeat_group_2_inner" transform="translate(105.345 570.215) rotate(-60)"/>
    <use href="#Repeat_group_2_inner" xlink:href="#Repeat_group_2_inner" transform="translate(267.018 267.018)"/>
    <use href="#Repeat_group_2_inner" xlink:href="#Repeat_group_2_inner" transform="translate(659.299 73.0563) rotate(60)"/>
    <use href="#Repeat_group_2_inner" xlink:href="#Repeat_group_2_inner" transform="translate(1023.41 315.8) rotate(120)"/>
    <use href="#Repeat_group_2_inner" xlink:href="#Repeat_group_2_inner" transform="translate(995.251 752.506) rotate(-180)"/>
    <use href="#Repeat_group_2_inner" xlink:href="#Repeat_group_2_inner" transform="translate(602.97 946.468) rotate(-120)"/>
    <use href="#Repeat_group_2_inner" xlink:href="#Repeat_group_2_inner" transform="translate(238.854 703.724) rotate(-60)"/>
    <use href="#Repeat_group_2_inner" xlink:href="#Repeat_group_2_inner" transform="translate(400.527 400.527)"/>
    <use href="#Repeat_group_2_inner" xlink:href="#Repeat_group_2_inner" transform="translate(792.808 206.565) rotate(60)"/>
    <use href="#Repeat_group_2_inner" xlink:href="#Repeat_group_2_inner" transform="translate(1156.92 449.309) rotate(120)"/>
    <use href="#Repeat_group_2_inner" xlink:href="#Repeat_group_2_inner" transform="translate(1128.76 886.015) rotate(-180)"/>
    <use href="#Repeat_group_2_inner" xlink:href="#Repeat_group_2_inner" transform="translate(736.479 1079.98) rotate(-120)"/>
    <use href="#Repeat_group_2_inner" xlink:href="#Repeat_group_2_inner" transform="translate(372.363 837.233) rotate(-60)"/>
    <use href="#Repeat_group_2_inner" xlink:href="#Repeat_group_2_inner" transform="translate(534.037 534.037)"/>
    <use href="#Repeat_group_2_inner" xlink:href="#Repeat_group_2_inner" transform="translate(926.317 340.075) rotate(60)"/>
    <use href="#Repeat_group_2_inner" xlink:href="#Repeat_group_2_inner" transform="translate(1290.43 582.818) rotate(120)"/>
    <use href="#Repeat_group_2_inner" xlink:href="#Repeat_group_2_inner" transform="translate(1262.27 1019.52) rotate(-180)"/>
    <use href="#Repeat_group_2_inner" xlink:href="#Repeat_group_2_inner" transform="translate(869.989 1213.49) rotate(-120)"/>
    <use href="#Repeat_group_2_inner" xlink:href="#Repeat_group_2_inner" transform="translate(505.872 970.742) rotate(-60)"/>
    <use href="#Repeat_group_2_inner" xlink:href="#Repeat_group_2_inner" transform="translate(667.546 667.546)"/>
    <use href="#Repeat_group_2_inner" xlink:href="#Repeat_group_2_inner" transform="translate(1059.83 473.584) rotate(60)"/>
    <use href="#Repeat_group_2_inner" xlink:href="#Repeat_group_2_inner" transform="translate(1423.94 716.328) rotate(120)"/>
    <use href="#Repeat_group_2_inner" xlink:href="#Repeat_group_2_inner" transform="translate(1395.78 1153.03) rotate(-180)"/>
    <use href="#Repeat_group_2_inner" xlink:href="#Repeat_group_2_inner" transform="translate(1003.5 1347) rotate(-120)"/>
    <use href="#Repeat_group_2_inner" xlink:href="#Repeat_group_2_inner" transform="translate(639.382 1104.25) rotate(-60)"/>
    <g id="Repeat_group_4_inner" data-figma-trr="r6u2.6-0f_l6u1.1-0f">
    <rect x="163.602" y="410.774" width="45.94" height="45.94" transform="rotate(45 163.602 410.774)" class="giu-pattern__shape" fill="var(--giu-cover-shape, #D21119)"/>
    </g>
    <use href="#Repeat_group_4_inner" xlink:href="#Repeat_group_4_inner" transform="translate(481.131 137.633) rotate(60)"/>
    <use href="#Repeat_group_4_inner" xlink:href="#Repeat_group_4_inner" transform="translate(602.503 623.121) rotate(120)"/>
    <use href="#Repeat_group_4_inner" xlink:href="#Repeat_group_4_inner" transform="translate(242.744 970.976) rotate(-180)"/>
    <use href="#Repeat_group_4_inner" xlink:href="#Repeat_group_4_inner" transform="translate(-238.387 833.343) rotate(-120)"/>
    <use href="#Repeat_group_4_inner" xlink:href="#Repeat_group_4_inner" transform="translate(-359.759 347.855) rotate(-60)"/>
    <use href="#Repeat_group_4_inner" xlink:href="#Repeat_group_4_inner" transform="translate(133.509 133.509)"/>
    <use href="#Repeat_group_4_inner" xlink:href="#Repeat_group_4_inner" transform="translate(614.64 271.142) rotate(60)"/>
    <use href="#Repeat_group_4_inner" xlink:href="#Repeat_group_4_inner" transform="translate(736.012 756.63) rotate(120)"/>
    <use href="#Repeat_group_4_inner" xlink:href="#Repeat_group_4_inner" transform="translate(376.253 1104.49) rotate(-180)"/>
    <use href="#Repeat_group_4_inner" xlink:href="#Repeat_group_4_inner" transform="translate(-104.878 966.852) rotate(-120)"/>
    <use href="#Repeat_group_4_inner" xlink:href="#Repeat_group_4_inner" transform="translate(-226.25 481.364) rotate(-60)"/>
    <use href="#Repeat_group_4_inner" xlink:href="#Repeat_group_4_inner" transform="translate(267.018 267.018)"/>
    <use href="#Repeat_group_4_inner" xlink:href="#Repeat_group_4_inner" transform="translate(748.149 404.651) rotate(60)"/>
    <use href="#Repeat_group_4_inner" xlink:href="#Repeat_group_4_inner" transform="translate(869.521 890.139) rotate(120)"/>
    <use href="#Repeat_group_4_inner" xlink:href="#Repeat_group_4_inner" transform="translate(509.762 1237.99) rotate(-180)"/>
    <use href="#Repeat_group_4_inner" xlink:href="#Repeat_group_4_inner" transform="translate(28.6314 1100.36) rotate(-120)"/>
    <use href="#Repeat_group_4_inner" xlink:href="#Repeat_group_4_inner" transform="translate(-92.7406 614.874) rotate(-60)"/>
    <use href="#Repeat_group_4_inner" xlink:href="#Repeat_group_4_inner" transform="translate(400.527 400.527)"/>
    <use href="#Repeat_group_4_inner" xlink:href="#Repeat_group_4_inner" transform="translate(881.658 538.16) rotate(60)"/>
    <use href="#Repeat_group_4_inner" xlink:href="#Repeat_group_4_inner" transform="translate(1003.03 1023.65) rotate(120)"/>
    <use href="#Repeat_group_4_inner" xlink:href="#Repeat_group_4_inner" transform="translate(643.272 1371.5) rotate(-180)"/>
    <use href="#Repeat_group_4_inner" xlink:href="#Repeat_group_4_inner" transform="translate(162.141 1233.87) rotate(-120)"/>
    <use href="#Repeat_group_4_inner" xlink:href="#Repeat_group_4_inner" transform="translate(40.7686 748.383) rotate(-60)"/>
    <use href="#Repeat_group_4_inner" xlink:href="#Repeat_group_4_inner" transform="translate(534.037 534.037)"/>
    <use href="#Repeat_group_4_inner" xlink:href="#Repeat_group_4_inner" transform="translate(1015.17 671.669) rotate(60)"/>
    <use href="#Repeat_group_4_inner" xlink:href="#Repeat_group_4_inner" transform="translate(1136.54 1157.16) rotate(120)"/>
    <use href="#Repeat_group_4_inner" xlink:href="#Repeat_group_4_inner" transform="translate(776.781 1505.01) rotate(-180)"/>
    <use href="#Repeat_group_4_inner" xlink:href="#Repeat_group_4_inner" transform="translate(295.65 1367.38) rotate(-120)"/>
    <use href="#Repeat_group_4_inner" xlink:href="#Repeat_group_4_inner" transform="translate(174.278 881.892) rotate(-60)"/>
    <use href="#Repeat_group_4_inner" xlink:href="#Repeat_group_4_inner" transform="translate(667.546 667.546)"/>
    <use href="#Repeat_group_4_inner" xlink:href="#Repeat_group_4_inner" transform="translate(1148.68 805.178) rotate(60)"/>
    <use href="#Repeat_group_4_inner" xlink:href="#Repeat_group_4_inner" transform="translate(1270.05 1290.67) rotate(120)"/>
    <use href="#Repeat_group_4_inner" xlink:href="#Repeat_group_4_inner" transform="translate(910.29 1638.52) rotate(-180)"/>
    <use href="#Repeat_group_4_inner" xlink:href="#Repeat_group_4_inner" transform="translate(429.159 1500.89) rotate(-120)"/>
    <use href="#Repeat_group_4_inner" xlink:href="#Repeat_group_4_inner" transform="translate(307.787 1015.4) rotate(-60)"/>
  </svg>

  <!-- Group 1 pattern (default for EBD) -->
  <svg
    v-else
    class="giu-cover__pattern giu-cover__pattern--group1"
    viewBox="0 0 652 744"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <rect class="giu-pattern__accent1" x="0.00012207" y="61.6021" width="138.03" height="138.03" transform="rotate(-45 0.00012207 61.6021)" />
    <rect class="giu-pattern__accent1" x="0.00012207" y="256.225" width="138.03" height="138.03" transform="rotate(-45 0.00012207 256.225)" />
    <rect class="giu-pattern__accent2" x="194.623" y="256.225" width="138.03" height="138.03" transform="rotate(-45 194.623 256.225)" />
    <rect class="giu-pattern__accent2" x="194.623" y="61.6021" width="138.03" height="138.03" transform="rotate(-45 194.623 61.6021)" />
    <rect class="giu-pattern__accent1" x="0.000244141" y="450.847" width="138.03" height="138.03" transform="rotate(-45 0.000244141 450.847)" />
    <rect class="giu-pattern__accent1" y="645.47" width="138.03" height="138.03" transform="rotate(-45 0 645.47)" />
    <rect class="giu-pattern__accent1" x="194.623" y="645.47" width="138.03" height="138.03" transform="rotate(-45 194.623 645.47)" />
    <rect class="giu-pattern__accent2" x="194.623" y="450.847" width="138.03" height="138.03" transform="rotate(-45 194.623 450.847)" />
    <rect class="giu-pattern__accent2" x="389.245" y="450.848" width="138.03" height="138.03" transform="rotate(-45 389.245 450.848)" />
    <rect class="giu-pattern__accent1" x="389.245" y="645.47" width="138.03" height="138.03" transform="rotate(-45 389.245 645.47)" />
    <rect class="giu-pattern__accent1" x="583.868" y="645.47" width="138.03" height="138.03" transform="rotate(-45 583.868 645.47)" />
    <rect class="giu-pattern__accent2" x="583.868" y="450.848" width="138.03" height="138.03" transform="rotate(-45 583.868 450.848)" />
    <rect class="giu-pattern__accent2" x="389.245" y="61.6023" width="138.03" height="138.03" transform="rotate(-45 389.245 61.6023)" />
    <rect class="giu-pattern__accent2" x="389.245" y="256.225" width="138.03" height="138.03" transform="rotate(-45 389.245 256.225)" />
    <rect class="giu-pattern__accent2" x="583.868" y="256.225" width="138.03" height="138.03" transform="rotate(-45 583.868 256.225)" />
    <rect class="giu-pattern__accent2" x="583.868" y="61.6023" width="138.03" height="138.03" transform="rotate(-45 583.868 61.6023)" />
  </svg>
</template>

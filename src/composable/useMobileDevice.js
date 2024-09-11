import { computed } from 'vue';
import { useWindowResize } from '@/composable/useWindowResize';
import { MOBILE_DEVICE_WIDTH, TABLET_DEVICE_WIDTH } from '@/constants/media';

export const useMobileDevice = () => {
  const { width } = useWindowResize();
  const isMobile = computed(() => {
    return width.value < MOBILE_DEVICE_WIDTH;
  });
  const isTablet = computed(() => {
    return width.value >= MOBILE_DEVICE_WIDTH && width.value < TABLET_DEVICE_WIDTH;
  });
  return { isMobile, isTablet };
};

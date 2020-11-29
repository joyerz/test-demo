import axios from 'axios';
import api from '@/config/api';
import dayjs from 'dayjs';

export default {};

axios.interceptors.response.use((res) => res.data);

export async function fetchGithub() {
  const startedAt = Date.now();
  const res = await axios.request({ url: api.github }).catch(() => 'error');
  const timeSpent = Date.now() - startedAt;
  return {
    history: {
      startedAt: dayjs(startedAt).format('DD/MM/YYYY HH:mm:ss'),
      timeSpent,
      success: res !== 'error',
    },
    data: res === 'error' ? null : res,
  };
}

import request from '@/utils/request';

// 获取数据
export const getData = (({ start = 0, count = 5}) => {
  return request({
    url:`xxx?start=${start}&count=${count}`
  });
})
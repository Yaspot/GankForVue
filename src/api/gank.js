import request from '../util/request';

export function getTodayData() {
    return request({
        url: '/today',
        method: 'get'
    });
}
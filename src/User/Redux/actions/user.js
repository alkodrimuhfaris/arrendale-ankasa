import http from '../../Helper/http';

export default {
  getProfile: (token) => ({
    type: 'GET_PROFILE',
    payload: http(token).get('user/profile'),
  }),
  clearMessageStatus: () => ({
    type: 'CLEAR_MESSAGE',
  }),
};
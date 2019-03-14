import ActionTypes from '../constants/action_types';

export default (apiKey, apiSecret) => ({
  type: ActionTypes.COINIGY_KEYS_SET,
  payload: { apiKey, apiSecret }
});

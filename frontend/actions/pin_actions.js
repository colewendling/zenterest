import * as PinApiUtil from '../util/pin_api_util';

export const RECEIVE_ALL_PINS = 'RECEIVE_ALL_PINS';
export const RECEIVE_PIN = 'RECEIVE_PIN';
export const REMOVE_PIN = 'REMOVE_PIN';
export const RECEIVE_PIN_ERRORS = 'RECEIVE_PIN_ERRORS';

const receiveAllPins = pins => ({
  type: RECEIVE_ALL_PINS,
  pins
})

const receivePin = pin => ({
  type: RECEIVE_PIN,
  pin
})

const removePin = pinId => ({
  type: REMOVE_PIN,
  pinId
})

const receivePinErrors = errors => ({
  type: RECEIVE_PIN_ERRORS,
  errors
})

export const requestAllPins = () => dispatch => {
  return PinUtil.fetchAllPins()
    .then((pins) => dispatch(receiveAllPins(pins)))
}

export const requestPin = (pinId) => dispatch => {
  return PinUtil.fetchPin(pinId)
    .then((pin) => dispatch(receiveAllPins(pin)))
}

export const createPin = (pin) => {
  return PinUtil.createPin(pin)
    .then((pin) => dispatch(receivePin(pin)),
      errors => receivePinErrors(errors.responseJSON))
}

export const deletePin = pinId => dispatch => PinApiUtil.deletePin(pinId)
  .then(() => dispatch(removePin(pinId)),
    errors => dispatch(receivePinErrors(errors.responseJSON)));
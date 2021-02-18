export const createPin = (pin) => (
  $.ajax({
    url: '/api/pins',
    method: 'POST',
    data: pin
  })
)

export const fetchAllPins = () => (
  $.ajax({
    url: '/api/pins',
    method: 'GET'
  })
)

export const fetchPin = (pinId) => {
  $.ajax({
    url: `/api/pins/${pinId}`,
    method: 'GET'
  })
}

export const updatePin = pin => (
  $.ajax({
    method: 'PATCH',
    url: `/api/pins/${pin.id}`,
    data: pin 
  })
)

export const deletePin = pinId => (
  $.ajax({
    method: 'DELETE',
    url: `/api/pins/${pinId}`
  })
)




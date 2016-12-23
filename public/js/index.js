var socket = io()

socket.on('connect', function () {
  console.log('connected to the server')

  socket.emit('createMessage', {from: 'Joshua', text: 'Hello'})
})

socket.on('disconnect', function () {
  console.log('disconnected to the server')
})

socket.on('newMessage', function (data) {
  console.log('Got new message', data)
})

try {
  var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  var recognition = new SpeechRecognition();
}
catch(e) {
  console.error(e);
  $('.app').hide();
}

var noteTextarea = $('#note-textarea');
var instructions = $('#recording-instructions');
var noteContent = '';

/*--- Voice Recognition ---*/
recognition.continuous = true;
recognition.onresult = function(event) {
  var current = event.resultIndex;
  var transcript = event.results[current][0].transcript;
  noteContent += transcript
  noteTextarea.val(noteContent)
};

recognition.onstart = function() {
  instructions.text('Listening, Please Speak...');
}

/*--- App buttons ---*/
$('#start-record-btn').on('click', function(e) {
  recognition.start();
});

$('#pause-record-btn').on('click', function(e) {
  recognition.stop();
  instructions.text('Voice recognition paused.');
});

noteTextarea.on('input', function() {
  noteContent = $(this).val();
})

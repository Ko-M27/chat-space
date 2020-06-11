$(function(){
  function buildHTML(message){
    if ( message.image ){
      let html =
        `<div class="message-container">
          <div class="message-info">
            <p class="message-info__name">
              ${message.user}
            </p>
            <p class="message-info__date">
              ${message.created_at}
            </p>
          </div>
          <div class="message">
            <p class="message__content">
              ${message.content}
            </p>
            <img class="message__image" src="${message.image}">
          </div>
        </div>`
      return html;
    } else {
      let html =
      `<div class="message-container">
        <div class="message-info">
          <p class="message-info__name">
            ${message.user}
          </p>
          <p class="message-info__date">
           ${message.created_at}
         </p>
        </div>
        <div class="message">
          <p class="message__content">
            ${message.content}
          </p>
        </div>
      </div>`
      return html;
    }
  };
  function formReset(){
    $('.message-form')[0].reset();
    $('.input-form').val('')
    $('.send-btn').prop('disabled', false);
  };
  $('.message-form').on('submit', function(e){
    e.preventDefault();
    let formData = new FormData(this);
    let url = $(this).attr('action');
    $.ajax({
      url: url,
      type: 'POST', 
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      let html = buildHTML(data);
      formReset();
      $('.message-list').append(html);
      $('.message-list').animate({ scrollTop: $('.message-list')[0].scrollHeight});
    })
    .fail(function() {
      alert('メッセージを入力してください。');
      formReset();
    });
  });
});
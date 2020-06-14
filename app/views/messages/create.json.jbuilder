json.content @message.content
json.image @message.image.url
json.user @message.user.name
json.group @message.group.name
json.created_at @message.created_at.strftime("%Y年%m月%d日 %H:%M")
json.id @message.id
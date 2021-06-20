#fetch only what belong to user
Pin.all.each do |pin|
  if pin.author_id == current_user.id     
    json.set! pin.id do 
      json.partial! 'pin', pin: pin
    end
  end
end
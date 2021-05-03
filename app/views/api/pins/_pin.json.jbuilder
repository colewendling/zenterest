json.extract! pin, :id, :title, :description, :author_id, :board_id, :image
json.imageUrl url_for(pin.image)

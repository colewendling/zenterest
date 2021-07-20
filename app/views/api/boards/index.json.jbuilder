#fetch only what belong to user
Board.all.each do |board|
  if board.author_id == current_user.id     
    json.set! board.id do 
      json.partial! 'board', board: board
    end
  end
end
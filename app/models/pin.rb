class Pin < ApplicationRecord
  validates :title, :author_id, presence: true

   belongs_to :user,
    foreign_key: :author_id,
    class_name: :User

   belongs_to :board,
    foreign_key: :board_id,
    class_name: :Board

   has_many :board_pins,
    foreign_key: :pin_id,
    class_name: :BoardPin


   has_one_attached :image

end

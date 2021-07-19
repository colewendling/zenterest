class Board < ApplicationRecord
  validates :title, :author_id, presence: true
  validates :title, uniqueness: { scope: :author_id }

  belongs_to :author,
  foreign_key: :author_id,
  class_name: :User

  has_many :pins,
  foreign_key: :board_id,
  class_name: :Pin
end

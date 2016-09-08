class Todo < ActiveRecord::Base
  validates_presence_of :title
  validates_presence_of :details

  belongs_to :user
end

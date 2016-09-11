class Group < ActiveRecord::Base
  belongs_to :organization
  has_many :memberships, as: :joinable
  has_many :members, through: :memberships, class_name: 'User'
end

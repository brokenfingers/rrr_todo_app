class Organization < ActiveRecord::Base
  belongs_to :owner, foreign_key: :user_id, class_name: 'User'
  has_many :groups
  has_many :memberships, as: :joinable
  has_many :members, through: :memberships, class_name: 'User'

  def as_json(options = {})
    super(options.merge({
      include: :groups
    }))
  end
end

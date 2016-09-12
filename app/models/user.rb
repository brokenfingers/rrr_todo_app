class User < ActiveRecord::Base
  # Include default devise modules.
  devise :database_authenticatable, :registerable, :recoverable
  include DeviseTokenAuth::Concerns::User

  has_many :memberships
  has_many :joined_organizations, through: :memberships, source_type: 'Organization', source: 'joinable'

  has_many :organizations

  def all_organizations
    {
      owned_organizations: organizations,
      joined_organizations: joined_organizations
    }
  end
end

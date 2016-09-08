class User < ActiveRecord::Base
  include DeviseTokenAuth::Concerns::User

  # Include default devise modules.
  devise :database_authenticatable, :registerable, :recoverable

  has_many :todos
end
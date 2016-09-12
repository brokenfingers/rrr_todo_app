class Api::OrganizationsController < ApplicationController
  before_action :authenticate_user!

  def index
    render Json.response(current_user.all_organizations, :ok)
  end

  def show

  end

  def create

  end

  def update

  end
end

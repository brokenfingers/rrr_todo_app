class Api::OrganizationsController < ApplicationController
  before_action :authenticate_user!

  def index
    render json: current_user.organizations
  end

  def show

  end

  def create

  end

  def update

  end
end

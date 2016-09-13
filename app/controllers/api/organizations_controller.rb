class Api::OrganizationsController < ApplicationController
  before_action :authenticate_user!

  def index
    render Json.response(current_user.all_organizations, :ok)
  end

  def show

  end

  def create
    organization = current_user.organizations.build(organization_params)
    
    if organization.save
      render Json.response({
          organization: organization
        }, :ok)
    else

    end
  end

  def update

  end

  private

  def organization_params
    params.permit(:name, :description)
  end
end

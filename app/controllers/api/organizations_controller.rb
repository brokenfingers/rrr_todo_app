class Api::OrganizationsController < ApplicationController
  before_action :authenticate_user!

  def index
    render Json.response(current_user.all_organizations, :ok)
  end

  # Need to add policy to prevent unauthorized users from accessing content
  def show
    if organization
      render Json.response({
        organization: organization.as_json
      }, :ok)
    else
      # Need to render an error message
    end
  end

  def create
    organization = current_user.organizations.build(organization_params)

    if organization.save
      render Json.response({
          organization: organization
        }, :ok)
    else
      # Need to render an error message
    end
  end

  def update

  end

  private

  def organization
    @organization ||= Organization.find_by(id: params[:id])
  end

  def organization_params
    params.permit(:name, :description)
  end
end

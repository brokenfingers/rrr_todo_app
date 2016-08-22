class TodosController < ApplicationController
  def index
    @todos = Todo.all
    render json: @todos
  end

  def update

  end

  def destroy

  end

  def show

  end

  def create

  end
end

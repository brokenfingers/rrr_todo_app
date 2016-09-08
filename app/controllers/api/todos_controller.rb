class Api::TodosController < ApplicationController
  def index
    @todos = Todo.all
    render json: @todos
  end

  def update
    if todo.update(todo_param)
      render json: todo, status: :ok
    else
      render json: todo.errors, status: :unprocessable_entity
    end
  end

  def destroy

  end

  def create
    todo = Todo.new(todo_param)
    if todo.save
      render json: todo, status: :ok
    else
      render json: todo.errors, status: :unprocessable_entity
    end
  end

  private

  def todo_param
    params.permit(:details, :title)
  end

  def todo
    @todo ||= Todo.find_by(id: params[:id])
  end
end

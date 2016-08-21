class AddTodo < ActiveRecord::Migration
  def change
    create_table :todos do |t|
      t.text 'details'
      t.string 'title'
      t.timestamps
    end
  end
end

class AddOrganizationsAndGroupsTable < ActiveRecord::Migration
  def change
    create_table :organizations do |t|
      t.references :user
      t.string :name
      t.string :description
      t.timestamp
    end

    # Polymorphic Association
    create_table :memberships do |t|
      t.references :user
      t.integer :joinable_id
      t.string :joinable_type
      t.boolean :active # True or false
      t.timestamp
    end

    create_table :groups do |t|
      t.references :organization
      t.string :name
      t.string :description
      t.timestamp
    end
  end
end

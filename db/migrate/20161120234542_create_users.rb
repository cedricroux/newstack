class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.text :name
      t.text :email
      t.string :password_digest
      t.boolean :admin

      t.timestamps null: false
    end
  end
end

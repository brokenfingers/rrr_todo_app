namespace :assets do
  task :precompile_assets do
    execute 'rm -rf public/assets'
    execute :bundle, 'exec rake assets:precompile'
    execute :bundle, 'exec rake webpack:compile'
  end
end

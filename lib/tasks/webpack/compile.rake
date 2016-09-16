namespace :webpack do
  desc 'Compile bundles using webpack'
  task :compile do
    cmd = 'node_modules/.bin/webpack --config ./webpack_production.config.js --json'
    output = `#{cmd}`

    stats = JSON.parse(output)

    File.open('./public/assets/webpack-asset-manifest.json', 'w') do |f|
      f.write stats['assetsByChunkName'].to_json
    end

    asset_manifest = Rails.root.join('public', 'assets', 'webpack-asset-manifest.json')

    if File.exist?(asset_manifest)
      Rails.configuration.webpack[:asset_manifest] = JSON.parse(
        File.read(asset_manifest),
      ).with_indifferent_access
    end
  end
end

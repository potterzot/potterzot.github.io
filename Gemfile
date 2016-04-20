source 'https://rubygems.org'

require 'json'
require 'open-uri'

versions = JSON.parse(open('https://pages.github.com/versions.json').read)
gem 'github-pages', versions['github-pages']
gem "jekyll", versions['3.1.2']

group :jekyll_plugins do
  gem "jekyll-assets"
  gem "jekyll-coffeescript"
  gem "jekyll-watch"
  gem "jekyll-sass-converter" 
#  gem "jekyll-utf8" 
end




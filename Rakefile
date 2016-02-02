desc "Run the app for local development"
task :run do
  sh "bundle exec middleman"
end

desc "Build and deploy the site"
task release: :build do
  deploy "bucket.patrickbyrne.net"
end

desc "Build and deploy the site to staging"
task stage: :build do
  deploy "bucketbeta.patrickbyrne.net"
end
task :build do
  sh "bundle exec middleman build"
end

def deploy(path, server=path)
  sh "rsync -avz --delete build/ #{server}:/var/www/#{path}/public"
end

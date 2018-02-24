desc "Run the app for local development"
task :run do
  sh "bundle exec middleman"
end

desc "Build and deploy the site"
task release: :build do
  deploy "bucket.patrickbyrne.net"
end

desc "Build the site without deploying"
task :build do
  sh "bundle exec middleman build"
end

def deploy(path, server=path)
  sh "aws s3 sync build/ s3://bucket-patrickbyrne-net --profile personal"
  sh %{aws s3 cp s3://bucket-patrickbyrne-net s3://bucket-patrickbyrne-net --recursive --exclude="*" --include="images/*" --include="stylesheets/*" --include="javascripts/*" --metadata-directive REPLACE --cache-control max-age=31536000,public --profile personal}
end

# Bucketeer

This is a simple [Middleman][middleman] app for taking a directory of images and creating an image bucket page (*a la* http://bukk.it/).

### Setup

Since this is a Middleman site, it uses a [Ruby][ruby] toolchain. Use the easiest available Ruby (2.0+) and [Bundler][bundler], then:

1. Run `bundle` to install Ruby dependencies.
2. Symlink your directory of images to `source/external_images` like so: `ln -s $ICLOUD_DRIVE/Pictures/Bucket source/external_images`
3. (TBD) Set up dotenv to configure deploys?

[middleman]:http://middlemanapp.com/
[ruby]:http://ruby-lang.org/
[bundler]:http://bundler.io/

### Develop & Deploy

```
rake run # to run the app in local development mode
rake stage # to deploy to a configured staging environment
rake release # to deploy to your production server
```

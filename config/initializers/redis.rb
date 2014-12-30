# Create a new instance of Redis when and save it into a variable $redis, that is globally useable
$redis = Redis.new(:host => 'localhost', :port => 6379)
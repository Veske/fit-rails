class Media < ActiveRecord::Base
	# Check presence of medium file is true. Set keys for 3 different sizes of the medium.
	# Check that the file type is accepted by the array provided by us
	# Check that file is less than 1MB
	has_attached_file :image_video, :styles => {:thumb => 'x100', :croppable => '600x600>', :big => '1000x1000>'}
	validates_attachment_content_type :image_video, :content_type => ["image/jpg", "image/jpeg", "image/png", "image/gif"]
	validates_with AttachmentSizeValidator, :attributes => :image_video, :less_than => 1.megabytes


end

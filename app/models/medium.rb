class Medium < ActiveRecord::Base
	include LikeRedis

	belongs_to :user
	has_many :comments, dependent: :destroy
	has_many :likes, dependent: :destroy

	before_create :randomize_file_name

	# Check presence of medium file is true. Set keys for 3 different sizes of the medium.
	# Check that the file type is accepted by the array provided by us
	# Check that file is less than 1MB
	validates :image_video, presence:   { message: 'No file was chosen for upload'}
	has_attached_file :image_video,
	                  styles:
			                  {
					                  thumb:      '100x250>',
					                  croppable:  '600x600>',
					                  big:        '1000x1000>'
			                  }
	validates_attachment_content_type :image_video, :content_type => %w(image/jpeg image/jpg image/png image/gif)
	validates_with AttachmentSizeValidator, attributes: :image_video, less_than: 5.megabytes

	# Define custom url fields for medium in serializer
	# TODO: find a better way to get them to serializer
	def image_video_croppable_url
		image_video.url(:croppable)
	end

	def image_video_thumb_url
		image_video.url(:thumb)
	end

	def image_video_big_url
		image_video.url(:big)
	end

	def likes
		self.get_likes.map { |like| Like.new(user_id: like.to_i) }
	end

	# Method that we use to get JSON for medium without serializer
	#def as_json(options={})
	#	hash = super(options)
	#	hash.merge!({
	#			            image_video_croppable_url: image_video.url(:croppable),
	#			            image_video_big_url: image_video.url(:big),
	#			            image_video_original_url: image_video.url(:original),
	#			            image_video_thumb_url: image_video.url(:thumb)
	#	            }
	#	)
	#	hash
	#end



	private
		def randomize_file_name
			extension = File.extname(image_video_file_name).downcase
			self.image_video.instance_write(:file_name, "#{SecureRandom.hex(8)}#{extension}")
		end
end

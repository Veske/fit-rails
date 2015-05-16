class MediumSerializer < ActiveModel::Serializer

	attributes :id,
               :text,
               :image_video_file_name,
               :image_video_croppable_url,
               :image_video_thumb_url,
               :image_video_big_url

	#has_many :comments
	has_many :likes, each_serializer: LikeSerializer
	has_one :user, serializer: UserSimpleSerializer

	def likes
		object.likes
	end
end

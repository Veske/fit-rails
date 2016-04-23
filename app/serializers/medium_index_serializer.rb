# Light weight serializer for media, does not show any relations
#
class MediumIndexSerializer < ActiveModel::Serializer
	attributes :id,
	           :user_id,
	           :text,
	           :image_video_file_name,
	           :image_video_croppable_url,
	           :image_video_thumb_url,
	           :image_video_big_url

end
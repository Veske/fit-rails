class MediumSerializer < ActiveModel::Serializer
  attributes :id,
             :text,
             :image_video_file_name,
             :image_video_croppable_url,
             :image_video_thumb_url

  has_one :user
  has_many :comments, :likes
end

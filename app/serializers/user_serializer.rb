class UserSerializer < ActiveModel::Serializer
    include Avatar

	attributes :id,
               :name,
               :email,
               :role,
               :avatar

    def avatar
        Medium.find(self.current_avatar)[0]
    end

    #has_one :avatar, serializer: AvatarSerializer
    has_many :media, :comments
end
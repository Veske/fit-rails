class UserSerializer < ActiveModel::Serializer
    include Avatar

	attributes :id,
               :name,
               :email,
               :role,
               :avatar

    def avatar
        Medium.find(self.user_avatar)[0]
    end
end
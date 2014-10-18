class User < ActiveRecord::Base
	validates :name, presence: true, length: {maximum: 50}

	enum role: [:user, :moderator, :admin]
	after_initialize :set_default_role, :if => :new_record?

	def set_default_role
		self.role ||= :user
	end

	# Include default devise modules. Others available are:
	# :confirmable, :lockable, :timeoutable and :omniauthable
	devise :database_authenticatable, :registerable,
	       :recoverable, :rememberable, :trackable, :validatable

	has_many :media, dependent: :destroy
	has_many :comments, dependent: :destroy
end
